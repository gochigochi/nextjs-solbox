import { logout } from "@/app/_lib/logout"
import { MdOutlineDashboardCustomize } from "react-icons/md"
import { GrArticle, GrSend } from 'react-icons/gr'
import { RiSettingsLine } from 'react-icons/ri'
import { BiLogInCircle, BiLogOutCircle } from 'react-icons/bi'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { NavLink, FakeNavLink } from "../nav/Elements"
import {
    Container,
    MobileNavigation,
} from "./Elements"

const MobileNav = ({ logged, setOpen }) => {

    return (
        <Container>
            <MobileNavigation>
                <NavLink href="/home"onClick={() => setOpen(false)}>
                    <span><MdOutlineDashboardCustomize /></span>
                    Escritorio
                </NavLink>
                <NavLink href="/blog" onClick={() => setOpen(false)}>
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
                        <>
                            <NavLink href="/config" >
                                <span><RiSettingsLine /></span>
                                Configuración
                            </NavLink>
                            <form>
                                <FakeNavLink formAction={logout}>
                                    <span><BiLogOutCircle /></span>
                                    Salir
                                </FakeNavLink>
                            </form>
                        </>
                }
                <NavLink href="/contact" >
                    <span><GrSend /></span>
                    Contacto
                </NavLink>
            </MobileNavigation>
        </Container>
    )
}

export default MobileNav