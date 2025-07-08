
import { ReactNode, ButtonHTMLAttributes } from "react";

interface FunButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "success";
  size?: "sm" | "md" | "lg";
}

export const FunButton = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "",
  ...props 
}: FunButtonProps) => {
  const variantClasses = {
    primary: "bg-fun-purple hover:bg-purple-600 border-purple-700",
    secondary: "bg-fun-blue hover:bg-blue-600 border-blue-700",
    danger: "bg-fun-pink hover:bg-pink-600 border-pink-700",
    success: "bg-fun-green hover:bg-green-600 border-green-700",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-lg",
    lg: "px-8 py-4 text-xl",
  };

  return (
    <button
      className={`
        ${variantClasses[variant]} ${sizeClasses[size]}
        text-white font-fredoka font-bold rounded-full border-4
        shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95
        transition-all duration-200 sparkle
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
