import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const sizeStyles = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-7 py-3.5 text-[15px]",
  lg: "px-8 py-4 text-base",
};

const variantStyles = {
  primary:
    "bg-kwotient-accent text-white font-semibold rounded-[10px] hover:bg-kwotient-accent-hover hover:-translate-y-px hover:shadow-lg transition-all duration-200 ease-out shadow-sm",
  ghost:
    "bg-transparent text-kwotient-ink font-semibold rounded-[10px] border border-[1.5px] border-kwotient-border hover:bg-kwotient-surface transition-all duration-200 ease-out",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 tracking-[0.01em] cursor-pointer select-none ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
}
