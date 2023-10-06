import '../globals.css'
import { Montserrat } from 'next/font/google'
import Layout from '../_components/dashboard/layout/Layout'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: "Solbox App",
  description: "La aplicación para clientes de Solbox, en la que pueden ver energía generada por sus paneles e información sobre la Comunidad Solbox"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Layout font={montserrat}>
        {children}
      </Layout>
    </html>
  )
}
