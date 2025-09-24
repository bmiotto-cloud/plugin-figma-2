import { useState } from "react";

function OutlinedCheck() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Outlined / check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Outlined / check">
          <path d={svgPaths.p143da800} fill="var(--fill-0, #3E4242)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function OutlinedKeyboardArrowUp({ isExpanded }: { isExpanded: boolean }) {
  return (
    <div className={`relative shrink-0 size-[20px] transition-transform ${isExpanded ? '' : 'rotate-180'}`} data-name="Outlined / keyboard_arrow_up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Outlined / keyboard_arrow_up">
          <path d={svgPaths.p1ed2e600} fill="var(--fill-0, #5E2F82)" id="vector" />
        </g>
      </svg>
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

function ToneChip({ label, isSelected, onClick }: { label: string; isSelected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`box-border content-stretch flex h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[20px] shrink-0 transition-colors ${
        isSelected ? 'bg-[#e2bdff]' : 'bg-[#f5f5f7] hover:bg-[#eeeeee]'
      }`}
      data-name="Chip"
    >
      {isSelected && <OutlinedCheck />}
      <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0">
        <div className="font-['Aeonik_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#3e4242] text-[14px] text-nowrap">
          <p className="leading-[20px] whitespace-pre">{label}</p>
        </div>
      </div>
    </button>
  );
}

function LengthChip({ label, isSelected, onClick }: { label: string; isSelected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`box-border content-stretch flex h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[20px] shrink-0 transition-colors ${
        isSelected ? 'bg-[#e2bdff]' : 'bg-[#f5f5f7] hover:bg-[#eeeeee]'
      }`}
      data-name="Chip"
    >
      {isSelected && <OutlinedCheck />}
      <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0">
        <div className="font-['Aeonik_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#3e4242] text-[14px] text-nowrap">
          <p className="leading-[20px] whitespace-pre">{label}</p>
        </div>
      </div>
    </button>
  );
}

function CustomerChip({ label, isSelected, onClick }: { label: string; isSelected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`box-border content-stretch flex h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[20px] shrink-0 transition-colors ${
        isSelected ? 'bg-[#e2bdff]' : 'bg-[#f5f5f7] hover:bg-[#eeeeee]'
      }`}
      data-name="Chip"
    >
      {isSelected && <OutlinedCheck />}
      <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0">
        <div className="font-['Aeonik_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#3e4242] text-[14px] text-nowrap">
          <p className="leading-[20px] whitespace-pre">{label}</p>
        </div>
      </div>
    </button>
  );
}

export interface AdvancedSettingsState {
  tone: 'casual' | 'regular' | 'professional';
  length: 'shorter' | 'same' | 'longer';
  customer: 'b2b' | 'b2c' | null;
}

interface AdvancedSettingsProps {
  isExpanded: boolean;
  onToggle: () => void;
  settings: AdvancedSettingsState;
  onSettingsChange: (settings: AdvancedSettingsState) => void;
}

export function AdvancedSettings({ isExpanded, onToggle, settings, onSettingsChange }: AdvancedSettingsProps) {
  const handleToneChange = (tone: 'casual' | 'regular' | 'professional') => {
    onSettingsChange({ ...settings, tone });
  };

  const handleLengthChange = (length: 'shorter' | 'same' | 'longer') => {
    onSettingsChange({ ...settings, length });
  };

  const handleCustomerChange = (customer: 'b2b' | 'b2c') => {
    onSettingsChange({ 
      ...settings, 
      customer: settings.customer === customer ? null : customer 
    });
  };

  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[8px] relative w-full">
          {/* Advanced Settings Toggle Button */}
          <button 
            onClick={onToggle}
            className="content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[8px] shrink-0 hover:bg-gray-50 p-1 transition-colors" 
            data-name="Plain Button"
          >
            <OutlinedSettings />
            <div className="font-['Aeonik_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#5e2f82] text-[14px] text-nowrap">
              <p className="leading-[20px] whitespace-pre">Advanced settings</p>
            </div>
            <OutlinedKeyboardArrowUp isExpanded={isExpanded} />
          </button>

          {/* Expanded Settings */}
          {isExpanded && (
            <>
              {/* Tone Section */}
              <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-0 py-[8px] relative shrink-0">
                <div aria-hidden="true" className="absolute border-[#f5f5f7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                <div className="flex flex-col font-['Aeonik_Pro:Medium',_sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#3e4242] text-[16px] text-nowrap">
                  <p className="leading-[24px] whitespace-pre">Tone</p>
                </div>
                <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                  <ToneChip 
                    label="Casual" 
                    isSelected={settings.tone === 'casual'} 
                    onClick={() => handleToneChange('casual')} 
                  />
                  <ToneChip 
                    label="Regular" 
                    isSelected={settings.tone === 'regular'} 
                    onClick={() => handleToneChange('regular')} 
                  />
                  <ToneChip 
                    label="Professional" 
                    isSelected={settings.tone === 'professional'} 
                    onClick={() => handleToneChange('professional')} 
                  />
                </div>
              </div>

              {/* Length Section */}
              <div className="relative shrink-0">
                <div className="box-border content-stretch flex flex-col gap-[8px] items-start overflow-clip px-0 py-[8px] relative">
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                    <div className="[grid-area:1_/_1] flex flex-col font-['Aeonik_Pro:Medium',_sans-serif] font-medium justify-end ml-0 mt-[24px] relative text-[#3e4242] text-[16px] text-nowrap translate-y-[-100%]">
                      <p className="leading-[24px] whitespace-pre">Length</p>
                    </div>
                    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[8px] items-start ml-0 mt-[32px] relative">
                      <LengthChip 
                        label="Shorter" 
                        isSelected={settings.length === 'shorter'} 
                        onClick={() => handleLengthChange('shorter')} 
                      />
                      <LengthChip 
                        label="Same length" 
                        isSelected={settings.length === 'same'} 
                        onClick={() => handleLengthChange('same')} 
                      />
                      <LengthChip 
                        label="Longer" 
                        isSelected={settings.length === 'longer'} 
                        onClick={() => handleLengthChange('longer')} 
                      />
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[#f5f5f7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
              </div>

              {/* Customer Section */}
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
                <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[8px] items-center ml-0 mt-0 relative text-[#3e4242] text-[16px] text-nowrap w-[303px]">
                  <div className="flex flex-col font-['Aeonik_Pro:Medium',_sans-serif] font-medium justify-end relative shrink-0">
                    <p className="leading-[24px] text-nowrap whitespace-pre">Customer</p>
                  </div>
                  <div className="flex flex-col font-['Aeonik_Pro:Regular',_sans-serif] font-normal justify-end relative shrink-0">
                    <p className="leading-[24px] text-nowrap whitespace-pre">(optional)</p>
                  </div>
                </div>
                <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[8px] items-start ml-0 mt-[32px] relative w-[263.021px]">
                  <CustomerChip 
                    label="B2B" 
                    isSelected={settings.customer === 'b2b'} 
                    onClick={() => handleCustomerChange('b2b')} 
                  />
                  <CustomerChip 
                    label="B2C" 
                    isSelected={settings.customer === 'b2c'} 
                    onClick={() => handleCustomerChange('b2c')} 
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}