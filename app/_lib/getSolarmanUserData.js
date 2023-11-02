import firebaseApp from "../_firebase/config"
import { doc, getDoc, getFirestore } from "firebase/firestore"

export const getSolarmanUserData = async (token, solarmanStationsData) => {

    const db = getFirestore(firebaseApp)
    let docSnap = await getDoc(doc(db, "users", token.value))
    let userData = docSnap.data()

    // PLANTS REFER TO THE "PLANTS/STATIONS" IN THE DATABASE WHILE STATIONS REFER TO THE "PLANTS/STATIONS" IN THE SOLARMAN APP
    if (userData?.plants.length !== 0) {

        const userPlantsId = userData?.plants.map(plant => plant)

        const userPlants = solarmanStationsData?.stationList?.filter(station => userPlantsId?.includes(station.id))

        const userTotalPower = userPlants?.map(station => station.generationPower).reduce((acc, value) => acc + value, 0)

        return {
            email: userData.email,
            userPlants: userPlants,
            userTotalPower: userTotalPower
        }
    }

    return {
        email: userData.email,
        userPlants: [],
        userTotalPower: 0,
        totalAmountPlants: 0,
    }
}