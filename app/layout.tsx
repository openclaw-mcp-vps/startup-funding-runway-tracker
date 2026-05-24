import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Runway Tracker — Know Your Burn Rate Instantly',
  description: 'Connect your bank accounts and get real-time startup runway calculations, automated expense categorization, and burn rate dashboards. Built for founders and CFOs.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a6eb819b-ccd1-442e-a5a2-2edc12294dcd"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
