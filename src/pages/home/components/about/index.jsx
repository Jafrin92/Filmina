import React from "react";
import { RightShape } from "@/assets/svg/home";
import GlobalContainer from "@/GlobalComponent/globalContainer";
import Image from "@/GlobalComponent/image";
import CommonAboutImage from "@/assets/images/commonAbout.webp";
import { Button } from "@/components/ui/button";

const HomeAbout = () => {
  return (
    <section className="mb-[94px]">
      <GlobalContainer>
        <div className="grid grid-cols-2 gap-x-[50px]">
          <div className="mt-[100px]">
            <h5 className="font-roboto font-bold text-sm text-primary pl-[50px] mb-2.5 uppercase relative after:absolute after:content-[''] after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-10 after:h-[1px] after:bg-primary">
              About Us
            </h5>
            <h3 className="font-roboto font-bold text-[72px] leading-[72px] text-white -tracking-[1px]">
              We Are a Team of Passionate Filmmakers
            </h3>
            <h4 className="py-[30px] font-roboto font-bold text-2xl leading-[30px] text-secondary">
              Dedicated to bringing creative and compelling stories to life on
              screen
            </h4>
            <p className="font-inter font-normal text-base text-secondary leading-6 mb-[30px]">
              Proin et magna blandit arcu pellentesque scelerisque sit amet a
              sapien. Aenean purus nunc, cursus in ante in, vehicula facilisis
              dui. Integer consequat consectetur est id blandit. Proin et magna
              blandit arcu pellentesque scelerisque sit amet.
            </p>
            <Button
              className={
                "px-[25px] font-roboto font-bold text-sm rounded-[3px] uppercase py-[20px]"
              }
            >
              learn more
            </Button>
          </div>
          <div>
            <div className="relative -mt-[74px] z-40 rounded-[5px] overflow-hidden">
              <Image source={CommonAboutImage} alt={CommonAboutImage} />
              <div className="absolute bottom-2.5 right-0">
                <RightShape />
              </div>
            </div>
          </div>
        </div>
      </GlobalContainer>
    </section>
  );
};

export default HomeAbout;
