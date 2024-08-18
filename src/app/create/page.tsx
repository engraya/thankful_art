"use client"

import React, { useState, useEffect } from 'react';
import { ChangeEvent } from 'react';
import Image from 'next/image';
import { fetchRandomPhotos } from '../../../data/images';
import Link from 'next/link';
import { UnsplashImage } from '@/types/images';

function GenerateThankYouImage() {
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(null);
  const [photos, setPhotos] = useState<UnsplashImage[]>([]);
  const [userName, setUserName] = useState('');

  const handleImageClick = (image: UnsplashImage) => {
    setSelectedImage(image);
    sessionStorage.setItem('selectedImageSrc', image?.urls?.full);
  };
  
const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  const name = e.target.value;
  setUserName(name);
  sessionStorage.setItem('userName', name);
};

  useEffect(() => {
    const fetchPhotos = async () => {
      const data = await fetchRandomPhotos();
      setPhotos(data);
    };
    fetchPhotos();
  }, []);

  const isButtonDisabled = !selectedImage || !userName;

  return (
    <div className="text-gray-600 dark:text-gray-300 pt-8" id="reviews">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <section className="px-4 py-12 mx-auto max-w-7xl">
          <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-normal text-gray-900 md:text-5xl md:tracking-tight">
              <span className="block w-full text-transparent text-center bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                Create a Custom Thanks_Art!
              </span>
            </h1>
            <p className="mt-4 text-lg text-center leading-8 text-gray-400">
              Choose, Customize, and Download with Just a Few Clicks!
            </p>
            <p className="mt-2 text-sm text-center leading-8 text-gray-400">
              Select an Image, Enter your name and generate a custom Thankful Art!!
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {photos?.map((image, index) => (
            <div
              key={index}
              className={`relative imageDiv group cursor-pointer ${selectedImage === image ? 'border-4 border-green-200' : ''}`}
              onClick={() => handleImageClick(image)}
            >
              {selectedImage === image && (
                <div className="absolute -inset-4">
                  <div
                    className="w-full h-full mx-auto rotate-180 opacity-20 blur-lg filter"
                    style={{
                      background:
                        'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
                    }}
                  ></div>
                </div>
              )}
              <div className="relative overflow-hidden bg-white border-0 border-gray-200 rounded-2xl">
                <Image
                  width={100}
                  height={100}
                  src={image?.urls?.full}
                  alt={`Image ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <>
            <div className="nameDiv flex items-center bg-gray-800 p-4 rounded-md max-w-xl mx-auto mt-16">
              <span className="text-green-500 text-2xl">&gt;</span>
              <input
                type="text"
                value={userName}
                onChange={handleInputChange}
                className="bg-gray-700 text-white p-3 rounded-lg outline-none ml-2 w-full"
                placeholder="Enter your name here"
              />
            </div>

            <div className="buttonDiv flex justify-center mx-auto items-center max-w-xl mt-10">
              <Link href="/generated">
              <button
                  className={`px-6 py-2 font-bold rounded-full transition-transform transform-gpu ${
                    isButtonDisabled
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                      : 'animate-bounce focus:animate-none hover:animate-none bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:-translate-y-1 hover:shadow-lg'
                  }`}
                  disabled={isButtonDisabled}
                >
                  Generate!
                </button>
              </Link>
           </div>
          </>
        )}
      </div>
    </div>
  );
}

export default GenerateThankYouImage;
