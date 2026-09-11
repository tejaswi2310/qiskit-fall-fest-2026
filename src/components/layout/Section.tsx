import * as React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export const Section = ({
  children,
  id,
  className = "",
  containerClassName = "",
  ...props
}: SectionProps) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 ${className}`}
      {...props}
    >
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};
