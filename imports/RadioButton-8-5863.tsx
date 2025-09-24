import svgPaths from "./svg-md53yelw8g";

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
          <path d={svgPaths.p389658f0} fill="var(--fill-0, #003964)" id="vector" />
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

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Aeonik_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#003964] text-[14px] w-full">
        <p className="leading-[20px]">{`<<Suggested copy>>`}</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <IconBox />
      <Frame5 />
    </div>
  );
}

function Frame49796() {
  return (
    <div className="bg-[rgba(219,240,255,0.5)] box-border content-stretch flex h-[64px] items-center justify-between overflow-clip px-[12px] py-[16px] relative rounded-[16px] shrink-0 w-[335px]">
      <Frame14 />
    </div>
  );
}

function OutlinedEdit() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Outlined / edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Outlined / edit">
          <path d={svgPaths.p33403480} fill="var(--fill-0, #5E2F82)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function PlainButton() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[8px] shrink-0" data-name="Plain Button">
      <OutlinedEdit />
      <div className="font-['Aeonik_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#5e2f82] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Make changes</p>
      </div>
    </div>
  );
}

function Frame192() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[16px] py-0 relative shrink-0">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',_sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#3e4242] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Suggested copy</p>
      </div>
      <Frame49796 />
      <PlainButton />
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
            <path d={svgPaths.p3961b3f0} fill="var(--fill-0, #5E2F82)" id="vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ActionButton() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[8px] shrink-0" data-name="Action Button">
      <LeadingIcon />
      <div className="font-['Aeonik_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#5e2f82] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Start over</p>
      </div>
    </div>
  );
}

function ActionButton1() {
  return (
    <div className="bg-[#5e2f82] box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[8px] shrink-0" data-name="Action Button">
      <div className="font-['Aeonik_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[20px] whitespace-pre">Apply</p>
      </div>
    </div>
  );
}

function Frame7() {
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
      <Frame6 />
      <Frame192 />
      <Frame7 />
    </div>
  );
}