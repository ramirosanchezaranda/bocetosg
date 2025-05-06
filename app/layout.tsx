import '@/src/styles/globals.css'
import type { Metadata } from 'next'
import Navbar from '@/src/components/Navbar'

export const metadata: Metadata = {
  title: 'Salta Gaming',
  description: 'Los mejores torneos de gaming en Salta',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-[var(--primary-dark)]">
        <Navbar />
        {children}
      </body>
    </html>
  )
}