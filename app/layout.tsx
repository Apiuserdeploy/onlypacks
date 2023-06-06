import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar';
import Navegacion from './components/navegacion/Navegacion';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'YouPaks',
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
          <Navegacion />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
