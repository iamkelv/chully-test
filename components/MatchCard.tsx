export default function MatchCard({ user }: { user: any }) {
    return (
      <div className="border p-4 rounded-lg shadow-sm">
        <img src={user.image} alt={user.name} className="w-full h-40 object-cover rounded-md" />
        <div className="flex items-center mt-2">
          <h3 className="font-semibold">{user.name}, {user.age}</h3>
          <span className="text-sm ml-auto">{user.match}% Match</span>
        </div>
        <p className="text-gray-600">{user.location}</p>
        {user.verified && <span className="text-blue-500 text-sm">✔ Verified</span>}
        <p className="text-sm mt-2">{user.bio}</p>
        <div className="flex justify-between mt-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded">More Info</button>
          <button className="border px-4 py-2 rounded">❤️</button>
        </div>
      </div>
    );
  }
  