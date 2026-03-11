import { SourceTag } from "@/content/cv";
import { Badge } from "@/components/ui/badge";

export function SourceTags({ sources }: { sources: SourceTag[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {sources.map((source) => (
        <Badge key={source} className="bg-transparent">
          {source}
        </Badge>
      ))}
    </div>
  );
}

