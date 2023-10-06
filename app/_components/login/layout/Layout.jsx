"use client"

import StyledComponentsRegistry from "@/app/_lib/registry"
import { Montserrat } from 'next/font/google'
import styled from "styled-components"

const montserrat = Montserrat({ subsets: ['latin'] })

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`

const Layout = (props) => {

  return (
    <StyledComponentsRegistry>
        <body className={montserrat.className}>
          <Container>
            {props.children}
          </Container>
        </body>
    </StyledComponentsRegistry>
  )
}

export default Layout