import { Button } from "@/components/ui/button";
import GlobalFlex from "@/GlobalComponent/globalFlex";
import React from "react";

const Work = () => {
  return (
    <GlobalFlex className={"items-center justify-between"}>
      <div>
        <h5 className="font-roboto font-bold text-sm text-primary pl-[50px] mb-2.5 uppercase relative after:absolute after:content-[''] after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-10 after:h-[1px] after:bg-primary">
          works
        </h5>
        <h3 className="font-roboto font-bold text-[72px] leading-[72px] text-white -tracking-[1px]">
          Check Out Our Latest Works
        </h3>
        <p className="font-inter font-normal text-base text-secondary leading-6 pt-5">
          Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien
          aenean
        </p>
      </div>
      <div>
        <Button className="px-[25px] font-roboto font-bold text-sm rounded-[3px] uppercase py-[20px]">
          View all works
        </Button>
      </div>
    </GlobalFlex>
  );
};

export default Work;
