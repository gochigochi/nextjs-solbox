import PrimaryButton from "../../buttons/PrimaryButton"
import SecondaryButton from "../../buttons/SecondaryButtons"
import { InputContainer, Input, Button, SelectButton, ButtonsContainer } from "./Elements"

const RegisterForm = ({ setSelectedForm }) => {
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
            <SelectButton onClick={() => setSelectedForm("login")}>
                <SecondaryButton>Tengo una cuenta</SecondaryButton>
            </SelectButton>
            <Button>
                <PrimaryButton>Registrarse</PrimaryButton>
            </Button>
        </ButtonsContainer>
    </>
  )
}

export default RegisterForm