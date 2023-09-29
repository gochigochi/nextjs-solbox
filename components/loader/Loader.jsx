"use client"

import { AnimatePresence } from "framer-motion"
import {
  LoaderContainer,
  Container,
  Inner,
  Svg,
  Shape,
  Outline,
} from "./Elements"
import { containerMotion } from "./Motions"

const Loader = () => {
  return (
    <AnimatePresence>
      <LoaderContainer
        variants={containerMotion}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Container>
          <Inner>
            <Svg
              viewBox="0 0 187.3 93.7"
              preserveAspectRatio="xMidYMid meet"
            >
              <Shape
                stroke="#25BDCE"
                fill="none"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
              />
              <Outline
                id="outline-bg"
                opacity="0.05"
                fill="none"
                stroke="#fff"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
              />
            </Svg>
          </Inner>
        </Container>
      </LoaderContainer>
    </AnimatePresence>
  )
}

export default Loader