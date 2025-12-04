'use client'

import { useState } from 'react'
import { ArrowRight, Calendar, Clock, MapPin, Target, Instagram, Mail, ArrowLeft, User, UserCheck, GraduationCap, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function FormPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    grade: '',
    how: '',
    extra: ''
  })

  const [submitting, setSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      // Save to our API
      await fetch('/api/responses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      // Show success animation
      setShowSuccess(true)

      // Wait 2 seconds then redirect to home
      setTimeout(() => {
        router.push('/')
      }, 2000)
    } catch (error) {
      console.error('Submission error:', error)
      alert('There was an error submitting the form. Please try again.')
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-dark-blue pt-20 pb-12 relative">
      {/* Success Animation Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center animate-fadeIn">
          <div className="text-center">
            <div className="mb-4 animate-checkmark">
              <CheckCircle className="h-24 w-24 text-neon-cyan mx-auto drop-shadow-[0_0_30px_rgba(0,255,255,0.8)]" />
            </div>
            <p className="text-white text-2xl font-semibold animate-slideUp">
              Registration Successful!
            </p>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Join Our Next Innovire Event
          </h1>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Column - Registration Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-space-gray rounded-xl p-8 border border-gray-600">
                <h2 className="text-xl md:text-2xl font-bold text-neon-cyan text-center mb-6">
                  Registration Details
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300 flex items-center space-x-2">
                        <User className="h-4 w-4 text-neon-cyan" />
                        <span>First Name</span>
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        placeholder="Enter Your First Name"
                        required
                        className="w-full px-4 py-3 bg-dark-blue/50 border border-space-gray rounded-lg focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 outline-none transition-all duration-300 text-white placeholder-gray-400"
                        value={formData.firstname}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    {/* Last Name */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300 flex items-center space-x-2">
                        <UserCheck className="h-4 w-4 text-neon-cyan" />
                        <span>Last Name</span>
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        placeholder="Enter Your Last Name"
                        required
                        className="w-full px-4 py-3 bg-dark-blue/50 border border-space-gray rounded-lg focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 outline-none transition-all duration-300 text-white placeholder-gray-400"
                        value={formData.lastname}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-300 flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-neon-cyan" />
                      <span>Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter an Email"
                      required
                      className="w-full px-4 py-3 bg-dark-blue/50 border border-space-gray rounded-lg focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 outline-none transition-all duration-300 text-white placeholder-gray-400"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Grade */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-300 flex items-center space-x-2">
                      <GraduationCap className="h-4 w-4 text-neon-cyan" />
                      <span>Grade</span>
                    </label>
                    <input
                      type="number"
                      name="grade"
                      placeholder="Enter Your School Grade"
                      min="6"
                      max="12"
                      className="w-full px-4 py-3 bg-dark-blue/50 border border-space-gray rounded-lg focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 outline-none transition-all duration-300 text-white placeholder-gray-400"
                      value={formData.grade}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* How did you find out */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-300">
                      How did you find out about this event?
                    </label>
                    <input
                      type="text"
                      name="how"
                      placeholder="e.g. Social Media, Friends, etc."
                      className="w-full px-4 py-3 bg-dark-blue/50 border border-space-gray rounded-lg focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 outline-none transition-all duration-300 text-white placeholder-gray-400"
                      value={formData.how}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Questions/Comments */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-300">
                      Feel free to ask questions or comments!
                    </label>
                    <textarea
                      name="extra"
                      placeholder="Here!"
                      rows={4}
                      className="w-full px-4 py-3 bg-dark-blue/50 border border-space-gray rounded-lg focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 outline-none transition-all duration-300 text-white placeholder-gray-400 resize-vertical"
                      value={formData.extra}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-neon-cyan text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-400 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span>{submitting ? 'Submitting...' : 'Submit!'}</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column - Event Information */}
            <div className="order-1 lg:order-2 space-y-6">
              
              {/* Event Details Card */}
              <div className="bg-space-gray rounded-xl p-6 border border-gray-600">
                <h3 className="text-xl font-bold text-neon-cyan mb-4">Event Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-neon-cyan h-5 w-5 flex-shrink-0" />
                    <span className="text-white">Saturday, February 22nd, 2025</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="text-neon-cyan h-5 w-5 flex-shrink-0" />
                    <span className="text-white">10:45 AM to 2:30 PM</span>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-neon-cyan h-5 w-5 flex-shrink-0 mt-1" />
                    <div>
                      <a 
                        href="https://www.google.ca/maps/place/5100+Erin+Mills+Pkwy,+Mississauga,+ON+L5M+4Z5/@43.5586486,-79.7141661,17z/data=!3m1!4b1!4m6!3m5!1s0x882b41897f119643:0x5a53e16950932b0!8m2!3d43.5586447!4d-79.7115912!16s%2Fg%2F11bw3gd2g9?entry=ttu&g_ep=EgoyMDI1MDMwOC4wIKXMDSoASAFQAw%3D%3D" 
                        target="_blank"
                        className="hover:text-neon-cyan transition-colors text-white"
                      >
                        MindShare Workspace<br />
                        <span className="text-sm text-gray-400">5100 Erin Mills Pkwy Suite I3, Mississauga, ON L5M 4Z5</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Target className="text-neon-cyan h-5 w-5 flex-shrink-0" />
                    <span className="text-white">Grades 6 to 12</span>
                  </div>
                </div>
              </div>

              {/* Event Description Card */}
              <div className="bg-space-gray rounded-xl p-6 border border-gray-600">
                <h3 className="text-xl font-bold text-neon-cyan mb-4">About the Workshop</h3>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Join a community of young innovators, mentors, and changemakers as we explore the fascinating world of electromagnetism through hands-on learning.
                  </p>
                  <p>
                    This workshop is designed to accelerate your STEM journey with immersive activities where you'll build your own electromagnets and discover real-world applications.
                  </p>
                  <p>
                    Experience the future of Science, Technology, Engineering, and Mathematics through interactive exploration of Maglev trains, MRI machines, and more!
                  </p>
                </div>
              </div>
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
          
          {/* Back Button */}
          <div className="text-center mt-8">
            <Link href="/" className="inline-flex items-center space-x-2 border border-neon-cyan text-neon-cyan px-6 py-3 rounded-lg font-semibold hover:bg-neon-cyan hover:text-dark-blue transition-all duration-300">
              <ArrowLeft className="h-5 w-5" />
              <span>Go Back</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}