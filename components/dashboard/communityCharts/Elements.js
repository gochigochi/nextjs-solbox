import styled from 'styled-components'

export const GraphContainer = styled.div`
    display: grid;
    gap: 1rem;
`

export const GraphContainerSubdivision = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media all and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`

export const GraphBox = styled.div`
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: var(--alt-shadow);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1rem 2rem 0 2rem;

    @media all and (max-width: 450px) {
        padding: .5rem 0 0 .5rem;
    }
`

export const GraphTitle = styled.h3`
    margin-top: .5rem;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    font-weight: 700;
`