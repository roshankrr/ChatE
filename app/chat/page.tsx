// import React from "react";
// import { IoMdHome } from "react-icons/io";
// import { IoChatboxEllipses } from "react-icons/io5";
// import { IoMdCall } from "react-icons/io";
// import Link from "next/link";
// // import { FaHome, FaPhone, FaUser } from "react-icons/fa"; // Example icons for bottom navigation

// type Chat = {
//   id: number;
//   name: string;
//   message: string;
//   date: string;
//   avatar: string;
//   timeAgo: string;
//   unreadCount?: number;
//   textColor: string;
// };

// const chats: Chat[] = [
//   {
//     id: 1,
//     name: "Mr Yang",
//     message: "Alrighty.",
//     date: "5 mins",
//     avatar: "https://via.placeholder.com/48",
//     timeAgo: "5 mins",
//     unreadCount: 1,
//     textColor: "text-green-300",
//   },
//   {
//     id: 2,
//     name: "Family Group (6)",
//     message: "March sent a sticker.",
//     date: "1 hour",
//     avatar: "https://via.placeholder.com/48",
//     timeAgo: "1 hour",
//     unreadCount: 25,
//     textColor: "text-yellow-400",
//   },
//   {
//     id: 3,
//     name: "Hacker Girl",
//     message: "Give me your luckkkk",
//     date: "Yesterday",
//     avatar: "https://via.placeholder.com/48",
//     timeAgo: "Yesterday",
//     textColor: "text-red-500",
//   },
//   {
//     id: 4,
//     name: "Herta",
//     message: "Kuru kuru~",
//     date: "2 days ago",
//     avatar: "https://via.placeholder.com/48",
//     timeAgo: "2 days ago",
//     textColor: "text-white",
//   },
// ];

// const ChatList: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col">
//       {/* Header Section */}
//       <header className="flex items-center justify-between p-4 bg-gray-900">
//         <h2 className="text-2xl font-bold text-green-300 animate-pulse">Chatee</h2>
//         <div className="flex space-x-4">
//           <button className="text-xl text-white">🔍</button> {/* Search Icon */}
//           <button className="text-xl text-white">➕</button> {/* Add Icon */}
//         </div>
//       </header>

//       {/* Search Bar */}
//       <div className="px-4 py-2">
//         <input
//           type="text"
//           placeholder="Search for a chat..."
//           className="w-full px-4 py-2 rounded-full bg-gray-800 text-gray-300 focus:outline-none"
//         />
//       </div>

//       {/* Chat List */}
//       <ul className="flex-grow overflow-y-auto px-4">
//         {chats.map((chat) => (
//           <li key={chat.id} className="flex items-center py-3 border-b border-gray-700">
//             <img
//               src={chat.avatar}
//               alt={`${chat.name}'s avatar`}
//               className="w-12 h-12 rounded-full mr-3"
//             />
//             <div className="flex-grow">
//               <div className="flex justify-between">
//                 <p className={`font-medium ${chat.textColor}`}>{chat.name}</p>
//                 <p className="text-gray-400 text-xs">{chat.timeAgo}</p>
//               </div>
//               <p className="text-gray-500 text-sm">{chat.message}</p>
//             </div>
//             {chat.unreadCount && (
//               <div className="ml-4 text-xs bg-green-500 text-white rounded-full h-5 w-5 flex items-center justify-center">
//                 {chat.unreadCount}
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>

//       {/* Bottom Navigation */}
//       <nav className="flex items-center justify-around bg-gray-800 p-2">
        
//         {/* <button className="flex flex-col items-center text-green-400 text-xl">
//           <FaHome />
//           <span className="text-xs">Home</span>
//         </button> */}

//         <button className="flex flex-col items-center">
//           {/* <Image src="/home.png" alt="Home" width={24} height={24} /> */}
//           <IoMdHome className="text-white w-7 h-8" />
//           <span className="text-gray-400 mt-1">Home</span>
//         </button>
        
