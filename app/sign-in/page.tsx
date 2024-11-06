// "use client"

// import Link from "next/link";
// import { IoIosArrowBack } from "react-icons/io";
// import { useState } from "react";
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css'; // Import the styles for the phone input

// const SignInPage: React.FC = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const handlePhoneChange = (value: string) => {
//     setPhoneNumber(value);
//   };

//   return (
//     <div className="flex flex-col h-screen bg-black p-6">
//       {/* Back button */}
//       <div className="mt-6">
//         <Link href={'get-started'}>
//           <button className="w-10 h-10">
//             <IoIosArrowBack className="text-white" />
//           </button>
//         </Link>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-1 flex-col items-center justify-center">
//         {/* Title */}
//         <h1 className="text-white text-3xl font-bold mb-6 text-center">
//           Enter your phone number
//         </h1>

//         {/* Phone Number Input with Country Code */}
//         <div className="w-9/12 mb-8">
//           <PhoneInput
//             country={'id'}  // Default country code (e.g., Indonesia)
//             value={phoneNumber}
//             onChange={handlePhoneChange}
//             inputStyle={{
//               width: '100%',
//               backgroundColor: 'transparent',
//               color: 'white',
//               borderColor: 'gray',
//             }}
//             buttonStyle={{
//               backgroundColor: 'transparent',
//               borderColor: 'gray',
//             }}
//             dropdownStyle={{
//               backgroundColor: 'black',
//               color: 'white'
//             }}
//             containerClass="text-white"
//           />
//         </div>

//         {/* Continue Button */}
//         <Link href={'otp'}>
//         <button 
//           className="bg-green-500 py-4 px-8 rounded-full text-white text-lg font-bold hover:bg-green-400 transition"
//         >
//           Continue
//         </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default SignInPage;
"use client"

import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Import the styles for the phone input

const SignInPage: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneChange = (value: string) => {
    setPhoneNumber(value);
  };

  return (
    <div className="flex flex-col h-screen bg-black p-6">
      {/* Back button */}
      <div className="mt-6">
        <Link href={'/get-started'}>
          <button className="w-10 h-10">
            <IoIosArrowBack className="text-white" />
          </button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col items-center justify-center">
        {/* Title */}
        <h1 className="text-white text-3xl font-bold mb-6 text-center">
          Enter your phone number
        </h1>

        {/* Phone Number Input with Country Code */}
        <div className="w-9/12 mb-8">
          <PhoneInput
            country={'id'}  // Default country code (e.g., Indonesia)
            value={phoneNumber}
            onChange={handlePhoneChange}
            inputStyle={{
              width: '100%',
              backgroundColor: 'transparent',
              color: 'white',
              borderColor: 'gray',
            }}
            buttonStyle={{
              backgroundColor: 'transparent',
              borderColor: 'gray',
            }}
            dropdownStyle={{
              backgroundColor: 'black',
              color: 'white'
            }}
            containerClass="text-white"
          />
        </div>

        {/* Continue Button */}
        <Link href={`/otp?phone=${encodeURIComponent(phoneNumber)}`}>
          <button 
            className="bg-green-500 py-4 px-8 rounded-full text-white text-lg font-bold hover:bg-green-400 transition"
          >
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
