import { useState } from "react";
import { AdvancedSettings, AdvancedSettingsState } from "./AdvancedSettings";
import { PlaceholdersTab } from "./PlaceholdersTab";
import { SuggestedCopyPage } from "./SuggestedCopyPage";
import { EmptyState } from "./EmptyState";

const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
const publicAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;


function OutlinedClose({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="relative shrink-0 size-[24px] hover:opacity-70 transition-opacity" 
      data-name="Outlined / close"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Outlined / close">
          <path d={svgPaths.p2e270200} fill="var(--fill-0, #3E4242)" id="vector" />
        </g>
      </svg>
    </button>
  );
}

function Frame4({ onClose }: { onClose: () => void }) {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d3d4d6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[16px] relative w-full">
          <div className="font-['Aeonik_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[18px] text-black text-center text-nowrap">
            <p className="leading-[24px] whitespace-pre">Instaffo copywriter</p>
          </div>
          <OutlinedClose onClick={onClose} />
        </div>
      </div>
    </div>
  );
}

function Tab1({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="box-border content-stretch flex gap-[8px] items-center pb-[12px] pt-0 px-0 relative shrink-0" 
      data-name="Tab 1"
    >
      <div className={`font-['Aeonik_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-center w-[69px] ${
        isActive ? 'text-[#3e4242]' : 'text-[#7a7c84]'
      }`}>
        <p className="leading-[20px]">New copy</p>
      </div>
      {isActive && (
        <div className="absolute bottom-[2px] h-0 left-0 right-0">
          <div className="absolute inset-[-2px_-2.9%]" style={{ "--stroke-0": "rgba(94, 47, 130, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73 4">
              <path d="M2 2H71" id="Line 1" stroke="var(--stroke-0, #5E2F82)" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      )}
    </button>
  );
}

function Tab2({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="box-border content-stretch flex gap-[8px] items-center pb-[12px] pt-0 px-0 relative shrink-0" 
      data-name="Tab 2"
    >
      <div className={`font-['Aeonik_Pro:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-center text-nowrap ${
        isActive ? 'text-[#3e4242]' : 'text-[#7a7c84]'
      }`}>
        <p className="leading-[20px] whitespace-pre">Placeholders</p>
      </div>
      {isActive && (
        <div className="absolute bottom-[2px] h-0 left-0 right-0">
          <div className="absolute inset-[-2px_-2.9%]" style={{ "--stroke-0": "rgba(94, 47, 130, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 4">
              <path d="M2 2H88" id="Line 1" stroke="var(--stroke-0, #5E2F82)" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      )}
    </button>
  );
}

function Tabs({ activeTab, onTabChange }: { activeTab: 'new' | 'placeholders'; onTabChange: (tab: 'new' | 'placeholders') => void }) {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Tabs">
      <Tab1 isActive={activeTab === 'new'} onClick={() => onTabChange('new')} />
      <Tab2 isActive={activeTab === 'placeholders'} onClick={() => onTabChange('placeholders')} />
    </div>
  );
}

function Frame7({ activeTab, onTabChange }: { activeTab: 'new' | 'placeholders'; onTabChange: (tab: 'new' | 'placeholders') => void }) {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d3d4d6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[16px] relative w-full">
          <Tabs activeTab={activeTab} onTabChange={onTabChange} />
        </div>
      </div>
    </div>
  );
}

function Label({ hasSelectedText }: { hasSelectedText: boolean }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name=".Label">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',_sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#3e4242] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Selected copy</p>
      </div>
      {hasSelectedText && (
        <div className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
          Auto-filled
        </div>
      )}
    </div>
  );
}

function Field({ value, onChange, placeholder }: { value: string; onChange: (value: string) => void; placeholder: string }) {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="Field">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start pb-0 pt-[8px] px-[8px] relative size-full">
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="basis-0 flex flex-col font-['Aeonik_Pro:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-[100px] min-w-px overflow-ellipsis resize-none border-none outline-none bg-transparent relative shrink-0 text-[#3e4242] text-[14px] placeholder:text-[#7a7c84]"
            style={{ lineHeight: '20px' }}
          />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#7a7c84] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Textarea({ value, onChange, placeholder, hasSelectedText }: { 
  value: string; 
  onChange: (value: string) => void; 
  placeholder: string;
  hasSelectedText: boolean;
}) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Textarea">
      <Label hasSelectedText={hasSelectedText} />
      <Field value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
}

