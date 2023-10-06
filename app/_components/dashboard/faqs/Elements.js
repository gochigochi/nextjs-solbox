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
    span {
        color: var(--blue);
    }
`

export const AccordionContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    z-index: 2;
    width: 90%;
    max-width: 1200px;
    margin-top: 2rem;

    @media all and (max-width: 980px) {
        width: 90%;
    }
`

export const Item = styled.div`
    margin: .5rem 0;
`

export const Qcontainer = styled.div`
    position: relative;
    cursor: pointer;
    padding-right: 3rem;
    left: 2rem;
`

export const Chevron = styled.div`
    position: absolute;
    width: .7rem;
    height: .7rem;
    top: 50%;
    transform: translateY(-50%);
    left: -1.5rem;
    align-self: center;
    
    &:before {
        ${({ open }) => open && 'transform: rotate(90deg);'}
        content: "";
        position: absolute;
        width: 0; 
        height: 0; 
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 7px solid;
        transition: all .2s ease-in-out;
    }
`

export const Acontainer = styled.div`
    overflow: hidden;
    max-height: ${({ open }) => open ? '1000rem' : '.05rem'};
    transition: all .2s ease-in-out;
    padding: 0 2rem;
`

export const Q = styled.div`
    font-weight: 600;
`

export const A = styled.div`
    padding: 1rem 0;
    font-size: .9rem;

    h3 {
        margin: 1.5rem 0;
    }

    p {
        margin-bottom: 1rem;
    }

    ul {
        list-style-type: circle;
        padding-left: 2rem;
        margin: 1rem 0;
    }

    li {
        margin-bottom: .5rem;
    }

    img {
        margin: 1rem 0;
        border-radius: 15px;
        border: 1px solid;
        width: 100%;
    }
`