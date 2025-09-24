// ui/components/SuggestedCopyPage.tsx
import React from "react";

interface SuggestedCopyPageProps {
  generatedCopy: string;
  onMakeChanges: () => void;
  onApply: () => void;
  onStartOver: () => void;
}

export const SuggestedCopyPage: React.FC<SuggestedCopyPageProps> = ({
  generatedCopy,
  onMakeChanges,
  onApply,
  onStartOver,
}) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="bg-blue-100 p-4 rounded-md text-gray-700">
        {generatedCopy || "Your suggested copy will appear here."}
      </div>

      <div className="flex gap-2">
        <button
          className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
          onClick={onStartOver}
        >
          Start over
        </button>
        <button
          className="px-4 py-2 border rounded-md text-white bg-instaffo-purple hover:bg-instaffo-purple-hover"
          onClick={onApply}
        >
          Apply
        </button>
        <button
          className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
          onClick={onMakeChanges}
        >
          Make changes
        </button>
      </div>
    </div>
  );
};
