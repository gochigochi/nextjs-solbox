"use client"

import { firebaseDeleteUser } from "@/app/_firebase/auth/firebaseDeleteUser"
import Password from "./Password/Password"
import { Container, Title } from "./Elements"

const Config = () => {
    return(
        <Container>
            <Title>Configuracion de la cuenta</Title>
            <Password />
            <form>
                <button formAction={firebaseDeleteUser}>Delete</button>
            </form>
        </Container>
    )
}

export default Config