import React from "react";

type SidebarLinkProps = {
  title: string;
  icon: string;
  active: boolean;
};

const SidebarLink = ({ title, icon, active }: SidebarLinkProps) => {
  return (
    <div className="w-full text-xs flex justify-center cursor-pointer">
      <div
        className={`rounded-full w-14 h-14 flex flex-col items-center justify-center text-white hover:bg-white hover:text-blue-500 transition-all duration-300 ${
          active && "bg-white !text-blue-500"
        }`}
      >
        <i className={`${icon} text-lg`} />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default SidebarLink;
