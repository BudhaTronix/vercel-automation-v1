import { Badge } from "@/components/ui/badge";

export function PromptChips({
  prompts,
  onSelect,
}: {
  prompts: string[];
  onSelect: (prompt: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {prompts.map((prompt) => (
        <button
          key={prompt}
          type="button"
          onClick={() => onSelect(prompt)}
          className="text-left"
        >
          <Badge className="cursor-pointer bg-[rgba(255,255,255,0.7)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent-strong)]">
            {prompt}
          </Badge>
        </button>
      ))}
    </div>
  );
}

