'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="flex justify-between items-center py-5 px-4 sm:px-6 lg:px-20 bg-white shadow-sm sticky top-0 z-50">
      {/* Logo */}
      <Link href="/" className="z-50">
        <Image 
          src='/logo.png' 
          width={120} 
          height={48} 
          alt='Restaurant Logo'
          priority
        />
      </Link>

      {/* Desktop Navigation (hidden on mobile) */}
      <nav className="hidden md:flex space-x-6">
        <Link href="/" className='hover:underline'>Home</Link>
        <Link href="/booking" className='hover:underline'>Booking</Link>
        <Link href="/menu" className='hover:underline'>Menu</Link>
        <Link href="/reservations" className='hover:underline'>Reservations</Link>
        <Link href="/order" className='hover:underline'>Order Online</Link>
        <Link href="/login" className='hover:underline'>Login</Link>
      </nav>

      {/* Mobile Menu Button (hidden on desktop) */}
      <button 
        onClick={toggleMenu}
        className="md:hidden z-50 focus:outline-none"
        aria-label="Toggle menu"
      >
        {!menuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>

      {/* Mobile Menu (shown when menuOpen is true) */}
      <div className={`
        fixed top-0 left-0 w-full h-screen bg-white transition-all duration-300 ease-in-out
        flex flex-col items-center justify-center space-y-8 
        ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        md:hidden z-40
      `}>
        <Link href="/" className='text-xl hover:underline' onClick={toggleMenu}>Home</Link>
        <Link href="/booking" className='text-xl hover:underline' onClick={toggleMenu}>Booking</Link>
        <Link href="/menu" className='text-xl hover:underline' onClick={toggleMenu}>Menu</Link>
        <Link href="/reservations" className='text-xl hover:underline' onClick={toggleMenu}>Reservations</Link>
        <Link href="/order" className='text-xl hover:underline' onClick={toggleMenu}>Order Online</Link>
        <Link href="/login" className='text-xl hover:underline' onClick={toggleMenu}>Login</Link>
      </div>
    </div>
  )
}

export default Header