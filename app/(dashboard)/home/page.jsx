// import { cookies } from "next/headers"
import Home from "@/app/_components/dashboard/home/Home"
import { getSolarmanStationsData } from "@/app/_lib/getSolarmanStationsData"
// import { getSolarmanCommunityData } from "@/app/_lib/getSolarmanCommunityData"
// import { getSolarmanUserData } from "@/app/_lib/getSolarmanUserData"

const HomePage = async () => {

  let response
  let one
  let two
  let three

  let solarmanStationsData

  // const appId = process.env.SOLARMAN_APP_ID
  const appId = "2023050973701156"
  // const userPassword = process.env.SOLARMAN_PASSWORD
  const userPassword = "Soleventus01*"
  const SHA256 = require("crypto-js/sha256")
  const hashedPassword = SHA256(userPassword).toString()

  try {

    const accessTokenResponse = await fetch(`https://globalapi.solarmanpv.com/account/v1.0/token?appId=${appId}&language=en`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: hashedPassword,
        // email: process.env.SOLARMAN_USER, // SOLARMAN BUSINESS USER
        email: "transformandolafuente@gmail.com",
        // appSecret: process.env.SOLARMAN_APP_SECRET, // SOLARMAN BUSINESS APP SECRET 
        appSecret: "28e2c5dab504c93fb6e370e4cc70484a"
      }),
    })

    // const { access_token } = await accessTokenResponse.json()

    // one = access_token

    const z = await accessTokenResponse.json()

    one = z

  } catch (err) {

    console.log("ERROR....", err)
    response = err
  }

  // const token = cookies().get("token")
  // const solarmanStationsData =  await getSolarmanStationsData()
  // const communityData = getSolarmanCommunityData(solarmanStationsData)
  // const userData = token ? await getSolarmanUserData(token, solarmanStationsData) : null

  // console.log("User Data.,......", userData)

  return (
    // <Home communityData={communityData} userData={userData} />
    <Home data={response} one={one} />
  )
}

export default HomePage