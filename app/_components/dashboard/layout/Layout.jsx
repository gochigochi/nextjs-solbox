"use client"

import StyledComponentsRegistry from "@/app/_lib/registry"
import { Montserrat } from 'next/font/google'
import Nav from "./nav/Nav"
import { LayoutContainer } from "./Elements"

const montserrat = Montserrat({ subsets: ['latin'] })

const Layout = (props) => {

  return (
    <StyledComponentsRegistry>
        <body className={montserrat.className}>
          <Nav />
          <LayoutContainer>
            {props.children}
          </LayoutContainer>
        </body>
    </StyledComponentsRegistry>
  )
}

export default Layout