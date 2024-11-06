"use client"

import { useState } from "react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { CgProfile } from "react-icons/cg";


const ProfileLoginPage: React.FC = () => {
  const [username, setUsername] = useState('');

  const handleContinue = () => {
    console.log('Username:', username);
    // Implement the logic to proceed to the next screen or step
  };

  return (
    <div className="flex flex-col min-h-screen bg-black p-6 sm:p-8 md:p-12">
      {/* Back button */}
      <div className="mt-6">
        <Link href={'/otp'}>
          <button className="w-10 h-10 md:w-12 md:h-12">
            <IoIosArrowBack className="text-white" size={24} />
          </button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col items-center justify-center">
        {/* Title */}
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
          Your Profile
        </h1>

        {/* Profile Picture */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gray-300 flex items-center justify-center">
          {/* Default profile picture */}
          <CgProfile className="w-20 h-20" />
        </div>

        {/* Input Field */}
        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold mt-6 text-center">
          What should people call you?
        </h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          className="mt-4 w-full sm:w-9/12 md:w-6/12 lg:w-4/12 bg-transparent text-white border-b border-gray-300 py-2 text-center focus:outline-none"
        />

        {/* Continue Button */}
        <Link href={'profile'}>
        <button
          onClick={handleContinue}
          className="mt-8 bg-green-500 py-4 px-8 rounded-full text-white text-lg sm:text-xl font-bold hover:bg-green-400 transition"
        >
          Continue
        </button>
        </Link>
      </div>
    </div>
  );
};


export default ProfileLoginPage;
