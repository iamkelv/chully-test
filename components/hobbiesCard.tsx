"use client";
import { Icon } from "@mdi/react";
import { mdiPencil, mdiBike, mdiPot, mdiBeach, mdiDanceBallroom, mdiPalette } from "@mdi/js";
import { Hobby } from "@/types/types";

export const hobbies: Hobby[] = [
  { name: "Laying on the Beach", color: "bg-green-400", icon: mdiBeach },
  { name: "Biking", color: "bg-red-500", icon: mdiBike },
  { name: "Cooking", color: "bg-yellow-400", icon: mdiPot },
  { name: "Dancing", color: "bg-purple-500", icon: mdiDanceBallroom },
  { name: "Museums & Arts", color: "bg-blue-400", icon: mdiPalette },
];
const HobbiesCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-sm mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">My Hobbies</h3>
        <span className="text-gray-500 hover:text-gray-700">
          <Icon path={mdiPencil} size={0.8} />
        </span>
      </div>

      {/* Hobbies List */}
      <div className="grid grid-cols-3 gap-4">
        {hobbies.map((hobby, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-full text-white ${hobby.color}`}
            >
              <Icon path={hobby.icon} size={1.5} />
            </div>
            <p className="text-sm text-center mt-2">{hobby.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HobbiesCard;
