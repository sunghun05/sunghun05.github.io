// ============================================================
// Edit this file to update the portfolio content.
// No need to touch index.html.
// ============================================================

const PORTFOLIO = {
  profile: {
    name: "Seong-Hoon Wang",
    role: "Undergraduate Researcher — Model Compression, Efficient AI Systems",
    photo: "photo.jpg", 
    bio: "Undergraduate researcher at Soonchunhyang University focused on Edge AI, efficient deep learning models, and model optimization for embedded systems. I have worked on inference pipeline optimization, selective post-training quantization, and resource-efficient AI systems for embedded environments.",
    email: "shwang1107@gmail.com",
    links: [
      { label: "GitHub", url: "https://github.com/sunghun05" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/성훈-왕-43929b423/" },
    ],
  },

  publications: [
    {
      title:
        "특징 중요도 기반 선택적 특징 추출을 통한 경량 위조 매체 판별 시스템 (A Lightweight Presentation Attack Detection System via Feature-Importance-Based Selective Feature Extraction)",
      venue: "대한전자공학회 학술대회논문집, 2026 (Poster Session)",
      authors: ["Seong-Hoon Wang", "Hanul Kim", "SoYeon Lee", "Dae-Young Kim"],
      description:
        "A lightweight presentation attack detection system using feature-importance-based selective feature extraction.",
      links: [],
    }
  ],

  research: [
    {
      title: "INSLab (Intelligence Networking & System Laboratory), Soonchunhyang University",
      description:
        "Undergraduate Research Assistant, Apr. 2024 – Present. Deployed a YOLOv8n Pose model on the Hailo8 NPU and optimized the inference pipeline for embedded systems, reducing NPU utilization by ~50% compared to the previous model. Designed a learnable preprocessing layer for a MobileNetV3-based Presentation Attack Detection (PAD) model to improve robustness against spoofing attacks. Evaluated selective post-training quantization (PTQ) strategies on the Hailo8 NPU platform.",
    },
    {
      title: "Model Compression & Efficient AI Systems",
      description:
        "Model optimization, quantization, and compression for resource-constrained edge devices, with a focus on maintaining detection performance under reduced computational budgets.",
    },
    {
      title: "Computer Vision on Edge Devices",
      description:
        "Object detection, pose estimation, and presentation attack detection (PAD) on embedded NPU platforms such as the Hailo8.",
    },
  ],

  projects: [
    {
      title: "Real-Time PAD Pipeline for Intelligent Trash Bins",
      subtitle: "research project",
      description:
        "Developed a real-time Presentation Attack Detection pipeline for intelligent trash bin users using MobileNetV3 and the TAPPAS framework (GStreamer-based), including model inference and streaming pipeline integration.",
      links: [],
    },
    {
      title: "Illegal Dumping Detection with YOLO Pose",
      subtitle: "research project",
      description:
        "Proposed a YOLO Pose-based architecture for illegal dumping detection for intelligent trash bins and validated its feasibility through deployment on the Hailo8 NPU environment.",
      links: [],
    }
  ],

  education: [
    {
      degree: "B.S. Candidate in Computer Software Engineering, Soonchunhyang University",
      period: "2024 – Feb. 2030 (expected)",
      meta: "Overall GPA 4.29/4.5. Dean's List: Spring 2024, Fall 2024, Spring 2025 (Best Academic Award), Fall 2025. Academic Excellence Scholarship: Spring 2024, Fall 2024, Spring 2025, Fall 2025 (Honorable Mention).",
    },
  ],

  footer: "Seong-Hoon Wang · Last updated August 2026",
};
