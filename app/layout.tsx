import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'AdWords PPC Expert - Professional PPC Management Services',
  description: 'Expert PPC management and consulting services to improve your ROI through intelligent advertising strategies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}