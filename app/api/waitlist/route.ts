import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(req: NextRequest) {
  const { email } = await req.json()
  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }
  if (resend && process.env.RESEND_AUDIENCE_ID) {
    await resend.contacts.create({ email, audienceId: process.env.RESEND_AUDIENCE_ID })
  }
  return NextResponse.json({ success: true })
}
