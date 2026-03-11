# Budhaditya Mukhopadhyay Portfolio

Recruiter-focused personal portfolio built with `Next.js`, `TypeScript`, `Tailwind CSS`, and a local CV-grounded assistant. The uploaded LinkedIn CV PDF is the only factual source used for site content.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Design Decisions

- Premium but restrained visual system with editorial typography, muted Munich-friendly tones, and subtle glass surfaces.
- Copy is optimized for recruiters and hiring managers in Germany and Europe: production readiness, applied AI, healthcare relevance, edge deployment, and research credibility.
- No invented metrics, testimonials, project stats, or claims beyond the CV.

## Content Structure

- `content/cv.ts`: single source of truth for profile, experience, capabilities, publications, skills, education, certifications, and assistant retrieval chunks.
- `content/assistant-queries.ts`: suggested recruiter questions shown in the hero.
- `public/cv/Budha_CV_LinkedIn.pdf`: downloadable CV asset.

## Assistant Logic

- The assistant is local-only. It does not call an external LLM API.
- `searchCv(query)` ranks CV chunks using normalized token matching plus intent boosts for topics such as healthcare AI, edge AI, audio AI, production, publications, and German market relevance.
- `buildAssistantAnswer(query, matches)` composes deterministic answers from structured CV data and returns source tags.
- The UI streams answers to create a polished conversational feel without pretending to be a live model.

## Updating Content Later

1. Replace or revise the structured data in `content/cv.ts`.
2. If the new CV introduces new themes, update `sourceChunks` and assistant intent logic in `lib/assistant/`.
3. Replace the PDF in `public/cv/` if the downloadable CV changes.

## Suggested Folder Structure

- `app/`: layout, page, global styles
- `components/site/`: recruiter-facing sections
- `components/assistant/`: local assistant UI
- `components/ui/`: reusable primitive components
- `content/`: structured CV data and prompt presets
- `lib/assistant/`: retrieval and answer formatting
- `lib/`: SEO, schema, and utility helpers

