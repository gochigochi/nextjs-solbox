import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    position: relative;
`

export const Top = styled.div`
    text-align: center;
    margin-bottom: 2rem;
`

export const Bottom = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 25rem;
    margin: 0 auto;
`

export const Button = styled.button``

export const Msg = styled.div`
    width: 50%;
    max-width: 15rem;
    padding: 1rem;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: var(--shadow);
`