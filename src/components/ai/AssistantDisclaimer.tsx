import { ShieldCheck } from "lucide-react";

export function AssistantDisclaimer() {
  return (
    <div className="border-y bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700">
      <div className="flex gap-3">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
        <p>
          Uses public portfolio content. It is not Renato personally and does not answer private,
          confidential, rates, or availability questions.
        </p>
      </div>
    </div>
  );
}
