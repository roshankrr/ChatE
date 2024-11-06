// "use client"

// import Link from "next/link";
// import { useState } from "react";
// import { IoIosArrowBack } from "react-icons/io";

// const OTPVerificationPage: React.FC = () => {
//   const [verificationCode, setVerificationCode] = useState<string[]>(new Array(6).fill(''));

//   const handleChange = (index: number, value: string) => {
//     const updatedCode = [...verificationCode];
//     updatedCode[index] = value.replace(/\D/, ''); // Ensure only digits are allowed
//     setVerificationCode(updatedCode);

//     // Move to the next input box if the current one is filled
//     if (value && index < verificationCode.length - 1) {
//       const nextInput = document.getElementById(`otp-input-${index + 1}`) as HTMLInputElement;
//       nextInput?.focus();
//     }
//   };

//   const handleVerify = () => {
//     const code = verificationCode.join('');
//     // TODO: Implement verification logic using the verification code
//     console.log('Verification code:', code);
//     // Navigate to the next screen upon successful verification
//   };

//   const handleResendCode = () => {
//     // Simulate OTP sending logic here
//     alert('A new OTP has been sent successfully!'); // Alert indicating success
//   };

//   return (
//     <div className="flex flex-col h-screen bg-black p-6">
//       {/* Back button */}
//       <div className="mt-6">
//         <Link href={'/sign-in'}>
//           <button className="w-10 h-10">
//             <IoIosArrowBack className="text-white" />
//           </button>
//         </Link>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-1 flex-col items-center justify-center">
//         {/* Title */}
//         <h1 className="text-white text-2xl font-bold mb-4 text-center">
//           Enter your verification code
//         </h1>

//         {/* Message */}
//         <p className="text-white mb-4 text-center">
//           We have sent a verification code to +62 812 3456 7890
//         </p>

//         {/* Verification Code Inputs */}
//         <div className="flex flex-row w-9/12 justify-between mb-8">
//           {verificationCode.map((digit, index) => (
//             <input
//               key={index}
//               id={`otp-input-${index}`}
//               value={digit}
//               onChange={(e) => handleChange(index, e.target.value)}
//               type="text"
//               maxLength={1}
//               className="w-12 h-12 bg-transparent text-white border-b border-gray-300 text-center focus:outline-none"
//             />
//           ))}
//         </div>

//         {/* Continue Button */}
//         <button 
//           onClick={handleVerify}
//           className="bg-green-500 py-4 px-8 rounded-full text-white text-lg font-bold hover:bg-green-400 transition"
//         >
//           Continue
//         </button>

//         {/* Resend Code Button */}
//         <p className="text-gray-400 mt-4">
//           <button 
//             onClick={handleResendCode} 
//             className="text-green-500 hover:underline focus:outline-none"
//           >
//             Resend code
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default OTPVerificationPage;
"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";

const OTPVerificationPage: React.FC = () => {
  const [verificationCode, setVerificationCode] = useState<string[]>(new Array(6).fill(''));
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  useEffect(() => {
    // Retrieve the phone number from the URL parameters
    const params = new URLSearchParams(window.location.search);
    const phone = params.get('phone');
    if (phone) {
      setPhoneNumber(phone);
    }
  }, []);

  const handleChange = (index: number, value: string) => {
    const updatedCode = [...verificationCode];
    updatedCode[index] = value.replace(/\D/, ''); // Ensure only digits are allowed
    setVerificationCode(updatedCode);

    // Move to the next input box if the current one is filled
    if (value && index < verificationCode.length - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`) as HTMLInputElement;
      nextInput?.focus();
    }
  };

  const handleVerify = () => {
    const code = verificationCode.join('');
    // TODO: Implement verification logic using the verification code
    console.log('Verification code:', code);
    // Navigate to the next screen upon successful verification
  };

  const handleResendCode = () => {
    // Simulate OTP sending logic here
    alert('A new OTP has been sent successfully!'); // Alert indicating success
  };

  return (
    <div className="flex flex-col h-screen bg-black p-6">
      {/* Back button */}
      <div className="mt-6">
        <Link href={'/sign-in'}>
          <button className="w-10 h-10">
            <IoIosArrowBack className="text-white" />
          </button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col items-center justify-center">
        {/* Title */}
        <h1 className="text-white text-2xl font-bold mb-4 text-center">
          Enter your verification code
        </h1>

        {/* Message */}
        <p className="text-white mb-4 text-center">
          We have sent a verification code to {phoneNumber}
        </p>

        {/* Verification Code Inputs */}
        <div className="flex flex-row w-9/12 justify-between mb-8">
          {verificationCode.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              type="text"
              maxLength={1}
              className="w-12 h-12 bg-transparent text-white border-b border-gray-300 text-center focus:outline-none"
            />
          ))}
        </div>

        {/* Continue Button */}
        <Link href={'profile-login'}>
        <button 
          onClick={handleVerify}
          className="bg-green-500 py-4 px-8 rounded-full text-white text-lg font-bold hover:bg-green-400 transition"
        >
          Continue
        </button>
        </Link>

        {/* Resend Code Button */}
        <p className="text-gray-400 mt-4">
          <button 
            onClick={handleResendCode} 
            className="text-green-500 hover:underline focus:outline-none"
          >
            Resend code
          </button>
        </p>
      </div>
    </div>
  );
};

export default OTPVerificationPage;
