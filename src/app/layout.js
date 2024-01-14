import { Lato,Playfair_Display} from 'next/font/google'
import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

// const inter = Inter({ subsets: ['latin'] })
const lato = Lato({
  subsets:['latin'],
  display:'swap',
  variable:'--font-lato', 
  weight: ['100', '300', '400','700', '900']
})
const playfair = Playfair_Display({
  subsets:['latin'],
  display:'swap',
  variable:'--font-playfair', 
  weight: [ '400','600','700','800', '900']
})

export const metadata = {
  title: 'Laxill',
  description: 'Data Analytics',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable}`}>
      <body className={`${lato.variable}`}>
        <Nav/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
