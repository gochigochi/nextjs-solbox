import { useState } from "react"
import dynamic from "next/dynamic"
import { logout } from "@/app/_lib/logout"
import { MdOutlineDashboardCustomize } from "react-icons/md"
import { GrArticle, GrSend } from 'react-icons/gr'
import { RiSettingsLine } from 'react-icons/ri'
import { BiLogInCircle, BiLogOutCircle } from 'react-icons/bi'
import { AiFillQuestionCircle } from 'react-icons/ai'
import MenuIcon from "../menuIcon/MenuIcon"
import {
    Container,
    LogoContainer,
    Logo,
    Navigation,
    NavLink,
    FakeNavLink,
    NavFooter,
} from "./Elements"
const DynMobileNav = dynamic(() => import("../mobileNav/MobileNav"))

const Nav = ({ logged }) => {

    const [open, setOpen] = useState(false)

    return (
        <Container>
            <LogoContainer>
                <Logo src="https://firebasestorage.googleapis.com/v0/b/solbox-app.appspot.com/o/solbox-logo.png?alt=media&token=7f8dbf38-1da3-443d-bd53-ff6eccff66ff&_gl=1*hux6co*_ga*MjA5NzcwMTI5NS4xNjk1NzM4Mzcw*_ga_CW55HF8NVT*MTY5Njk1Mjc1OS4yLjEuMTY5Njk1MzcxMi41MC4wLjA." alt="" fill sizes="10vw" priority />
            </LogoContainer>
            <MenuIcon open={open} setOpen={setOpen} />
            {open ? <DynMobileNav logged={logged} setOpen={setOpen} /> : null}
            <Navigation>
                <NavLink href="/home" >
                    <span><MdOutlineDashboardCustomize /></span>
                    Escritorio
                </NavLink>
                <NavLink href="/blog" >
                    <span><GrArticle /></span>
                    Blog
                </NavLink>
                <NavLink href="/faqs" >
                    <span><AiFillQuestionCircle /></span>
                    Dudas frecuentes
                </NavLink>
                {
                    !logged ?
                        <NavLink href="/login" >
                            <span><BiLogInCircle /></span>
                            Ingresar
                        </NavLink> :
                        <form>
                            <FakeNavLink formAction={logout}>
                                <span><BiLogOutCircle /></span>
                                Salir
                            </FakeNavLink>
                        </form>
                }
                <NavLink href="/contact" >
                    <span><GrSend /></span>
                    Contacto
                </NavLink>
            </Navigation>
            <NavFooter>

            </NavFooter>
        </Container>
    )
}

export default Nav