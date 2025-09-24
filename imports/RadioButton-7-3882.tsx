import svgPaths from "./svg-c1yi011to8";

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
      <div className="font-['Aeonik_Pro:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#7a7c84] text-[14px] text-center w-[72px]">
        <p className="leading-[20px]">New copy</p>
      </div>
    </div>
  );
}

function Tab2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center pb-[12px] pt-0 px-0 relative shrink-0" data-name="Tab 2">
      <div className="font-['Aeonik_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#3e4242] text-[14px] text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">Placeholders</p>
      </div>
      <div className="absolute bottom-[2px] h-0 left-0 right-0">
        <div className="absolute inset-[-2px_-2.41%]" style={{ "--stroke-0": "rgba(94, 47, 130, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87 4">
            <path d="M2 2H85" id="Line 1" stroke="var(--stroke-0, #5E2F82)" strokeLinecap="round" strokeWidth="4" />
          </svg>
        </div>
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

function Frame5() {
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

function OutlinedAdd() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Outlined / add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Outlined / add">
          <path d={svgPaths.p20317100} fill="var(--fill-0, #F5F5F7)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="bg-[#5e2f82] content-stretch flex items-center justify-center overflow-clip relative rounded-[128px] shrink-0 size-[32px]" data-name="Icon Button">
      <OutlinedAdd />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',_sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#3e4242] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Select placeholder</p>
      </div>
      <IconButton />
    </div>
  );
}

function OutlinedAdd1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Outlined / add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Outlined / add">
          <path d={svgPaths.p20317100} fill="var(--fill-0, #3E4242)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconBox() {
  return (
    <div className="bg-[#e6e0ff] box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative rounded-[20px] shrink-0" data-name="IconBox">
      <OutlinedAdd1 />
    </div>
  );
}

function Frame267() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#222222] text-[18px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Benefit</p>
      </div>
    </div>
  );
}

function Frame49103() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame267 />
    </div>
  );
}

function Frame49106() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <IconBox />
      <Frame49103 />
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="check" opacity="0">
          <mask height="24" id="mask0_7_3886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_7_3886)">
            <path d={svgPaths.p217bb200} fill="var(--fill-0, #5E2F82)" id="check_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame268() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Frame49106 />
      <Check />
    </div>
  );
}

function BlockButton() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-[280px]" data-name="Block button">
      <div aria-hidden="true" className="absolute border border-[#d3d4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame268 />
    </div>
  );
}

function OutlinedAdd2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Outlined / add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Outlined / add">
          <path d={svgPaths.p20317100} fill="var(--fill-0, #3E4242)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconBox1() {
  return (
    <div className="bg-[#e6e0ff] box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative rounded-[20px] shrink-0" data-name="IconBox">
      <OutlinedAdd2 />
    </div>
  );
}

function Frame269() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#222222] text-[18px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">City</p>
      </div>
    </div>
  );
}

function Frame49104() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame269 />
    </div>
  );
}

function Frame49107() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <IconBox1 />
      <Frame49104 />
    </div>
  );
}

function Check1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="check" opacity="0">
          <mask height="24" id="mask0_7_3886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_7_3886)">
            <path d={svgPaths.p217bb200} fill="var(--fill-0, #5E2F82)" id="check_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame270() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Frame49107 />
      <Check1 />
    </div>
  );
}

function BlockButton1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-[280px]" data-name="Block button">
      <div aria-hidden="true" className="absolute border border-[#d3d4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame270 />
    </div>
  );
}

function OutlinedAdd3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Outlined / add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Outlined / add">
          <path d={svgPaths.p20317100} fill="var(--fill-0, #3E4242)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconBox2() {
  return (
    <div className="bg-[#e6e0ff] box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative rounded-[20px] shrink-0" data-name="IconBox">
      <OutlinedAdd3 />
    </div>
  );
}

function Frame271() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#222222] text-[18px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Company name</p>
      </div>
    </div>
  );
}

function Frame49105() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame271 />
    </div>
  );
}

function Frame49108() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <IconBox2 />
      <Frame49105 />
    </div>
  );
}

