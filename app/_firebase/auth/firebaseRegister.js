import firebaseApp from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebaseApp)

export default async function firebaseRegister(data) {

    let result = null, error = null

    try {
        result = await createUserWithEmailAndPassword(auth, data.email, data.password)
    } catch (e) {
        error = e;
    }

    return { result, error }
}