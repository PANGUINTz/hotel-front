import Image from "next/image";
import React from "react";
import { Button } from "antd";

const SidebarRight = () => {
  return (
    <div className="h-screen overlay purple-bg relative">
      <Image
        src="/assets/hotel1.jpg"
        alt="hotel"
        width={1080}
        height={720}
        className="h-full rounded-l-3xl opacity-70"
      />
      <div className="absolute left-12 bottom-32 text-white z-50">
        <h1 className="text-5xl my-7">Incredible Hotel</h1>
        <p className="font-bold text-xl my-7 w-80">
          "For where thy treasure is,
          <span className="block ml-10">there also will thy heart be."</span>
        </p>
        <Button className="p-5 flex items-center bg-gray-100/40 border-0 text-white">
          Take Tour
        </Button>
      </div>
    </div>
  );
};

export default SidebarRight;
