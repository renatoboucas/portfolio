"use client";

type ConsentToggleProps = {
  checked: boolean;
  disabled?: boolean;
  label: string;
  onChange: (checked: boolean) => void;
};

export function ConsentToggle({ checked, disabled, label, onChange }: ConsentToggleProps) {
  return (
    <button
      aria-checked={checked}
      aria-label={label}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border transition ${
        checked ? "border-cyan-700 bg-cyan-700" : "border-slate-300 bg-slate-200"
      } ${disabled ? "cursor-not-allowed opacity-70" : "cursor-pointer"}`}
      disabled={disabled}
      onClick={(event) => {
        event.stopPropagation();
        onChange(!checked);
      }}
      role="switch"
      type="button"
    >
      <span
        className={`inline-block h-5 w-5 rounded-full bg-white shadow transition ${
          checked ? "translate-x-5" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}
