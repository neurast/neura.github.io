import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Neura Smart Technologies - AI & Robotics Intelligence',
  description: 'Next-generation AI systems, medical intelligence platforms, and cyber-physical infrastructures powered by computer vision, LLMs, and advanced MLOps.',
  keywords: 'AI, Robotics, MLOps, Computer Vision, Medical AI, Deep Tech',
  openGraph: {
    title: 'Neura Smart Technologies',
    description: 'Engineering Intelligence for the Real World',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0e27" />
      </head>
      <body className={`${inter.className} bg-neura-darker text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
