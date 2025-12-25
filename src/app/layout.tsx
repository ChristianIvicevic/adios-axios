import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import { ThemeProvider } from '@/app/components.client'
import { cn } from '@/lib/utils'

const fontSans = Inter({
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-sans',
})

export const metadata: Metadata = {
	title: 'Adios Axios',
	description: 'Compelling reasons to replace Axios with the native Fetch API',
	openGraph: {
		title: 'Adios Axios',
		description: 'Compelling reasons to replace Axios with the native Fetch API',
		url: 'https://adios-axios.com',
		locale: 'en_US',
		type: 'website',
	},
}

export default function RootLayout({ children }: { children: ReactNode }) {
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
