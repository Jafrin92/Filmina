import React from "react";
import GlobalContainer from "../globalContainer";
import GlobalFlex from "../globalFlex";
import { Button } from "@/components/ui/button";

const FooterTop = () => {
  return (
    <>
      <GlobalContainer>
        <GlobalFlex className={"justify-between items-center gap-x-[50px]"}>
          <div className="flex gap-x-[50px] items-center">
            <h3 className="font-roboto font-bold text-4xl leading-10 text-white">
              Subscribe
            </h3>
            <p className="font-inter font-normal text-base text-secondary leading-6">
              Proin magna blandit arcu pellent esque sceleri sque sit amet
              sapien purus nunc cursus antein vehicula facilisis Integer conse
            </p>
          </div>
          <div className="flex gap-x-[10px] items-center">
            <input
              type="text"
              placeholder="Email address"
              className="border border-[rgba(152,154,169,.3)] rounded-[3px] bg-white w-[300px] py-2.5 pl-6 font-inter text-base text-secondary leading-6 outline-0"
            />
            <Button
              className={
                "font-roboto font-bold text-sm px-[25px] py-[23px] uppercase rounded-[3px]"
              }
            >
              subscribe
            </Button>
          </div>
        </GlobalFlex>
      </GlobalContainer>
    </>
  );
};

export default FooterTop;
