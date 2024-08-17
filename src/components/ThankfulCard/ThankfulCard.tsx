"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function ThankfulCard() {
  const [selectedImageSrc, setSelectedImageSrc] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const imageSrc = sessionStorage.getItem('selectedImageSrc');
    const name = sessionStorage.getItem('userName');
    if (imageSrc) setSelectedImageSrc(imageSrc);
    if (name) setUserName(name);
  }, []);

  return (
    <div className="group cursor-pointer relative">
      <Image
        width={100}
        height={100}
        src={selectedImageSrc}
        alt="Selected Image"
        className="w-full h-42 w-42 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-between opacity-100 transition-opacity p-4">
        <h1 className="text-2xl font-extrabold leading-none tracking-normal text-gray-900 md:text-5xl md:tracking-tight">
          <span className="block w-full text-transparent text-center bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
            Thank You!
          </span>
        </h1>
        <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
          Download
        </button>
        <h1 className="text-2xl font-extrabold leading-none tracking-normal text-gray-900 md:text-5xl md:tracking-tight">
          <span className="block w-full text-transparent text-center bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
            {userName}
          </span>
        </h1>
      </div>
    </div>
  );
}

export default ThankfulCard;
