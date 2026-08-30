// ============================================================
// Edit this file to update the portfolio content.
// No need to touch index.html.
// ============================================================

const PORTFOLIO = {
  profile: {
    name: "Seong-Hoon Wang",
    role: "Undergraduate Researcher — Model Compression, Efficient AI Systems",
    photo: "photo.jpg",
    cv: "cv.pdf",
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
        "특징 중요도 기반 선택적 특징 추출을 통한 경량 위조 매체 판별 시스템",
      venue: "대한전자공학회 학술대회논문집, 2026 (Poster Session)",
      authors: ["Seong-Hoon Wang", "Hanul Kim", "SoYeon Lee", "Dae-Young Kim"],
      description:
        "A lightweight presentation attack detection system using feature-importance-based selective feature extraction.",
      links: [],
    }
  ],

  research: [
    {
      title: "Model Compression & Efficient AI Systems",
      description: "Model optimization and compression for resource-constrained edge devices.",
    },
    {
      title: "Computer Vision on Edge Devices",
      description: "Object detection, pose estimation, and presentation attack detection on embedded NPU platforms.",
    },
  ],

  projects: [
    {
      title: "LabOps",
      subtitle: "lab project",
      description: "Develop frontend of Ops system"
    },
    {
      title: "Real-Time PAD Pipeline for Intelligent Trash Bins",
      subtitle: "Envac project",
      description: "Real-time presentation attack detection pipeline using MobileNetV3 and GStreamer-based TAPPAS.",
      links: [],
    },
    {
      title: "Illegal Dumping Detection with YOLO Pose",
      subtitle: "Envac project",
      description: "YOLO Pose-based illegal dumping detection, deployed and validated on the Hailo8 NPU.",
      links: [],
    },
    {
      title: "Efficient Learning with small & complicated dataset",
      subtitle: "Research Project",
      description: "In Progress"
    }
  ],

  education: [
    {
      degree: "B.S. Candidate in Computer Software Engineering, Soonchunhyang University",
      period: "2024 – Feb. 2030 (expected)",
      meta: "GPA 4.29/4.5",
    },
    {
      degree: "INSLab (Intelligence Networking & System Laboratory), Soonchunhyang University",
      period: "Apr. 2024 – Present",
      meta: "Undergraduate Research Assistant — NPU inference optimization and PAD model design.",
    },
  ],

  awards: [
    {
      title: "Dean's List",
      description: "Spring 2024, Fall 2024, Spring 2025 (Best Academic Award), Fall 2025",
    },
    {
      title: "Academic Excellence Scholarship",
      description: "Spring 2024, Fall 2024, Spring 2025, Fall 2025 (Honorable Mention)",
    },
  ],

  footer: "Seong-Hoon Wang · Last updated August 2026",
};
