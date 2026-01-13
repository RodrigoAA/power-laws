import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Las 48 Leyes del Poder | Guía Interactiva Completa',
  description: 'Explora las 48 Leyes del Poder de Robert Greene con ejemplos históricos, explicaciones detalladas y aplicaciones modernas. Guía visual interactiva.',
  keywords: ['48 leyes del poder', 'Robert Greene', 'estrategia', 'poder', 'liderazgo'],
  authors: [{ name: 'Power Laws' }],
  openGraph: {
    title: 'Las 48 Leyes del Poder',
    description: 'Guía visual interactiva de las 48 Leyes del Poder',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={ibmPlexSans.variable}>
      <body className="antialiased flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
