"use client"

import Link from "next/link"
import { useEffect, useState } from 'react'
import { LoginSchema } from "@/app/_lib/schemas"
// import Loader from '../loader/Loader'
// import LoadingScene from '../loader/LoadingScene'
import { softFadeIn } from "@/app/_lib/motions"
import Login from "./Login"
import Register from "./Register"
import {
  Dialogue,
  LogoContainer,
  Logo,
  Error,
  FormEl,
} from './Elements'

const Form = ({ login, register, forgotPsw }) => {

  const [selectedForm, setSelectedForm] = useState("login")
  const [error, setError] = useState("")

  //Client Validation
  const handleSubmit = async (formData) => {

    if (error.length > 0) setError("")

    if (selectedForm === "login") {

      const result = LoginSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
      })

      if (!result.success) {

        setError(result.error.issues[0].message)

      } else {

        const response = await login(result.data)

        if (response.error) {
          setError(response.error)
        }

      }
    }

    if (selectedForm === "register") {

      const result = LoginSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
      })

      if (!result.success) {

        setError(result.error.issues[0].message)

      } else {

        const response = await login(result.data)

        if (response?.error) {
          setError(response.error)
        }

      }
    }

  }

  const SelectedForm = () => {
    if (selectedForm === "login") return <Login setSelectedForm={setSelectedForm} />
    if (selectedForm === "register") return <Register setSelectedForm={setSelectedForm} />
  }

  return (
    <Dialogue
      variants={softFadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Link href="/">
        <LogoContainer>
          <Logo src="/logos/solbox-logo.png" alt="" fill sizes='20vw' priority />
        </LogoContainer>
      </Link>
      <FormEl action={handleSubmit} noValidate>
        <SelectedForm />
      </FormEl>
      {
        error ? <Error>{error}</Error> : null
      }
    </Dialogue>
  )
}

export default Form