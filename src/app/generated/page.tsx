import React from 'react'
import Link from 'next/link'
import ThankfulCard from '@/components/ThankfulCard/ThankfulCard'
function GeneratedCard() {
  return (
    <div className="text-gray-600 dark:text-gray-300 pt-8" id="reviews">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <Link href="/create">
        <button className="inline-flex items-center border border-indigo-300 px-2 py-1 rounded-md text-indigo-500 hover:bg-indigo-50">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18">
          </path>
        </svg>
        <span className="ml-1 font-semibold text-md">Back</span>
      </button>
        </Link>
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
        <div className="gap-4">
         <ThankfulCard/>
        </div>
      </div>
    </div>
  )
}

export default GeneratedCard
