"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

interface CustomSelectProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  options: string[];
  placeholder: string;
  hasError?: boolean;
}

export default function CustomSelect({
  id,
  value,
  onChange,
  onBlur,
  options,
  placeholder,
  hasError,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open]);

  const borderClass = hasError
    ? "border-red-500/60 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500/20"
    : open
      ? "border-accent ring-2 ring-accent/20"
      : "border-border hover:border-border-hover";

  return (
    <div ref={ref} className="relative" id={id}>
      <button
        type="button"
        onClick={() => {
          setOpen((prev) => !prev);
          if (open && onBlur) onBlur();
        }}
        onBlur={() => {
          if (!open && onBlur) onBlur();
        }}
        className={`flex w-full items-center justify-between rounded-lg border bg-bg px-4 py-3 text-left text-sm outline-none transition-all duration-200 ${borderClass}`}
      >
        <span className={value ? "text-text-primary" : "text-text-dim"}>
          {value || placeholder}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-text-dim transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-border bg-bg-card shadow-xl shadow-black/40">
          {options.map((opt) => {
            const selected = opt === value;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                  if (onBlur) onBlur();
                }}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors ${
                  selected
                    ? "bg-accent/10 text-accent"
                    : "text-text-muted hover:bg-bg-elevated hover:text-text-primary"
                }`}
              >
                <span>{opt}</span>
                {selected && <Check className="h-4 w-4 shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
