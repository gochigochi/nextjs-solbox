import styled from "styled-components"

export const Container = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 0;
    display: grid;
    align-items: right;
    padding: 7rem 2rem;
    
    @media all and (min-width: 860px) {
        display: none;
    }
    `

export const MobileNavigation = styled.nav`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    form { 
        
        text-align: right;
        
        button {

            font-size: 1.5rem;
        }
    }

    a { 
        text-align: right; 
        font-size: 1.5rem;
    }
`
