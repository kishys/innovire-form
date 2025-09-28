'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark-blue border-b border-gray-600">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-neon-cyan rounded-full flex items-center justify-center text-dark-blue font-bold text-sm">
              I
            </div>
            <span className="text-xl font-bold text-white">Innovire Events</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-neon-cyan transition-colors duration-300">
              Home
            </Link>
            <Link href="/form" className="text-gray-300 hover:text-neon-cyan transition-colors duration-300">
              Register
            </Link>
            <a href="https://innovire.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neon-cyan transition-colors duration-300">
              Main Site
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-neon-cyan transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-space-gray rounded-lg mt-2 border border-gray-600">
              <Link 
                href="/" 
                className="block px-3 py-2 text-gray-300 hover:text-neon-cyan transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/form" 
                className="block px-3 py-2 text-gray-300 hover:text-neon-cyan transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
              <a 
                href="https://innovire.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-3 py-2 text-gray-300 hover:text-neon-cyan transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Main Site
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar