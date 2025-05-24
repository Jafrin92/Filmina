import React from "react";
import { ClientData } from "./ClientData";
import Image from "../image";
import { FaStar } from "react-icons/fa";

const ClientLayout = () => {
  //counting and generating the reviews
  const getReviews = (reviewsNumber) => {
    let reviews = [];
    for (let i = 0; i < reviewsNumber; i++) {
      reviews.push(<FaStar color="ff5e3a" />);
    }
    return reviews;
  };

  return (
    <div className="flex gap-x-[30px] absolute left-0 bottom-0 z-10">
      {ClientData.map((item) => (
        <div className="bg-white rounded-[5px] p-[30px] w-[435px] box-border">
          <div className="flex justify-between items-center">
            <div className="flex">{getReviews(item.reviews)}</div>
            <Image source={item.quote} alt={"quote"} />
          </div>
          <div className="py-5">
            <h4 className="font-roboto font-bold text-4xl leading-10 text-blackShade pb-5">
              {item.reviewsTitle}
            </h4>
            <p className="font-inter font-normal text-base text-secondary leading-6">
              {item.reviewsDescription}
            </p>
          </div>
          <div className="flex gap-x-[15px] items-center">
            <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
              <Image
                source={item.userImage}
                alt={"userImage"}
                className={"w-full h-full object-fit-cover"}
              />
            </div>
            <h5 className="font-roboto font-bold text-sm text-blackShade">
              {item.userName}{" "}
              <span className="text-primary">{item.userPassion}</span>
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientLayout;
