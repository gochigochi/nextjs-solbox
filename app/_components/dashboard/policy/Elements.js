import styled from 'styled-components'

export const Container = styled.article`
    display: flex;
    flex-direction: column;
    position: relative;
    width: calc(100% - 15rem);
    max-width: 1900px;
    padding: 3rem;

    @media all and (max-width: 980px) {
        left: 0;
        width: 90%;
        margin: 0 auto;
        padding: 6.5rem 0 3rem 0;
    }
`

export const Header = styled.div`
    padding-left: 1rem;
`

export const Title = styled.h1`

`

export const Content = styled.div`
    padding: 1rem;
    line-height: 1.5rem;

    p {
        margin-bottom: 1rem;
    }

    ul {
        margin-bottom: 1rem;
        padding-left: 2rem;
    }

    li {
        margin-bottom: .2rem;
        font-size: .9rem;
    }
`

export const LoaderContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`