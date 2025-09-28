'use client'

import { useState } from 'react'
import { ArrowRight, Calendar, Clock, MapPin, Target, Instagram, Mail, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark-blue">
      <div className="container mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Innovire Event Registration
          </h1>
          <p className="text-lg text-gray-300">Register for our upcoming STEM workshop</p>
        </div>

        {/* Main Event Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-space-gray rounded-xl p-8 border border-gray-600">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Event Info */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-neon-cyan mb-4">
                  Electromagnet Workshop
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-neon-cyan h-5 w-5" />
                    <span className="text-lg">Saturday, February 22nd, 2025</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="text-neon-cyan h-5 w-5" />
                    <span className="text-lg">10:45 AM to 2:30 PM</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-neon-cyan h-5 w-5" />
                    <span className="text-lg">
                      <a 
                        href="https://www.google.ca/maps/place/5100+Erin+Mills+Pkwy,+Mississauga,+ON+L5M+4Z5/@43.5586486,-79.7141661,17z/data=!3m1!4b1!4m6!3m5!1s0x882b41897f119643:0x5a53e16950932b0!8m2!3d43.5586447!4d-79.7115912!16s%2Fg%2F11bw3gd2g9?entry=ttu&g_ep=EgoyMDI1MDMwOC4wIKXMDSoASAFQAw%3D%3D" 
                        target="_blank"
                        className="hover:text-neon-cyan transition-colors duration-300"
                      >
                        MindShare Workspace | 5100 Erin Mills Pkwy Suite I3
                      </a>
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Target className="text-neon-cyan h-5 w-5" />
                    <span className="text-lg">Grades 6 to 12</span>
                  </div>
                </div>
              </div>

              {/* Image and CTA */}
              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="w-64 h-64 mx-auto bg-space-gray rounded-full flex items-center justify-center border border-neon-cyan/30 shadow-neon">
                    {/* Magnet Icon as placeholder */}
                    <div className="text-6xl">🧲</div>
                  </div>
                </div>
                
                <Link href="/form" className="inline-flex items-center space-x-2 bg-neon-cyan text-dark-blue px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-colors duration-200">
                  <span className="text-lg">Sign Up Here</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-space-gray/30 backdrop-blur rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold text-neon-cyan mb-4">For any questions</h3>
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
        </div>
      </div>
    </div>
  )
}