import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`bg-primary-light dark:bg-primary-dark rounded-md px-4 py-2 text-white transition-opacity hover:opacity-90 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
