"use client";

import { Briefcase, Globe, Heart, MapPin, Ruler, Scale, User } from "lucide-react";
import { JSX } from "react";

 interface AboutMe {
  label: string;
  value: string;
  icon: JSX.Element;
  color: string;
}

const aboutMe: AboutMe[] = [
  { label: "Gender", value: "Male", icon: <User size={18} />, color: "bg-red-500" },
  { label: "Age", value: "27", icon: <User size={18} />, color: "bg-blue-500" },
  { label: "Occupation", value: "Engineer", icon: <Briefcase size={18} />, color: "bg-yellow-500" },
  { label: "Relationship", value: "Single", icon: <Heart size={18} />, color: "bg-green-500" },
  { label: "Location", value: "Lagos", icon: <MapPin size={18} />, color: "bg-purple-500" },
  { label: "Height range", value: "5'5 - 6'0", icon: <Ruler size={18} />, color: "bg-green-700" },
  { label: "Weight range", value: "60 - 70kg", icon: <Scale size={18} />, color: "bg-red-700" },
  { label: "Religion", value: "Christianity", icon: <Globe size={18} />, color: "bg-indigo-700" },
  { label: "Nationality", value: "Nigerian", icon: <Globe size={18} />, color: "bg-yellow-700" },
];

const AboutMeCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-sm mx-auto">
      {/* Header */}
      <h3 className="text-lg font-semibold mb-4">About Me</h3>

      {/* Details List */}
      <div className="space-y-3">
        {aboutMe.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className={`w-7 h-7 flex items-center justify-center rounded-full text-white ${item.color} mr-3`}>
              {item.icon}
            </div>
            <p className="font-medium">{item.label}:</p>
            <span className="ml-auto text-gray-700">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMeCard;
