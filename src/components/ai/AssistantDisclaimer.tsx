import { ShieldCheck } from "lucide-react";

export function AssistantDisclaimer() {
  return (
    <div className="rounded-lg border border-cyan-200 bg-cyan-50/70 p-4 text-sm leading-6 text-slate-700">
      <div className="flex gap-3">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
        <p>
          This assistant uses public portfolio content to answer questions. It is not Renato
          personally and may not know private details, current availability, rates, or confidential
          project information.
        </p>
      </div>
    </div>
  );
}

