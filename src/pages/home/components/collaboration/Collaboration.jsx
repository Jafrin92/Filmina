import { RightShape } from "@/assets/svg/home";
import { Button } from "@/components/ui/button";
import GlobalContainer from "@/GlobalComponent/globalContainer";
import React from "react";

const Collaboration = () => {
  return (
    <section className="mb-[100px]">
      <GlobalContainer>
        <div className="bg-[url(@/assets/images/home/collaboration.jpg)] py-20 bg-cover bg-center bg-no-repeat relative  z-20">
          <div className="absolute left-0 top-0 bg-linear-to-r to-[rgba(17,18,30,0.0)] from-[rgba(17,18,30,0.8)] w-full h-full -z-10"></div>
          <div className="ml-[50px] max-w-[729px]">
            <h5 className="font-roboto font-bold text-sm text-white pl-[50px] mb-2.5 uppercase relative after:absolute after:content-[''] after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-10 after:h-[1px] after:bg-white">
              collaborating
            </h5>
            <h3 className="font-roboto font-bold text-[72px] leading-[72px] text-white -tracking-[1px] mb-[30px]">
              We Love Collaborating With Other Creatives
            </h3>
            <Button
              className={
                "px-[25px] font-roboto font-bold text-sm rounded-[3px] uppercase py-[20px]"
              }
            >
              let’s collaborations
            </Button>
          </div>
          <div className="absolute right-0 bottom-0 z-20">
            <RightShape />
          </div>
        </div>
      </GlobalContainer>
    </section>
  );
};

export default Collaboration;
