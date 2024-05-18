import Sidebar from "@/components/layouts/Sidebar";
import React from "react";
import Image from "next/image";
import { Button } from "antd";
import SidebarRight from "@/components/layouts/SidebarRight";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="pl-60">
        {children}
        <div className="fixed top-0 right-0">
          <SidebarRight />
        </div>
      </div>
    </div>
  );
};

export default layout;
