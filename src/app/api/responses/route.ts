import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'innovire-secret-key-change-in-production'

// In-memory storage (for demo - use database in production)
let responses: any[] = []

// Verify admin authentication
function verifyAuth(request: NextRequest) {
  const token = request.cookies.get('admin_token')?.value
  if (!token) return false
  
  try {
    jwt.verify(token, JWT_SECRET)
    return true
  } catch {
    return false
  }
}

// GET - Fetch all responses (protected)
export async function GET(request: NextRequest) {
  if (!verifyAuth(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  return NextResponse.json({ responses })
}

// POST - Store new response
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const response = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...data
    }
    
    responses.push(response)
    
    return NextResponse.json({ success: true, id: response.id })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to save response' },
      { status: 500 }
    )
  }
}

// DELETE - Clear all responses (protected)
export async function DELETE(request: NextRequest) {
  if (!verifyAuth(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  responses = []
  return NextResponse.json({ success: true })
}
