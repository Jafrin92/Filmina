import React from "react";
import { BgRightShape } from "@/assets/svg/home";
import GlobalServices from "@/GlobalComponent/globalServices";

const HomeService = () => {
  return (
    <section className="relative "> 
      <GlobalServices />
        <div className="absolute right-0 -top-[304px] -z-10">
          <BgRightShape />
        </div>
    </section>
  );
};

export default HomeService;
