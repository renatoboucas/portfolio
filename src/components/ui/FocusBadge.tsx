import { cn } from "@/lib/utils";

type FocusBadgeProps = {
  label: string;
  variant?: "light" | "dark" | "outline";
};

export function FocusBadge({ label, variant = "light" }: FocusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold",
        variant === "light" && "bg-slate-100 text-slate-700",
        variant === "dark" && "bg-white/10 text-slate-100 ring-1 ring-white/15",
        variant === "outline" && "border border-slate-200 bg-white text-slate-700",
      )}
    >
      {label}
    </span>
  );
}
