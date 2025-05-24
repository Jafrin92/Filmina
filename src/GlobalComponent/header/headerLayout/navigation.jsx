import React from "react";
import { LinkList } from "./LinkList";
import { Link } from "react-router";
import Image from "@/GlobalComponent/image";

const Navigation = () => {
  return (
    <>
      <nav className="text-center w-full box-border py-5">
        <ul className="flex justify-center items-center gap-x-[60px]">
          {LinkList.map((link) => (
            <li key={link.id} className="relative group transition-all duration-300 ease-linear">
              <Link
                to={link.path}
                className="font-roboto font-bold text-sm text-white uppercase hover:text-primary transition-all duration-300 ease-linear"
              >
                {link.name}
                {/* {link.icon && <Image source={link.icon} />} */}
              </Link>
              <ul className="absolute top-8 left-0 text-start bg-white py-2.5 box-border rounded-[3px] mt-5 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-linear">
                {link.dorpDown &&
                  link.dorpDown.map((drop) => (
                    <li key={drop.id} className="w-[140px] py-2.5 px-5">
                      <Link
                        to={drop.path}
                        className="font-roboto font-bold text-sm uppercase text-blackShade hover:text-primary transition-all duration-300 ease-linear"
                      >
                        {drop.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
