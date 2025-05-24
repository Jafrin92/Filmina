import { BgRightShape } from "@/assets/svg/home";
import React from "react";
import FooterTop from "./FooterTop";
import FooterMain from "./FooterMain";
import GlobalContainer from "../globalContainer";
import GlobalFlex from "../globalFlex";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-blackShade relative z-20 overflow-hidden">
      <div className="py-[50px]">
        <FooterTop />
      </div>
      <div>
        <FooterMain />
      </div>
      <div className="py-[30px]">
        <GlobalContainer>
          <GlobalFlex className={"justify-between items-center"}>
            <div>
              <p className="font-inter font-normal text-base text-secondary leading-6">
                © 2023 Filmina. Designed by ThemeWarrior
              </p>
            </div>
            <div>
              <ul className="flex gap-x-[30px] text-secondary text-sm">
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaYoutube />
                </li>
                <li>
                  <FaLinkedin />
                </li>
              </ul>
            </div>
          </GlobalFlex>
        </GlobalContainer>
      </div>
      <div className="absolute right-0 top-0 -z-10">
        <BgRightShape />
      </div>
    </section>
  );
};

export default Footer;
