"use server"

import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"
import firebaseApp from "../_firebase/config"
import { getFirestore, updateDoc, doc, arrayRemove } from "firebase/firestore"


export const deletePlant = async (id) => {

    const db = getFirestore(firebaseApp)
    const token = cookies().get("token")

    try {

        const appId = process.env.SOLARMAN_APP_ID
        const usrPsw = process.env.SOLARMAN_PASSWORD
        const SHA256 = require("crypto-js/sha256")
        const hashedPassword = SHA256(usrPsw).toString()

        const accessTokenResponse = await fetch(`https://globalapi.solarmanpv.com/account/v1.0/token?appId=${appId}&language=en`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                password: hashedPassword,
                email: process.env.SOLARMAN_USER,
                appSecret: process.env.SOLARMAN_APP_SECRET,
            }),
        })

        const { access_token } = await accessTokenResponse.json()

        // GET THE ORGANIZATION ID - ORG IS SOLBOX
        const companyIdResponse = await fetch(`https://globalapi.solarmanpv.com/account/v1.0/info?language=en`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${access_token}`,
            },
        })

        const companyData = await companyIdResponse.json()

        // API REQUIRES TO GET A SECOND TOKEN RELATED TO THE ORGANIZATION ID - IN THIS CASE ONLY FOR SOLBOX BUSINESS
        const orgAccessTokenResponse = await fetch(`https://globalapi.solarmanpv.com/account/v1.0/token?appId=${appId}&language=en`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                password: hashedPassword,
                email: process.env.SOLARMAN_USER, // SOLARMAN BUSINESS USER
                appSecret: process.env.SOLARMAN_APP_SECRET, // SOLARMAN BUSINESS APP SECRET 
                orgId: companyData.orgInfoList[0].companyId, // ID COMES FROM LAST FETCH
            }),
        })

        const orgAccessData = await orgAccessTokenResponse.json()


        // REMOVE FROM SOLARMAN USER
        const response = await fetch(
            "https://globalapi.solarmanpv.com/station/v1.0/delete?language=en",
            {
                method: "DELETE",
                body: JSON.stringify({
                    stationId: id,
                }),
                headers: {
                    Authorization: `Bearer ${orgAccessData.access_token}`,
                    "Content-Type": "application/json",
                },
            }
        )

        const deletedResponse = await response.json()

        if (deletedResponse.success) {

            // REMOVE FROM DB
            await updateDoc(doc(db, "users", token.value), {
                plants: arrayRemove(id)
            })
        }

        revalidatePath('/home')

        return { success: true }

    } catch (error) {

        console.log("Error borrando planta: ", error)
        return { error: "Ocurrió un error borrando la planta" }
    }

    revalidatePath("/home")

    return
}