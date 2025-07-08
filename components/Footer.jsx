import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="bg-yellow-200 rounded-lg mb-10 text-gray-800 py-8 px-4 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Column */}
        <div className="flex flex-col items-center md:items-start">
          <div className="mb-4">
            <Image 
              src="/logo.png" 
              alt="Little Lemon Logo"
              width={180}
              height={80}
            />
          </div>
          <p className="text-lemon-light text-sm">
            Authentic Mediterranean cuisine with a modern twist
          </p>
        </div>

        {/* Location Column */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-lemon-primary mb-4">Location</h3>
          <address className="not-italic">
            <p>123 Lemon Street</p>
            <p>Chicago, IL 60601</p>
            <p className="mt-2">Open: 11AM - 10PM</p>
            <p>Closed on Mondays</p>
          </address>
        </div>

        {/* Contact Column */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-lemon-primary mb-4">Contact Us</h3>
          <p>
            <a href="tel:+15551234567" className="hover:text-lemon-primary transition">
              (555) 123-4567
            </a>
          </p>
          <p className="mt-2">
            <a href="mailto:info@littlelemon.com" className="hover:text-lemon-primary transition">
              info@littlelemon.com
            </a>
          </p>
        </div>

        {/* Links Column */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-lemon-primary mb-4">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="hover:text-lemon-primary transition">Home</Link>
            <Link href="/menu" className="hover:text-lemon-primary transition">Menu</Link>
            <Link href="/about" className="hover:text-lemon-primary transition">About</Link>
            <Link href="/booking" className="hover:text-lemon-primary transition">Reservations</Link>
            <Link href="/contact" className="hover:text-lemon-primary transition">Contact</Link>
          </nav>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-lemon-light mt-8 pt-8 text-center text-sm text-lemon-light">
        <p>© {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer