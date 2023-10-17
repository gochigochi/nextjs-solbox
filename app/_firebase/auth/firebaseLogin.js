import firebaseApp from "../config"
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebaseApp)

export default async function firebaseLogin(data) {

    console.log("login.....", data)

    let result = null, error = null
    try {
        result = await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (e) {
        error = e;
    }

    return { result, error }
}