//         {/* <button className="flex flex-col items-center text-green-400 text-xl">
//           <FaUser />
//           <span className="text-xs">Contacts</span>
//         </button> */}

//         <button className="flex flex-col items-center">
//          <IoChatboxEllipses className="text-white w-7 h-8"/>
//           <span className="text-gray-400 mt-1">Chat</span>
//         </button>

//         {/* <button className="flex flex-col items-center text-green-400 text-xl">
//           <FaPhone />
//           <span className="text-xs">Calls</span>
//         </button> */}

//        <Link href={'calls'}>
//         <button className="flex flex-col items-center">
//         <IoMdCall className="text-white w-7 h-8"/>
//           <span className="text-gray-400 mt-1">Call</span>
//         </button>
//         </Link>
//       </nav>
//     </div>
//   );
// };

// export default ChatList;
import React from "react";
import { IoMdHome, IoMdCall } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

type Chat = {
  id: number;
  name: string;
  message: string;
  date: string;
  avatar: string;
  timeAgo: string;
  unreadCount?: number;
  textColor: string;
};

const chats: Chat[] = [
  {
    id: 1,
    name: "Mr Yang",
    message: "Alrighty.",
    date: "5 mins",
    avatar: "https://via.placeholder.com/48",
    timeAgo: "5 mins",
    unreadCount: 1,
    textColor: "text-green-300",
  },
  {
    id: 2,
    name: "Family Group (6)",
    message: "March sent a sticker.",
    date: "1 hour",
    avatar: "https://via.placeholder.com/48",
    timeAgo: "1 hour",
    unreadCount: 25,
    textColor: "text-yellow-400",
  },
  {
    id: 3,
    name: "Hacker Girl",
    message: "Give me your luckkkk",
    date: "Yesterday",
    avatar: "https://via.placeholder.com/48",
    timeAgo: "Yesterday",
    textColor: "text-red-500",
  },
  {
    id: 4,
    name: "Herta",
    message: "Kuru kuru~",
    date: "2 days ago",
    avatar: "https://via.placeholder.com/48",
    timeAgo: "2 days ago",
    textColor: "text-white",
  },
];

const ChatList: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header Section with Back Button */}
      <header className="flex items-center justify-between p-4 bg-gray-900">
        <div className="flex items-center space-x-2">
            <Link href={'profile'}>
            <button className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
            <IoIosArrowBack className="text-white" size={24} />
          </button>
            </Link>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-green-300 animate-pulse">
            Chatee
          </h2>
        </div>
        <div className="flex space-x-4">
          <button className="text-xl text-white">🔍</button> {/* Search Icon */}
          <button className="text-xl text-white">➕</button> {/* Add Icon */}
        </div>
      </header>

      {/* Search Bar */}
      <div className="px-4 py-2">
        <input
          type="text"
          placeholder="Search for a chat..."
          className="w-full px-4 py-2 rounded-full bg-gray-800 text-gray-300 focus:outline-none"
        />
      </div>

      {/* Chat List */}
      <ul className="flex-grow overflow-y-auto px-4">
        {chats.map((chat) => (
          <li key={chat.id} className="flex items-center py-3 border-b border-gray-700">
            <img
              src={chat.avatar}
              alt={`${chat.name}'s avatar`}
              className="w-12 h-12 rounded-full mr-3"
            />
            <div className="flex-grow">
              <div className="flex justify-between">
                <p className={`font-medium ${chat.textColor}`}>{chat.name}</p>
                <p className="text-gray-400 text-xs">{chat.timeAgo}</p>
              </div>
              <p className="text-gray-500 text-sm">{chat.message}</p>
            </div>
            {chat.unreadCount && (
              <div className="ml-4 text-xs bg-green-500 text-white rounded-full h-5 w-5 flex items-center justify-center">
                {chat.unreadCount}
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Bottom Navigation */}
      <nav className="flex items-center justify-around bg-gray-800 p-2">
        <button className="flex flex-col items-center">
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
      </nav>
    </div>
  );
};

export default ChatList;
