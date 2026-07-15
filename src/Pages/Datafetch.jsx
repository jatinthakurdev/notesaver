import axios from "axios";
import React, { useEffect, useState } from "react";

function Datafetch() {
  const [userData, setData] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const filtereddata = userData.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-gray-950 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-3">User Dashboard</h1>

        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-96 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-500"
          />
        </div>

        <p className="text-center text-gray-400 mb-12">
          Fetched using Axios API
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filtereddata.map((listingData) => (
            <div
              key={listingData.id}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mx-auto text-3xl font-bold">
                {listingData.name.charAt(0)}
              </div>

              {/* Name */}
              <h2 className="text-2xl font-bold text-center mt-5">
                {listingData.name}
              </h2>

              <p className="text-center text-cyan-400 mb-6">
                @{listingData.username}
              </p>

              {/* User Info */}
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-400">User ID</span>
                  <span className="font-semibold">#{listingData.id}</span>
                </div>

                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Username</span>
                  <span>{listingData.username}</span>
                </div>

                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Email</span>
                  <span className="text-cyan-400 text-sm break-all">
                    {listingData.email}
                  </span>
                </div>
              </div>

              <button className="w-full mt-8 bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl font-semibold transition duration-300">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Datafetch;
