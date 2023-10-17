import PrimaryButton from "../../buttons/PrimaryButton"
import SecondaryButton from "../../buttons/SecondaryButtons"
import { InputContainer, Input, Button, SelectButton, ButtonsContainer } from "./Elements"

const LoginForm = ({ setSelectedForm }) => {
  return (
    <>
        <InputContainer>
            <Input 
                type="email"
                name="email"
                placeholder="Usuario o email"
            />
        </InputContainer>
        <InputContainer>
            <Input 
                type="text"
                name="password"
                placeholder="Contraseña"
            />
        </InputContainer>
        <ButtonsContainer>
            <SelectButton onClick={() => setSelectedForm("register")}>
                <SecondaryButton>Registrarse</SecondaryButton>
            </SelectButton>
            <Button>
                <PrimaryButton>Ingresar</PrimaryButton>
            </Button>
        </ButtonsContainer>
    </>
  )
}

export default LoginForm