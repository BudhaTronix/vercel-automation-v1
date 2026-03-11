import { SourceTags } from "@/components/assistant/source-tags";
import type { SourceTag } from "@/content/cv";

export function AssistantResponse({
  question,
  answer,
  sources,
}: {
  question: string;
  answer: string;
  sources: SourceTag[];
}) {
  return (
    <div className="space-y-4 rounded-[1.5rem] border border-[color:var(--border)] bg-[rgba(255,255,255,0.7)] p-4 sm:p-5">
      <div className="space-y-2">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--muted)]">Recruiter query</p>
        <p className="text-sm leading-7 text-[color:var(--foreground)]">{question}</p>
      </div>
      <div className="h-px w-full bg-[color:var(--border)]" />
      <div className="space-y-3">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--muted)]">Grounded answer</p>
        <p className="text-sm leading-7 text-[color:var(--muted-strong)] sm:text-[15px]">{answer}</p>
        <SourceTags sources={sources} />
      </div>
    </div>
  );
}

