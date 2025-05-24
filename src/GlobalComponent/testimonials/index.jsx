import React from "react";
import GlobalContainer from "../globalContainer";
import GlobalFlex from "../globalFlex";
import Image from "../image";
import testimonialImage from "@/assets/images/testimonial.jpg";
import { BgRightShape, RightShape } from "@/assets/svg/home";
import ClientLayout from "./clientLayout";

const Testimonials = () => {
  return (
    <section className="py-[100px] relative">
      <GlobalContainer>
        <GlobalFlex className="gap-x-[50px] justify-between">
          <div className="relative">
            <div className="w-[650px]">
              <h5 className="font-roboto font-bold text-sm text-primary pl-[50px] mb-2.5 uppercase relative after:absolute after:content-[''] after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-10 after:h-[1px] after:bg-primary">
                testimonials
              </h5>
              <h3 className="font-roboto font-bold text-[72px] leading-[72px] text-white -tracking-[1px]">
                What People Says?
              </h3>
              <h4 className="py-[30px] font-roboto font-bold text-2xl leading-[30px] text-secondary">
                What they say about us?
              </h4>
              <p className="font-inter font-normal text-base text-secondary leading-6 pb-[30px]">
                Proin et magna blandit arcu pellentesque scelerisque sit amet a
                sapien. Aenean purus nunc, cursus in ante in, vehicula facilisis
                dui. Integer consequat consectetur est id
              </p>
            </div>
            <ClientLayout />
          </div>
          <div className="w-[470px] rounded-[5px] overflow-hidden relative">
            <Image
              source={testimonialImage}
              alt={testimonialImage}
              className={"w-full h-full object-fit-cover"}
            />
            <div className="absolute right-0 bottom-0">
              <RightShape />
            </div>
          </div>
        </GlobalFlex>
      </GlobalContainer>
      <div className="absolute left-0 top-0 -z-10">
        <div>
          <BgRightShape />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
