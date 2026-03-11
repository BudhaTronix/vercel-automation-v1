import { cvData, type SourceTag } from "@/content/cv";
import type { RetrievalMatch } from "@/lib/assistant/retrieval";

export interface AssistantAnswer {
  text: string;
  sources: SourceTag[];
}

function uniqueSources(matches: RetrievalMatch[], extras: SourceTag[] = []) {
  return [...new Set([...matches.map((match) => match.section), ...extras])];
}

function queryIncludes(query: string, values: string[]) {
  const normalized = query.toLowerCase();
  return values.some((value) => normalized.includes(value));
}

function genericAnswer(matches: RetrievalMatch[]): AssistantAnswer {
  const top = matches.slice(0, 3);
  const text = top
    .map((match) => match.content)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  return {
    text:
      text ||
      "The CV shows applied AI work across healthcare audio systems, computer vision, medical imaging, and production deployment. If you want, ask about a specific area such as edge AI, healthcare AI, publications, or earlier enterprise software work.",
    sources: uniqueSources(matches),
  };
}

export function buildAssistantAnswer(query: string, matches: RetrievalMatch[]): AssistantAnswer {
  const normalized = query.toLowerCase();

  if (queryIncludes(normalized, ["publication", "publications", "paper", "research"])) {
    return {
      text: `The CV lists two publications: "${cvData.publications[0].title}" and "${cvData.publications[1].title}". Together they point to work on interpretability for image-based deep learning and computer-vision support for quantifying bulbar function in ALS.`,
      sources: uniqueSources(matches, ["Publications"]),
    };
  }

  if (queryIncludes(normalized, ["healthcare", "medical", "clinical"])) {
    return {
      text: "He is a strong healthcare AI fit because his current VisionHealth work is centered on audio-based healthcare applications and clinically reliable AI in real-world conditions. The CV also shows prior medical imaging work on MRI and CT blur detection, plus ALS-related computer-vision research, which adds domain depth beyond a single product role.",
      sources: uniqueSources(matches, ["Experience", "Publications"]),
    };
  }

  if (queryIncludes(normalized, ["edge", "on-device", "device", "mobile"])) {
    return {
      text: "Yes. The CV explicitly shows edge and on-device work at VisionHealth, where he designs and deploys on-device deep learning models and builds TensorFlow.js models integrated into React Native mobile pipelines. That combination is directly relevant for teams shipping ML outside the cloud.",
      sources: uniqueSources(matches, ["Experience", "Skills"]),
    };
  }

  if (queryIncludes(normalized, ["audio", "sound", "signal"])) {
    return {
      text: "Audio AI is one of the clearest themes in the CV. At VisionHealth he works on audio-based healthcare applications, including detection of inhalation, spray, and exhalation events, and uses temporal modeling to improve real-time processing. His profile summary also frames audio processing as a core specialization.",
      sources: uniqueSources(matches, ["Experience", "Profile"]),
    };
  }

  if (queryIncludes(normalized, ["vision", "imaging", "computer vision", "medical imaging"])) {
    return {
      text: "His computer-vision background spans multiple settings: motion sickness detection at Volkswagen, MRI and CT scan blur detection at Otto-von-Guericke University, and tongue and lip analysis pipelines at DZNE. The CV also references tools such as YOLO, RCNN, OpenCV, Dlib, and MobileNet-V2.",
      sources: uniqueSources(matches, ["Experience", "Skills"]),
    };
  }

  if (queryIncludes(normalized, ["production", "deploy", "deployment", "real-world"])) {
    return {
      text: "Yes. The CV repeatedly emphasizes production readiness: production-grade ML and DL systems in the profile summary, on-device deployment and validation ownership at VisionHealth, Docker-based packaging in research roles, and pre-deployment validation scripts in enterprise software work. This is not a research-only profile.",
      sources: uniqueSources(matches, ["Profile", "Experience"]),
    };
  }

  if (queryIncludes(normalized, ["german market", "germany", "europe", "munich", "european"])) {
    return {
      text: "He is relevant to the German AI market because the CV shows sustained Germany-based study and work: Otto-von-Guericke University in Magdeburg, DZNE, Volkswagen in Wolfsburg, and VisionHealth in Munich. The domain mix also matches common German hiring priorities: healthcare, industrial research, applied ML, and deployable systems. German is listed at elementary level.",
      sources: uniqueSources(matches, ["Experience", "Education"]),
    };
  }

  if (queryIncludes(normalized, ["before ai", "background", "previously", "before"])) {
    return {
      text: "Before his current AI-heavy roles, he spent 4.5+ years in enterprise software and integration work. The CV lists Ericsson and Cognizant roles covering APIs, TIBCO-based integration, technical design documents, production validation scripts, and a Linux-kernel-based server monitoring tool during his internship.",
      sources: uniqueSources(matches, ["Profile", "Experience"]),
    };
  }

  if (queryIncludes(normalized, ["drone", "uav"])) {
    return {
      text: "Yes. The CV lists him as Strategic Advisor at Weevils Drones, where he supports AI-powered drone systems, AI-based tracking and intelligence solutions, architecture, partnerships, and go-to-market work. That adds UAV and innovation-strategy experience on top of his core engineering profile.",
      sources: uniqueSources(matches, ["Experience"]),
    };
  }

  if (queryIncludes(normalized, ["what kind of ai problems", "what kind of ai", "problems"])) {
    return {
      text: "The CV shows work across audio-based healthcare AI, inhalation-technique analysis, motion sickness prediction, medical scan quality assessment, tongue and lip analysis for ALS-related workflows, speech-to-text translation, and AI-powered drone intelligence. The common pattern is applied ML for real deployment contexts rather than speculative demo work.",
      sources: uniqueSources(matches, ["Experience", "Profile"]),
    };
  }

  return genericAnswer(matches);
}

