"use client"

import { useState } from 'react'
import Link from "next/link"
import login from '@/app/_lib/login'
import register from '@/app/_lib/register'
import { LoginSchema } from "@/app/_lib/schemas"
import PrimaryButton from "../../buttons/PrimaryButton"
import SecondaryButton from "../../buttons/SecondaryButtons"
import { softFadeIn } from "@/app/_lib/motions"
import {
  Dialogue,
  LogoContainer,
  Logo,
  Error,
  FormEl,
  InputContainer,
  Input,
  Button,
  SelectButton,
  ButtonsContainer,
} from './Elements'

const FormInner = () => {

  const [selectedForm, setSelectedForm] = useState("login")
  const [error, setError] = useState("")

  //CLIENT VALIDATION
  const handleSubmit = async (formData) => {

    if (error.length > 0) setError("")

    const result = LoginSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    })

    if (!result.success) {

      setError(result.error.issues[0].message)
      return
    }

    const response = selectedForm === "login" ? await login(result.data) : await register(result.data)

    if (response?.error) {

      setError(response.error)
    }
  }

  const handleSelectForm = () => {
    switch (selectedForm) {
      case "login":
        setSelectedForm("register")
        break;
      case "register":
        setSelectedForm("login")
        break
    }
  }

  console.log(selectedForm)

  return (
    <Dialogue
      variants={softFadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Link href="/">
        <LogoContainer>
          <Logo src="https://firebasestorage.googleapis.com/v0/b/solbox-app.appspot.com/o/solbox-logo.png?alt=media&token=7f8dbf38-1da3-443d-bd53-ff6eccff66ff&_gl=1*hux6co*_ga*MjA5NzcwMTI5NS4xNjk1NzM4Mzcw*_ga_CW55HF8NVT*MTY5Njk1Mjc1OS4yLjEuMTY5Njk1MzcxMi41MC4wLjA." alt="" fill sizes='20vw' priority />
        </LogoContainer>
      </Link>
      <FormEl action={handleSubmit} >
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
          <SelectButton onClick={handleSelectForm}>
            <SecondaryButton>{selectedForm === "login" ? "Registrarme" : "Tengo una cuenta"}</SecondaryButton>
          </SelectButton>
          <Button>
            <PrimaryButton>{selectedForm === "login" ? "Ingresar" : "Registrarme"}</PrimaryButton>
          </Button>
        </ButtonsContainer>
      </FormEl>
      {
        error ? <Error>{error}</Error> : null
      }
    </Dialogue>
  )
}

export default FormInner