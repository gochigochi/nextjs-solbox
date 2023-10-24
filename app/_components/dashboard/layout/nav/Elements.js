import styled from "styled-components"
import Image from "next/image"
import Link from "next/link"

export const Container = styled.div`
    position: fixed;
    height: 100vh;
    width: 12rem;
    display: grid;
    grid-template-rows: 8.5rem 1fr 4rem;
    background-color: #fff;
    box-shadow: 0px 0 5px 2px rgba(0, 0, 0, 0.1);

    @media all and (max-width: 860px) {
        width: 100%;
        padding: 0 1.5rem;
        height: 3.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 999;
    }
`

export const LogoContainer = styled.div`
    position: relative;
    width: 100%;
    height: 4rem;
    place-self: center;

    @media all and (max-width: 860px) {
        height: 3rem;
        width: 3rem;
    }
`

export const Logo = styled(Image)`
    object-fit: contain;
`

export const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    padding-left: .6rem;

    @media all and (max-width: 860px) {
        display: none;
    }
`

export const NavLink = styled(Link)`
    margin-bottom: 1.3rem;
    font-size: 1rem;

    span {
        margin-right: .7rem;
        font-size: 1rem;
        position: relative;
        top: 2px;
    }
`

export const FakeNavLink = styled.button`
    margin-bottom: 1.3rem;
    font-size: 1rem;
    text-align: left;

    span {
        margin-right: .7rem;
        font-size: 1rem;
        position: relative;
        top: 2px;
    }
`

export const NavFooter = styled.div`
    @media all and (max-width: 860px) {
        display: none;
    }
`

export const FooterLink = styled(Link)`
    font-size: .8rem;
`