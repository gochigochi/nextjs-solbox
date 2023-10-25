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

  const appId = process.env.SOLARMAN_APP_ID
  const userPassword = process.env.SOLARMAN_PASSWORD
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
        email: process.env.SOLARMAN_USER, // SOLARMAN BUSINESS USER
        appSecret: process.env.SOLARMAN_APP_SECRET, // SOLARMAN BUSINESS APP SECRET 
      }),
    })

    const { access_token } = await accessTokenResponse.json()

    one = access_token

    // // GET THE ORGANIZATION ID - ORG IS SOLBOX
    // const companyIdResponse = await fetch(`https://globalapi.solarmanpv.com/account/v1.0/info?language=en`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${access_token}`,
    //   },
    // })

    // const companyData = await companyIdResponse.json()

    // two = companyData

    // // API REQUIRES TO GET A SECOND TOKEN RELATED TO THE ORGANIZATION ID - IN THIS CASE ONLY FOR SOLBOX BUSINESS
    // const orgAccessTokenResponse = await fetch(`https://globalapi.solarmanpv.com/account/v1.0/token?appId=${appId}&language=en`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     password: hashedPassword,
    //     email: process.env.SOLARMAN_USER, // SOLARMAN BUSINESS USER
    //     appSecret: process.env.SOLARMAN_APP_SECRET, // SOLARMAN BUSINESS APP SECRET 
    //     orgId: companyData.orgInfoList[0].companyId, // ID COMES FROM LAST FETCH
    //   }),
    // })

    // const orgAccessData = await orgAccessTokenResponse.json()

    // three = orgAccessData

    // // GET STATIONS/PLANTS FOR THIS ORGANIZATION (SOLBOX - BUSINESS)
    // const stationsResponse = await fetch(
    //   "https://globalapi.solarmanpv.com/station/v1.0/list?language=en",
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       page: 1, // MAX 200 p/page
    //       size: 200,
    //     }),
    //     headers: {
    //       Authorization: `Bearer ${orgAccessData.access_token}`,
    //       "Content-Type": "application/json",
    //     },
    //   }
    // )

    // solarmanStationsData = await stationsResponse.json()

    //   response = solarmanStationsData

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