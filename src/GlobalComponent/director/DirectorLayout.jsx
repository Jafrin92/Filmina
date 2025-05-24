import React from "react";

const DirectorLayout = () => {
  return (
    <div className="max-w-[1040px] bg-blackShade p-[50px] box-border -mt-[150px] relative z-10">
      <div className="grid grid-cols-2 gap-x-[30px] items-center">
        <div>
          <h5 className="font-roboto font-bold text-sm text-primary pl-[50px] mb-2.5 uppercase relative after:absolute after:content-[''] after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-10 after:h-[1px] after:bg-primary">
            directors
          </h5>
          <h3 className="font-roboto font-bold text-[72px] leading-[72px] text-white -tracking-[1px]">
            Meet the Our Video Directors
          </h3>
        </div>
        <div>
          <h4 className="pb-[20px] font-roboto font-bold text-2xl leading-[30px] text-white pr-[30px]">
            Our team is made up of experienced and talented filmmakers who share
            a common goal
          </h4>
          <p className="font-inter font-normal text-base text-secondary leading-6 pr-[30px]">
            Proin et magna blandit arcu pellentesque scelerisque sit amet a
            sapien. Aenean purus nunc cursus in ante in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DirectorLayout;
