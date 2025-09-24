import { useState } from "react";
import svgPaths from "../imports/svg-ogy1mjrxa2";

function OutlinedAdd({ color = "#3E4242" }: { color?: string }) {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Outlined / add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Outlined / add">
          <path d={svgPaths.p20317100 || "M9.37502 10.625H5.20835C5.03127 10.625 4.88283 10.5651 4.76304 10.4452C4.64325 10.3254 4.58335 10.1769 4.58335 9.99973C4.58335 9.82256 4.64325 9.67415 4.76304 9.5545C4.88283 9.43485 5.03127 9.37502 5.20835 9.37502H9.37502V5.20835C9.37502 5.03127 9.43494 4.88283 9.55477 4.76304C9.67462 4.64325 9.82312 4.58335 10.0003 4.58335C10.1774 4.58335 10.3258 4.64325 10.4455 4.76304C10.5652 4.88283 10.625 5.03127 10.625 5.20835V9.37502H14.7916C14.9687 9.37502 15.1172 9.43494 15.237 9.55477C15.3567 9.67462 15.4166 9.82312 15.4166 10.0003C15.4166 10.1774 15.3567 10.3258 15.237 10.4455C15.1172 10.5652 14.9687 10.625 14.7916 10.625H10.625V14.7916C10.625 14.9687 10.5651 15.1172 10.4452 15.237C10.3254 15.3567 10.1769 15.4166 9.99973 15.4166C9.82256 15.4166 9.67415 15.3567 9.5545 15.237C9.43485 15.1172 9.37502 14.9687 9.37502 14.7916V10.625Z"} fill={color} id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="bg-[#5e2f82] content-stretch flex items-center justify-center overflow-clip relative rounded-[128px] shrink-0 size-[32px]" data-name="Icon Button">
      <OutlinedAdd color="#F5F5F7" />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',_sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#3e4242] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Select placeholder</p>
      </div>
      <IconButton />
    </div>
  );
}

function IconBox() {
  return (
    <div className="bg-[#e6e0ff] box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative rounded-[20px] shrink-0" data-name="IconBox">
      <OutlinedAdd />
    </div>
  );
}

function Check({ isSelected }: { isSelected: boolean }) {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="check" opacity={isSelected ? "1" : "0"}>
          <mask height="24" id="mask0_7_3886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_7_3886)">
            <path d={svgPaths.p217bb200 || "M9.55 18L3.85 12.3L5.275 10.875L9.55 15.15L18.725 5.975L20.15 7.4L9.55 18Z"} fill="var(--fill-0, #5E2F82)" id="check_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function PlaceholderOption({ 
  name, 
  isSelected, 
  onSelect 
}: { 
  name: string; 
  isSelected: boolean; 
  onSelect: () => void; 
}) {
  return (
    <button
      onClick={onSelect}
      className="bg-white box-border content-stretch flex flex-col gap-[4px] items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-full hover:bg-gray-50 transition-colors"
      data-name="Block button"
    >
      <div aria-hidden="true" className="absolute border border-[#d3d4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
        <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
          <IconBox />
          <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Aeonik_Pro:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#222222] text-[18px] text-nowrap">
              <p className="leading-[24px] whitespace-pre">{name}</p>
            </div>
          </div>
        </div>
        <Check isSelected={isSelected} />
      </div>
    </button>
  );
}

function PlaceholdersList({ 
  selectedPlaceholder, 
  onPlaceholderSelect 
}: { 
  selectedPlaceholder: string | null; 
  onPlaceholderSelect: (placeholder: string) => void; 
}) {
  const placeholders = [
    "Benefit",
    "City", 
    "Company name",
    "Job title",
    "Job role",
    "Job category",
    "Language skills",
    "Person name",
    "Phone number",
    "Salary",
    "Seniority",
    "Skill",
    "Telephone number",
    "Work mode"
  ];

  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[320px] items-start overflow-y-auto relative shrink-0 w-full">
      {placeholders.map((placeholder) => (
        <PlaceholderOption
          key={placeholder}
          name={placeholder}
          isSelected={selectedPlaceholder === placeholder}
          onSelect={() => onPlaceholderSelect(placeholder)}
        />
      ))}
    </div>
  );
}

function ActionButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors"
      data-name="Action Button"
    >
      <div className="font-['Aeonik_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#5e2f82] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">{children}</p>
      </div>
    </button>
  );
}

function ActionButton1({ onClick, disabled, children }: { onClick: () => void; disabled?: boolean; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[8px] shrink-0 transition-colors ${
        disabled 
          ? 'bg-gray-400 cursor-not-allowed' 
          : 'bg-[#5e2f82] hover:bg-[#4a2466]'
      }`}
      data-name="Action Button"
    >
      <div className="font-['Aeonik_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[20px] whitespace-pre">{children}</p>
      </div>
    </button>
  );
}

function BottomActions({ 
  onCancel, 
  onInclude, 
  hasSelection 
}: { 
  onCancel: () => void; 
  onInclude: () => void; 
  hasSelection: boolean; 
}) {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d3d4d6] border-solid inset-[-1px] pointer-events-none" />
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end p-[16px] relative w-full">
          <ActionButton onClick={onCancel}>Cancel</ActionButton>
          <ActionButton1 onClick={onInclude} disabled={!hasSelection}>Include</ActionButton1>
        </div>
      </div>
    </div>
  );
}

interface PlaceholdersTabProps {
  onCancel: () => void;
  onInclude: (placeholder: string) => void;
}

export function PlaceholdersTab({ onCancel, onInclude }: PlaceholdersTabProps) {
  const [selectedPlaceholder, setSelectedPlaceholder] = useState<string | null>(null);

  const handleInclude = () => {
    if (selectedPlaceholder) {
      onInclude(selectedPlaceholder);
    }
  };

  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Header />
          <PlaceholdersList 
            selectedPlaceholder={selectedPlaceholder}
            onPlaceholderSelect={setSelectedPlaceholder}
          />
        </div>
      </div>
      <BottomActions 
        onCancel={onCancel}
        onInclude={handleInclude}
        hasSelection={!!selectedPlaceholder}
      />
    </div>
  );
}