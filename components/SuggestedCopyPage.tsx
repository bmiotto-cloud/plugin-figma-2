import { useState } from "react";
import svgPaths from "../imports/svg-gq47q686f5";

function OutlinedClose({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="relative shrink-0 size-[24px]" data-name="Outlined / close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Outlined / close">
          <path d={svgPaths.p2e270200 || "M12 13.0537L6.927 18.127C6.7885 18.2653 6.61442 18.3362 6.40475 18.3395C6.19525 18.3427 6.018 18.2718 5.873 18.127C5.72817 17.982 5.65575 17.8063 5.65575 17.6C5.65575 17.3937 5.72817 17.218 5.873 17.073L10.9462 12L5.873 6.927C5.73467 6.7885 5.66383 6.61442 5.6605 6.40475C5.65733 6.19525 5.72817 6.018 5.873 5.873C6.018 5.72817 6.19367 5.65575 6.4 5.65575C6.60633 5.65575 6.782 5.72817 6.927 5.873L12 10.9462L17.073 5.873C17.2115 5.73467 17.3856 5.66383 17.5953 5.6605C17.8048 5.65733 17.982 5.72817 18.127 5.873C18.2718 6.018 18.3443 6.19367 18.3443 6.4C18.3443 6.60633 18.3443 6.782 18.127 6.927L13.0538 12L18.127 17.073C18.2653 17.2115 18.3362 17.3856 18.3395 17.5953C18.3427 17.8048 18.2718 17.982 18.127 18.127C17.982 18.2718 17.8063 18.3443 17.6 18.3443C17.3937 18.3443 17.218 18.2718 17.073 18.127L12 13.0537Z"} fill="var(--fill-0, #3E4242)" id="vector" />
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

function Tab1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center pb-[12px] pt-0 px-0 relative shrink-0" data-name="Tab 1">
      <div className="font-['Aeonik_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#3e4242] text-[14px] text-center w-[69px]">
        <p className="leading-[20px]">New copy</p>
      </div>
      <div className="absolute bottom-[2px] h-0 left-0 right-0">
        <div className="absolute inset-[-2px_-2.9%]" style={{ "--stroke-0": "rgba(94, 47, 130, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73 4">
            <path d="M2 2H71" id="Line 1" stroke="var(--stroke-0, #5E2F82)" strokeLinecap="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Tab2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center pb-[12px] pt-0 px-0 relative shrink-0" data-name="Tab 2">
      <div className="font-['Aeonik_Pro:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#7a7c84] text-[14px] text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">Placeholders</p>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Tabs">
      <Tab1 />
      <Tab2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d3d4d6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[16px] relative w-full">
          <Tabs />
        </div>
      </div>
    </div>
  );
}

function OutlinedSparklesRegular() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Outlined / sparkles-regular">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Outlined / sparkles-regular">
          <path d={svgPaths.p389658f0 || "M12.2787 4.55665C12.1353 4.61083 12.0397 4.74787 12.0397 4.90085C12.0397 5.05382 12.1353 5.19086 12.2787 5.24504L14.0794 5.92068L14.755 7.72131C14.8092 7.86473 14.9462 7.96034 15.0992 7.96034C15.2522 7.96034 15.3892 7.86473 15.4434 7.72131L16.119 5.92068L17.9197 5.24504C18.0631 5.19086 18.1587 5.05382 18.1587 4.90085C18.1587 4.74787 18.0631 4.61083 17.9197 4.55665L16.119 3.88102L15.4434 2.08038C15.3892 1.93697 15.2522 1.84136 15.0992 1.84136C14.9462 1.84136 14.8092 1.93697 14.755 2.08038L14.0794 3.88102L12.2787 4.55665Z"} fill="var(--fill-0, #003964)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconBox() {
  return (
    <div className="bg-[#dbf0ff] box-border content-stretch flex gap-[8px] items-center justify-center p-[6.4px] relative rounded-[20px] shrink-0 size-[32px]" data-name="IconBox">
      <OutlinedSparklesRegular />
    </div>
  );
}

function Frame5({ suggestedCopy }: { suggestedCopy: string }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Aeonik_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#003964] text-[14px] w-full">
        <p className="leading-[20px]">{suggestedCopy}</p>
      </div>
    </div>
  );
}

function Frame14({ suggestedCopy }: { suggestedCopy: string }) {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <IconBox />
      <Frame5 suggestedCopy={suggestedCopy} />
    </div>
  );
}

