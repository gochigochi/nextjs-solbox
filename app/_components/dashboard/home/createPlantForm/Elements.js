import styled from "styled-components"

export const Form = styled.form`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;
    width: 100%;
    position: relative;
`

export const InputContainer = styled.div`
    position: relative;
`

export const Input = styled.input`
    width: 100%;
    padding: 0 1rem;
    font-size: 1rem;
    border: 1px solid var(--soft-gray);

    &::placeholder {
        font-size: 1.2rem;
        opacity: .4;
    }
`

export const ButtonsContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: 2.5rem;
`

export const Button = styled.button``

export const Error = styled.p`
    color: var(--alert);
    font-size: .8rem;
    position: absolute;
    top: 45%;
    right: .5rem;
    transform: translateY(-50%);
`

export const GeneralError = styled.p`
    color: var(--alert);
`

export const MapContainer = styled.div`
    width: 100%;
`

export const Label = styled.p`
    margin-bottom: 1rem;
`

export const FormMsgContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba( 250, 250, 250, 0.5);
`

export const FormMsg = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 5px;
    transform: translate(-50%, -50%);
    padding: 2rem;
    background-color: #fff;
    box-shadow: var(--shadow);
`