import styled from "styled-components"

export const ErrorContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    justify-items: center;
`

export const ErrorInner = styled.div`
    max-height: 10rem;
    max-width: 10rem;
`

export const ErrorMsj = styled.p`

`

export const ResetButton = styled.button`
    margin-top: 1rem;
`