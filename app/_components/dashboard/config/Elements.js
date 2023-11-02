import styled from "styled-components"

export const Container = styled.div`
    position: relative;
    padding: 3rem;

    @media all and (max-width: 980px) {
        left: 0;
        width: 100%;
        margin: 0 auto;
        padding: 7rem .2rem 3rem 2rem;
    }

    @media all and (max-width: 550px) {
        padding: 7rem 0 3rem 0;
        left: 1rem;
    }
`


export const Title = styled.h2`
    margin-top: 2rem;
`

export const Subtitle = styled.h4`
    margin-bottom: 1rem;
`

export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    width: 100%;
    max-width: 25rem;
    padding: 3.5rem 0 3.5rem 0;
    border-bottom: 1px solid var(--soft-gray);
    position: relative;
`

export const InputContainer = styled.div`
    position: relative;
`

export const Divider = styled.hr`
    width: 100%;
    height: 1px;
    background-color: var(--soft-gray);
`

export const InputLabel = styled.label`
    margin-bottom: .8rem;
    font-size: .9rem;
`

export const Input = styled.input`
    height: 2.5rem;
    width: 100%;
    padding: 0 1rem;
    font-size: 1rem;
    border: 1px solid var(--soft-gray);
    margin-top: .5rem;

    &::placeholder {
        font-size: 1rem;
    }
`

export const Error = styled.p`
    color: var(--alert);
    font-size: .8rem;
    position: absolute;
    top: 2.7rem;
    right: .5rem;
    transform: translateY(-50%);
`

export const RevealIcon = styled.i`
    position: absolute;
    top: 3.3rem;
    right: -1.5rem;
    transform: translateY(-50%);
    cursor: pointer;
`

export const Button = styled.button`
    display: flex;
`

export const GeneralError = styled.p`
    color: var(--alert);
    font-size: .8rem;
    position: absolute;
    bottom: 0;
    left: 0;
`