function Check2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="check" opacity="0">
          <mask height="24" id="mask0_7_3886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_7_3886)">
            <path d={svgPaths.p217bb200} fill="var(--fill-0, #5E2F82)" id="check_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame272() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Frame49108 />
      <Check2 />
    </div>
  );
}

function BlockButton2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-[280px]" data-name="Block button">
      <div aria-hidden="true" className="absolute border border-[#d3d4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame272 />
    </div>
  );
}

function OutlinedAdd4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Outlined / add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Outlined / add">
          <path d={svgPaths.p20317100} fill="var(--fill-0, #3E4242)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconBox3() {
  return (
    <div className="bg-[#e6e0ff] box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative rounded-[20px] shrink-0" data-name="IconBox">
      <OutlinedAdd4 />
    </div>
  );
}

function Frame273() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#222222] text-[18px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Job title</p>
      </div>
    </div>
  );
}

function Frame49109() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame273 />
    </div>
  );
}

function Frame49110() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <IconBox3 />
      <Frame49109 />
    </div>
  );
}

function Check3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="check" opacity="0">
          <mask height="24" id="mask0_7_3886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_7_3886)">
            <path d={svgPaths.p217bb200} fill="var(--fill-0, #5E2F82)" id="check_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame274() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Frame49110 />
      <Check3 />
    </div>
  );
}

function BlockButton3() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-[280px]" data-name="Block button">
      <div aria-hidden="true" className="absolute border border-[#d3d4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame274 />
    </div>
  );
}

function OutlinedAdd5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Outlined / add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Outlined / add">
          <path d={svgPaths.p20317100} fill="var(--fill-0, #3E4242)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconBox4() {
  return (
    <div className="bg-[#e6e0ff] box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative rounded-[20px] shrink-0" data-name="IconBox">
      <OutlinedAdd5 />
    </div>
  );
}

function Frame275() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#222222] text-[18px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Job role</p>
      </div>
    </div>
  );
}

function Frame49111() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame275 />
    </div>
  );
}

function Frame49112() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <IconBox4 />
      <Frame49111 />
    </div>
  );
}

function Check4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="check" opacity="0">
          <mask height="24" id="mask0_7_3886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_7_3886)">
            <path d={svgPaths.p217bb200} fill="var(--fill-0, #5E2F82)" id="check_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame276() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Frame49112 />
      <Check4 />
    </div>
  );
}

function BlockButton4() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-[280px]" data-name="Block button">
      <div aria-hidden="true" className="absolute border border-[#d3d4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame276 />
    </div>
  );
}

function OutlinedAdd6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Outlined / add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Outlined / add">
          <path d={svgPaths.p20317100} fill="var(--fill-0, #3E4242)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconBox5() {
  return (
    <div className="bg-[#e6e0ff] box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative rounded-[20px] shrink-0" data-name="IconBox">
      <OutlinedAdd6 />
    </div>
  );
}

function Frame277() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#222222] text-[18px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Job category</p>
      </div>
    </div>
  );
}

function Frame49113() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame277 />
    </div>
  );
}

function Frame49114() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <IconBox5 />
      <Frame49113 />
    </div>
  );
}

function Check5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="check" opacity="0">
          <mask height="24" id="mask0_7_3886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_7_3886)">
            <path d={svgPaths.p217bb200} fill="var(--fill-0, #5E2F82)" id="check_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame278() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Frame49114 />
      <Check5 />
    </div>
  );
}

function BlockButton5() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-[280px]" data-name="Block button">
      <div aria-hidden="true" className="absolute border border-[#d3d4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame278 />
    </div>
  );
}

function OutlinedAdd7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Outlined / add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Outlined / add">
          <path d={svgPaths.p20317100} fill="var(--fill-0, #3E4242)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconBox6() {
  return (
    <div className="bg-[#e6e0ff] box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative rounded-[20px] shrink-0" data-name="IconBox">
      <OutlinedAdd7 />
    </div>
  );
}

function Frame279() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#222222] text-[18px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Language skills</p>
      </div>
    </div>
  );
}

function Frame49115() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame279 />
    </div>
  );
}

function Frame49116() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <IconBox6 />
      <Frame49115 />
    </div>
  );
}

