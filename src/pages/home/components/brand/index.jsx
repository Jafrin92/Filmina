import {
  Brand01,
  Brand02,
  Brand03,
  Brand04,
  Brand05,
  Brand06,
} from "@/assets/svg/home";
import GlobalContainer from "@/GlobalComponent/globalContainer";
import GlobalFlex from "@/GlobalComponent/globalFlex";
import React from "react";

const Brand = () => {
  return (
    <GlobalContainer>
      <section className="mb-[100px]">
        <div className="text-center mb-[56px]">
          <h5 className="font-roboto font-bold text-sm text-primary mb-2.5 uppercase relative after:absolute after:content-[''] after:left-[43%] after:top-1/2 after:-translate-y-1/2 after:w-10 after:h-[1px] after:bg-primary">
            partners
          </h5>
          <h3 className="font-roboto font-bold text-[45px] leading-[50px] text-white -tracking-[1px]">
            Trusted by the Best Brands
          </h3>
        </div>
        <GlobalFlex className={"items-center justify-center gap-x-[100px]"}>
          <Brand01 />
          <Brand02 />
          <Brand03 />
          <Brand04 />
          <Brand05 />
          <Brand06 />
        </GlobalFlex>
      </section>
    </GlobalContainer>
  );
};

export default Brand;
