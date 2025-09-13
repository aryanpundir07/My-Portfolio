import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio-Aryan Pundir',
  description: 'Portfolio of Aryan Pundir, a Computer Science Engineering student at VIT Vellore passionate about AI and Full-Stack Development.',
  keywords: ['Computer Science Student', 'AI/ML', 'Full-Stack Developer', 'React', 'Python', 'AWS', 'VIT Vellore', 'Web Development'],
  authors: [{ name: 'Aryan Pundir' }],
  creator: 'Aryan Pundir',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aryanpundir.dev',
    title: 'Portfolio-Aryan Pundir',
    description: 'Computer Science Engineering student at VIT Vellore passionate about AI and Full-Stack Development.',
    siteName: 'Aryan Pundir Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio-Aryan Pundir',
    description: 'Computer Science Engineering student at VIT Vellore passionate about AI and Full-Stack Development.',
    creator: '@aryanpundir',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