function Check6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="check" opacity="0">
          <mask height="24" id="mask0_7_3886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_7_3886)">
            <path d={svgPaths.p217bb200} fill="var(--fill-0, #5E2F82)" id="check_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame280() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Frame49116 />
      <Check6 />
    </div>
  );
}

function BlockButton6() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-[280px]" data-name="Block button">
      <div aria-hidden="true" className="absolute border border-[#d3d4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame280 />
    </div>
  );
}

function OutlinedAdd8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Outlined / add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Outlined / add">
          <path d={svgPaths.p20317100} fill="var(--fill-0, #3E4242)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconBox7() {
  return (
    <div className="bg-[#e6e0ff] box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative rounded-[20px] shrink-0" data-name="IconBox">
      <OutlinedAdd8 />
    </div>
  );
}

function Frame281() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#222222] text-[18px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Person name</p>
      </div>
    </div>
  );
}

function Frame49117() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame281 />
    </div>
  );
}

function Frame49118() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <IconBox7 />
      <Frame49117 />
    </div>
  );
}

function Check7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="check" opacity="0">
          <mask height="24" id="mask0_7_3886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_7_3886)">
            <path d={svgPaths.p217bb200} fill="var(--fill-0, #5E2F82)" id="check_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame282() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Frame49118 />
      <Check7 />
    </div>
  );
}

function BlockButton7() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-[280px]" data-name="Block button">
      <div aria-hidden="true" className="absolute border border-[#d3d4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame282 />
    </div>
  );
}

function OutlinedAdd9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Outlined / add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Outlined / add">
          <path d={svgPaths.p20317100} fill="var(--fill-0, #3E4242)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconBox8() {
  return (
    <div className="bg-[#e6e0ff] box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative rounded-[20px] shrink-0" data-name="IconBox">
      <OutlinedAdd9 />
    </div>
  );
}

function Frame283() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#222222] text-[18px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Phone number</p>
      </div>
    </div>
  );
}

function Frame49119() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame283 />
    </div>
  );
}

function Frame49120() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <IconBox8 />
      <Frame49119 />
    </div>
  );
}

function Check8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="check" opacity="0">
          <mask height="24" id="mask0_7_3886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_7_3886)">
            <path d={svgPaths.p217bb200} fill="var(--fill-0, #5E2F82)" id="check_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame284() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Frame49120 />
      <Check8 />
    </div>
  );
}

function BlockButton8() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-[280px]" data-name="Block button">
      <div aria-hidden="true" className="absolute border border-[#d3d4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame284 />
    </div>
  );
}

function OutlinedAdd10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Outlined / add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Outlined / add">
          <path d={svgPaths.p20317100} fill="var(--fill-0, #3E4242)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconBox9() {
  return (
    <div className="bg-[#e6e0ff] box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative rounded-[20px] shrink-0" data-name="IconBox">
      <OutlinedAdd10 />
    </div>
  );
}

function Frame285() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#222222] text-[18px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Salary</p>
      </div>
    </div>
  );
}

function Frame49121() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame285 />
    </div>
  );
}

function Frame49122() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <IconBox9 />
      <Frame49121 />
    </div>
  );
}

function Check9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="check" opacity="0">
          <mask height="24" id="mask0_7_3886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_7_3886)">
            <path d={svgPaths.p217bb200} fill="var(--fill-0, #5E2F82)" id="check_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame286() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Frame49122 />
      <Check9 />
    </div>
  );
}

function BlockButton9() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-[280px]" data-name="Block button">
      <div aria-hidden="true" className="absolute border border-[#d3d4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame286 />
    </div>
  );
}

function OutlinedAdd11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Outlined / add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Outlined / add">
          <path d={svgPaths.p20317100} fill="var(--fill-0, #3E4242)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconBox10() {
  return (
    <div className="bg-[#e6e0ff] box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative rounded-[20px] shrink-0" data-name="IconBox">
      <OutlinedAdd11 />
    </div>
  );
}

function Frame287() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#222222] text-[18px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Seniority</p>
      </div>
    </div>
  );
}

function Frame49123() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame287 />
    </div>
  );
}

function Frame49124() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <IconBox10 />
      <Frame49123 />
    </div>
  );
}

