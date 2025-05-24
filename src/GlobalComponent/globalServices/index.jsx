import React from "react";
import GlobalContainer from "../globalContainer";
import ServiceLayout from "./ServiceLayout";
import { ServiceData } from "./ServiceData";

const GlobalServices = () => {
  return (
    <GlobalContainer>
      <section>
        <div className="text-center mb-[56px]">
          <h5 className="font-roboto font-bold text-sm text-primary mb-2.5 uppercase relative after:absolute after:content-[''] after:left-[43%] after:top-1/2 after:-translate-y-1/2 after:w-10 after:h-[1px] after:bg-primary">
            services
          </h5>
          <h3 className="font-roboto font-bold text-[45px] leading-[50px] text-white -tracking-[1px]">
            Our Services
          </h3>
          <p className="font-inter font-normal text-base text-secondary leading-6 pt-5">
            Proin et magna blandit arcu pellentesque scelerisque sit amet a
            sapien aenean
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[30px]">
          {ServiceData.map((item) => (
            <ServiceLayout
              image={item.image}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </GlobalContainer>
  );
};

export default GlobalServices;
