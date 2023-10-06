import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    max-width: var(--max-width);
    padding: 1.5rem 3rem 3rem 3rem;

    @media all and (max-width: 980px) {
        left: 0;
        width: 100%;
        margin: 0 auto;
        padding: 4.5rem 0 3rem 0;
    }
`

export const Head = styled.div`
    position: relative;
    width: 100%;
    height: 23rem;
`

export const HeroPlaceholder = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
`

export const Placeholder = styled.i`
    text-align: center;

    svg {
        font-size: 10rem;
        opacity: .1;
    }
`

export const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .6);
`

export const TextContainer = styled.div`
    position: absolute;
    width: 80%;
    bottom: 3.5rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    position: relative;
    color: #fff;
    font-size: 3rem;

    &::after {
        content: '';
        position: absolute;
        bottom: -1.5rem;
        left: 0;
        width: 7rem;
        height: 2px;
        background-color: #fff;
    }

    @media all and (max-width: 768px) {
        font-size: 2rem;
    }

    @media all and (max-width: 450px) {
        font-size: 1.5rem;
    }
`

export const Subtitle = styled.h3`
    color: var(--blue);
    margin-bottom: .5rem;
    font-weight: 400;
`

export const Body = styled.div`
    width: 80%;
    margin: 3rem auto;
`

export const Content = styled.div`

    h3 {
        font-size: 2rem;
        margin-bottom: 1.5rem;
        margin-top: 3rem;
    }

    h4 {
        font-size: 1.6rem;
        margin-bottom: 1.5rem;
    }

    p {
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }

    span {
        font-size: 1.2rem;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin: 5rem 0;
    }
`