function Check10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="check" opacity="0">
          <mask height="24" id="mask0_7_3886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_7_3886)">
            <path d={svgPaths.p217bb200} fill="var(--fill-0, #5E2F82)" id="check_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame288() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Frame49124 />
      <Check10 />
    </div>
  );
}

function BlockButton10() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-[280px]" data-name="Block button">
      <div aria-hidden="true" className="absolute border border-[#d3d4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame288 />
    </div>
  );
}

function OutlinedAdd12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Outlined / add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Outlined / add">
          <path d={svgPaths.p20317100} fill="var(--fill-0, #3E4242)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconBox11() {
  return (
    <div className="bg-[#e6e0ff] box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative rounded-[20px] shrink-0" data-name="IconBox">
      <OutlinedAdd12 />
    </div>
  );
}

function Frame289() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#222222] text-[18px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Skill</p>
      </div>
    </div>
  );
}

function Frame49125() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame289 />
    </div>
  );
}

function Frame49126() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <IconBox11 />
      <Frame49125 />
    </div>
  );
}

function Check11() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="check" opacity="0">
          <mask height="24" id="mask0_7_3886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_7_3886)">
            <path d={svgPaths.p217bb200} fill="var(--fill-0, #5E2F82)" id="check_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame290() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Frame49126 />
      <Check11 />
    </div>
  );
}

function BlockButton11() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-[280px]" data-name="Block button">
      <div aria-hidden="true" className="absolute border border-[#d3d4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame290 />
    </div>
  );
}

function OutlinedAdd13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Outlined / add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Outlined / add">
          <path d={svgPaths.p20317100} fill="var(--fill-0, #3E4242)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconBox12() {
  return (
    <div className="bg-[#e6e0ff] box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative rounded-[20px] shrink-0" data-name="IconBox">
      <OutlinedAdd13 />
    </div>
  );
}

function Frame291() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#222222] text-[18px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Telephone number</p>
      </div>
    </div>
  );
}

function Frame49127() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame291 />
    </div>
  );
}

function Frame49128() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <IconBox12 />
      <Frame49127 />
    </div>
  );
}

function Check12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="check" opacity="0">
          <mask height="24" id="mask0_7_3886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_7_3886)">
            <path d={svgPaths.p217bb200} fill="var(--fill-0, #5E2F82)" id="check_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame292() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Frame49128 />
      <Check12 />
    </div>
  );
}

function BlockButton12() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-[280px]" data-name="Block button">
      <div aria-hidden="true" className="absolute border border-[#d3d4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame292 />
    </div>
  );
}

function OutlinedAdd14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Outlined / add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Outlined / add">
          <path d={svgPaths.p20317100} fill="var(--fill-0, #3E4242)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconBox13() {
  return (
    <div className="bg-[#e6e0ff] box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative rounded-[20px] shrink-0" data-name="IconBox">
      <OutlinedAdd14 />
    </div>
  );
}

function Frame293() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#222222] text-[18px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Work mode</p>
      </div>
    </div>
  );
}

function Frame49129() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame293 />
    </div>
  );
}

function Frame49130() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <IconBox13 />
      <Frame49129 />
    </div>
  );
}

function Check13() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="check" opacity="0">
          <mask height="24" id="mask0_7_3886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_7_3886)">
            <path d={svgPaths.p217bb200} fill="var(--fill-0, #5E2F82)" id="check_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame294() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Frame49130 />
      <Check13 />
    </div>
  );
}

function BlockButton13() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-[280px]" data-name="Block button">
      <div aria-hidden="true" className="absolute border border-[#d3d4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame294 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[320px] items-start overflow-clip relative shrink-0">
      <BlockButton />
      <BlockButton1 />
      <BlockButton2 />
      <BlockButton3 />
      <BlockButton4 />
      <BlockButton5 />
      <BlockButton6 />
      <BlockButton7 />
      <BlockButton8 />
      <BlockButton9 />
      <BlockButton10 />
      <BlockButton11 />
      <BlockButton12 />
      <BlockButton13 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <Frame8 />
          <Frame9 />
        </div>
      </div>
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
      <Frame5 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}