import { useState } from "react"
import PrimaryButton from "@/app/_components/buttons/PrimaryButton"
import { BiHide, BiShow } from 'react-icons/bi'
import {
    Form,
    Subtitle,
    InputContainer,
    Divides,
    InputLabel,
    Input,
    RevealIcon,
    Button,
    Error,
} from "../Elements"

const Password = () => {

    const [loading, setLoading] = useState(false)
    const [generalError, setGeneralError] = useState('')
    const [revealed, setRevealed] = useState({
        psw: false,
        confirmed: false,
    })

    const handleRevealed = (el) => setRevealed({ ...revealed, [el]: !revealed[el]})


    const handleSubmit = (formData) => {

    }

    return (
        <Form noValidate action={handleSubmit}>
            <Subtitle>Cambiar contraseña</Subtitle>
            <InputContainer>
                <InputLabel htmlFor='psw'>Contraseña nueva</InputLabel>
                <Input
                    type={revealed.psw ? "text" : "password"}
                    name="psw"
                    placeholder="Contraseña"
                    aria-label="cambiar password"
                    aria-required="true"
                />
                <Error>error</Error>
                <RevealIcon onClick={() => setRevealed({ ...revealed, psw: !revealed.psw })}>
                    {revealed.psw ? <BiHide /> : <BiShow />}
                </RevealIcon>
            </InputContainer>
            <InputContainer>
                <InputLabel htmlFor="confirmed">Contraseña nueva</InputLabel>
                <Input
                    type={revealed.confirmed ? "text" : "password"}
                    name="confirmed"
                    placeholder="Contraseña"
                    aria-label="cambiar password"
                    aria-required="true"
                />
                <Error>error</Error>
                <RevealIcon onClick={() => setRevealed({ ...revealed, confirmed: !revealed.confirmed })}>
                    {revealed.confirmed ? <BiHide /> : <BiShow />}
                </RevealIcon>
            </InputContainer>

        </Form>
    )
}

export default Password