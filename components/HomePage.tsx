'use client'

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function HomePage() {
  return (
    <div className='relative py-12 px-4 sm:px-8 md:px-12 lg:px-24'>
      {/* Background colored section */}
      <div className='absolute inset-0 bg-yellow-400 z-0' 
           style={{ 
             clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 60%)',
             height: '80%'
           }}>
      </div>
      
      <section className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10'>
        {/* Text content with white background */}
        <div className='flex-1 space-y-2 text-center md:text-left bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-4xl sm:text-5xl pt-20 font-bold text-lemon-dark pb-10'>Little Lemon</h2>
          <h3 className='text-xl sm:text-3xl font-semibold text-lemon-primary'>Chicago</h3>
          <p className='text-sm pb-4 text-gray-600 max-w-md mx-auto md:mx-0'>
            Family Restaurant, focused on traditional recipes with a modern twist
          </p>
          <Link 
            href="/booking" 
            className='px-3 py-3 bg-yellow-400 hover:bg-lemon-dark text-white font-medium rounded-lg '
          >
            Reserve a table
          </Link>
        </div>
        
        {/* Image that overlaps the colored background */}
        <div className='flex-1 flex justify-center'>
          <div className='relative w-full max-w-md h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg'>
            <Image 
              src='/foodHead.jpg' 
              alt='Delicious food from Little Lemon'
              fill
              className='object-cover'
              priority
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage