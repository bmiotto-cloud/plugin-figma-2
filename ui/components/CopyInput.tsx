import React from "react";

interface CopyInputProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const CopyInput: React.FC<CopyInputProps> = ({
  value,
  placeholder = "Enter your copy here...",
  onChange,
  disabled = false,
}) => {
  return (
    <textarea
      className={`
        w-full h-40 p-3 rounded-md border border-gray-200
        text-sm text-gray-700 font-normal
        resize-none overflow-clip
        focus:outline-none focus:ring-2 focus:ring-instaffo-purple
        ${disabled ? "cursor-not-allowed bg-gray-100 text-gray-500" : "bg-white"}
      `}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
    />
  );
};
