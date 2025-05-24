import GlobalFlex from "@/GlobalComponent/globalFlex";
import React from "react";
import logo from "@/assets/svg/logo.svg";
import Image from "@/GlobalComponent/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const TopHeader = () => {
  return (
    <>
      <header className="py-5 border-b border-b-[rgba(152,154,169,0.3)]">
        <GlobalFlex className={"items-center justify-between"}>
          <div>
            <ul className="flex gap-x-[30px] text-white text-sm">
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
          <div>
            <Image source={logo} alt={logo} />
          </div>
          <div>
            <ul className="flex items-center gap-x-[30px]">
              <li>
                <a
                  className="flex items-center gap-x-3 font-roboto font-bold text-sm text-white"
                  href="tel:(+021) 345 678 910"
                >
                  <FaPhoneAlt className="text-base" />
                  (+021) 345 678 910
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-x-3 font-roboto font-bold text-sm text-white"
                  href="mailto:info@filmina.com"
                >
                  <FaEnvelope className="text-base" />
                  info@filmina.com
                </a>
              </li>
            </ul>
          </div>
        </GlobalFlex>
      </header>
    </>
  );
};

export default TopHeader;
