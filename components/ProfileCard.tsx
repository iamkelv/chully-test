'use client';
import { bgImage,  user2 } from "@/assets/images";
import { BadgeCheck, Heart } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CustomButton } from "./Button";

interface ProfileCardProps {
  image?: string;
  profilePicture?: string;
  name: string;
  age: number;
  location: string;
  matchPercentage: number;
  verified: boolean;
  bio: string;
  like:boolean
  onMoreInfo: () => void;
  onLike?: () => void;
}

export default function ProfileCard({  
  name,
  age,
  location,
  like,
  matchPercentage,
  verified,
  bio,
  onMoreInfo,  
}: ProfileCardProps) {
  const [liked, setLike ]=useState(false)

  
  useEffect(() => {
    setLike(like)
  }, [like])


  return (
    <div className="bg-white pb-4 rounded-2xl shadow-md  w-full max-w-sm mx-auto cursor-pointer">
      {/* Background Image */}
      <div className="relative w-full h-40 rounded-t-xl overflow-hidden">
        <Image
          src={bgImage}
          alt="Cover"
          className="w-full h-full object-cover"
          fill          
        />
      </div>

      {/* Profile Image */}
      <div className="relative flex justify-center -mt-10">
        <Image
          src={user2}
          alt="Profile"
          width={100}
          height={100}
          className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
        />
      </div>

      {/* Info */}
      <div className="text-center -mt-6 pt-0 ">
        <div className="flex justify-between items-center px-4">
          <h3 className="text-md font-semibold flex flex-col items-baseline">
            {name}, {age}
            <p >{location}</p>
          </h3>
          <span className="text-sm font-semibold text-md flex flex-col ">{
          matchPercentage}% Match
            <p >{
              verified ? (
                <span className="text-blue-600  text-sm font-medium flex items-center justify-center gap-1 mt-1">
                <BadgeCheck  className="" fill="#2563eb" color="white" size={24}/>
                <span>Verified Address</span>
                </span>
              ) :null}
              </p>
            
          </span>
        </div>        
        {/* Bio */}
        <p className="text-gray-500 text-sm text-left px-4  mt-2">
          {bio}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center px-4 mt-4">
        <CustomButton
        variant="primary"
          onClick={onMoreInfo}
          className="bg-red-500 text-white text-sm px-4 py-2 hover:opacity-[0.8] transition-all rounded-2xl cursor-pointer"
        >
          More Info
        </CustomButton>
        <CustomButton variant="light" onClick={()=>setLike(prev=>!prev)} className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
          <Heart className="w-7 h-7 " size={24}   color={liked? "#ef4444" :'grey'}  fill={liked? "#ef4444" :'white'}/>
        </CustomButton>
      </div>
    </div>
  );
}
