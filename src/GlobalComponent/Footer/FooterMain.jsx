import React from "react";
import GlobalContainer from "../globalContainer";
import GlobalFlex from "../globalFlex";
import footerLogo from "@/assets/svg/logo.svg";
import Image from "../image";

const FooterMain = () => {
  return (
    <div className="border-y border-[rgba(152,154,169,.3)] py-[50px]">
      <GlobalContainer>
        <div className="grid grid-cols-[26%_22%_18%_13%_13%] justify-between">
          <div>
            <Image source={footerLogo} alt={footerLogo} />
            <p className="font-inter font-normal text-base text-secondary leading-6 py-[30px]">
              Proin et magna blandit arcu pellentes sceleri sit amet a sapien.
              Aenean purus nunc cursus in ante in, vehicula facilisis{" "}
            </p>
          </div>
          <div>
            <h4 className="font-roboto font-bold text-xl text-white pb-5">
              Keep in touch
            </h4>
            <p className="font-inter font-normal text-base text-secondary leading-6 pb-2.5">
              768 Market Street San Francisco, CA 64015, United States
            </p>
            <div className="flex flex-col gap-y-2.5">
              <a
                href="mailto:info@filmina.com"
                className="font-inter font-normal text-base text-secondary leading-6"
              >
                info@filmina.com
              </a>
              <a
                href="tel:(+021) 345 678 910"
                className="font-inter font-normal text-base text-secondary leading-6"
              >
                (+021) 345 678 910
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-roboto font-bold text-xl text-white pb-5">
              Services
            </h4>
            <ul className="flex flex-col gap-y-2.5 font-sourse-pro font-normal text-base text-secondary leading-[26px]">
              <li className="font-inter">Movie production</li>
              <li>Movie directing</li>
              <li>High quality work</li>
              <li>Sound effect</li>
              <li>Live streaming</li>
            </ul>
          </div>
          <div>
            <h4 className="font-roboto font-bold text-xl text-white pb-5">
              Quick links
            </h4>
            <ul className="flex flex-col gap-y-2.5 font-sourse-pro font-normal text-base text-secondary leading-[26px]">
              <li className="font-inter">About</li>
              <li>Services</li>
              <li>Works</li>
              <li>Blog</li>
              <li>Testimonials</li>
            </ul>
          </div>{" "}
          <div>
            <h4 className="font-roboto font-bold text-xl text-white pb-5">
              Supports
            </h4>
            <ul className="flex flex-col gap-y-2.5 font-sourse-pro font-normal text-base text-secondary leading-[26px]">
              <li className="font-inter">Help center</li>
              <li>Disclaimer</li>
              <li>FAQs</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </GlobalContainer>
    </div>
  );
};

export default FooterMain;
