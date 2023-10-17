"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

export const logout = () => {

    console.log("server")

    cookies().delete("token")
    // redirect("/login", "push")
    // revalidatePath("/", "layout")
    // revalidatePath("/")
    // revalidatePath("/home")

}