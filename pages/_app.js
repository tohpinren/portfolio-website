import '../globals.css'

import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Toh Pin Ren',
  description: 'Pin Ren\'s portfolio',
}

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
