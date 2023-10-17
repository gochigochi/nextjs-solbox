"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { CreatePlantSchema } from "./schemas"
import firebaseApp from "../_firebase/config"
import { arrayUnion, doc, getFirestore, updateDoc } from "firebase/firestore"

export const createPlant = async (data) => {
    
    const plant = {
        name: data.get("plant_name"),
        lat: data.get("plant_lat"),
        lng: data.get("plant_lng")
    }

    const serverValidation = CreatePlantSchema.safeParse({
        name: plant.name,
    })

    if (!serverValidation.success) {
        return { error: result.error.issues[0].message }
    }

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

        const response = await fetch(
            "https://globalapi.solarmanpv.com/station/v1.0/create?language=en",
            {
                method: "POST",
                body: JSON.stringify({
                    currency: "ARS",
                    gridInterconnectionType: "EXCESS",
                    installedCapacity: 0.32,
                    locationAddress: "Sin dirección",
                    locationLat: plant.lat,
                    locationLng: plant.lng,
                    name: plant.name,
                    ownerName: "Solbox",
                    region: {
                        nationId: 9,
                        timezone: "America/Sao_Paulo",
                    },
                    type: "HOUSE_ROOF",
                }),
                headers: {
                    Authorization: `Bearer ${orgAccessData.access_token}`,
                    "Content-Type": "application/json",
                },
            }
        )

        const newPlant = await response.json()

        //WRITE ID TO DB
        const db = getFirestore(firebaseApp)
        const token = cookies().get("token")
        await updateDoc(doc(db, "users", token.value), {
            plants: arrayUnion(newPlant.id)
        })
        
        revalidatePath('/home')

    } catch (error) {
        console.log("Error creando planta", error)
        return { error: "Ocurrió un error creando la planta" }
    }

}