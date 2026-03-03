import React, { useEffect, useRef } from "react";

// Network architecture: [input, hidden1, hidden2, hidden3, hidden4, output]
const LAYER_SIZES = [5, 8, 10, 10, 8, 4];
const NODE_RADIUS = 5;
const LAYER_SPACING_RATIO = 0.82; // fraction of canvas width used by the network

// Color palette — tuned for white/light background
const COLOR_IDLE_NODE = "rgba(148, 163, 184, 0.5)";
const COLOR_ACTIVE_NODE = "#6366f1";
const COLOR_IDLE_EDGE = "rgba(148, 163, 184, 0.12)";
const GLOW_COLOR = "#6366f1";

function buildNetwork(W, H) {
    const layers = [];
    const numLayers = LAYER_SIZES.length;
    const totalNetW = W * LAYER_SPACING_RATIO;
    const offsetX = (W - totalNetW) / 2;

    for (let l = 0; l < numLayers; l++) {
        const count = LAYER_SIZES[l];
        const x = offsetX + (totalNetW / (numLayers - 1)) * l;
        const spacing = Math.min(80, (H * 0.78) / (count + 1));
        const totalH = spacing * (count - 1);
        const startY = (H - totalH) / 2;

        const nodes = [];
        for (let n = 0; n < count; n++) {
            nodes.push({
                x,
                y: startY + spacing * n,
                activation: 0,      // 0..1
                targetActivation: 0,
            });
        }
        layers.push(nodes);
    }
    return layers;
}

// An activation wave: all nodes in a layer light up, then propagate forward
function triggerWave(layers, startLayer = 0, intensity = 1.0) {
    layers[startLayer].forEach((node) => {
        node.targetActivation = Math.random() > 0.3 ? intensity : intensity * 0.4;
    });
}

const NeuralBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let layers = [];
        let animId;
        let waveLayer = 0;       // current propagation front
        let waveTick = 0;        // frames since last layer advance
        const WAVE_INTERVAL = 18; // frames per layer step
        let scrollY = 0;
        let isScrolling = false;
        let scrollTimer = null;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            layers = buildNetwork(canvas.width, canvas.height);
        };
        resize();
        window.addEventListener("resize", resize);

        const onScroll = () => {
            scrollY = window.scrollY;
            isScrolling = true;
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(() => { isScrolling = false; }, 200);

            // Trigger a new wave from input layer on scroll
            if (Math.random() < 0.5) {
                triggerWave(layers, 0, 0.9);
                waveLayer = 0;
                waveTick = 0;
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });

        // Auto-trigger waves periodically even without scroll
        let autoPulseCounter = 0;

        const draw = () => {
            const W = canvas.width;
            const H = canvas.height;
            ctx.clearRect(0, 0, W, H);

            // ── Auto-wave propagation ──────────────────────────────
            autoPulseCounter++;
            // Start a new wave every ~3 seconds
            if (autoPulseCounter % (60 * 3) === 0) {
                triggerWave(layers, 0, 0.7 + Math.random() * 0.3);
                waveLayer = 0;
                waveTick = 0;
            }

            // Advance wave front
            waveTick++;
            if (waveTick >= WAVE_INTERVAL && waveLayer < LAYER_SIZES.length - 1) {
                waveLayer++;
                waveTick = 0;
                // Activate next layer based on previous layer activations
                const prevLayer = layers[waveLayer - 1];
                const avgPrev = prevLayer.reduce((s, n) => s + n.activation, 0) / prevLayer.length;
                layers[waveLayer].forEach((node) => {
                    node.targetActivation = avgPrev * (0.5 + Math.random() * 0.6);
                });
            }

            // Decay all activations
            layers.forEach((layer) => {
                layer.forEach((node) => {
                    node.activation += (node.targetActivation - node.activation) * 0.1;
                    node.targetActivation *= 0.97;
                });
            });

            // ── Draw edges ─────────────────────────────────────────
            for (let l = 0; l < layers.length - 1; l++) {
                const fromLayer = layers[l];
                const toLayer = layers[l + 1];
                fromLayer.forEach((from) => {
                    toLayer.forEach((to) => {
                        const sig = (from.activation + to.activation) * 0.5;
                        const alpha = 0.04 + sig * 0.45;
                        const width = 0.4 + sig * 1.4;

                        ctx.beginPath();
                        ctx.moveTo(from.x, from.y);
                        ctx.lineTo(to.x, to.y);
                        ctx.strokeStyle = sig > 0.15
                            ? `rgba(99, 102, 241, ${alpha.toFixed(3)})`
                            : COLOR_IDLE_EDGE;
                        ctx.lineWidth = width;
                        ctx.stroke();
                    });
                });
            }

            // ── Draw nodes ─────────────────────────────────────────
            layers.forEach((layer) => {
                layer.forEach((node) => {
                    const a = node.activation;

                    if (a > 0.05) {
                        // Outer glow halo
                        const grad = ctx.createRadialGradient(node.x, node.y, NODE_RADIUS, node.x, node.y, NODE_RADIUS + 14 + a * 12);
                        grad.addColorStop(0, `rgba(99, 102, 241, ${(a * 0.14).toFixed(3)})`);
                        grad.addColorStop(1, "rgba(99, 102, 241, 0)");
                        ctx.beginPath();
                        ctx.arc(node.x, node.y, NODE_RADIUS + 18 + a * 20, 0, Math.PI * 2);
                        ctx.fillStyle = grad;
                        ctx.fill();

                        ctx.shadowColor = GLOW_COLOR;
                        ctx.shadowBlur = 6 + a * 12;
                    }

                    // Node body
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, NODE_RADIUS + a * 2.5, 0, Math.PI * 2);
                    if (a > 0.1) {
                        ctx.fillStyle = `rgba(99, 102, 241, ${(0.5 + a * 0.5).toFixed(3)})`;
                    } else {
                        ctx.fillStyle = COLOR_IDLE_NODE;
                    }
                    ctx.fill();
                    ctx.shadowBlur = 0;

                    // Node ring
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, NODE_RADIUS + a * 2.5, 0, Math.PI * 2);
                    ctx.strokeStyle = a > 0.1
                        ? `rgba(99, 102, 241, ${(0.5 + a * 0.5).toFixed(3)})`
                        : "rgba(148, 163, 184, 0.35)";
                    ctx.lineWidth = 1;
                    ctx.stroke();
                });
            });

            // ── Layer labels (subtle, bottom of each layer) ────────
            ctx.font = "500 10px 'Inter', sans-serif";
            ctx.textAlign = "center";
            const labelNames = ["Input", "Hidden", "Hidden", "Hidden", "Hidden", "Output"];
            layers.forEach((layer, i) => {
                const lastNode = layer[layer.length - 1];
                ctx.fillStyle = "rgba(99, 102, 241, 0.25)";
                ctx.fillText(labelNames[i], lastNode.x, lastNode.y + NODE_RADIUS + 18);
            });

            animId = requestAnimationFrame(draw);
        };

        // Kick off first wave
        triggerWave(layers, 0, 0.8);
        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", resize);
            window.removeEventListener("scroll", onScroll);
            clearTimeout(scrollTimer);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 0,
                pointerEvents: "none",
            }}
        />
    );
};

export default NeuralBackground;
