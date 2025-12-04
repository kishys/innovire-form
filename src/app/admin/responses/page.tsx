'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Download, LogOut, RefreshCw, Trash2, Calendar, User, Mail, Phone, School } from 'lucide-react'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

interface Response {
  id: string
  timestamp: string
  firstname: string
  lastname: string
  email: string
  grade: string
  how?: string
  extra?: string
}

export default function AdminResponsesPage() {
  const router = useRouter()
  const [responses, setResponses] = useState<Response[]>([])
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/verify')
      const data = await response.json()
      
      if (!data.authenticated) {
        router.push('/admin/login')
      } else {
        setAuthenticated(true)
        fetchResponses()
      }
    } catch {
      router.push('/admin/login')
    }
  }

  const fetchResponses = async () => {
    try {
      const response = await fetch('/api/responses')
      const data = await response.json()
      setResponses(data.responses || [])
    } catch (error) {
      console.error('Failed to fetch responses:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/')
  }

  const exportToPDF = async () => {
    if (responses.length === 0) return

    const doc = new jsPDF()
    
    // Add logo in top right corner
    try {
      const logoImg = new Image()
      logoImg.src = '/logo/innovire-logo.png'
      await new Promise((resolve) => {
        logoImg.onload = resolve
        logoImg.onerror = resolve // Continue even if logo fails to load
      })
      doc.addImage(logoImg, 'PNG', 170, 10, 25, 25)
    } catch (error) {
      console.log('Logo could not be loaded')
    }
    
    // Add title (black text)
    doc.setFontSize(18)
    doc.setTextColor(0, 0, 0)
    doc.text('Innovire Event Registrations', 14, 20)
    
    // Add date (gray text)
    doc.setFontSize(10)
    doc.setTextColor(80, 80, 80)
    doc.text(`Generated: ${new Date().toLocaleString()}`, 14, 28)
    doc.text(`Total Registrations: ${responses.length}`, 14, 34)
    
    // Prepare table data
    const tableData = responses.map(r => [
      new Date(r.timestamp).toLocaleString(),
      r.firstname,
      r.lastname,
      r.email,
      r.grade,
      r.how || 'N/A',
      r.extra || 'N/A'
    ])
    
    // Generate table (black and white)
    autoTable(doc, {
      startY: 40,
      head: [['Timestamp', 'First Name', 'Last Name', 'Email', 'Grade', 'Source', 'Comments']],
      body: tableData,
      theme: 'grid',
      headStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
        fontStyle: 'bold',
        lineWidth: 0.5,
        lineColor: [0, 0, 0]
      },
      alternateRowStyles: {
        fillColor: [250, 250, 250]
      },
      styles: {
        fontSize: 8,
        cellPadding: 3,
        textColor: [0, 0, 0],
        lineWidth: 0.1,
        lineColor: [150, 150, 150]
      },
      columnStyles: {
        0: { cellWidth: 32 },
        1: { cellWidth: 20 },
        2: { cellWidth: 20 },
        3: { cellWidth: 35 },
        4: { cellWidth: 15 },
        5: { cellWidth: 25 },
        6: { cellWidth: 35 }
      }
    })
    
    // Save PDF
    doc.save(`innovire-registrations-${new Date().toISOString().split('T')[0]}.pdf`)
  }

  useEffect(() => {
    checkAuth()
  }, [])

  if (loading || !authenticated) {
    return (
      <div className="min-h-screen bg-dark-blue flex items-center justify-center pt-16">
        <div className="text-center">
          <RefreshCw className="h-8 w-8 text-neon-cyan animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-blue pt-20 pb-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Form Responses</h1>
            <p className="text-gray-400">
              Total Registrations: <span className="text-neon-cyan font-semibold">{responses.length}</span>
            </p>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={fetchResponses}
              className="flex items-center gap-2 px-4 py-2 bg-space-gray text-gray-300 rounded-lg hover:bg-space-gray/80 border border-gray-600 hover:border-neon-cyan transition-all"
            >
              <RefreshCw className="h-4 w-4" />
              Refresh
            </button>
            <button
              onClick={exportToPDF}
              disabled={responses.length === 0}
              className="flex items-center gap-2 px-4 py-2 bg-neon-cyan text-dark-blue font-semibold rounded-lg hover:bg-neon-cyan/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="h-4 w-4" />
              Export PDF
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>

        {/* Responses List */}
        {responses.length === 0 ? (
          <div className="bg-space-gray rounded-lg p-12 text-center border border-gray-600">
            <User className="h-12 w-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">No form submissions yet</p>
            <p className="text-gray-500 text-sm mt-2">Responses will appear here when users submit the registration form</p>
          </div>
        ) : (
          <div className="space-y-4">
            {responses.map((response) => (
              <div
                key={response.id}
                className="bg-space-gray rounded-lg p-6 border border-gray-600 hover:border-neon-cyan/50 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="h-4 w-4" />
                    {new Date(response.timestamp).toLocaleString()}
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Student Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h3 className="text-neon-cyan font-semibold text-sm uppercase tracking-wider mb-2">Student Information</h3>
                      <div className="flex items-start gap-2">
                        <User className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-white font-medium">{response.firstname} {response.lastname}</p>
                          <p className="text-gray-400 text-xs">Grade {response.grade}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Mail className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300 text-sm">{response.email}</p>
                      </div>
                    </div>

                    {/* How Found Out */}
                    {response.how && (
                      <div className="space-y-2">
                        <h3 className="text-neon-purple font-semibold text-sm uppercase tracking-wider mb-2">Source</h3>
                        <p className="text-gray-300 text-sm">{response.how}</p>
                      </div>
                    )}
                  </div>

                  {/* Comments/Questions */}
                  {response.extra && (
                    <div className="pt-4 border-t border-gray-700">
                      <h3 className="text-gray-400 font-semibold text-xs uppercase tracking-wider mb-2">Comments/Questions</h3>
                      <p className="text-gray-300 text-sm">{response.extra}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
