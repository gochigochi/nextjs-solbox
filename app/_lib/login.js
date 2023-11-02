"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { LoginSchema } from "@/app/_lib/schemas"
import firebaseLogin from "@/app/_firebase/auth/firebaseLogin"
import { getFirebaseErrorMsg } from "@/app/_lib/getFirebaseErrorMsg"

//LOGIN
const login = async (data) => {

    if (data?.email === undefined || data?.password === undefined) {

        return { error: "No hay datos" }
    }

    //SERVER VALIDATION
    const result = LoginSchema.safeParse({
        email: data.email,
        password: data.password,
    })

    if (!result.success) {

        return { error: result.error.issues[0].message }
    }

    //LOGIN
    const response = await firebaseLogin(data)

    if (response.error) {

        const errorMsg = await getFirebaseErrorMsg(response.error.code)

        return { error: errorMsg }
    }

    //SET COOKIE
    cookies().set("token", response.result.user.uid, {
        maxAge: 60 * 60 * 24 * 5 * 1000,
        httpOnly: true,
        secure: true,
    })

    redirect("/home", "push")
}

export default login