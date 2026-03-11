import { Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AssistantInput({
  value,
  onChange,
  onSubmit,
  isLoading,
}: {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}) {
  return (
    <div className="rounded-[1.6rem] border border-[color:var(--border)] bg-[rgba(255,255,255,0.78)] p-3 shadow-[0_16px_40px_rgba(18,24,37,0.12)]">
      <label htmlFor="assistant-query" className="mb-2 block text-[11px] uppercase tracking-[0.24em] text-[color:var(--muted)]">
        Ask the CV assistant
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Sparkles className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--accent)]" />
          <input
            id="assistant-query"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                onSubmit();
              }
            }}
            placeholder="Ask about healthcare AI, edge deployment, publications, or prior enterprise experience"
            className="h-14 w-full rounded-[1.2rem] border border-[color:var(--border)] bg-transparent pl-11 pr-4 text-sm text-[color:var(--foreground)] outline-none placeholder:text-[color:var(--muted)] focus:border-[color:var(--accent)]"
          />
        </div>
        <Button type="button" onClick={onSubmit} disabled={isLoading || !value.trim()} className="sm:min-w-36">
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          {isLoading ? "Searching" : "Ask"}
        </Button>
      </div>
    </div>
  );
}

