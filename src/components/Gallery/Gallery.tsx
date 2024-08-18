import React from 'react'
import Image from 'next/image'
import { 
  thankful1,
  thankful2,
  thankful3,
  thankful4,
  thankful5,
  thankful6,
  thankful7,
  thankful8,
  thankful9,
  thankful10,
  thankful11,
  thankful12,

  } from '../../../public/images/images'
function Gallery() {
  return (
<div className="text-gray-600 dark:text-gray-300 pt-8" id="reviews">
  <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
  <section className="px-4 py-24 mx-auto max-w-7xl">
  <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
    <h1 className="mb-3 text-4xl text-center font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
      <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Here are the crazy ones</span>
    </h1>
  </div>
</section>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
  <div className="group cursor-pointer relative">
    <Image width={100} height={100} src={thankful1} alt="Image 1" className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105" />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
        View
      </button>
    </div>
  </div>
  <div className="group cursor-pointer relative">
    <Image width={100} height={100}  src={thankful2}  alt="Image 1" className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105" />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
        View
      </button>
    </div>
  </div>
  <div className="group cursor-pointer relative">
    <Image width={50} height={50}  src={thankful3} alt="Image 1" className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105" />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
        View
      </button>
    </div>
  </div>
  <div className="group cursor-pointer relative">
    <Image width={100} height={100}  src={thankful4} alt="Image 1" className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105" />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
        View
      </button>
    </div>
  </div>
  <div className="group cursor-pointer relative">
    <Image width={100} height={100}  src={thankful5}  alt="Image 1" className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105" />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
        View
      </button>
    </div>
  </div>
  <div className="group cursor-pointer relative">
    <Image width={100} height={100}  src={thankful6}  alt="Image 1" className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105" />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
        View
      </button>
    </div>
  </div>
  <div className="group cursor-pointer relative">
    <Image width={100} height={100}   src={thankful7} alt="Image 1" className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105" />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
        View
      </button>
    </div>
  </div>
  <div className="group cursor-pointer relative">
    <Image width={100} height={100}  src={thankful8} alt="Image 1" className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105" />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
        View
      </button>
    </div>
  </div>
  <div className="group cursor-pointer relative">
    <Image width={100} height={100}   src={thankful9} alt="Image 1" className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105" />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
        View
      </button>
    </div>
  </div>
  <div className="group cursor-pointer relative">
    <Image width={100} height={100}   src={thankful10} alt="Image 1" className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105" />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
        View
      </button>
    </div>
  </div>
  <div className="group cursor-pointer relative">
    <Image width={100} height={100}   src={thankful11} alt="Image 1" className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105" />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
        View
      </button>
    </div>
  </div>
  <div className="group cursor-pointer relative">
    <Image width={100} height={100}   src={thankful12} alt="Image 1" className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105" />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
        View
      </button>
    </div>
  </div>
</div>

  </div>
</div>

  )
}

export default Gallery
