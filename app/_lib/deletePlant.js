"use server"

import { cookies } from "next/headers"
import firebaseApp from "../_firebase/config"
import { getFirestore, updateDoc, doc, arrayRemove } from "firebase/firestore"
import { revalidatePath } from "next/cache"


export const deletePlant = async (id) => {

    const db = getFirestore(firebaseApp)
    const token = cookies().get("token")

    try {

        await updateDoc(doc(db, "users", token.value), {
            plants: arrayRemove(id)
        })

    } catch (error) {

        console.log("Error borrando elemento: ", error)
        return { error: "Ocurrió un error creando la planta" }
    }

    revalidatePath("/home")

    return
}