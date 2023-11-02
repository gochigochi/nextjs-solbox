"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { deleteUser } from "firebase/auth"

export const firebaseDeleteUser = async () => {

    const token = cookies().get("token")
    console.log(token)

    // cookies().delete("token")
    // redirect("/", "push")
}