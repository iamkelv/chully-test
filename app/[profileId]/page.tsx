"use client";

import Image from "next/image";
import { Edit, Plus, Image as LImage, PlusCircle } from "lucide-react";
import { profile } from "@/assets/images";
import HobbiesCard from "@/components/hobbiesCard";
import InterestsCard from "@/components/Interest";
import AboutMeCard from "@/components/Aboutme";
import LookingForCard from "@/components/LookingForCard";
import { useRouter } from "next/navigation";
import { CustomButton } from "@/components/Button";
import CustomImage from "@/components/CustomImage";

const ProfilePage = () => {
  const router = useRouter()

  const handleBackBtn = () => {
    router.back()    
  }
  return (
    <div className="max-w-full mx-auto p-4 md:mt-2 mt-9 ">
      {/* Cover Section */}
      <div
        className="relative rounded-lg p-4 h-60 flex items-end bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/img/bg.png')" }}
      >
        <CustomButton className="absolute top-3 right-4 bg-black text-white px-3 py-2 cursor-pointer rounded text-sm">
          Update Cover
        </CustomButton>
        <CustomButton onClick={handleBackBtn} className="absolute top-3 z-10  left-4 bg-black opacity-70 text-white px-6 py-2 cursor-pointer rounded-lg text-sm">
          Back
        </CustomButton>
        <div className="flex relative items-center w-full gap-4 flex-wrap">
          <div className="md:w-60 md:h-60 w-32 h-32 relative">
            <CustomImage
              src={profile}
              alt="Profile"
              width={150}
              
              height={150}
              className="rounded-2xl w-full h-full border-4 bg-cover absolute md:top-20 md:left-20"
            />
            <Plus className="absolute -right-4 top-28 md:left-72 md:top-72  cursor-pointer transition-all w-8 h-8 rounded-full text-white bg-[#2457C5]" />
          </div>
          <div className="absolute bottom-0 left-40 md:top-28 top-0 md:left-86 flex flex-col items-start">
            <h1 className="text-lg md:text-xl flex  items-center font-bold w-auto gap-2">
              <span>Temiloluwa, 27</span>
              <span  className="text-gray-500 md:ml-5 cursor-pointer">
                <Edit size={20} />
              </span>
            </h1>
            <p className="text-base md:text-xl font-bold">Lagos</p>
          </div>
        </div>
      </div>

      {/* Action CustomButtons */}
      <div className="w-full flex flex-col md:flex-row justify-end mt-3 items-center gap-4">
        <CustomButton className="px-3 cursor-pointer hover:opacity-60 transition-all bg-[#EF2424] rounded-2xl text-white py-2 w-full md:w-auto">
          Edit Profile
        </CustomButton>
        <CustomButton className="px-3 cursor-pointer hover:opacity-60 transition-all bg-[#EF2424] rounded-2xl text-white py-2 w-full md:w-auto">
          Edit Match setup
        </CustomButton>
      </div>

      {/* About Section */}
      <div className="mt-10 bg-white shadow p-4 pb-10 rounded-lg w-full md:w-1/2">
        <div className="flex items-center ">
          <p className="text-gray-600">A few words about myself</p>
          <span className="text-gray-500 ml-5">
            <Edit size={16} />
          </span>
        </div>
      </div>

      {/* Profile Images Section */}
      <div className="mt-4 bg-white shadow p-4 rounded-lg flex gap-2 overflow-x-auto md:w-1/2">
        <Image src={profile} alt="Profile" width={80} height={80} className="rounded-lg w-24 h-24" />
        {[...Array(4)].map((_, index) => (
          <CustomButton
            key={index}
            variant="light"
            className="border relative border-gray-300 p-4 rounded-lg w-24 h-24 flex items-center justify-center"
          >
            <LImage size={20} className="text-gray-400" />
            <PlusCircle className="absolute text-white right-0 bottom-1" fill="gray" />
          </CustomButton>
        ))}
      </div>

      {/* Cards Section */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <HobbiesCard />
        <InterestsCard />
        <AboutMeCard />
        <LookingForCard />
      </div>
    </div>
  );
};

export default ProfilePage;
