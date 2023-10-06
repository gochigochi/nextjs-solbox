import '../globals.css'
import Layout from '../_components/login/layout/Layout'

export const metadata = {
  title: "Solbox App",
  description: "La aplicación para clientes de Solbox, en la que pueden ver energía generada por sus paneles e información sobre la Comunidad Solbox"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Layout>
        {children}
      </Layout>
    </html>
  )
}
