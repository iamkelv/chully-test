'use client';
import { user } from "@/assets/images";
import CustomImage from "@/components/CustomImage";
import Dropdown from "@/components/Dropdown";
import ProfileCard from "@/components/ProfileCard";
import { profiles } from "@/lib/data";
import { useRouter } from "next/navigation";



export default function Dashboard() {
  const router = useRouter()

    const handleMoreInfo = () => {    
      router.push("/1")
    };

    const handleLike = () => {
      console.log("Like clicked");
    };

  return (
    <div className="bg-[rgb(246,246,246)] min-h-screen md:mt-0 mt-6">
      {/* Navbar */}
      
      {/* Profile Summary */}
      <div className="p-6 flex items-center w-full md:flex-row flex-col ">
        <CustomImage
          src={user}
          alt="Profile" 
          width={120} 
          height={120} 
          className="rounded-full"
        />
        <div className="flex md:mt-0  md:w-1/2 md:flex-row md:items-center items-baseline flex-col justify-between  ml-4 mt-5"> 
          <div className="flex flex-col ">
            <h2 className="text-xl font-semibold">Welcome, Temiloluwa</h2>
            <div>
            <p className="text-gray-600 mt-2">My Profile Completeness</p>
            <div className="mt-2 flex items-center gap-2">
            <div className="w-full bg-gray-300 rounded-full h-2.5 ">
              <div className="bg-red-500 h-2.5 rounded-full w-3/5"></div> 
            </div>
            <span>65%</span>
            </div>
            
          </div>
          </div>
        
        <div className="p-4 rounded-lg   flex justify-between ">          
          <div className="flex w-full justify-between gap-8">
            <label className="font-bold">Relationship Type:</label>
            <div className="w-[200px]">
            <Dropdown
              label="Select an option"
              items={[
                { label: "Dating", value: "dating" },
                { label: "Marriage", value: "marriage" },
                { label: "Relationship", value: "relationship" },
                { label: "Professional", value: "professional" },
              ]}
              onSelect={(item) => console.log("Selected:", item)}
            />
            </div>
            
          </div>
        </div>
        </div>
      </div>
      
      {/* Profile Cards */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {profiles.map((profile) =>  <ProfileCard 
        profilePicture={profile.image}
        key={profile.id}
        image={profile.image}
        name={profile.name}
        age={profile.age}
        location={profile.location}
        matchPercentage={profile.matchPercentage}
        like={profile.liked}
        verified={true}
        bio={profile.bio}
        onMoreInfo={handleMoreInfo}
        onLike={handleLike}
      />
          
        
        )}
      </div>
    </div>
  );
}
