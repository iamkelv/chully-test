"use client";

import { useState, useRef, useEffect } from "react";

interface DropdownProps {
  label: string;
  items: { label: string; value: string }[];
  onSelect: (item: { label: string; value: string }) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, items, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left w-full z-40">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-1 bg-white rounded-xl hover:bg-gray-300 transition w-full justify-between"
        aria-expanded={isOpen}
      >
        {selectedItem ? items.find((item) => item.value === selectedItem)?.label : label}
        <span className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
          {isOpen ? (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 14l5-5 5 5H7z" />
            </svg>
          ) : (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          )}
        </span>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute left-0 mt-1 w-full bg-white  rounded-md shadow-lg transition-all duration-200 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="py-1 w-full">
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setSelectedItem(item.value);
                onSelect(item);
                setIsOpen(false);
              }}
              className="px-4 py-2 w-full text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
