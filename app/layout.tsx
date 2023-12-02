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
        <body className="h-screen flex items-center justify-center box-border">      
            <div id='canvasWrapper' className="aspect-video w-[90%] max-w-[1080px] overflow-hidden bg-blue-500 rounded-2xl">
            {children}
            </div>
        </body>
    </html>
  )
}
