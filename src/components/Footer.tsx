'use client'

import { Guitar, Github, Twitter, Facebook } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background-secondary border-t border-accent-gold/20 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Guitar className="h-8 w-8 text-accent-gold" />
              <span className="text-2xl font-playfair font-bold text-gradient">
                Electric Guitars
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Comprehensive guide to electric guitar history, famous brands, and iconic models. 
              From vintage classics to modern innovations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent-gold transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-gold transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-gold transition-colors duration-300">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-accent-gold transition-colors duration-300">Home</Link></li>
              <li><Link href="/history" className="text-gray-400 hover:text-accent-gold transition-colors duration-300">History</Link></li>
              <li><Link href="/brands" className="text-gray-400 hover:text-accent-gold transition-colors duration-300">Brands</Link></li>
              <li><Link href="/guitars" className="text-gray-400 hover:text-accent-gold transition-colors duration-300">Guitars</Link></li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Popular Brands</h3>
            <ul className="space-y-2">
              <li><Link href="/brands/fender" className="text-gray-400 hover:text-accent-gold transition-colors duration-300">Fender</Link></li>
              <li><Link href="/brands/gibson" className="text-gray-400 hover:text-accent-gold transition-colors duration-300">Gibson</Link></li>
              <li><Link href="/brands/prs" className="text-gray-400 hover:text-accent-gold transition-colors duration-300">PRS</Link></li>
              <li><Link href="/brands/rickenbacker" className="text-gray-400 hover:text-accent-gold transition-colors duration-300">Rickenbacker</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-gold/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Electric Guitars Showcase. Created by MiniMax Agent.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-accent-gold transition-colors duration-300 text-sm">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-accent-gold transition-colors duration-300 text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer