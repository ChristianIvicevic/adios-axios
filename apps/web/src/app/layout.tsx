import '@/styles/globals.css'
import type { ReactNode } from 'react'
import { ThemeProvider } from '@/app/components.client'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: {
    default: 'Adios Axios',
    template: '%s — Adios Axios'
  }
}

export default function Layout({ children }: { readonly children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
