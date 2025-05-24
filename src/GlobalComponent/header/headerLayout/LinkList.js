import DownArrow from "../../../assets/svg/downArrow.svg";
// import {DownArrow} from "@/assets/svg/home";

export const LinkList = [
  {
    id: 1,
    path: "/",
    name: "Home",
  },
  {
    id: 2,
    path: "/about",
    name: "about",
  },
  {
    id: 3,
    path: "/services",
    name: "services",
  },

  {
    id: 5,
    path: "/portfolio",
    name: "works",
    icon: DownArrow,
  },
  {
    id: 4,
    path: "/",
    name: "pages",
    icon: DownArrow,
    dorpDown: [
      {
        id: 4.1,
        path: "/",
        name: "Testimonials",
      },
      {
        id: 4.2,
        path: "/",
        name: "pricing",
      },
      {
        id: 4.3,
        path: "/",
        name: "our team",
      },
      {
        id: 4.4,
        path: "/",
        name: "faq",
      },
      {
        id: 4.5,
        path: "/",
        name: "404",
      },
      {
        id: 4.6,
        path: "/",
        name: "coming soon",
      },
      {
        id: 4.7,
        path: "/",
        name: "popup banner",
      },
    ],
  },
  {
    id: 6,
    path: "/blog",
    name: "blog",
  },
];
