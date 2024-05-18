"use client";

import React from "react";
import SidebarLink from "../elements/SidebarLink";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const [active, setActive] = React.useState("");
  return (
    <div className="h-screen bg-blue-700 w-40 rounded-r-3xl fixed">
      <Link href="/" className="cursor-pointer">
        <Image
          src="/assets/bird-logo.png"
          alt="logo"
          width={1080}
          height={720}
          className="absolute top-0 w-36"
        />
      </Link>
      <div className="flex flex-col gap-10 justify-center items-center h-full w-full">
        <SidebarLink title="Home" icon="bx bx-home" active={false} />
        <SidebarLink title="Explore" icon="bx bx-search" active />
        <SidebarLink title="Trips" icon="bx bx-heart" active={false} />
        <SidebarLink title="Profile" icon="bx bx-user" active={false} />
      </div>
    </div>
  );
};

export default Sidebar;
