// import React from "react";
// import { IoMdHome } from "react-icons/io";
// import { IoChatboxEllipses } from "react-icons/io5";
// import { IoMdCall } from "react-icons/io";
// import { IoIosArrowBack } from "react-icons/io";
// import Link from "next/link";


// type Chat = {
//   id: number;
//   name: string;
//   date: string;
//   avatar: string;
//   textColor: string;
// };

// const chats: Chat[] = [
//   {
//     id: 1,
//     name: "Mr Yang",
//     date: "26/07/2023",
//     avatar: "https://via.placeholder.com/48",
//     textColor: "text-green-300",
//   },
//   {
//     id: 2,
//     name: "Hacker Girl",
//     date: "24/07/2023",
//     avatar: "https://via.placeholder.com/48",
//     textColor: "text-red-500",
//   },
//   {
//     id: 3,
//     name: "Herta",
//     date: "12/07/2023",
//     avatar: "https://via.placeholder.com/48",
//     textColor: "text-white",
//   },
// ];

// const ChatList: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-900">
//       <div className="bg-gray-900 p-4 rounded-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-8">
//         <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-green-300 mb-4 animate-pulse">
//           Chatee
//         </h2>
//     <Link href={'profile'}>
//     <button className="w-10 h-10 md:w-12 md:h-12">
//           <IoIosArrowBack className="text-white" size={24} />
//         </button>
//     </Link>
//         <ul>
//           {chats.map((chat) => (
//             <li key={chat.id} className="flex items-center py-2 space-x-3">
//               <img
//                 src={chat.avatar}
//                 alt={`${chat.name}'s avatar`}
//                 className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
//               />
//               <div className="text-left">
//                 <p className={`font-medium ${chat.textColor} text-sm sm:text-base md:text-lg`}>
//                   {chat.name}
//                 </p>
//                 <p className="text-gray-400 text-xs sm:text-sm">{chat.date}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//       {/* Bottom Navigation */}
//       <div className="flex justify-around p-4 mt-72 border-t border-gray-700">
//         <button className="flex flex-col items-center">
//           {/* <Image src="/home.png" alt="Home" width={24} height={24} /> */}
//           <IoMdHome className="text-white w-7 h-8" />
//           <span className="text-gray-400 mt-1">Home</span>
//         </button>
//         <Link href={'chat'}>
//         <button className="flex flex-col items-center">
//          <IoChatboxEllipses className="text-white w-7 h-8"/>
//           <span className="text-gray-400 mt-1">Chat</span>
//         </button>
//         </Link>
        
//         <button className="flex flex-col items-center">
//         <IoMdCall className="text-white w-7 h-8"/>
//           <span className="text-gray-400 mt-1">Call</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatList;
import React from "react";
import { IoMdHome } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

type Chat = {
  id: number;
  name: string;
  date: string;
  avatar: string;
  textColor: string;
};

const chats: Chat[] = [
  {
    id: 1,
    name: "Mr Yang",
    date: "26/07/2023",
    avatar: "https://via.placeholder.com/48",
    textColor: "text-green-300",
  },
  {
    id: 2,
    name: "Hacker Girl",
    date: "24/07/2023",
    avatar: "https://via.placeholder.com/48",
    textColor: "text-red-500",
  },
  {
    id: 3,
    name: "Herta",
    date: "12/07/2023",
    avatar: "https://via.placeholder.com/48",
    textColor: "text-white",
  },
];

const ChatList: React.FC = () => {
  return (
    <div className="min-h-screen text-white bg-gray-900 flex flex-col ">
      {/* Header Section with Back Button */}
      <div className="w-full px-4 py-3 flex items-center  shadow-md">
        <Link href={'profile'}>
          <button className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
            <IoIosArrowBack className="text-white" size={24} />
          </button>
        </Link>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-green-300 animate-pulse">
          Chatee
        </h2>
        <div className="w-10 h-10 md:w-12 md:h-12"></div> {/* Spacer for symmetry */}
      </div>

      {/* Chat List */}
      <div className="w-full mt-4 p-4">
        <ul>
          {chats.map((chat) => (
            <li key={chat.id} className="flex items-center py-3 space-x-4 border-b border-gray-700 last:border-b-0">
              <img
                src={chat.avatar}
                alt={`${chat.name}'s avatar`}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              />
              <div className="text-left">
                <p className={`font-medium ${chat.textColor} text-sm sm:text-base md:text-lg`}>
                  {chat.name}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm">{chat.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 bg-gray-800 w-full p-2">
        <div className="flex justify-around">
          <button className="flex flex-col items-center">
            <IoMdHome className="text-white w-7 h-8" />
            <span className="text-gray-400 text-xs mt-1">Home</span>
          </button>
          <Link href={'chat'}>
            <button className="flex flex-col items-center">
              <IoChatboxEllipses className="text-white w-7 h-8"/>
              <span className="text-gray-400 text-xs mt-1">Chat</span>
            </button>
          </Link>
          <button className="flex flex-col items-center">
            <IoMdCall className="text-white w-7 h-8"/>
            <span className="text-gray-400 text-xs mt-1">Call</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
