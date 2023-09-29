import { MdOutlineDashboardCustomize } from "react-icons/md"
import { GrArticle, GrSend } from 'react-icons/gr'
import { RiSettingsLine } from 'react-icons/ri'
import { BiLogInCircle, BiLogOutCircle } from 'react-icons/bi'
import { AiFillCloseCircle, AiFillQuestionCircle } from 'react-icons/ai'
import {
    Container,
    LogoContainer,
    Logo,
    Navigation,
    NavLink,
} from "./Elements"

const Nav = () => {
    return (
        <Container>
            <LogoContainer>
                <Logo src="/logos/solbox-logo.png" alt="" fill sizes="10vw" priority />
            </LogoContainer>
            <Navigation>
                <NavLink href="/dashboard" >
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
                <NavLink href="/settings" >
                    <span><RiSettingsLine /></span>
                    Configuración
                </NavLink>
                <NavLink href="/login" >
                    <span><BiLogInCircle /></span>
                    Ingresar
                </NavLink>
                {/* <NavLink href="" >
                    <span><BiLogOutCircle /></span>
                    Salir
                </NavLink> */}
                <NavLink href="/contact" >
                    <span><GrSend /></span>
                    Contacto
                </NavLink>
            </Navigation>
        </Container>
    )
}

export default Nav