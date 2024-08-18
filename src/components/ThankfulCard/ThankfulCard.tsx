'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import html2canvas from 'html2canvas';

function ThankfulCard() {
  const [selectedImageSrc, setSelectedImageSrc] = useState('');
  const [userName, setUserName] = useState('');
  const cardRef = useRef(null);

  useEffect(() => {
    const imageSrc = sessionStorage.getItem('selectedImageSrc');
    const name = sessionStorage.getItem('userName');
    if (imageSrc) setSelectedImageSrc(imageSrc);
    if (name) setUserName(name);
  }, []);

  const handleDownload = async () => {
    if (cardRef.current) {
      const canvas = await html2canvas(cardRef.current, {
        useCORS: true,
        backgroundColor: null, 
      });
      const link = document.createElement('a');
      link.download = `${userName}-ThankYouCard.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  return (
    <>
      <div ref={cardRef} className="group cursor-pointer flex justify-center items-center mx-auto relative w-64 h-64">
        <Image
          width={256}
          height={256}
          src={selectedImageSrc}
          alt="Selected Image"
          className="w-full h-full object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-between opacity-100 transition-opacity p-4">
          <h1 className="text-2xl font-extrabold leading-none tracking-normal text-gray-900 md:text-3xl md:tracking-tight">
            <span className="block w-full text-center bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
              Thank You!
            </span>
          </h1>
          <h1 className="text-2xl font-extrabold leading-none tracking-normal text-gray-900 md:text-3xl md:tracking-tight mt-auto mb-6">
            <span className="block w-full text-center bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
              {userName}
            </span>
          </h1>
        </div>
      </div>

      <div className="buttonDiv flex justify-center mx-auto items-center max-w-xl mt-6">
        <button
          onClick={handleDownload}
          className="animate-bounce focus:animate-none hover:animate-none px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
        >
          Download!
        </button>
      </div>
    </>
  );
}

export default ThankfulCard;
