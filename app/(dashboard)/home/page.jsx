import Home from "@/app/_components/dashboard/home/Home"

const HomePage = async () => {

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

    // GET STATIONS/PLANTS FOR THIS ORGANIZATION (SOLBOX - BUSINESS)
    const stationsResponse = await fetch(
      "https://globalapi.solarmanpv.com/station/v1.0/list?language=en",
      {
        method: "POST",
        body: JSON.stringify({
          page: 1,
          size: 20,
        }),
        headers: {
          Authorization: `Bearer ${orgAccessData.access_token}`,
          "Content-Type": "application/json",
        },
      }
    )

    solarmanStationsData = await stationsResponse.json()

    console.log("ALL STATIONS", solarmanStationsData)

  } catch (err) {

    console.log("ERROR....", err)
  }

  const getCommunityData = () => {

    const plantsTotalEnergy = solarmanStationsData.stationList
      .map(station => station.generationPower)
      .reduce((acc, currentValue) => acc + currentValue)

    const plantsLocations = solarmanStationsData.stationList
      .map(station => ({ lat: station.locationLat, lng: station.locationLng }))

    return {
      plantsTotalEnergy: plantsTotalEnergy,
      plantsLocations: plantsLocations
    }
  }

  const communityData = getCommunityData()

  return (
    <Home communityData={communityData} />
  )
}

export default HomePage