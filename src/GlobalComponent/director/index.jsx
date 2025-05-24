import React from "react";
import directorsImage from "@/assets/images/directorsImage.webp";
import GlobalContainer from "@/GlobalComponent/globalContainer";
import Image from "@/GlobalComponent/image";
import { LeftShape } from "@/assets/svg/home";
import DirectorLayout from "./DirectorLayout";

const Director = () => {
  return (
    <GlobalContainer>
      <section className="mb-[100px]">
        <div className="relative">
          <div className="rounded-[5px] overflow-hidden">
            <Image
              source={directorsImage}
              alt={directorsImage}
              className="w-full h-full object-fit-cover"
            />
          </div>
          <div className="absolute top-0 left-0">
            <LeftShape />
          </div>
        </div>
        <div>
          <DirectorLayout />
        </div>
      </section>
    </GlobalContainer>
  );
};

export default Director;
