import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion"

export const LoaderContainer = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: grid;
    place-items: center;
    z-index: 999;
`

const shapeAnimation = keyframes`
  12.5% {
    stroke-dasharray: calc(242.776657104492px*0.14), 242.776657104492px;
    stroke-dashoffset: calc(-242.776657104492px*0.11);
  }
  43.75% {
    stroke-dasharray: calc(242.776657104492px*0.35), 242.776657104492px;
    stroke-dashoffset: calc(-242.776657104492px*0.35);
  }
  100% {
    stroke-dasharray: calc(242.776657104492px*0.01), 242.776657104492px;
    stroke-dashoffset: calc(-242.776657104492px*0.99);
  }
`

const containerAnimation = keyframes`
  0% {
    transform: rotateY(0)
  }
  100% {
    transform: rotateY(360deg)
  }
`

export const Container = styled.div`
    width: 12rem;
    height: 12rem;
    animation: ${containerAnimation} 2.5s ease-in-out infinite;
`

export const Inner = styled.div`
    width: 100%;
    height: 100%;
    transform: rotate(90deg);
`

export const Svg = styled.svg`
    width: 100%;
    height: 100%;
    transform: matrix(1, 0, 0, 1, 0, 0);
`

export const Shape = styled.path`
    stroke-dasharray: calc(242.776657104492px*0.01), 242.776657104492px;
    stroke-dashoffset: 0;
    animation: ${shapeAnimation} 1.6s linear infinite;
`

export const Outline = styled.path``
