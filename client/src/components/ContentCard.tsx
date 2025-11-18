import { ReactNode } from "react";

interface ContentCardProps {
  title: string;
  description?: string;
  children?: ReactNode;
  icon?: ReactNode;
  variant?: "default" | "highlight" | "warning";
}

export default function ContentCard({
  title,
  description,
  children,
  icon,
  variant = "default",
}: ContentCardProps) {
  const baseClasses = "rounded-lg p-6 border";
  const variantClasses = {
    default: "bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow",
    highlight: "bg-cyan-50 border-cyan-200 shadow-sm",
    warning: "bg-red-50 border-red-200 shadow-sm",
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      {icon && <div className="mb-3">{icon}</div>}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      {description && <p className="text-gray-600 text-sm mb-4">{description}</p>}
      {children}
    </div>
  );
}
