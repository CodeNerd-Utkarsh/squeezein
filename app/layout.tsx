import type { Metadata } from 'next'
import { Inter, Quicksand, Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700']
})
const quickSand = Quicksand({
  style: ['normal',],
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700']

})

export const metadata: Metadata = {
  title: 'Squeezein',
  description: 'Effortless bookings',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${quickSand.className}`}>{children}</body>
    </html>
  )
}
