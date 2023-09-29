import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.div`
    position: relative;
    padding: 1.5rem 3rem 3rem 3rem;

    @media all and (max-width: 980px) {
        left: 0;
        width: 90%;
        margin: 0 auto;
        padding: 5.5rem 0 3rem 0;
    }
`

export const SectionTitle = styled.h2`
    height: 5rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--soft-gray);
    margin-bottom: 1.5rem;
`

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
    gap: 1.5rem;
`

export const Card = styled(Link)`
    background-color: #fff;
    position: relative;
    overflow: hidden;
    min-height: 25rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
`

export const CardImagePlaceholder = styled.div`
    height: 10rem;
    width: 100%;
    background-color: #ededed;
    display: grid;
    place-items: center;
`

export const Placeholder = styled.i`
    text-align: center;

    svg {
        font-size: 4rem;
        opacity: .3;
    }
`

export const CardImage = styled.img`
    display: block;
    width: 100%;
    height: 10rem;
    object-fit: cover;
`

export const Content = styled.div`
    padding: 1rem 2rem 2rem 2rem;
`

export const Title = styled.h2`
    font-size: 1.2rem;
    margin-bottom: .9rem;
    padding-bottom: .7rem;
    border-bottom: 1px solid var(--soft-gray);
    min-height: 5rem;
`

export const Summary = styled.div`
    font-size: .9rem;
    color: var(--dark-gray);
`