function Frame49796({ suggestedCopy }: { suggestedCopy: string }) {
  return (
    <div className="bg-[rgba(219,240,255,0.5)] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center relative">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[16px] relative w-full">
          <Frame14 suggestedCopy={suggestedCopy} />
        </div>
      </div>
    </div>
  );
}

function OutlinedEdit() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Outlined / edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Outlined / edit">
          <path d={svgPaths.p33403480 || "M4.16667 15.8333H5.21794L13.7484 7.30285L12.6971 6.25158L4.16667 14.7821V15.8333ZM3.6699 17.0833C3.45649 17.0833 3.27761 17.0111 3.13325 16.8668C2.98887 16.7224 2.91669 16.5435 2.91669 16.3301V14.8862C2.91669 14.683 2.95569 14.4893 3.03369 14.3051C3.11167 14.121 3.21904 13.9605 3.35579 13.8238L13.9087 3.27567C14.0347 3.16121 14.1738 3.07276 14.3261 3.01033C14.4784 2.9479 14.638 2.91669 14.8051 2.91669C14.9722 2.91669 15.1341 2.94634 15.2907 3.00565C15.4473 3.06494 15.586 3.15921 15.7067 3.28848L16.7243 4.31892C16.8536 4.43964 16.9458 4.57856 17.0008 4.73567C17.0558 4.89276 17.0833 5.04986 17.0833 5.20696C17.0833 5.37453 17.0547 5.53444 16.9975 5.68671C16.9402 5.83899 16.8492 5.97813 16.7243 6.10415L6.17625 16.6442C6.0395 16.781 5.87904 16.8883 5.69488 16.9663C5.51069 17.0443 5.31699 17.0833 5.11377 17.0833H3.6699ZM13.2136 6.78644L12.6971 6.25158L13.7484 7.30285L13.2136 6.78644Z"} fill="var(--fill-0, #5E2F82)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function PlainButton({ onMakeChanges }: { onMakeChanges: () => void }) {
  return (
    <button
      onClick={onMakeChanges}
      className="content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors" 
      data-name="Plain Button"
    >
      <OutlinedEdit />
      <div className="font-['Aeonik_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#5e2f82] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Make changes</p>
      </div>
    </button>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name=".Label">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',_sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#3e4242] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Make changes</p>
      </div>
    </div>
  );
}

function Field({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="Field">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start pb-0 pt-[8px] px-[8px] relative size-full">
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Enter changes description..."
            className="basis-0 flex flex-col font-['Aeonik_Pro:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-[100px] min-w-px overflow-ellipsis resize-none border-none outline-none bg-transparent relative shrink-0 text-[#3e4242] text-[14px] placeholder:text-[#7a7c84]"
            style={{ lineHeight: '20px' }}
          />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#7a7c84] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Textarea({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Textarea">
      <Label />
      <Field value={value} onChange={onChange} />
    </div>
  );
}

function Frame7({ changesText, onChangesTextChange }: { changesText: string; onChangesTextChange: (text: string) => void }) {
  return (
    <div className="h-[152px] relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[152px] items-center py-[8px] relative w-full">
          <Textarea value={changesText} onChange={onChangesTextChange} />
        </div>
      </div>
    </div>
  );
}

function Frame192({ suggestedCopy, onMakeChanges, showChangesInput, changesText, onChangesTextChange }: { 
  suggestedCopy: string; 
  onMakeChanges: () => void; 
  showChangesInput: boolean;
  changesText: string;
  onChangesTextChange: (text: string) => void;
}) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[16px] py-0 relative w-full">
          <div className="flex flex-col font-['Aeonik_Pro:Medium',_sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#3e4242] text-[16px] text-nowrap">
            <p className="leading-[24px] whitespace-pre">Suggested copy</p>
          </div>
          <Frame49796 suggestedCopy={suggestedCopy} />
          {!showChangesInput ? (
            <PlainButton onMakeChanges={onMakeChanges} />
          ) : (
            <Frame7 changesText={changesText} onChangesTextChange={onChangesTextChange} />
          )}
        </div>
      </div>
    </div>
  );
}

function LeadingIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Leading Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Leading Icon">
          <mask height="24" id="mask0_8_5867" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_8_5867)">
            <path d={svgPaths.p3961b3f0 || "M5.75 12.0692C5.75 12.8506 5.89792 13.6102 6.19375 14.348C6.48942 15.0858 6.9505 15.7672 7.577 16.3922L8.2115 17.027V15.0385C8.2115 14.826 8.28342 14.6478 8.42725 14.504C8.57108 14.3603 8.74925 14.2885 8.96175 14.2885C9.17442 14.2885 9.35258 14.3603 9.49625 14.504C9.63975 14.6478 9.7115 14.826 9.7115 15.0385V18.7693C9.7115 19.0253 9.62492 19.2399 9.45175 19.4132C9.27842 19.5864 9.06375 19.673 8.80775 19.673H5.077C4.8645 19.673 4.68633 19.6011 4.5425 19.4572C4.39883 19.3134 4.327 19.1352 4.327 18.9227C4.327 18.7101 4.39883 18.532 4.5425 18.3885C4.68633 18.2448 4.8645 18.173 5.077 18.173H7.25L6.523 17.477C5.70133 16.7167 5.11708 15.865 4.77025 14.922C4.42342 13.9792 4.25 13.0282 4.25 12.0692C4.25 10.5602 4.63717 9.18592 5.4115 7.94625C6.18583 6.70642 7.22558 5.75125 8.53075 5.08075C8.71275 4.97942 8.90408 4.96792 9.10475 5.04625C9.30542 5.12442 9.43783 5.26375 9.502 5.46425C9.566 5.65225 9.56208 5.84208 9.49025 6.03375C9.41825 6.22558 9.29075 6.37267 9.10775 6.475C8.08342 7.0275 7.26767 7.79958 6.6605 8.79125C6.0535 9.78308 5.75 10.8757 5.75 12.0692Z"} fill="var(--fill-0, #5E2F82)" id="vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ActionButton({ onStartOver }: { onStartOver: () => void }) {
  return (
    <button
      onClick={onStartOver}
      className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors" 
      data-name="Action Button"
    >
      <LeadingIcon />
      <div className="font-['Aeonik_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#5e2f82] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Start over</p>
      </div>
    </button>
  );
}

function ActionButton1({ onApply, showChangesInput, changesText }: { onApply: () => void; showChangesInput: boolean; changesText: string }) {
  const buttonText = showChangesInput && changesText.trim() ? 'Generate new copy' : 'Apply';
  
  return (
    <button
      onClick={onApply}
      className="bg-[#5e2f82] box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[8px] shrink-0 hover:bg-[#4a2466] transition-colors" 
      data-name="Action Button"
    >
      <div className="font-['Aeonik_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[20px] whitespace-pre">{buttonText}</p>
      </div>
    </button>
  );
}

function Frame8({ onStartOver, onApply, showChangesInput, changesText }: { onStartOver: () => void; onApply: () => void; showChangesInput: boolean; changesText: string }) {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d3d4d6] border-solid inset-[-1px] pointer-events-none" />
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end p-[16px] relative w-full">
          <ActionButton onStartOver={onStartOver} />
          <ActionButton1 onApply={onApply} showChangesInput={showChangesInput} changesText={changesText} />
        </div>
      </div>
    </div>
  );
}

interface SuggestedCopyPageProps {
  suggestedCopy: string;
  onClose: () => void;
  onMakeChanges: () => void;
  onStartOver: () => void;
  onApply: (changeRequest?: string) => void;
}

export function SuggestedCopyPage({ 
  suggestedCopy, 
  onClose, 
  onMakeChanges, 
  onStartOver, 
  onApply 
}: SuggestedCopyPageProps) {
  const [showChangesInput, setShowChangesInput] = useState(false);
  const [changesText, setChangesText] = useState('');

  const handleMakeChanges = () => {
    setShowChangesInput(true);
    // onMakeChanges() - removed to prevent potential callback loop
  };

  const handleApply = () => {
    if (showChangesInput && changesText.trim()) {
      // Generate new copy based on changes
      onApply(changesText.trim());
    } else {
      // Apply current copy
      onApply();
    }
  };

  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[16px] size-full" data-name="Radio Button">
      <Frame4 onClose={onClose} />
      <Frame6 />
      <Frame192 
        suggestedCopy={suggestedCopy} 
        onMakeChanges={handleMakeChanges} 
        showChangesInput={showChangesInput}
        changesText={changesText}
        onChangesTextChange={setChangesText}
      />
      <Frame8 onStartOver={onStartOver} onApply={handleApply} showChangesInput={showChangesInput} changesText={changesText} />
    </div>
  );
}