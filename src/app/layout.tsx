import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Electric Guitars Showcase | History, Brands & Iconic Models',
  description: 'Explore the comprehensive history of electric guitars from the 1930s to 2025. Discover famous brands like Fender, Gibson, PRS, and Rickenbacker. Learn about iconic models and their evolution.',
  keywords: 'electric guitars, Fender, Gibson, PRS, Rickenbacker, Ibanez, guitar history, Stratocaster, Les Paul, Telecaster, SG, music instruments',
  authors: [{ name: 'MiniMax Agent' }],
  creator: 'MiniMax Agent',
  publisher: 'MiniMax Agent',
  robots: 'index, follow',
  openGraph: {
    title: 'Electric Guitars Showcase | History, Brands & Iconic Models',
    description: 'Comprehensive guide to electric guitar history and famous brands',
    type: 'website',
    locale: 'en_US',
    siteName: 'Electric Guitars Showcase',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electric Guitars Showcase',
    description: 'Comprehensive guide to electric guitar history and famous brands',
  },
  other: {
    'application-ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Electric Guitars Showcase',
      description: 'Comprehensive history of electric guitars and famous brands',
      url: 'https://electric-guitars-showcase.vercel.app',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://electric-guitars-showcase.vercel.app/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    })
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="canonical" href="https://electric-guitars-showcase.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0b" />
      </head>
      <body className="font-sans bg-background text-white antialiased">
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}