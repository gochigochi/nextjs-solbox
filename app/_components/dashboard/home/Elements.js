import styled from "styled-components"

export const Container = styled.section`
    width: 100%;
    max-width: var(--max-width);
    position: relative;
    padding: 1.5rem 3rem 3rem 3rem;

    @media all and (max-width: 980px) {
        left: 0;
        width: 90%;
        margin: 0 auto;
        padding: 5.5rem 0 3rem 0;
    }

    @media all and (max-width: 860px) {
        padding: 4rem 0 3rem 0; 
    }
`

export const Header = styled.div``

export const WelcomeText = styled.p`
    height: 5rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--soft-gray);
    margin-bottom: 1.5rem;
    font-size: 1.1rem;

    @media all and (max-width: 450px) {
        font-size: .9rem;
    }
`

export const Section = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;

    @media all and (max-width: 1500px) {
        grid-template-columns: 1fr 1fr;
    }

    @media all and (max-width: 1250px) {
        grid-template-columns: 1fr;
    }
`

export const Hr = styled.hr`
    border-top: 1px solid #ededed;
    margin: 3rem 0;
`

export const Column = styled.div``

export const ColumnTitle = styled.h2`
    margin-bottom: 1.5rem;

    @media all and (max-width: 450px) {
        font-size: 1.1rem;
    }
`

export const ProductionBox = styled.div`
    background-color: #ffffff;
    width: 100%;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: var(--alt-shadow);
    margin-bottom: 2rem;
`

export const ProductionNumber = styled.p`
    color: var(--blue);
    font-size: 4rem;
    font-weight: 700;
    padding-bottom: .5rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--soft-gray);

    span {
        font-size: 1rem;
    }
`

export const ProductionText = styled.p`
    margin-bottom: .5rem;
    font-weight: 700;
`

export const ProductionDetail = styled.p`
    font-size: .8rem;
    color: var(--dark-gray);
`

export const MapContainer = styled.div`
    width: 100%rem;
    height: 30rem;
    border-radius: 15px;
    overflow: hidden;
`