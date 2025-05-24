import React from "react";
import GlobalContainer from "../globalContainer";
import TopHeader from "./headerLayout/TopHeader";
import Navigation from "./headerLayout/navigation";

const Header = () => {
  return (
    // <header className="absolute left-0 top-0 w-full z-50">
    //   <GlobalContainer>
    //     <TopHeader />
    //     <Navigation />
    //   </GlobalContainer>
    // </header>
    <>
      <div className="bg-[url(./assets/work01.jpg)] h-[500px] bg-cover bg-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quis.
      </div>
    </>
  );
};

export default Header;
