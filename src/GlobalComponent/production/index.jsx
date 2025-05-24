import React from "react";
import GlobalContainer from "../globalContainer";
import { Button } from "@/components/ui/button";
import ProductionImage from "@/assets/images/ProductionImage.webp";
import Image from "../image";
import { LeftShape } from "@/assets/svg/home";
import GlobalFlex from "../globalFlex";

const Production = () => {
  return (
    <GlobalContainer>
      <section className="mb-[100px]">
        <GlobalFlex className=" gap-x-[50px] justify-center">
          <div className="relative">
            <div className="rounded-[5px] overflow-hidden">
              <Image
                source={ProductionImage}
                alt={ProductionImage}
                className="w-full h-full object-fit-cover"
              />
            </div>
            <div className="absolute left-0 bottom-0">
              <LeftShape />
            </div>
          </div>
          <div className="max-w-[520px]">
            <h5 className="font-roboto font-bold text-sm text-primary pl-[50px] mb-2.5 uppercase relative after:absolute after:content-[''] after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-10 after:h-[1px] after:bg-primary">
              Our Cinematography
            </h5>
            <h3 className="font-roboto font-bold text-[72px] leading-[72px] text-white -tracking-[1px]">
              Cinematography and Film Production
            </h3>
            <h4 className="py-[30px] font-roboto font-bold text-2xl leading-[30px] text-secondary">
              Our video production company is here to help you create stunning
              images from start to finish.
            </h4>
            <p className="font-inter font-normal text-base text-secondary leading-6 mb-[30px]">
              Proin et magna blandit arcu pellentesque scelerisque sit amet a
              sapien. Aenean purus nunc, cursus in ante in, vehicula facilisis
              dui. Integer consequat consectetur est id blandit. Proin et magna
              blandit arcu pellentesque scelerisque sit amet a sapien.
            </p>
            <Button
              className={
                "px-[25px] font-roboto font-bold text-sm rounded-[3px] uppercase py-[20px]"
              }
            >
              get started
            </Button>
          </div>
        </GlobalFlex>
      </section>
    </GlobalContainer>
  );
};

export default Production;
