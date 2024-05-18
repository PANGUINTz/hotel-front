import Image from "next/image";
import React from "react";
import { Tag, Rate } from "antd";

const CardBooking = () => {
  return (
    <div className="w-full border border-gray-200 relative h-fit flex mt-5">
      <Image
        src="/assets/hotel2.jpg"
        alt="hotel"
        width={1080}
        height={720}
        className="w-56"
      />
      <div className="ml-5 p-2">
        <p>Hotel JW Mariiott</p>
        <Rate disabled value={4} />
        <div className="flex items-center my-1">
          <Tag
            color="#cd201f"
            className="rounded-full"
            icon={<i className="bx bxs-star"> 4</i>}
          />
          <p className="text-sm text-gray-500">1366 Reviews</p>
        </div>
        <h2 className="text-gray-500 text-sm">Amentities</h2>
        <div className="flex gap-1 my-1">
          <Tag
            icon={<i className="bx bxs-parking text-blue-500" />}
            className="bg-white  border-0 drop-shadow"
          />
          <Tag
            icon={<i className="bx bxs-bath text-blue-500" />}
            className="bg-white  border-0 drop-shadow"
          />
          <Tag
            icon={<i className="bx bxs-wine text-blue-500" />}
            className="bg-white  border-0 drop-shadow"
          />
          <Tag
            icon={<i className="bx bxs-bed text-blue-500" />}
            className="bg-white  border-0 drop-shadow"
          />
          <Tag
            icon={<i className="bx bx-dumbbell text-blue-500" />}
            className="bg-white  border-0 drop-shadow"
          />
        </div>
        <p className="text-xs text-blue-500">1000/night</p>
      </div>
      <div className="absolute bg-blue-500 h-full -right-10 w-10">
        <p className="text-white rotate-90 text-nowrap mt-12">Book Now</p>
      </div>
    </div>
  );
};

export default CardBooking;
