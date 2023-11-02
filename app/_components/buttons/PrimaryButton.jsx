import styled from "styled-components"

export const Button = styled.div`
    padding: .5rem 1rem;
    min-width: 8rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: ${({disabled}) => disabled ? "var(--soft-gray)" : "var(--blue)"} ;
    border-radius: 3px;
    transition: all .2s;
    font-size: 1rem;

    &:hover {
        opacity: .7;
    }
`

const PrimaryButton = ({ children, disabled = false }) => <Button disabled={disabled}>{children}</Button>

export default PrimaryButton