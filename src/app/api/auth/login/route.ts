import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const ADMIN_PASSWORD = 'innovire2025team'
const JWT_SECRET = process.env.JWT_SECRET || 'innovire-secret-key-change-in-production'

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()

    if (password === ADMIN_PASSWORD) {
      // Create JWT token
      const token = jwt.sign(
        { admin: true, timestamp: Date.now() },
        JWT_SECRET,
        { expiresIn: '7d' }
      )

      // Set HTTP-only cookie
      const response = NextResponse.json({ success: true })
      response.cookies.set('admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      })

      return response
    }

    return NextResponse.json(
      { success: false, message: 'Invalid password' },
      { status: 401 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    )
  }
}
