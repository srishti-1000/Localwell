import React from "react";
import businessEdit from "../assets/Edit Business Profile.svg";
import manageUser from "../assets/Manage User & devices.svg";

const Sidebar = () => {
  return (
    <div className="w-full p-4 font-poppins h-full bg-[#F5F5F5]">
      <h2 className="font-semibold text-gray-800">Control Centre</h2>
      <p className="text-sm text-gray-500 mt-1 mb-4">
        Select an option below to edit
      </p>

      <div className="space-y-1 text-sm">
        <p className="text-black font-semibold text-xs mb-2">BUSINESS</p>

        <div className="flex items-start gap-2 pb-3">
          <img src={businessEdit} className="w-5 h-5 mt-1" />
          <div className="flex-1">
            <p className="text-[#000000] cursor-pointer">Business Profile</p>
            <div className="border-b border-gray-300 mt-1"></div>
          </div>
        </div>

        <div className="flex items-start gap-2 pb-3">
          <img src={manageUser} className="w-5 h-5 mt-1" />
          <div className="flex-1">
            <p className="text-[#000000] cursor-pointer">Users & Devices</p>
            <div className="border-b border-gray-300 mt-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