function Frame8({ activeTab, copyText, setCopyText, hasSelectedText }: { 
  activeTab: 'new' | 'placeholders'; 
  copyText: string; 
  setCopyText: (text: string) => void;
  hasSelectedText: boolean;
}) {
  const placeholder = activeTab === 'new' 
    ? "Enter the copy you want to improve..." 
    : "Enter text with placeholders like {{name}}, {{company}}...";

  return (
    <div className="h-[152px] relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[152px] items-center px-[16px] py-[8px] relative w-full">
          <Textarea 
            value={copyText} 
            onChange={setCopyText} 
            placeholder={placeholder}
            hasSelectedText={hasSelectedText}
          />
        </div>
      </div>
    </div>
  );
}

function Toggle01Active({ isActive }: { isActive: boolean }) {
  return (
    <div className="absolute inset-0" data-name="Toggle/01 Active">
      <div className={`absolute h-[24px] left-0 rounded-[1000px] top-0 w-[50px] transition-colors ${
        isActive ? 'bg-[#5e2f82]' : 'bg-[#d3d4d6]'
      }`} data-name="Base" />
      <div className={`absolute size-[20px] top-[2px] transition-transform ${
        isActive ? 'left-[28px]' : 'left-[2px]'
      }`} data-name="dot">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path clipRule="evenodd" d={svgPaths.p2bf8fb00} fill="var(--fill-0, white)" fillRule="evenodd" id="dot" />
        </svg>
      </div>
    </div>
  );
}

function Toggle({ isActive, onToggle }: { isActive: boolean; onToggle: () => void }) {
  return (
    <button 
      onClick={onToggle}
      className="h-[24px] relative shrink-0 w-[50px]" 
      data-name="Toggle"
    >
      <Toggle01Active isActive={isActive} />
    </button>
  );
}

function Frame6({ translateToGerman, setTranslateToGerman }: { 
  translateToGerman: boolean; 
  setTranslateToGerman: (value: boolean) => void; 
}) {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Toggle isActive={translateToGerman} onToggle={() => setTranslateToGerman(!translateToGerman)} />
      <div className="font-['Aeonik_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#3e4242] text-[16px] text-center text-nowrap">
        <p className="leading-[24px] whitespace-pre">Translate to German</p>
      </div>
    </div>
  );
}

function Frame5({ translateToGerman, setTranslateToGerman }: { 
  translateToGerman: boolean; 
  setTranslateToGerman: (value: boolean) => void; 
}) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[16px] py-0 relative w-full">
          <Frame6 translateToGerman={translateToGerman} setTranslateToGerman={setTranslateToGerman} />
        </div>
      </div>
    </div>
  );
}

function OutlinedSettings() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Outlined / settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Outlined / settings">
          <path d={svgPaths.p371f2000} fill="var(--fill-0, #5E2F82)" id="vector" />
        </g>
      </svg>
    </div>
  );
}



function ActionButton({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors" 
      data-name="Action Button"
    >
      <div className="font-['Aeonik_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#5e2f82] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Cancel</p>
      </div>
    </button>
  );
}

function ActionButton1({ onClick, disabled, isGenerating }: { onClick: () => void; disabled: boolean; isGenerating: boolean }) {
  return (
    <button 
      onClick={onClick}
      disabled={disabled || isGenerating}
      className={`box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[8px] shrink-0 transition-colors ${
        disabled || isGenerating
          ? 'bg-gray-400 cursor-not-allowed' 
          : 'bg-[#5e2f82] hover:bg-[#4a2466]'
      }`}
      data-name="Action Button"
    >
      <div className="font-['Aeonik_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[20px] whitespace-pre">
          {isGenerating ? 'Generating...' : 'Suggest copy'}
        </p>
      </div>
    </button>
  );
}

function Frame10({ onCancel, onSuggestCopy, disabled, isGenerating }: { 
  onCancel: () => void; 
  onSuggestCopy: () => void; 
  disabled: boolean;
  isGenerating: boolean;
}) {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d3d4d6] border-solid inset-[-1px] pointer-events-none" />
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end p-[16px] relative w-full">
          <ActionButton onClick={onCancel} />
          <ActionButton1 onClick={onSuggestCopy} disabled={disabled} isGenerating={isGenerating} />
        </div>
      </div>
    </div>
  );
}

interface CopywriterPluginProps {
  onClose?: () => void;
  initialText?: string;
  onApplyText?: (text: string) => void;
}

