'use client'

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function HomePage() {
  return (
    <div className='relative py-8 px-4 sm:px-8 md:px-12 lg:px-24'>
      {/* Background colored section - modified for mobile */}
      <div className='absolute inset-0 bg-yellow-400 z-0' 
           style={{ 
             clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 65%)',
             height: '75%'
           }}>
      </div>
      
      <section className='max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12 relative z-10'>
        {/* Text content - adjusted padding for mobile */}
        <div className='flex-1 space-y-2 text-center md:text-left bg-white p-6 rounded-lg shadow-md mt-[-60px] md:mt-0'>
          <h2 className='text-3xl sm:text-5xl font-bold text-lemon-dark'>Little Lemon</h2>
          <h3 className='text-xl sm:text-3xl font-semibold text-lemon-primary'>Chicago</h3>
          <p className='text-sm sm:text-base text-gray-600 max-w-md mx-auto md:mx-0 mb-4'>
            Family Restaurant, focused on traditional recipes with a modern twist
          </p>
          <Link 
            href="/booking" 
            className='inline-block px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-white font-medium rounded-lg transition duration-300'
          >
            Reserve a table
          </Link>
        </div>
        
        {/* Image - adjusted for better mobile display */}
        <div className='flex-1 flex justify-center w-full mb-6 md:mb-0'>
          <div className='relative w-full max-w-md h-48 sm:h-64 md:h-96 rounded-lg overflow-hidden shadow-lg'>
            <Image 
              src='/foodHead.jpg' 
              alt='Delicious food from Little Lemon'
              fill
              className='object-cover'
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage