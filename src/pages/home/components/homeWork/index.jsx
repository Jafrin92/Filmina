import GlobalContainer from "@/GlobalComponent/globalContainer";
import React from "react";
import { WorkData } from "@/GlobalComponent/globalWork/WorkData";
import Work from "@/GlobalComponent/globalWork";
import WorkLayout from "@/GlobalComponent/globalWork/WorkLayout";

const HomeWork = () => {
  return (
    <section className="mb-[100px]">
      <GlobalContainer>
        <Work />
        <div className="mt-[50px]">
          <div className="gap-[30px] grid grid-cols-2">
            {WorkData.slice(0, 4).map((item) => (
              <WorkLayout
                workImage={item.workImage}
                title={item.title}
                details={item.details}
                year={item.year}
              />
            ))}
          </div>
        </div>
      </GlobalContainer>
      
    </section>
  );
};

export default HomeWork;
