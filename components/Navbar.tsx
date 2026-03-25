import Link from 'next/link'
export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
      <span className="font-bold text-xl">__PROJECT_NAME__</span>
      <div className="flex items-center gap-6 text-sm">
        <Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link>
        <Link href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
        <Link href="#waitlist" className="bg-[__PRIMARY_COLOR__] text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition">Get started</Link>
      </div>
    </nav>
  )
}
