import React from 'react'
import Image from 'next/image'
import { 
  thankful1,
  thankful2,
  thankful3,
  thankful4,

  } from '../../../public/images/images'
  import ThankfulCard from '@/components/ThankfulCard/ThankfulCard'
function GenerateThahkYouImage() {
  return (
<div className="text-gray-600 dark:text-gray-300 pt-8" id="reviews">
  <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
  <section className="px-4 py-12 mx-auto max-w-7xl">
  <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
    <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-normal text-gray-900 md:text-5xl md:tracking-tight">
      <span className="block w-full text-transparent text-center bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Create a Custom Thanks_Art!</span>
    </h1>
    <p className="mt-4 text-lg text-center leading-8 text-gray-400">
          Choose, Customize, and Download with Just a Few Clicks!
    </p>
    <p className="mt-2 text-sm text-center leading-8 text-gray-400">
        With just few clicks, Select an Image, Enter your name and generate a custome Thankful Art!!...
    </p>
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
 </div>
 <div className="flex items-center bg-gray-800 p-4 rounded-md max-w-xl mx-auto mt-16">
  <span className="text-green-500 text-2xl">&gt;</span>
  <input type="text" className="bg-gray-700 text-white p-3 rounded-lg outline-none ml-2 w-full" placeholder="Enter your name here" />

</div>

<div className="flex justify-center mx-auto items-center max-w-xl mx-auto mt-10">
<button className="animate-bounce focus:animate-none hover:animate-none px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
  Generate!
</button>
</div>
   </div>

</div>
  )
}

export default GenerateThahkYouImage
