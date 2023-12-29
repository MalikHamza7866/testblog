import { Inter } from 'next/font/google'
import './globals.css'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ImanEmpower',
  description: 'Empower your iman with our latest iman refreshing posts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  )
}
