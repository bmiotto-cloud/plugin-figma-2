import React, { useEffect, useState } from "react";

import { NewCopyTab } from "./components/NewCopyTab";
import { PlaceholdersTab } from "./components/PlaceholdersTab";
import { SuggestedCopyPage } from "./components/SuggestedCopyPage";
import { AdvancedSettings } from "./components/AdvancedSettings";
import { FigmaPluginApp } from "./components/FigmaPluginApp";


import "./styles.css";

type Tab = "new" | "placeholders" | "suggested" | "settings";

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<Tab>("new");
  const [selectedText, setSelectedText] = useState<string>("");

  // Listen for messages from code.ts
  useEffect(() => {
    window.onmessage = (event: MessageEvent) => {
      const msg = event.data.pluginMessage;
      if (msg.type === "selected-text") {
        setSelectedText(msg.text);
      }
    };

    // Request selection text from Figma
    parent.postMessage({ pluginMessage: { type: "get-selection" } }, "*");
  }, []);

  const renderTab = () => {
    switch (currentTab) {
      case "new":
        return <NewCopyTab selectedText={selectedText} />;
      case "placeholders":
        return <PlaceholdersTab />;
      case "suggested":
        return <SuggestedCopyPage />;
      case "settings":
        return <AdvancedSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col w-full h-full p-4 bg-white">
      {/* Tab Navigation */}
      <div className="flex justify-between mb-4 border-b border-gray-200 pb-2">
        <button
          className={`px-2 py-1 rounded-md ${
            currentTab === "new" ? "instaffo-purple text-white" : "text-gray-700 hover:bg-gray-50"
          }`}
          onClick={() => setCurrentTab("new")}
        >
          New Copy
        </button>
        <button
          className={`px-2 py-1 rounded-md ${
            currentTab === "placeholders"
              ? "instaffo-purple text-white"
              : "text-gray-700 hover:bg-gray-50"
          }`}
          onClick={() => setCurrentTab("placeholders")}
        >
          Placeholders
        </button>
        <button
          className={`px-2 py-1 rounded-md ${
            currentTab === "suggested"
              ? "instaffo-purple text-white"
              : "text-gray-700 hover:bg-gray-50"
          }`}
          onClick={() => setCurrentTab("suggested")}
        >
          Suggested
        </button>
        <button
          className={`px-2 py-1 rounded-md ${
            currentTab === "settings"
              ? "instaffo-purple text-white"
              : "text-gray-700 hover:bg-gray-50"
          }`}
          onClick={() => setCurrentTab("settings")}
        >
          Settings
        </button>
      </div>

      {/* Active Tab */}
      <div className="flex-grow overflow-auto">{renderTab()}</div>
    </div>
  );
};

export default App;