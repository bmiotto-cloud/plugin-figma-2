import svgPaths from "./svg-uyq1pzwans";

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

function Label() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0 w-full" data-name=".Label">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',_sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#3e4242] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Access code</p>
      </div>
    </div>
  );
}

function OutlinedLock() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Outlined / lock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Outlined / lock">
          <path d={svgPaths.p8e21980} fill="var(--fill-0, #3E4242)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function OutlinedVisibility() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Outlined / visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Outlined / visibility">
          <mask height="24" id="mask0_14_8062" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_14_8062)">
            <path d={svgPaths.p8d5ba80} fill="var(--fill-0, #3E4242)" id="vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Field() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-2 border-[#7a7c84] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center px-[8px] py-0 relative w-full">
          <OutlinedLock />
          <div className="basis-0 flex flex-col font-['Aeonik_Pro:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#7a7c84] text-[14px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">Enter access code</p>
          </div>
          <OutlinedVisibility />
        </div>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text input">
      <Label />
      <Field />
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[180px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[180px] items-center justify-center px-[16px] py-[64px] relative w-full">
          <TextInput />
          <div className="flex flex-col font-['Aeonik_Pro:Medium',_sans-serif] font-medium h-[40px] justify-center leading-[0] relative shrink-0 text-[#5e2f82] text-[12px] w-[216px]">
            <p className="leading-[16px]">Authorized Instaffo team members only</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionButton() {
  return (
    <div className="basis-0 bg-[#f5f5f7] grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Action Button">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[16px] py-[12px] relative w-full">
          <div className="font-['Aeonik_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#7a7c84] text-[14px] text-nowrap">
            <p className="leading-[20px] whitespace-pre">Access plugin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d3d4d6] border-solid inset-[-1px] pointer-events-none" />
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end p-[16px] relative w-full">
          <ActionButton />
        </div>
      </div>
    </div>
  );
}

export default function RadioButton() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[16px] size-full" data-name="Radio Button">
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}