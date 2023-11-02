"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { LoginSchema } from "@/app/_lib/schemas"
import firebaseRegister from "@/app/_firebase/auth/firebaseRegister"
import { getFirebaseErrorMsg } from "@/app/_lib/getFirebaseErrorMsg"
import { firebaseRegisterUserInDb } from "@/app/_firebase/auth/firebaseRegisterUserInDb"

//REGISTER
export default async function register(data) {

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

    //REGISTER
    const response = await firebaseRegister(data)

    if (response.error) {

        const errorMsg = await getFirebaseErrorMsg(response.error.code)

        return { error: errorMsg }
    }

    const firestoreResponse = await firebaseRegisterUserInDb(response.result.user)

    if (!firestoreResponse.success) {
        
        return { error: "No se pudo crear el usuario en la base de datos"}
    }

    //SET COOKIE
    cookies().set("token", response.result.user.uid, {
        maxAge: 60 * 60 * 24 * 5 * 1000,
        httpOnly: true,
        secure: true,
    })

    redirect("/home", "push")
}