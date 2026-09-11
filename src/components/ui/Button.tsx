import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", asChild = false, children, ...props }, ref) => {
    
    // Base classes
    const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-all duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";
    
    // Variant classes
    const variants = {
      primary: "bg-primary text-white shadow-elevation-1 hover:brightness-110 hover:shadow-elevation-2 border border-primary",
      secondary: "bg-transparent text-text-primary border border-border hover:bg-surface-hover hover:border-text-secondary",
      ghost: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-white/5",
    };
    
    // Size classes
    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };
    
    const combinedClassName = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
    
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        className: `${child.props.className || ""} ${combinedClassName}`.trim(),
        ...props,
      });
    }
    
    return (
      <button
        className={combinedClassName}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
