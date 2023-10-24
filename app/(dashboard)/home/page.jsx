// import { cookies } from "next/headers"
import Home from "@/app/_components/dashboard/home/Home"
import { getSolarmanStationsData } from "@/app/_lib/getSolarmanStationsData"
// import { getSolarmanCommunityData } from "@/app/_lib/getSolarmanCommunityData"
// import { getSolarmanUserData } from "@/app/_lib/getSolarmanUserData"

const HomePage = async () => {

  // const token = cookies().get("token")
  const solarmanStationsData =  await getSolarmanStationsData()
  // const communityData = getSolarmanCommunityData(solarmanStationsData)
  // const userData = token ? await getSolarmanUserData(token, solarmanStationsData) : null

  // console.log("User Data.,......", userData)

  return (
    // <Home communityData={communityData} userData={userData} />
    <Home data={solarmanStationsData} />
  )
}

export default HomePage