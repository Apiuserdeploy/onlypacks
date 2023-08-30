import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar';
import Navigation from './components/navigation/Navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'onlyPaks',
  description: 'Los mejores packs por mega, mediafire, The best packs by mega, mediafire',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
          <Navigation />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
