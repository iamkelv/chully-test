"use client";

import { logo, notifiction, user } from "@/assets/images";
import { Menu, Search, Filter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TopNavbar = ({toggleSidebar}:{toggleSidebar:()=>void}) => {
  return (
    <nav className="bg-white shadow-md px-4 md:px-6 py-3 flex justify-between items-center w-full fixed top-0 z-50">
      <div className="flex items-center md:w-1/2">
        {/* Left Section - Logo & Menu */}
      <div className="flex items-center  gap-3 flex-1 md:flex-none">
        <button className="lg:hidden" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
        <Link href="/">
          <Image src={logo} alt="Logo" width={120} height={40} />
        </Link>
      </div>

      {/* Center Section - Search & Filter */}
      <div className="hidden md:flex items-center gap-4 flex-1 justify-center">
        <div className="hidden lg:flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full w-80">
          <Search size={20} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none flex-1 text-sm"
          />
        </div>
        <button className="flex items-center gap-2 border px-4 py-2 rounded-full text-sm">
          <Filter size={18} />
          <span>Filter</span>
        </button>
      </div>

      </div>
      

      {/* Right Section - Notifications & Profile */}
      <div className="flex items-center gap-4 flex-1 md:flex-none justify-end">
        <Image
          src={notifiction}
          alt="Notifications"
          width={24}
          height={24}
          className="text-gray-600 cursor-pointer"
        />
        <Image
          src={user}
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default TopNavbar;
