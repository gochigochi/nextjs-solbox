"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { useState } from 'react'
import { LoginSchema } from "@/app/_lib/schemas"
const DynLoginForm = dynamic(() => import("./LoginForm"), { ssr: false })
const DynRegisterForm = dynamic(() => import("./RegisterForm"), { ssr: false })
import { softFadeIn } from "@/app/_lib/motions"
import {
  Dialogue,
  LogoContainer,
  Logo,
  Error,
  FormEl,
} from './Elements'

const FormInner = ({ login, register, forgotPsw }) => {

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
        return
        
      }
      
      const response = await login(result.data)

      if (response?.error) {

        setError(response.error)

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

        const response = await register(result.data)

        if (response?.error) {
          setError(response.error)
        }

      }
    }

  }

  const SelectedForm = () => {
    if (selectedForm === "login") return <DynLoginForm setSelectedForm={setSelectedForm} />
    if (selectedForm === "register") return <DynRegisterForm setSelectedForm={setSelectedForm} />
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
          <Logo src="https://firebasestorage.googleapis.com/v0/b/solbox-app.appspot.com/o/solbox-logo.png?alt=media&token=7f8dbf38-1da3-443d-bd53-ff6eccff66ff&_gl=1*hux6co*_ga*MjA5NzcwMTI5NS4xNjk1NzM4Mzcw*_ga_CW55HF8NVT*MTY5Njk1Mjc1OS4yLjEuMTY5Njk1MzcxMi41MC4wLjA." alt="" fill sizes='20vw' priority />
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

export default FormInner