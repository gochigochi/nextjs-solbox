import firebaseApp from "../config"
import { getFirestore, doc, setDoc } from "firebase/firestore"

export const firebaseRegisterUserInDb = async (user) => {

    const db = getFirestore(firebaseApp)
    let response = { success: false }

    try {

        await setDoc(doc(db, "users", user.uid), {
            id: user.uid,
            email: user.email,
            plants: [],
        })

        response.success = true

    } catch (error) {

        response.success = false
       
    }

    return response
}