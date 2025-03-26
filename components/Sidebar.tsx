import { user } from "@/assets/images";
import { LayoutGrid, User, Heart, Users, ScrollText, Eye, Settings, LogOut, LucideIcon } from "lucide-react";
import Image from "next/image";
import { CustomLink } from "./Link";

// Define the type for sidebar links
interface SidebarLink {
  label: string;
  icon: LucideIcon;
  color: string;
  link: string;
}

// Sidebar links as a constant array
const sidebarLinks: SidebarLink[] = [
  { label: "Dashboard", icon: LayoutGrid, color: "text-white bg-red-500", link: "#" },
  { label: "My Profile", icon: User, color: "hover:bg-gray-100", link: "#" },
  { label: "Favorites", icon: Heart, color: "hover:bg-gray-100", link: "#" },
  { label: "My Mutuals", icon: Users, color: "hover:bg-gray-100", link: "#" },
  { label: "My Subscribed", icon: ScrollText, color: "hover:bg-gray-100", link: "#" },
  { label: "Interested in me", icon: Eye, color: "hover:bg-gray-100", link: "#" },
  { label: "Settings", icon: Settings, color: "hover:bg-gray-100", link: "#" },
  { label: "Logout", icon: LogOut, color: "text-red-500 hover:bg-gray-100 mt-4", link: "#" },
];

// Define props type for the Sidebar component
interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div
      className={`w-96 h-screen fixed left-0 top-0 flex justify-center items-center z-50 transition-transform duration-[3000ms] ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="px-10 absolute bg-white shadow-lg p-5 rounded-2xl flex flex-col items-center z-20 w-80 h-fit bottom-0">
        <Image src={user} alt="Profile" className="w-20 h-20 rounded-full mb-2" width={80} height={80} />
        <h2 className="text-lg font-semibold mb-4">Temiloluwa</h2>

        <nav className="w-full flex flex-col gap-2">
          {sidebarLinks.map(({ label, icon: Icon, color, link }) => (
            <CustomLink href={link} key={label} className={`flex items-center hover:bg-[#EF2424]  transition-all gap-3 px-4 py-2 w-full rounded-lg ${color}`}>
              <Icon size={20} /> {label}
            </CustomLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
