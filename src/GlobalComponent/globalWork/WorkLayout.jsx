import Image from "@/GlobalComponent/image";

const WorkLayout = ({ workImage, title, details, year }) => {
  return (
    <div className="relative w-full">
      <div className="rounded-[5px] overflow-hidden">
        <Image
          source={workImage}
          alt={"workImage"}
          className="w-full h-full object-fit-cover"
        />
      </div>
      <div className="absolute left-0 bottom-0 bg-linear-to-t to-[rgba(17,18,30,0.0)] from-[rgba(17,18,30,0.8)] w-full h-full flex items-end">
        <div className="pl-[30px] pb-[20px]">
          <h4 className="text-white font-roboto font-bold text-4xl leading-[40px]">
            {title}
          </h4>
          <div className="flex items-center">
            <p className="font-inter font-normal text-base text-white leading-6 mr-[70px]">
              {details}
            </p>
            <h6 className="text-white font-roboto font-bold text-xl">{year}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkLayout;
