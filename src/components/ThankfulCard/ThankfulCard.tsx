import React from 'react'
import Image from 'next/image'
import { 
  thankful2,

  } from '../../../public/images/images'

function ThankfulCard() {
  return (
<div className="group cursor-pointer relative">
  <Image
    width={100}
    height={100}
    src={thankful2}
    alt="Image 1"
    className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
  />
  <div className="absolute inset-0 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity p-4">
  <h1 className="text-2xl top-0 font-extrabold leading-none tracking-normal text-gray-900 md:text-5xl md:tracking-tight">
      <span className="block w-full text-transparent text-center bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Thank You!</span>
    </h1>
    <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
      Download
    </button>
    <h1 className="text-2xl buttom-0 font-extrabold leading-none tracking-normal text-gray-900 md:text-5xl md:tracking-tight">
      <span className="block w-full text-transparent text-center bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Ahmad</span>
    </h1>
  </div>
</div>

  )
}

export default ThankfulCard
