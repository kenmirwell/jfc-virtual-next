import type { Metadata } from 'next'
import './globals.css';
import './style/app.scss';

export const metadata: Metadata = {
  title: 'Jollibee Virtual Tour',
  description: 'Virtual tour of Jollibee Incorporated history',
  viewport: 'idth=device-width, initial-scale=1, maximum-scale=1'
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
