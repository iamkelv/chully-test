import { CustomButton } from "./Button";

export default function SearchBar() {
    return (
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-full px-4 py-2 w-64"
        />
        <CustomButton className="absolute right-3 top-2 text-gray-600">
          🔍
        </CustomButton>
      </div>
    );
  }
  