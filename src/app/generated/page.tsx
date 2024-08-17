import React from 'react'
import ThankfulCard from '@/components/ThankfulCard/ThankfulCard'
function GeneratedCard() {
  return (
    <div className="text-gray-600 dark:text-gray-300 pt-8" id="reviews">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <section className="px-4 py-12 mx-auto max-w-7xl">
          <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-normal text-gray-900 md:text-5xl md:tracking-tight">
              <span className="block w-full text-transparent text-center bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                Generated Art!
              </span>
            </h1>
            <p className="mt-4 text-lg text-center leading-8 text-gray-400">
              Download with Just a Few Clicks!
            </p>
          </div>
        </section>

        <div className="gap-4 p-32">
         <ThankfulCard/>
        </div>
          <div className="buttonDiv flex justify-center mx-auto items-center max-w-xl mt-6">
            <button className="animate-bounce focus:animate-none hover:animate-none px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
            Download!
            </button>
        </div>
   

      </div>
    </div>
  )
}

export default GeneratedCard
