'use client'
import { useState } from 'react'
export function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    const res = await fetch('/api/waitlist', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ email }) })
    setStatus(res.ok ? 'success' : 'error')
  }
  return (
    <section id="waitlist" className="py-20 px-6 bg-gray-50">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Join the waitlist</h2>
        <p className="text-gray-500 mb-8">Be the first to know when we launch.</p>
        {status === 'success' ? (
          <p className="text-green-600 font-medium">You&apos;re on the list!</p>
        ) : (
          <form onSubmit={submit} className="flex gap-2">
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[__PRIMARY_COLOR__]" />
            <button type="submit" disabled={status==='loading'} className="bg-[__PRIMARY_COLOR__] text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition disabled:opacity-50">
              {status==='loading' ? '...' : 'Join'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
