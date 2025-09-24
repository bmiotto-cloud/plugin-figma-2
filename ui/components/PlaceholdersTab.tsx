// ui/components/PlaceholdersTab.tsx
import React from "react";

interface PlaceholdersTabProps {
  selectedPlaceholders: string[];
  onSelect: (placeholders: string[]) => void;
}

export const PlaceholdersTab: React.FC<PlaceholdersTabProps> = ({
  selectedPlaceholders,
  onSelect,
}) => {
  // Example placeholder list
  const available = ["{{name}}", "{{company}}", "{{jobTitle}}"];

  const handleClick = (ph: string) => {
    onSelect([ph]); // single selection
  };

  return (
    <div className="flex flex-col gap-2">
      {available.map((ph) => (
        <button
          key={ph}
          className={`p-2 border rounded-md text-sm ${
            selectedPlaceholders.includes(ph)
              ? "bg-instaffo-purple text-white"
              : "bg-gray-100 text-gray-700"
          }`}
          onClick={() => handleClick(ph)}
        >
          {ph}
        </button>
      ))}
    </div>
  );
};
