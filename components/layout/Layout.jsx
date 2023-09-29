"use client"

import StyledComponentsRegistry from "@/app/lib/registry"
import Nav from "./nav/Nav"
import { LayoutContainer } from "./Elements"

const Layout = (props) => {

  return (
    <StyledComponentsRegistry>
        <body className={props.font.className}>
          <Nav />
          <LayoutContainer>
            {props.children}
          </LayoutContainer>
        </body>
    </StyledComponentsRegistry>
  )
}

export default Layout