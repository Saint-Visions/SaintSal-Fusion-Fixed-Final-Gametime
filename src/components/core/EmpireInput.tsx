import React from "react";

interface EmpireInputProps {
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "glass" | "minimal";
}

export default function EmpireInput({
  type = "text",
  placeholder,
  value,
  onChange,
  onKeyPress,
  className = "",
  disabled = false,
  required = false,
  icon,
  size = "md",
  variant = "default",
}: EmpireInputProps) {
  const baseClasses =
    "text-white placeholder-gray-400 focus:outline-none transition-all duration-300";

  const variantClasses = {
    default: "empire-input",
    glass:
      "empire-glass px-4 py-3 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20",
    minimal:
      "bg-transparent border-b-2 border-gold/30 px-2 py-3 focus:border-gold",
  };

  const sizeClasses = {
    sm: "text-sm px-3 py-2",
    md: "text-base px-4 py-3",
    lg: "text-lg px-5 py-4",
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  const allClasses = `
    ${baseClasses} 
    ${variantClasses[variant]} 
    ${sizeClasses[size]} 
    ${disabledClasses} 
    ${className}
  `.trim();

  if (icon) {
    return (
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gold">{icon}</span>
        </div>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
          className={`${allClasses} pl-10`}
          disabled={disabled}
          required={required}
        />
      </div>
    );
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      className={allClasses}
      disabled={disabled}
      required={required}
    />
  );
}
