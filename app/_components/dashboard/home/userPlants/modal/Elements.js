import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    display: grid;
    place-items: center;
    cursor: pointer;
    z-index: 999;
`

export const Inner = styled(motion.div)`
    background-color: #ffffff;
    box-shadow: var(--alt-shadow);
    cursor: default;
    padding: 2rem;
    border-radius: var(--border-radius);
    width: 95%;
    max-width: 33rem;
`