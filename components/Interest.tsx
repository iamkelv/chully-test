"use client";

import { Icon } from "@mdi/react";
import { mdiPencil, mdiAirplane, mdiBrush, mdiClockOutline, mdiHammer, mdiCamera, mdiFeather, mdiNeedle } from "@mdi/js";
import { Interest } from "@/types/types";

export const interests: Interest[] = [
  { name: "Travel", color: "bg-blue-600", icon: mdiAirplane },
  { name: "Drawing", color: "bg-pink-500", icon: mdiBrush },
  { name: "History", color: "bg-red-500", icon: mdiClockOutline },
  { name: "Woodworking", color: "bg-green-500", icon: mdiHammer },
  { name: "Photography", color: "bg-yellow-400", icon: mdiCamera },
  { name: "Poetry", color: "bg-teal-500", icon: mdiFeather },
  { name: "Knitting", color: "bg-indigo-700", icon: mdiNeedle },
];

const InterestsCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-sm mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">My Interests</h3>
        <button className="text-gray-500 hover:text-gray-700">
          <Icon path={mdiPencil} size={0.8} />
        </button>
      </div>

      {/* Interests List */}
      <div className="grid grid-cols-4 gap-4">
        {interests.map((interest, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-full text-white ${interest.color}`}
            >
              <Icon path={interest.icon} size={1.5} />
            </div>
            <p className="text-sm text-center mt-2">{interest.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterestsCard;
