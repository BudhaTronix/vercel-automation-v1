import { sourceChunks, type SourceChunk } from "@/content/cv";

export interface RetrievalMatch extends SourceChunk {
  score: number;
  matchedTerms: string[];
}

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9\s]/g, " ");
}

function tokenize(value: string) {
  return normalize(value)
    .split(/\s+/)
    .filter((token) => token.length > 1);
}

const intentBoosts: Record<string, string[]> = {
  healthcare: ["healthcare", "clinical", "medical", "als", "mri", "ct", "visionhealth"],
  edge: ["edge", "device", "on device", "mobile", "tensorflow js", "react native"],
  audio: ["audio", "inhalation", "spray", "exhalation", "sound", "temporal"],
  vision: ["vision", "imaging", "video", "mri", "ct", "computer vision", "tongue", "lip"],
  production: ["production", "deployment", "deploy", "validation", "docker", "real world"],
  germany: ["germany", "munich", "german", "europe", "volkswagen", "magdeburg"],
  publications: ["publication", "publications", "paper", "research"],
  background: ["before", "background", "previously", "enterprise", "tibco", "ericsson", "cognizant"],
  drone: ["uav", "drone", "drones", "weevils"],
};

function detectIntent(query: string) {
  const normalized = normalize(query);
  return Object.entries(intentBoosts)
    .filter(([, keywords]) => keywords.some((keyword) => normalized.includes(keyword)))
    .map(([intent]) => intent);
}

function scoreChunk(queryTokens: string[], query: string, chunk: SourceChunk) {
  const matchedTerms = new Set<string>();
  let score = 0;
  const title = normalize(chunk.title);
  const content = normalize(chunk.content);
  const keywords = chunk.keywords.map(normalize);

  for (const token of queryTokens) {
    if (keywords.some((keyword) => keyword.includes(token))) {
      score += 4;
      matchedTerms.add(token);
    }
    if (title.includes(token)) {
      score += 3;
      matchedTerms.add(token);
    }
    if (content.includes(token)) {
      score += 1;
      matchedTerms.add(token);
    }
  }

  for (const intent of detectIntent(query)) {
    if (keywords.some((keyword) => intentBoosts[intent].some((entry) => keyword.includes(entry)))) {
      score += 5;
    }
    if (content.includes(intent) || title.includes(intent)) {
      score += 2;
    }
  }

  return { score, matchedTerms: [...matchedTerms] };
}

export function searchCv(query: string, limit = 5): RetrievalMatch[] {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const queryTokens = tokenize(trimmed);
  const matches = sourceChunks
    .map((chunk) => {
      const { score, matchedTerms } = scoreChunk(queryTokens, trimmed, chunk);
      return { ...chunk, score, matchedTerms };
    })
    .filter((match) => match.score > 0)
    .sort((left, right) => right.score - left.score)
    .slice(0, limit);

  if (matches.length > 0) {
    return matches;
  }

  return sourceChunks
    .filter((chunk) => chunk.section === "Profile" || chunk.section === "Experience")
    .slice(0, 3)
    .map((chunk) => ({ ...chunk, score: 1, matchedTerms: [] }));
}

