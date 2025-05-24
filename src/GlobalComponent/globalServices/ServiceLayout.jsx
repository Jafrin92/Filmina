import React from "react";
import Image from "../image";

const ServiceLayout = ({ image, icon, title, description }) => {
  return (
    <div className="relative">
      <div className="rounded-[5px] overflow-hidden">
        <Image
          source={image}
          alt={"serviceIamge"}
          className="w-full h-full object-fit-cover"
        />
      </div>
      <div className="absolute left-0 bottom-0 bg-linear-to-t to-[rgba(17,18,30,0.0)] from-[rgba(17,18,30,0.8)] w-full h-full flex items-end">
        <div className="pl-5">
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
            <Image
              source={icon}
              alt={"service icon"}
              className="w-full h-full object-fit-cover"
            />
          </div>
          <div className="py-[15px]">
            <h4 className="text-white font-roboto font-bold text-4xl leading-[40px]">
              {title}
            </h4>
            <p className="font-inter font-normal text-base text-white leading-6">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;
