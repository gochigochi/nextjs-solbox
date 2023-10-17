"use server"

import { cookies } from "next/headers"

export const isLogged = () => {

    const token = cookies().get("token")

    return !!token
}