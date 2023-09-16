import '@/styles/globals.css'
import type { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from '@/app/components.client'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'Adios Axios',
  description: 'Compelling reasons to replace Axios with the native Fetch API',
  openGraph: {
    title: 'Adios Axios',
    description: 'Compelling reasons to replace Axios with the native Fetch API',
    url: 'https://adios-axios.com',
    locale: 'en_US',
    type: 'website'
  }
}

export default function Layout({ children }: { readonly children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
