'use client'

import { CheckCircle, Calendar, Clock, MapPin, Instagram, Mail, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-dark-blue pt-20 pb-12">
      <div className="container mx-auto px-4">
        
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-24 w-24 text-neon-cyan drop-shadow-[0_0_16px_rgba(0,255,255,0.5)]" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Registration Successful!
          </h1>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-space-gray rounded-xl p-8 border border-gray-600">
            
            {/* Thank You Message */}
            <div className="text-center mb-8">
              <p className="text-lg text-gray-300 leading-relaxed">
                Thank you for signing up for Innovire's Electromagnet Workshop! We're excited to have you join us for this hands-on learning experience.
              </p>
            </div>

            {/* Event Reminder Details */}
            <div className="bg-dark-blue/30 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold text-neon-cyan mb-6 text-center">
                Event Information
              </h2>
              
              <div className="grid grid-cols-1 gap-4 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-neon-cyan h-6 w-6 flex-shrink-0" />
                  <span className="text-lg">Saturday, February 22nd, 2025</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="text-neon-cyan h-6 w-6 flex-shrink-0" />
                  <span className="text-lg">10:45 AM to 2:30 PM</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="text-neon-cyan h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-lg">MindShare Workspace</span>
                    <br />
                    <span className="text-sm text-gray-400">
                      5100 Erin Mills Pkwy Suite I3, Mississauga, ON L5M 4Z5
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-space-gray/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-neon-cyan mb-4 text-shadow-glow">
                What to Expect:
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-neon-cyan mt-2 flex-shrink-0"></div>
                  <span>Hands-on exploration of electromagnetic principles</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-neon-cyan mt-2 flex-shrink-0"></div>
                  <span>Build your own electromagnets to take home</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-neon-cyan mt-2 flex-shrink-0"></div>
                  <span>Learn about real-world applications like Maglev trains and MRI machines</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-neon-cyan mt-2 flex-shrink-0"></div>
                  <span>Fun, interactive learning with fellow students</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="max-w-2xl mx-auto mt-12">
          <div className="bg-space-gray/30 backdrop-blur rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold text-neon-cyan mb-4">For any questions</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center justify-center space-x-2">
                <Instagram className="h-5 w-5 text-neon-cyan" />
                <span>Feel free to DM us on Instagram at </span>
                <a href="https://www.instagram.com/innovireteam/" className="text-neon-cyan hover:text-white transition-colors">
                  @innovireteam
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="h-5 w-5 text-neon-cyan" />
                <span>Email us at </span>
                <a href="mailto:innovireteam@gmail.com" className="text-neon-cyan hover:text-white transition-colors">
                  innovireteam@gmail.com!
                </a>
              </div>
            </div>
          </div>

          {/* Final Message & CTA */}
          <div className="text-center mt-8">
            <div className="bg-gradient-to-r from-neon-cyan/10 to-electric-blue/10 rounded-xl p-6 mb-6">
              <p className="text-lg font-semibold text-neon-cyan text-shadow-glow">
                We look forward to seeing you at the event!
              </p>
            </div>
            
            <Link href="/" className="inline-flex items-center space-x-2 border border-neon-cyan text-neon-cyan px-6 py-3 rounded-lg font-semibold hover:bg-neon-cyan hover:text-dark-blue transition-all duration-300 hover:scale-105">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}