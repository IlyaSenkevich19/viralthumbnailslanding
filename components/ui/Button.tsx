import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30",
  secondary:
    "bg-accent-amber text-gray-900 hover:bg-accent-amber-hover font-semibold shadow-lg shadow-accent-amber/20 hover:shadow-xl hover:shadow-accent-amber/30",
  outline:
    "border border-border text-text-primary hover:border-border-hover hover:bg-bg-card",
  ghost:
    "text-text-muted hover:text-text-primary hover:bg-bg-card",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-xl font-medium cursor-pointer transition-all duration-200 ease-out hover:scale-[1.02] active:scale-[0.98] ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? "opacity-40 pointer-events-none" : ""} ${className}`;

  if (href) {
    const external = /^https?:\/\//i.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
