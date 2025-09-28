import { Instagram, Mail, Globe } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-space-gray text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-neon-cyan rounded-full flex items-center justify-center text-dark-blue font-bold text-sm">
                I
              </div>
              <span className="text-xl font-bold">Innovire Events</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Join a community of young innovators, mentors, and changemakers shaping the future of Science, Technology, Engineering, and Mathematics.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neon-cyan">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block text-gray-300 hover:text-neon-cyan transition-colors text-sm">
                Home
              </a>
              <a href="/form" className="block text-gray-300 hover:text-neon-cyan transition-colors text-sm">
                Event Registration
              </a>
              <a href="mailto:innovireteam@gmail.com" className="block text-gray-300 hover:text-neon-cyan transition-colors text-sm">
                Contact Us
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neon-cyan">Connect With Us</h3>
            <div className="space-y-3">
              <a 
                href="https://www.instagram.com/innovireteam/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-neon-cyan transition-colors text-sm group"
              >
                <Instagram className="h-5 w-5 group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.3)]" />
                <span>@innovireteam</span>
              </a>
              <a 
                href="mailto:innovireteam@gmail.com" 
                className="flex items-center space-x-3 text-gray-300 hover:text-neon-cyan transition-colors text-sm group"
              >
                <Mail className="h-5 w-5 group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.3)]" />
                <span>innovireteam@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-space-gray/50 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Innovire. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Inspiring innovation through STEM education
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer