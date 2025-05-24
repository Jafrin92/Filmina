import { Button } from "@/components/ui/button";
import GlobalContainer from "@/GlobalComponent/globalContainer";
import { FaPlayCircle } from "react-icons/fa";
import React from "react";

const Banner = () => {
  return (
    <section className="bg-[url(@/assets/images/home/banner.webp)] bg-cover bg-center bg-no-repeat pt-[267px] pb-[244px] relative z-20">
      <div className="bg-[#1A1B2A66] h-full w-full absolute left-0 top-0 -z-10"></div>
      <GlobalContainer>
        <div className="max-w-[770px]">
          <h5 className="font-roboto font-bold text-sm text-primary mb-2.5 uppercase">
            One scene at a time - the movie maker director.
          </h5>
          <h1 className="font-roboto font-bold leading-[101px] text-[96px] text-white -tracking-[1px]">
            Behind Every Great Film is a Visionary.
          </h1>
          <p className="font-sourse-pro font-normal text-xl leading-[30px] text-white my-[30px]">
            Crafting unforgettable stories bringing their creative vision to
            life on the big screen - the movie maker director
          </p>
          <div className="flex gap-x-[25px] items-center">
            <Button className={"font-roboto font-bold text-sm uppercase rounded-[3px] px-[25px] py-6"}>Get started</Button>
            <Button className={"bg-transparent hover:bg-transparent font-roboto font-bold text-sm uppercase"}>
              view our works<FaPlayCircle className="ml-2.5" />
            </Button>
          </div>
        </div>
      </GlobalContainer>
    </section>
  );
};

export default Banner;
