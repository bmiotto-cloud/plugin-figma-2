
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

function Frame5({ activeTab, onTabChange }: { activeTab: 'new' | 'placeholders'; onTabChange: (tab: 'new' | 'placeholders') => void }) {
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

function ArrowSelectorTool() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_selector_tool">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_selector_tool">
          <mask height="24" id="mask0_14_8434" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_14_8434)">
            <path d={svgPaths.p3e84ee80} fill="var(--fill-0, #7A7C84)" id="arrow_selector_tool_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame8({ onStartManually }: { onStartManually: () => void }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[32px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d3d4d6] border-dashed inset-0 pointer-events-none rounded-[8px]" />
      <ArrowSelectorTool />
      <div className="flex flex-col font-['Aeonik_Pro:Regular',_sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#7a7c84] text-[14px] text-center">
        <p className="leading-[20px] whitespace-pre">Select a text frame to start</p>
        <p className="leading-[16px] text-[12px] mt-2">or</p>
      </div>
      <button
        onClick={onStartManually}
        className="mt-2 px-4 py-2 instaffo-purple text-white text-xs rounded-md instaffo-purple-hover transition-colors"
      >
        Enter text manually
      </button>
    </div>
  );
}

function Frame6({ onStartManually }: { onStartManually: () => void }) {
  return (
    <div className="h-[180px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[180px] items-center justify-center px-[16px] py-[64px] relative w-full">
          <Frame8 onStartManually={onStartManually} />
        </div>
      </div>
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

function ActionButton1() {
  return (
    <div className="bg-[#f5f5f7] box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[8px] shrink-0 cursor-not-allowed" data-name="Action Button">
      <div className="font-['Aeonik_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#7a7c84] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Suggest copy</p>
      </div>
    </div>
  );
}

function Frame7({ onCancel }: { onCancel: () => void }) {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d3d4d6] border-solid inset-[-1px] pointer-events-none" />
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end p-[16px] relative w-full">
          <ActionButton onClick={onCancel} />
          <ActionButton1 />
        </div>
      </div>
    </div>
  );
}

interface EmptyStateProps {
  onClose: () => void;
  activeTab: 'new' | 'placeholders';
  onTabChange: (tab: 'new' | 'placeholders') => void;
  onStartManually?: () => void;
}

export function EmptyState({ onClose, activeTab, onTabChange, onStartManually }: EmptyStateProps) {
  const handleStartManually = () => {
    if (onStartManually) {
      onStartManually();
    }
  };

  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[16px] size-full shadow-lg" data-name="Radio Button">
      <Frame4 onClose={onClose} />
      <Frame5 activeTab={activeTab} onTabChange={onTabChange} />
      <Frame6 onStartManually={handleStartManually} />
      <Frame7 onCancel={onClose} />
    </div>
  );
}