import React, { useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface PreferenceDropdownProps {
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function PreferenceDropdown({
  label,
  options,
  value,
  onChange,
  className = "",
}: PreferenceDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className={`relative ${className}`}>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-charcoal/50 border border-gold/30 rounded-lg px-3 py-2 text-left text-white hover:border-gold focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
      >
        <span>{selectedOption?.label || "Select option"}</span>
        <span className="float-right text-gold">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-charcoal border border-gold/30 rounded-lg shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`w-full px-3 py-2 text-left hover:bg-gold/10 transition-colors ${
                option.value === value ? "bg-gold/20 text-gold" : "text-white"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-5" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
