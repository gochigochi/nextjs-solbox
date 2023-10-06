import styled from "styled-components"
import { motion } from "framer-motion"
import Image from "next/image"

export const Dialogue = styled(motion.div)`
    position: relative;
    width: 28rem;
    padding: 2rem 2rem;
    align-items: center;
    box-shadow: var(--shadow);
    border: 1px solid var(--soft-border);
    border-radius: var(--border-radius);
    position: relative;
    bottom: 3rem;

    @media all and (max-width: 650px) {
        padding: 2rem 1.5rem;
    }

    @media all and (max-width: 550px) {
        box-shadow: none;
        border: none;
        width: 95%;
    }
`

export const LogoContainer = styled.div`
    position: relative;
    width: 5rem;
    height: 5rem;
    margin: 1rem auto 2.5rem auto;

    @media all and (max-wdidth: 550px) {
        width: 4rem;
        height: 4rem;
    }
`

export const Logo = styled(Image)`
    object-fit: contain;
`

export const FormEl = styled.form`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;
    width: 100%;
`

export const InputContainer = styled.div`
    position: relative;
`

export const Input = styled.input`
    width: 100%;
    padding: .8rem 1rem;
    font-size: 1rem;
    border: 1px solid var(--soft-gray);
    border-radius: 4px;

    &::placeholder {
        font-size: 1.2rem;
        opacity: .4;
    }
`

export const Error = styled.p`
    color: var(--alert);
    font-size: .8rem;
    position: absolute;
    bottom: -2rem;
    left: 50%;
    transform: translateX(-50%);
`

export const Forgot = styled.p`

`

export const ButtonsContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: 2.5rem;
`

export const SelectButton = styled.div`
    cursor: pointer;
`

export const Button = styled.button``