export function CopywriterPlugin({ onClose, initialText = '', onApplyText }: CopywriterPluginProps) {
  const [currentPage, setCurrentPage] = useState<'input' | 'results'>('input');
  const [suggestedCopy, setSuggestedCopy] = useState('');
  const [activeTab, setActiveTab] = useState<'new' | 'placeholders'>(() => {
    // Auto-detect if initial text contains placeholders
    return initialText.includes('{{') && initialText.includes('}}') ? 'placeholders' : 'new';
  });
  const [copyText, setCopyText] = useState(initialText);
  const [translateToGerman, setTranslateToGerman] = useState(false);
  const [advancedSettingsExpanded, setAdvancedSettingsExpanded] = useState(false);
  const [advancedSettings, setAdvancedSettings] = useState<AdvancedSettingsState>({
    tone: 'regular',
    length: 'same',
    customer: null
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [forceShowMain, setForceShowMain] = useState(false);
  const hasSelectedText = Boolean(initialText.trim());

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      // If no close handler, reset the form
      setCopyText('');
      setActiveTab('new');
      setTranslateToGerman(true);
    }
  };

  const handleAdvancedSettingsToggle = () => {
    setAdvancedSettingsExpanded(!advancedSettingsExpanded);
  };

  const handleSuggestCopy = async (changeRequest?: string) => {
    if (!copyText.trim()) return;
    
    setIsGenerating(true);
    
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-1d4ca023/generate-copy`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({
          originalCopy: copyText,
          advancedSettings,
          translateToGerman,
          changeRequest
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate copy suggestions');
      }

      const data = await response.json();
      setSuggestedCopy(data.suggestedCopy);
      setCurrentPage('results');
      
    } catch (error) {
      console.error('Copy generation error:', error);
      // Fallback to a simple mock if API fails
      setSuggestedCopy(generateFallbackCopy(copyText, advancedSettings, translateToGerman));
      setCurrentPage('results');
    } finally {
      setIsGenerating(false);
    }
  };

  // Fallback function in case API fails
  const generateFallbackCopy = (text: string, settings: AdvancedSettingsState, german: boolean): string => {
    let suggestion = text;
    
    if (settings.tone === 'casual') {
      suggestion = suggestion.replace(/\./g, '!');
    } else if (settings.tone === 'professional') {
      suggestion = suggestion.replace(/!/g, '.');
    }
    
    if (german) {
      suggestion = "Verbesserte deutsche Version: " + suggestion;
    }
    
    return suggestion;
  };

  const handleMakeChanges = () => {
    setCurrentPage('input');
  };

  const handleStartOver = () => {
    setCopyText('');
    setActiveTab('new');
    setCurrentPage('input');
  };

  const handleApply = (changeRequest?: string) => {
    if (changeRequest) {
      // Generate new copy based on the change request
      handleSuggestCopy(changeRequest);
    } else {
      // Apply the suggested copy to Figma
      if (onApplyText) {
        onApplyText(suggestedCopy);
      }
      handleClose();
    }
  };

  if (currentPage === 'results') {
    return (
      <SuggestedCopyPage
        suggestedCopy={suggestedCopy}
        onClose={handleClose}
        onMakeChanges={handleMakeChanges}
        onStartOver={handleStartOver}
        onApply={handleApply}
      />
    );
  }

  // Show empty state if no text is selected AND no text has been manually entered AND not forced to show main
  if (!hasSelectedText && !copyText.trim() && !forceShowMain) {
    return (
      <EmptyState
        onClose={handleClose}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onStartManually={() => {
          setForceShowMain(true);
        }}
      />
    );
  }

  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[16px] size-full shadow-lg" data-name="Radio Button">
      <Frame4 onClose={handleClose} />
      <Frame7 activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === 'new' ? (
        <>
          <Frame8 
            activeTab={activeTab} 
            copyText={copyText} 
            setCopyText={setCopyText} 
            hasSelectedText={hasSelectedText} 
          />
          <Frame5 translateToGerman={translateToGerman} setTranslateToGerman={setTranslateToGerman} />
          <AdvancedSettings 
            isExpanded={advancedSettingsExpanded}
            onToggle={handleAdvancedSettingsToggle}
            settings={advancedSettings}
            onSettingsChange={setAdvancedSettings}
          />
        </>
      ) : (
        <PlaceholdersTab 
          onCancel={() => setActiveTab('new')}
          onInclude={(placeholder) => {
            // Apply the selected placeholder
            alert(`Applied placeholder: {{${placeholder.toLowerCase().replace(/\s+/g, '_')}}}`);
            handleClose();
          }}
        />
      )}
      {activeTab === 'new' && (
        <Frame10 
          onCancel={handleClose} 
          onSuggestCopy={() => handleSuggestCopy()} 
          disabled={!copyText.trim()} 
          isGenerating={isGenerating}
        />
      )}
    </div>
  );
}