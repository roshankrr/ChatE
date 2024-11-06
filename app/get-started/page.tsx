import Image from 'next/image';
import React from 'react';
import image1 from '../../public/Illustration.png';
import Link from 'next/link';   


const GetStartedPage: React.FC = () => {


  return (
    <div className="flex flex-col justify-between items-center h-screen bg-black p-6">
       

      {/* Illustration/Image (replace with your actual image or illustration) */}
      <div className="mt-10">
        <Image src={image1} alt={'image'} height={300} width={300} />

      </div>

      {/* Text Section */}
      <div className="text-center text-white">
        <h2 className="text-2xl font-semibold mb-4">
          Break the boundaries and connect with people all over the world
        </h2>
      </div>

      {/* Get Started Button */}
      <Link href={'sign-in'}>
      <button 
        className="mb-10 px-6 py-3 bg-green-400 text-black font-semibold rounded-full hover:bg-green-300 transition duration-300"
      >
        Get Started
      </button>
      </Link>
    </div>
   
  );
};

export default GetStartedPage;
