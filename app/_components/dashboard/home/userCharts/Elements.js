import styled from 'styled-components'

export const ResultsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media all and (max-width: 1250px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media all and (max-width: 980px) {
        grid-template-columns: 1fr 1fr;
    }

    @media all and (max-width: 550px) {
        grid-template-columns: 1fr;
    }
`

export const ResultBox = styled.div`
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: var(--alt-shadow);
    height: 7rem;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
    position: relative;
    overflow: hidden;

    &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: .3rem;
        background-color: #25BDCE;
    }

    @media all and (max-width: 1250px) {
        width: 100%;
    }
`

export const Result = styled.p`
    /* color: ${({color}) => color ? color : "var(--blue)"}; */
    color: var(--blue);
    font-size: 1.6rem;
    margin-bottom: .5rem;
    font-weight: 700;
`

export const Description = styled.h3`
    font-size: .9rem;
    font-weight: 400;
`

export const Unit = styled.span`
    font-size: 1rem;
    margin-left: .3rem;
`
