import React from "react";
import Banner from "./components/banner";
import HomeAbout from "./components/about";
import Brand from "./components/brand";
import Director from "../../GlobalComponent/director";
import Production from "@/GlobalComponent/production";
import HomeWork from "./components/homeWork";
import HomeService from "./components/homeService";
import Testimonials from "@/GlobalComponent/testimonials";
import HomeBlog from "./components/blog/Blog";
import Collaboration from "./components/collaboration/Collaboration";

const Home = () => {
  return (
    <>
      <Banner />
      <HomeAbout />
      <Brand />
      <Director />
      <Production />
      <HomeWork />
      <HomeService />
      <Testimonials />
      <HomeBlog />
      <Collaboration />
    </>
  );
};

export default Home;
