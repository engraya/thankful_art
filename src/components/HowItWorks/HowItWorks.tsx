import React from 'react'
import Image from 'next/image'
function HowItWorks() {
  return (
<section id="works" className="relative py-10 sm:py-16 lg:py-24">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
  <section className="px-4 py-24 mx-auto max-w-7xl">
  <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
    <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
      <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">How the App works</span>
    </h1>
  </div>
</section>
    <div className="relative mt-12 lg:mt-20">
      <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28"><Image alt="" loading="lazy" width={1000} height={500} decoding="async" data-nimg={1} className="w-full dark:text-gray-200" style={{color: 'transparent'}} src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" />
      </div>
      <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
        <div>
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-r from-green-400 to-purple-500 border-2 border-gray-200 rounded-full shadow">
            <span className="text-xl font-semibold text-gray-700">1</span>
          </div>
          <h3 className="mt-6 text-xl text-gray-800 dark:text-gray-100 font-semibold leading-tight md:mt-10">Select Your Image</h3>
          <p className="mt-4 text-base text-gray-400 md:text-lg">
          Browse through four beautiful, randomly selected images from Unsplash. Pick the one that resonates with your message.
          </p>
        </div>
        <div>
        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-r from-green-400 to-purple-500 border-2 border-gray-200 rounded-full shadow">
            <span className="text-xl font-semibold text-gray-700">2</span>
          </div>
          <h3 className="mt-6 text-xl text-gray-800 dark:text-gray-100 font-semibold leading-tight md:mt-10">Personalize Your Card</h3>
          <p className="mt-4 text-base text-gray-400 md:text-lg">
          Enter your name, choose your favorite font and color, and see your personalized thank you card come to life.
          </p>
        </div>
        <div>
        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-r from-green-400 to-purple-500 border-2 border-gray-200 rounded-full shadow">
            <span className="text-xl font-semibold text-gray-700">3</span>
          </div>
          <h3 className="mt-6 text-xl text-gray-800 dark:text-gray-100 font-semibold leading-tight md:mt-10">Download and Share</h3>
          <p className="mt-4 text-base text-gray-400 md:text-lg">
          Preview your card, download it as an image, or share it directly on social media with your loved ones.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default HowItWorks
