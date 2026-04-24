import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const font = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: '__PROJECT_NAME__',
  description: '__TAGLINE__',
  openGraph: { title: '__PROJECT_NAME__', description: '__TAGLINE__' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.variable}>
      <body className="font-sans bg-white text-gray-900">{children}</body>
    </html>
  )
}
