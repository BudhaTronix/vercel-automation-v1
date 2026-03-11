"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { BotMessageSquare, SearchX } from "lucide-react";
import { suggestedQueries } from "@/content/assistant-queries";
import type { SourceTag } from "@/content/cv";
import { buildAssistantAnswer, searchCv } from "@/lib/assistant";
import { AssistantInput } from "@/components/assistant/assistant-input";
import { AssistantResponse } from "@/components/assistant/assistant-response";
import { PromptChips } from "@/components/assistant/prompt-chips";

const fallbackAnswer =
  "The CV does not state enough to answer that directly. Try asking about healthcare AI, edge AI, computer vision, publications, or prior enterprise experience.";

export function AssistantShell() {
  const [query, setQuery] = useState("");
  const [activeQuestion, setActiveQuestion] = useState(suggestedQueries[0]);
  const [displayedAnswer, setDisplayedAnswer] = useState("");
  const [sources, setSources] = useState<SourceTag[]>(["Profile", "Experience"]);
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef<number | null>(null);

  const initialAnswer = useMemo(() => {
    const matches = searchCv(activeQuestion);
    return buildAssistantAnswer(activeQuestion, matches);
  }, [activeQuestion]);

  useEffect(() => {
    setDisplayedAnswer(initialAnswer.text);
    setSources(initialAnswer.sources);
  }, [initialAnswer]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const streamAnswer = (nextText: string) => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }
    let index = 0;
    setDisplayedAnswer("");

    const tick = () => {
      index += 2;
      setDisplayedAnswer(nextText.slice(0, index));
      if (index < nextText.length) {
        timerRef.current = window.setTimeout(tick, 14);
      } else {
        timerRef.current = null;
      }
    };

    tick();
  };

  const handleSubmit = () => {
    const nextQuestion = query.trim();
    if (!nextQuestion) return;

    setIsLoading(true);
    setActiveQuestion(nextQuestion);

    window.setTimeout(() => {
      const matches = searchCv(nextQuestion);
      const answer = matches.length > 0 ? buildAssistantAnswer(nextQuestion, matches) : { text: fallbackAnswer, sources: ["Profile" as const] };
      setSources(answer.sources);
      streamAnswer(answer.text);
      setIsLoading(false);
      setQuery("");
    }, 420);
  };

  const handlePromptSelect = (prompt: string) => {
    setQuery(prompt);
    const matches = searchCv(prompt);
    const answer = buildAssistantAnswer(prompt, matches);
    setActiveQuestion(prompt);
    setSources(answer.sources);
    streamAnswer(answer.text);
  };

  return (
    <div className="space-y-4">
      <div className="rounded-[1.7rem] border border-[color:var(--border)] bg-[rgba(18,24,37,0.9)] p-5 text-white shadow-[0_26px_80px_rgba(18,24,37,0.35)] sm:p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-full border border-white/15 bg-white/10 p-2">
            <BotMessageSquare className="h-4 w-4 text-[color:var(--accent)]" />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/55">Local CV assistant</p>
            <p className="text-sm text-white/80">Answers are generated from structured CV data only.</p>
          </div>
        </div>
        <AssistantInput value={query} onChange={setQuery} onSubmit={handleSubmit} isLoading={isLoading} />
        <div className="mt-4">
          <PromptChips prompts={suggestedQueries} onSelect={handlePromptSelect} />
        </div>
      </div>

      {displayedAnswer ? (
        <AssistantResponse question={activeQuestion} answer={displayedAnswer} sources={sources} />
      ) : (
        <div className="rounded-[1.5rem] border border-dashed border-[color:var(--border)] bg-[rgba(255,255,255,0.58)] p-5 text-sm text-[color:var(--muted)]">
          <div className="flex items-start gap-3">
            <SearchX className="mt-0.5 h-4 w-4 flex-none text-[color:var(--accent)]" />
            <p>Ask a recruiter-style question to see a grounded answer assembled from the CV.</p>
          </div>
        </div>
      )}
    </div>
  );
}

