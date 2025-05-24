import { Button } from "@/components/ui/button";
import GlobalContainer from "@/GlobalComponent/globalContainer";
import GlobalFlex from "@/GlobalComponent/globalFlex";
import React from "react";
import { BlogData } from "./blogData";
import Image from "@/GlobalComponent/image";

const HomeBlog = () => {
  return (
    <section className="mb-[94px]">
      <GlobalContainer>
        <GlobalFlex className="gap-x-[30px] justify-between">
          <div className="w-[336px]">
            <h5 className="font-roboto font-bold text-sm text-primary pl-[50px] mb-2.5 uppercase relative after:absolute after:content-[''] after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-10 after:h-[1px] after:bg-primary">
              blog
            </h5>
            <h3 className="font-roboto font-bold text-[72px] leading-[72px] text-white -tracking-[1px]">
              Our Latest Blog
            </h3>
            <p className="font-inter font-normal text-base text-secondary leading-6 my-[30px]">
              Proin et magna blandit arcu pellentes scelerisque sit amet a
              sapien. Aenean purus nunc cursus in ante
            </p>
            <Button
              className={
                "px-[25px] font-roboto font-bold text-sm rounded-[3px] uppercase py-[20px]"
              }
            >
              view all
            </Button>
          </div>
          {BlogData.map((item) => (
            <div className="w-[258px]">
              <div className="w-[258px] h-[258px] rounded-[5px] overflow-hidden mb-[20px]">
                <Image
                  source={item.image}
                  alt={"blogImage01"}
                  className={"w-full h-full object-fit-cover"}
                />
              </div>
              <div>
                <h4 className="font-roboto font-bold text-2xl text-white leading-[30px] pb-2.5">
                  {item.title}
                </h4>
                <p className="font-inter font-normal text-base text-secondary leading-6">
                  {item.comment}
                </p>
              </div>
            </div>
          ))}
        </GlobalFlex>
      </GlobalContainer>
    </section>
  );
};

export default HomeBlog;
