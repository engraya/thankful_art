import React from 'react'
import Image from "next/image";
function AboutPage() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      <div className="max-w-lg flex-col gap-y-8">
        <div className='gap-y-4'>
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline dark:text-gray-100 sm:text-4xl">About ThankfulArt</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-500 text-lg">Welcome to ThankfulArt, your go-to platform for creating beautifully personalized thank you cards in just a few clicks. We believe that gratitude should be heartfelt and effortless, which is why we’ve combined stunning imagery from Unsplash with a simple, intuitive design process. Whether you're thanking a friend, family member, or colleague, our tool makes it easy to create a card that feels truly special. Start designing today and share your appreciation with style...</p>
        </div>
        <div className='gap-y-4 mt-4'>
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline dark:text-gray-100 sm:text-4xl">Mission</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-500 text-lg">Our mission is to empower everyone to express their gratitude in a meaningful and visually captivating way. We strive to make the process of creating personalized thank you cards quick, easy, and accessible to all, without compromising on quality or creativity. At ThankfulArt, we believe that a simple "thank you" can make a big difference, and we’re here to help you share it with the world.</p>
        </div>
      </div>
      <div className="mt-12 md:mt-0">
      <div className="columns-1 md:columns-2 xl:columns-3 gap-7 ">
        <div className=" break-inside-avoid mb-8">
            <Image className="h-auto max-w-full rounded-lg" src="https://pagedone.io/asset/uploads/1688031162.jpg" width={70} height={70} alt="Gallery image" />
        </div>
        <div className=" break-inside-avoid  mb-8">
            <Image className="h-auto max-w-full rounded-lg" src="https://pagedone.io/asset/uploads/1688031232.jpg" width={70} height={70}  alt="Gallery image" />
        </div>
        <div className=" break-inside-avoid  mb-8">
            <Image className="h-auto max-w-full rounded-lg" src="https://pagedone.io/asset/uploads/1688031357.jpg" width={70} height={70}  alt="Gallery image" />
        </div>
        <div className=" break-inside-avoid  mb-8">
            <Image className="h-auto max-w-full rounded-lg" src="https://pagedone.io/asset/uploads/1688031375.jpg" width={70} height={70}  alt="Gallery image" />
        </div>
        <div className=" break-inside-avoid  mb-8">
            <Image className="h-auto max-w-full rounded-lg" src="https://pagedone.io/asset/uploads/1688031396.jpg" width={70} height={70}  alt="Gallery image" />
        </div>
        <div className=" break-inside-avoid  mb-8">
            <Image className="h-auto max-w-full rounded-lg" src="https://pagedone.io/asset/uploads/1688031414.png" width={70} height={70}  alt="Gallery image" />
        </div>
    </div>

      </div>
    </div>
  </div>
  )
}

export default AboutPage
