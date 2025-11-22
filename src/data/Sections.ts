export type SectionItem = {
  title: string;
  subtitle?: string;
  period?: string;
  bullets?: string[];
  cover: string;
  href?: string;
};

export type Section = {
  slug: "experience" | "projects" | "skills" | "education";
  title: string;
  cover: string;
  items: SectionItem[];
};

export const sections: Section[] = [
  {
    slug: "experience",
    title: "Experience",
    cover: "/images/menu-experience.jpg",
    items: [
      {
        title: "Graduate Project Researcher — Backdoor Attacks in Transfer Learning",
        subtitle: "Oregon State University, Corvallis, OR",
        period: "Apr 2025 – Jun 2025",
        bullets: [
          "Designed experiment pipelines; documented assumptions & trade-offs.",
          "Automated checks for data quality and reproducibility; added metrics/logs.",
        ],
        cover: "/images/exp-osu.jpg",
      },
      {
        title: "Software Development Engineer",
        subtitle: "Redsage Global — Hyderabad, India",
        period: "Jul 2022 – Nov 2023",
        bullets: [
          "Built reusable React + TypeScript components.",
          "Optimized rendering & data flows; added tests and CI.",
          "Improved logging/observability for reliability."
        ],
        cover: "/images/exp-redsage.jpg",
      },
    ],
  },  
{
  slug: "projects",
  title: "Projects",
  cover: "/images/projects.jpg",
  items: [
    {
      title: "Abnormal Driving Detection — Machine Learning",
      subtitle: "Python • OpenCV • Flask • React (2023)",
      cover: "/images/abnormal-driving.jpg",
      bullets: [
        "Developed a Flask API to detect drowsy and reckless driving using OpenCV and ML models.",
        "Built a React dashboard for live detection and log visualisation.",
        "Integrated unit tests (PyTest/Jest) and improved model accuracy with data augmentation."
      ],
      href: "https://github.com/Chakri1701/Abnormal-Driving-Detection-Using-machine-learning"
    },
    {
      title: "TD-Learning & Actor-Critic — GridWorld",
      subtitle: "Python • Reinforcement Learning",
      cover: "/images/AC.jpg",
      bullets: [
        "Implemented Temporal Difference (TD), SARSA, and Q-Learning algorithms from scratch.",
        "Compared performance with Actor-Critic methods and visualised convergence trends.",
        "Explored exploration-exploitation trade-offs and policy stability."
      ],
      href: "https://github.com/Chakri1701/TD-Learning-and-ActorCritic-GridWorld"
    },
    {
      title: "GridAgent — Learning with DAgger",
      subtitle: "Python • Imitation Learning",
      cover: "/images/GW.jpg",
      bullets: [
        "Implemented the DAgger algorithm for imitation learning in GridWorld environments.",
        "Collected expert demonstrations and trained policies iteratively with feedback.",
        "Visualised agent rollouts and evaluated improvement over behavioural cloning."
      ],
      href: "https://github.com/Chakri1701/GridAgent-Learning-With-Dagger"
    },
    {
      title: "Big Mart Sales Prediction",
      subtitle: "Python • Pandas • scikit-learn • Regression",
      cover: "/images/big.jpg",
      bullets: [
        "Preprocessed and analysed large retail sales data for feature extraction.",
        "Trained linear regression, random forest, and XGBoost models to predict sales.",
        "Evaluated model performance and visualised residuals for tuning."
      ],
      href: "https://github.com/Chakri1701/Big-Mart-Sales-Prediction"
    },
    {
      title: "Little Lemon — Restaurant Booking App",
      subtitle: "React • Node.js • SQLite • REST API",
      cover: "/images/Little.jpg",
      bullets: [
        "Developed a responsive restaurant booking system with menu and order management.",
        "Implemented REST APIs for booking, menu updates, and authentication.",
        "Followed full-stack best practices and documented deployment steps."
      ],
      href: "https://github.com/Chakri1701/Little-Lemon"
    },
    {
      title: "Routing — Terrain Aware Navigation",
      subtitle: "Python • React • SQL (2024)",
      cover: "/images/terrain-routing.jpg",
      bullets: [
        "Ingested flat files and REST API data to build terrain-aware routes.",
        "Stored optimised paths using indexed SQL tables for fast lookups.",
        "Added monitoring hooks to track latency and reliability."
      ]
    },
    {
      title: "Operating System Development with JOS",
      subtitle: "C • QEMU (2024)",
      cover: "/images/jos-os.jpg",
      bullets: [
        "Practised kernel-level debugging, paging, and memory management.",
        "Implemented system calls and process scheduling in a small OS.",
        "Enhanced understanding of low-level systems and virtualisation."
      ]
    }
  ]
},
  {
    slug: "skills",
    title: "Skills",
    cover: "/images/menu-skills.jpg",
    items: [
      {
        title: "UI",
        subtitle: "React, TypeScript, JavaScript, HTML5, CSS; Web Components concepts",
        bullets: ["Reusable component design", "Performance tuning"],
        cover: "/images/menu-skills.jpg",
      },
      {
        title: "Backend & Data",
        subtitle: "Node.js, REST, JSON; SQL; MongoDB basics",
        bullets: ["Query optimization basics", "API reliability checks"],
        cover: "/images/menu-skills.jpg",
      },
      {
        title: "Testing & Ops",
        subtitle: "Jest, Playwright; CI/CD; Observability",
        bullets: ["Structured logging", "Dashboards & runtime checks"],
        cover: "/images/menu-skills.jpg",
      },
    ],
  },
  {
    slug: "education",
    title: "Education",
    cover: "/images/menu-education.jpg",
    items: [
      {
        title: "Master of Engineering in Computer Science",
        subtitle: "Oregon State University, Corvallis, OR",
        period: "Jan 2024 – Jun 2025",
        bullets: ["Software Eng, Cloud, DB Systems, Algorithms, Full-Stack, Agile"],
        cover: "/images/edu-osu.jpg",
      },
      {
        title: "Bachelor of Technology (B.Tech)",
        subtitle: "Vignana Bharathi Institute of Technology (VBIT), Hyderabad, India",
        period: "Aug 2019 - May 2023",
        bullets: ["Core CS fundamentals, programming, and project work"],
        cover: "/images/edu-vbit.jpg",
      },
    ],
  },
];
