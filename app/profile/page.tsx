"use client"

import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import { IoMdHome } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { BsThreeDotsVertical } from "react-icons/bs";

const ProfilePage: React.FC = () => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [username, setUsername] = useState('Mittarrr');
  const [bio, setBio] = useState('Rules are made to be broken!');
  const [profilePic, setProfilePic] = useState('/profile-pic.png'); // Profile picture path

  const handleEditProfile = () => {
    setIsEditingProfile(!isEditingProfile);
  };

  const handleSaveProfile = () => {
    console.log('Updated profile:', username, bio);
    setIsEditingProfile(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black p-6 sm:p-8 md:p-12">
        {/* navbar */}
        <div className="flex justify-between h-12 bg-black">
        <h1 className="text-2xl mb-20 font-bold text-green-300 animate-pulse">
          Chatee
        </h1>
        <button >
        <BsThreeDotsVertical className="text-white "/>
        </button>
      </div>
        
      {/* Back button */}
      <div className="mt-4 flex items-center">
       <Link href={'profile-login'}>
       <button className="w-10 h-10 md:w-12 md:h-12">
          <IoIosArrowBack className="text-white" size={24} />
        </button>
       </Link>
        <h1 className="text-white text-lg sm:text-xl font-bold ml-4">
          Profile
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col items-center justify-center">
        {/* Profile Picture */}
        <button 
          onClick={() => setProfilePic('/default-profile.png')} // Implement removing or changing profile logic
          className="mb-6 text-white"
        >
          {/* <Image
            src={profilePic}
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full border-4 border-gray-300"
          /> */}
           <CgProfile className="w-24 h-32" />
        </button>

        {/* Edit username and bio */}
        {isEditingProfile ? (
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full sm:w-9/12 md:w-6/12 bg-transparent text-white border-b border-gray-300 py-2 text-center focus:outline-none"
          />
        ) : (
          <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-4">
            {username}
          </h2>
        )}

        {isEditingProfile ? (
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full sm:w-9/12 md:w-6/12 bg-transparent text-white border-b border-gray-300 py-2 text-center focus:outline-none"
          />
        ) : (
          <p className="text-gray-400 mb-4 text-center">{bio}</p>
        )}

        {/* Save or Edit Profile Button */}
        {isEditingProfile ? (
          <button
            onClick={handleSaveProfile}
            className="bg-green-500 py-2 px-8 rounded-full text-white text-lg sm:text-xl font-bold hover:bg-green-400 transition"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEditProfile}
            className="mt-4 text-gray-400 hover:underline"
          >
            Edit Profile
          </button>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-around p-4 border-t border-gray-700">
        <button className="flex flex-col items-center">
          {/* <Image src="/home.png" alt="Home" width={24} height={24} /> */}
          <IoMdHome className="text-white w-7 h-8" />
          <span className="text-gray-400 mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center">
         <IoChatboxEllipses className="text-white w-7 h-8"/>
          <span className="text-gray-400 mt-1">Chat</span>
        </button>

        <Link href={'calls'}>
        <button className="flex flex-col items-center">
        <IoMdCall className="text-white w-7 h-8"/>
          <span className="text-gray-400 mt-1">Call</span>
        </button>
        </Link>
        
      </div>
    </div>
  );
};

export default ProfilePage;
// "use client";
// import { useState, useEffect } from 'react';
// import { IoIosArrowBack } from 'react-icons/io';
// import { IoMdHome } from 'react-icons/io';
// import { IoChatboxEllipses } from 'react-icons/io5';
// import { IoMdCall } from 'react-icons/io';
// import Link from 'next/link';

// // Assuming you have a ProfileContext that provides profileData and updateProfile
// import { useProfileContext } from './ProfileContext';

// const ProfilePage: React.FC = () => {
//   const { profileData, updateProfile } = useProfileContext();
//   const [isEditingProfile, setIsEditingProfile] = useState(false);
//   const [editedUsername, setEditedUsername] = useState(profileData?.username || '');
//   const [editedBio, setEditedBio] = useState(profileData?.bio || '');
//   const [editedProfilePic, setEditedProfilePic] = useState(profileData?.profilePic || '/default-profile-pic.png');

//   useEffect(() => {
//     if (!profileData) {
//       // Fetch profile data if not already loaded
//       fetchProfileData();
//     }
//   }, []);

//   const handleSaveProfile = () => {
//     updateProfile(editedUsername, editedBio, editedProfilePic);
//     setIsEditingProfile(false);
//   };

//   const handleChooseProfilePic = () => {
//     // Implement image picker functionality here
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-black p-4 sm:p-6 md:p-10">
//       {/* Back button */}
//       <div className="mt-6 flex items-center">
//         <Link href="/profile-login">
//           <button className="w-10 h-10">
//             <IoIosArrowBack className="text-white" size={24} />
//           </button>
//         </Link>
//         <h1 className="text-white text-lg sm:text-xl font-bold ml-4">Profile</h1>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col items-center justify-center">
//         {/* Profile Picture */}
//         <button onClick={handleChooseProfilePic} className="mb-6">
//           <img src={editedProfilePic} alt="Profile Picture" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-gray-300" />
//         </button>

//         {/* Username and Bio Fields */}
//         {isEditingProfile ? (
//           <input
//             type="text"
//             value={editedUsername}
//             onChange={(e) => setEditedUsername(e.target.value)}
//             className="w-full sm:w-9/12 md:w-6/12 bg-transparent text-white border-b border-gray-300 py-2 text-center focus:outline-none"
//             placeholder="Enter your username"
//           />
//         ) : (
//           <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-4">{editedUsername}</h2>
//         )}

//         {isEditingProfile ? (
//           <textarea
//             value={editedBio}
//             onChange={(e) => setEditedBio(e.target.value)}
//             className="w-full sm:w-9/12 md:w-6/12 bg-transparent text-white border-b border-gray-300 py-2 text-center focus:outline-none"
//             placeholder="Enter your bio"
//           />
//         ) : (
//           <p className="text-gray-400 mb-4 text-center">{editedBio}</p>
//         )}

//         {/* Save or Edit Profile Button */}
//         {isEditingProfile ? (
//           <button
//             onClick={handleSaveProfile}
//             className="bg-green-500 py-2 px-8 rounded-full text-white text-lg sm:text-xl font-bold hover:bg-green-400 transition"
//           >
//             Save
//           </button>
//         ) : (
//           <button
//             onClick={() => setIsEditingProfile(true)}
//             className="mt-4 text-gray-400 hover:underline"
//           >
//             Edit Profile
//           </button>
//         )}
//       </div>

//       {/* Bottom Navigation */}
//       <div className="flex justify-around p-4 border-t border-gray-700">
//         <button className="flex flex-col items-center">
//           <IoMdHome className="text-white w-7 h-8" />
//           <span className="text-gray-400 mt-1">Home</span>
//         </button>
//         <button className="flex flex-col items-center">
//           <IoChatboxEllipses className="text-white w-7 h-8" />
//           <span className="text-gray-400 mt-1">Chat</span>
//         </button>
//         <button className="flex flex-col items-center">
//           <IoMdCall className="text-white w-7 h-8" />
//           <span className="text-gray-400 mt-1">Call</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
