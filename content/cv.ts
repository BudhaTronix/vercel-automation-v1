export type SourceTag = "Experience" | "Skills" | "Publications" | "Education" | "Certifications" | "Profile";

export interface ExperienceHighlight {
  label: "Business context" | "Technical work" | "Deployment relevance";
  text: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  start: string;
  end: string;
  durationLabel: string;
  location?: string;
  summary: string;
  highlights: ExperienceHighlight[];
  tags: string[];
}

export interface CapabilityEntry {
  title: string;
  description: string;
  recruiterValue: string;
  evidenceRefs: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface SourceChunk {
  id: string;
  section: SourceTag;
  title: string;
  content: string;
  keywords: string[];
}

export const cvData = {
  profile: {
    fullName: "Budhaditya Mukhopadhyay",
    headline: "Senior AI Engineer | Strategic Advisor - UAV & AI Innovation | Edge AI | ML & DL",
    positioning:
      "Applied AI engineer building production-grade audio, edge, and healthcare systems from research through deployment.",
    location: "Munich, Bavaria, Germany",
    email: "budha2011@gmail.com",
    linkedin: "https://www.linkedin.com/in/budhadityamukhopadhyay",
    github: "https://github.com/BudhaTronix",
    summary:
      "Senior AI Engineer specializing in audio processing and edge AI, with a Master's degree in Data Science from Otto von Guericke University. Builds and optimizes production-grade machine learning and deep learning systems for real-world deployment, with work spanning healthcare, on-device inference, medical imaging, and computer vision. Also serves as a Strategic Advisor at Weevils Drones, supporting AI-driven innovation, UAV intelligence, and international technology partnerships. Earlier experience includes 4.5+ years in enterprise web services using TIBCO technologies.",
    availability:
      "Open to senior applied AI, edge AI, healthcare AI, computer vision, and ML engineering conversations across Munich, Germany, and Europe.",
  },
  recruiterSnapshot: {
    currentFocus: "Senior AI Engineer at VisionHealth, leading audio-based healthcare ML and on-device deployment work.",
    domains: [
      "Applied AI",
      "Edge AI",
      "Audio AI",
      "Healthcare AI",
      "Computer Vision",
      "Medical Imaging",
    ],
    industries: ["Healthcare", "Automotive Research", "UAV / Drone Systems", "Enterprise Software", "Telecom"],
    strongestThemes: [
      "Production-grade ML systems",
      "On-device inference",
      "Clinical-adjacent AI workflows",
      "Explainability",
      "Cross-functional delivery",
    ],
    quickFit:
      "Strong fit for senior roles that require deployed AI systems, healthcare or industrial relevance, research depth, and the ability to connect model work with product, platform, and business constraints.",
  },
  about: [
    "Budhaditya Mukhopadhyay is a Munich-based Senior AI Engineer working at the intersection of audio processing, edge AI, and real-world healthcare deployment. At VisionHealth, his work centers on audio-based healthcare applications and on-device deep learning models designed for use in real operating conditions rather than demo environments.",
    "His broader background combines research and product execution. Previous work spans motion sickness prediction at Volkswagen, medical scan quality assessment, explainable AI for MRI and CT workflows, and computer-vision pipelines for tongue and lip analysis connected to ALS research. That mix gives him experience across audio, video, medical imaging, and multimodal ML systems.",
    "Before moving fully into AI, he worked in enterprise software integration roles at Ericsson and Cognizant, building web services, validation tooling, and production-facing integration workflows. The result is an engineering profile that combines applied research depth with deployment discipline and B2B delivery pragmatism.",
  ],
  languages: [
    { name: "Hindi", proficiency: "Full Professional" },
    { name: "Bengali", proficiency: "Native or Bilingual" },
    { name: "English", proficiency: "Native or Bilingual" },
    { name: "German", proficiency: "Elementary" },
  ],
  certifications: [
    "IT Information Library Foundations Certification (ITIL)",
    "React Native Course",
    "Machine Learning in JavaScript with TensorFlow.js",
    "Introduction to Generative AI",
    "International Software Testing Qualifications Board Foundation",
  ],
  publications: [
    {
      title: "TorchEsegeta: Framework for Interpretability and Explainability of Image-based Deep Learning Models",
      note: "Signals a research focus on interpretability and explainability for image-based deep learning.",
    },
    {
      title: "An Automated Tongue Tracker for Quantifying Bulbar Function in ALS",
      note: "Connects computer vision work to a clinically relevant ALS use case.",
    },
  ],
  education: [
    {
      institution: "Otto-von-Guericke University Magdeburg",
      degree: "Master's degree",
      field: "Data and Knowledge Engineering",
      period: "2019 - July 2023",
    },
    {
      institution: "West Bengal University of Technology, Kolkata",
      degree: "Bachelor's Degree",
      field: "Information Technology",
      period: "2010 - 2014",
    },
  ],
  experience: [
    {
      company: "VisionHealth GmbH",
      role: "Senior AI Engineer",
      start: "February 2026",
      end: "Present",
      durationLabel: "2 months",
      location: "Munich",
      summary:
        "Leads end-to-end ML systems for audio-based healthcare applications in Munich.",
      highlights: [
        {
          label: "Business context",
          text: "Owns AI systems that support healthcare product workflows rather than isolated research prototypes.",
        },
        {
          label: "Technical work",
          text: "Designs on-device deep learning models, steers data strategy, and owns training and validation workflows.",
        },
        {
          label: "Deployment relevance",
          text: "Focuses on production deployment and clinically reliable AI in real-world conditions.",
        },
      ],
      tags: ["Healthcare AI", "Audio AI", "On-device", "Production ML"],
    },
    {
      company: "VisionHealth GmbH",
      role: "AI Engineer",
      start: "January 2023",
      end: "Present",
      durationLabel: "3 years 3 months",
      location: "Munich, Bavaria, Germany",
      summary:
        "Built AI models for inhalation, spray, exhalation, and manoeuvre detection inside a cross-platform healthcare product.",
      highlights: [
        {
          label: "Business context",
          text: "Worked on inhalation-technique analysis for a healthcare application with direct product relevance.",
        },
        {
          label: "Technical work",
          text: "Implemented models with TensorFlow.js and integrated AI into audio and video processing pipelines with React Native.",
        },
        {
          label: "Deployment relevance",
          text: "Used temporal modeling for real-time efficiency and accuracy in mobile-oriented workflows.",
        },
      ],
      tags: ["TensorFlow.js", "React Native", "Audio AI", "Temporal modeling"],
    },
    {
      company: "Weevils Drones",
      role: "Strategic Advisor",
      start: "May 2025",
      end: "Present",
      durationLabel: "11 months",
      summary:
        "Advises on AI-powered drone systems, architecture, and international technology partnerships.",
      highlights: [
        {
          label: "Business context",
          text: "Supports leadership on strategy, market positioning, partnerships, and go-to-market initiatives.",
        },
        {
          label: "Technical work",
          text: "Owns end-to-end architecture and production deployment thinking for AI-powered drone tracking and intelligence systems.",
        },
        {
          label: "Deployment relevance",
          text: "Frames robustness, performance, and operational scalability as first-class requirements.",
        },
      ],
      tags: ["UAV", "Strategic advisory", "Architecture", "Deployability"],
    },
    {
      company: "Volkswagen AG",
      role: "Data Science Researcher : Master Thesis",
      start: "April 2022",
      end: "December 2022",
      durationLabel: "9 months",
      location: "Wolfsburg, Lower Saxony, Germany",
      summary:
        "Developed a motion sickness detection solution using deep learning for automotive research.",
      highlights: [
        {
          label: "Business context",
          text: "Worked on an in-car motion sickness problem with automotive user-experience relevance.",
        },
        {
          label: "Technical work",
          text: "Used contextual data, ML/DL algorithms, convolution blocks, LSTM forecasting, and computer vision.",
        },
        {
          label: "Deployment relevance",
          text: "Included explainability and future-state prediction, supporting practical model interpretation.",
        },
      ],
      tags: ["Automotive AI", "LSTM", "Explainability", "Computer Vision"],
    },
    {
      company: "Volkswagen AG",
      role: "Data Science Intern",
      start: "January 2022",
      end: "March 2022",
      durationLabel: "3 months",
      location: "Germany",
      summary:
        "Contributed to motion sickness detection using pupil-diameter time series and video-derived features.",
      highlights: [
        {
          label: "Business context",
          text: "Supported the same motion sickness detection research track in an automotive setting.",
        },
        {
          label: "Technical work",
          text: "Used LSTM, 1D convolution techniques, and video feature extraction for LSTM-CNN training.",
        },
        {
          label: "Deployment relevance",
          text: "Handled large face-image and landmark datasets for model training at practical scale.",
        },
      ],
      tags: ["Time series", "LSTM-CNN", "Pupil data", "Dataset handling"],
    },
    {
      company: "Otto-von-Guericke University Magdeburg",
      role: "Student Research Assistant",
      start: "November 2021",
      end: "September 2022",
      durationLabel: "11 months",
      location: "Magdeburg, Saxony-Anhalt, Germany",
      summary:
        "Built dataset and packaging workflows for PyTorch libraries and worked on German speech-to-text translation using deep learning.",
      highlights: [
        {
          label: "Business context",
          text: "Worked on reusable research infrastructure rather than one-off experiments.",
        },
        {
          label: "Technical work",
          text: "Created custom dataset packages spanning text, audio, and image data; used Python Flask and fine-tuned translation models.",
        },
        {
          label: "Deployment relevance",
          text: "Implemented packaging and CI/CD workflows with Docker for easier usability and delivery.",
        },
      ],
      tags: ["PyTorch", "Speech", "Flask", "Docker"],
    },
    {
      company: "Otto-von-Guericke University Magdeburg",
      role: "Student Research Assistant",
      start: "November 2020",
      end: "February 2022",
      durationLabel: "1 year 4 months",
      location: "Magdeburg, Saxony-Anhalt, Germany",
      summary:
        "Developed a deep-learning solution for detecting motion and blur in MRI and CT scans.",
      highlights: [
        {
          label: "Business context",
          text: "Focused on scan-quality assessment in medical imaging workflows.",
        },
        {
          label: "Technical work",
          text: "Built a Python application supporting supervised training and testing on 2D and 3D volumes with multi-GPU and multi-threading support.",
        },
        {
          label: "Deployment relevance",
          text: "Used explainable AI to interpret why scans were classified as blur or not blur.",
        },
      ],
      tags: ["Medical Imaging", "MRI", "CT", "Explainable AI"],
    },
    {
      company: "German Center for Neurodegenerative Diseases (DZNE)",
      role: "Research Assistant",
      start: "August 2020",
      end: "October 2021",
      durationLabel: "1 year 3 months",
      location: "Germany",
      summary:
        "Built computer-vision pipelines for video preprocessing, lip and tongue analysis, and ALS-related measurement workflows.",
      highlights: [
        {
          label: "Business context",
          text: "Worked in a neurodegenerative disease research context with ALS-related use cases.",
        },
        {
          label: "Technical work",
          text: "Used CNNs, FaceNet, YOLO, RCNN, OpenCV, Dlib, TensorFlow, PyTorch, MobileNet-V2, Seaborn, Matplotlib, and Flask-based tooling.",
        },
        {
          label: "Deployment relevance",
          text: "Created reusable preprocessing pipelines, custom datasets, Docker packaging, and an interactive frontend GUI tool.",
        },
      ],
      tags: ["ALS", "Computer Vision", "Docker", "MobileNet-V2"],
    },
    {
      company: "Cognizant",
      role: "Associate",
      start: "October 2018",
      end: "September 2019",
      durationLabel: "1 year",
      location: "Kolkata Area, India",
      summary:
        "Worked on enterprise web services and pre-deployment validation in the pharmacy domain.",
      highlights: [
        {
          label: "Business context",
          text: "Delivered enterprise software for the pharmacy domain.",
        },
        {
          label: "Technical work",
          text: "Developed APIs, automated validation scripts, and technical design documentation.",
        },
        {
          label: "Deployment relevance",
          text: "Contributed to pre-deployment validation before release to production servers.",
        },
      ],
      tags: ["APIs", "Validation", "Pharmacy Domain", "Design Docs"],
    },
    {
      company: "Ericsson",
      role: "Solution Integrator",
      start: "February 2015",
      end: "October 2018",
      durationLabel: "3 years 9 months",
      location: "Kolkata Area, India",
      summary:
        "Built enterprise web services for a full-stack telecom transformation project.",
      highlights: [
        {
          label: "Business context",
          text: "Worked on large-scale telecom transformation work with customer-facing coordination responsibilities.",
        },
        {
          label: "Technical work",
          text: "Developed APIs and worked as the TIBCO SPOC at an onsite customer location in Kuwait.",
        },
        {
          label: "Deployment relevance",
          text: "Represents an early foundation in enterprise integration and cross-team delivery under production constraints.",
        },
      ],
      tags: ["Telecom", "APIs", "TIBCO", "Integration"],
    },
    {
      company: "Ericsson",
      role: "Intern",
      start: "June 2012",
      end: "July 2012",
      durationLabel: "2 months",
      location: "Kolkata",
      summary:
        "Developed a server monitoring tool with Linux kernel work and alerting for overload conditions.",
      highlights: [
        {
          label: "Business context",
          text: "Focused on infrastructure monitoring and operational visibility.",
        },
        {
          label: "Technical work",
          text: "Worked on Linux kernel-related monitoring logic and an alerting system for server overloads.",
        },
        {
          label: "Deployment relevance",
          text: "Shows an early systems-engineering foundation before the move into AI.",
        },
      ],
      tags: ["Linux Kernel", "Monitoring", "Alerting", "Systems"],
    },
  ] satisfies ExperienceEntry[],
  capabilities: [
    {
      title: "Edge AI & On-Device Inference",
      description:
        "Current VisionHealth work includes on-device deep learning models and mobile-oriented inference pipelines for healthcare use cases.",
      recruiterValue:
        "Signals readiness for teams that need AI shipped on constrained devices rather than left in notebooks.",
      evidenceRefs: ["VisionHealth GmbH", "TensorFlow.js", "React Native"],
    },
    {
      title: "Audio AI",
      description:
        "The CV centers on audio processing, including inhalation, spray, and exhalation detection plus temporal modeling for real-time workflows.",
      recruiterValue:
        "Relevant for applied AI roles where noisy signals, low latency, and product integration matter.",
      evidenceRefs: ["VisionHealth GmbH", "Audio processing", "Temporal modeling"],
    },
    {
      title: "Healthcare AI",
      description:
        "Experience spans audio-based healthcare applications, MRI and CT scan assessment, ALS-related research, and clinically reliable AI language in the current role.",
      recruiterValue:
        "Shows domain familiarity for healthcare and regulated-adjacent environments without overclaiming compliance expertise.",
      evidenceRefs: ["VisionHealth GmbH", "MRI and CT scans", "ALS"],
    },
    {
      title: "Computer Vision & Medical Imaging",
      description:
        "Includes motion sickness detection from video and pupil data, blur detection in medical scans, and tongue/lip analysis pipelines.",
      recruiterValue:
        "Useful for roles where imaging, perception, and multimodal ML need to connect to product outcomes.",
      evidenceRefs: ["Volkswagen AG", "Otto-von-Guericke University", "DZNE"],
    },
    {
      title: "Applied Research to Production",
      description:
        "The CV repeatedly shows model training, validation, packaging, explainability, and deployment responsibility across research and product roles.",
      recruiterValue:
        "Highlights an engineer who can translate research ideas into operational systems and internal tooling.",
      evidenceRefs: ["Production deployment", "Docker", "Explainable AI"],
    },
    {
      title: "UAV / Strategic AI Innovation",
      description:
        "At Weevils Drones, he combines AI systems thinking with architecture, partnerships, mentoring, and go-to-market support.",
      recruiterValue:
        "Differentiates him from purely hands-on IC profiles by adding strategic product and innovation credibility.",
      evidenceRefs: ["Weevils Drones", "Strategic Advisor", "UAV intelligence"],
    },
    {
      title: "Enterprise Integration Foundations",
      description:
        "Before AI-heavy roles, he spent years in enterprise APIs, validation scripts, technical design documents, telecom integration, and Linux-based tooling.",
      recruiterValue:
        "Adds systems maturity and delivery discipline that recruiters often look for in senior applied AI hires.",
      evidenceRefs: ["Ericsson", "Cognizant", "TIBCO"],
    },
  ] satisfies CapabilityEntry[],
  skillGroups: [
    {
      title: "AI / ML",
      items: ["Machine Learning", "Deep Learning", "LSTM", "CNN", "Temporal modeling", "Explainable AI"],
    },
    {
      title: "Edge / Deployment",
      items: ["Edge AI", "On-device inference", "TensorFlow.js", "React Native", "Docker", "Multi-GPU"],
    },
    {
      title: "Audio / Time Series",
      items: ["Audio processing", "Inhalation detection", "Exhalation detection", "Spray detection", "Noise-robust modeling"],
    },
    {
      title: "Vision / Imaging",
      items: ["Computer Vision", "Medical Imaging", "MRI", "CT", "YOLO", "RCNN", "OpenCV", "Dlib", "MobileNet-V2"],
    },
    {
      title: "Tooling / Platforms",
      items: ["PyTorch", "TensorFlow", "Python Flask", "TypeScript", "Scikit-learn", "Scikit-image", "PIL", "Matplotlib", "Seaborn"],
    },
    {
      title: "Strategy / Integration",
      items: ["Strategic Planning", "Strategic Consulting", "APIs", "TIBCO", "Technical Design Documents", "Linux Kernel"],
    },
  ] satisfies SkillGroup[],
};

export const sourceChunks: SourceChunk[] = [
  {
    id: "profile-summary",
    section: "Profile",
    title: "Profile summary",
    content: cvData.profile.summary,
    keywords: [
      "senior ai engineer",
      "edge ai",
      "audio processing",
      "healthcare",
      "computer vision",
      "production-grade",
      "munich",
      "germany",
    ],
  },
  ...cvData.experience.map((entry, index) => ({
    id: `experience-${index}`,
    section: "Experience" as const,
    title: `${entry.role} at ${entry.company}`,
    content: [entry.summary, ...entry.highlights.map((item) => item.text)].join(" "),
    keywords: entry.tags.map((tag) => tag.toLowerCase()),
  })),
  ...cvData.skillGroups.map((group, index) => ({
    id: `skills-${index}`,
    section: "Skills" as const,
    title: group.title,
    content: group.items.join(", "),
    keywords: group.items.map((item) => item.toLowerCase()),
  })),
  ...cvData.publications.map((publication, index) => ({
    id: `publication-${index}`,
    section: "Publications" as const,
    title: publication.title,
    content: publication.note,
    keywords: publication.title.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean),
  })),
  ...cvData.education.map((item, index) => ({
    id: `education-${index}`,
    section: "Education" as const,
    title: item.institution,
    content: `${item.degree} in ${item.field} (${item.period})`,
    keywords: [item.institution.toLowerCase(), item.field.toLowerCase(), item.degree.toLowerCase()],
  })),
  ...cvData.certifications.map((item, index) => ({
    id: `certification-${index}`,
    section: "Certifications" as const,
    title: item,
    content: item,
    keywords: item.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean),
  })),
];

