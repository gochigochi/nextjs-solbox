import styled from "styled-components"

export const Dialogue = styled.div`
    position: relative;
    width: 28rem;
    padding: 2rem 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
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