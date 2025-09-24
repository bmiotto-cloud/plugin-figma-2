import svgPaths from "./svg-4edodfxcf9";

function OutlinedClose() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Outlined / close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Outlined / close">
          <path d={svgPaths.p2e270200} fill="var(--fill-0, #3E4242)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d3d4d6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[16px] relative w-full">
          <div className="font-['Aeonik_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[18px] text-black text-center text-nowrap">
            <p className="leading-[24px] whitespace-pre">Instaffo copywriter</p>
          </div>
          <OutlinedClose />
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

function Frame7() {
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

function Label() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name=".Label">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',_sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#3e4242] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Selected copy</p>
      </div>
    </div>
  );
}

function Field() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="Field">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start pb-0 pt-[8px] px-[8px] relative size-full">
          <div className="basis-0 flex flex-col font-['Aeonik_Pro:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#7a7c84] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">Enter description...</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#7a7c84] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Textarea() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Textarea">
      <Label />
      <Field />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[152px] relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[152px] items-center px-[16px] py-[8px] relative w-full">
          <Textarea />
        </div>
      </div>
    </div>
  );
}

function Toggle01Active() {
  return (
    <div className="absolute inset-0" data-name="Toggle/01 Active">
      <div className="absolute bg-[#5e2f82] h-[24px] left-0 rounded-[1000px] top-0 w-[50px]" data-name="Base" />
      <div className="absolute left-[28px] size-[20px] top-[2px]" data-name="dot">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path clipRule="evenodd" d={svgPaths.p2bf8fb00} fill="var(--fill-0, white)" fillRule="evenodd" id="dot" />
        </svg>
      </div>
    </div>
  );
}

function Toggle() {
  return (
    <div className="h-[24px] relative shrink-0 w-[50px]" data-name="Toggle">
      <Toggle01Active />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Toggle />
      <div className="font-['Aeonik_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#3e4242] text-[16px] text-center text-nowrap">
        <p className="leading-[24px] whitespace-pre">Translate to German</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[16px] py-0 relative w-full">
          <Frame6 />
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

function PlainButton() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[8px] shrink-0" data-name="Plain Button">
      <OutlinedSettings />
      <div className="font-['Aeonik_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#5e2f82] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Advanced settings</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[16px] py-[8px] relative shrink-0">
      <PlainButton />
    </div>
  );
}

function ActionButton() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[8px] shrink-0" data-name="Action Button">
      <div className="font-['Aeonik_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#5e2f82] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Cancel</p>
      </div>
    </div>
  );
}

function ActionButton1() {
  return (
    <div className="bg-[#5e2f82] box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[8px] shrink-0" data-name="Action Button">
      <div className="font-['Aeonik_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[20px] whitespace-pre">Suggest copy</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d3d4d6] border-solid inset-[-1px] pointer-events-none" />
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end p-[16px] relative w-full">
          <ActionButton />
          <ActionButton1 />
        </div>
      </div>
    </div>
  );
}

export default function RadioButton() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[16px] size-full" data-name="Radio Button">
      <Frame4 />
      <Frame7 />
      <Frame8 />
      <Frame5 />
      <Frame9 />
      <Frame10 />
    </div>
  );
}