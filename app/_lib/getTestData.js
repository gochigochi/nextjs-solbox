import firebaseApp from "../_firebase/config"
import { doc, getDoc, getFirestore } from "firebase/firestore"

export const getTestData = async (token, solarmanStationsData) => {

    const db = getFirestore(firebaseApp)
    const docSnap = await getDoc(doc(db, "test", "testUser"))
    const testUserData = docSnap.data()

    console.log("TEST DATA.....", testUserData)
    return testUserData
}