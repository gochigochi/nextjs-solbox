"use client"

// import { lazy, Suspense } from "react"
// import CommunityCharts from './communityCharts/CommunityCharts'
// import UserPlants from "./userPlants/UserPlants"
// import UserCharts from "./userCharts/UserCharts"
import {
  Container,
  Header,
  WelcomeText,
  Section,
  Hr,
  Column,
  ColumnTitle,
  ProductionBox,
  ProductionNumber,
  ProductionText,
  ProductionDetail,
  MapContainer,
} from './Elements'

// const Map = lazy(() => import("../map/Map"))

const Home = ({ data, one }) => {
  // const Home = ({ communityData, userData }) => {

  console.log("Data", data)
  const x = Object.values(data)
  console.log("Values...", x)

  console.log("HERE........", one)

  // console.log(userData.userTotalPower)

  return (
    <Container>Pruebaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Container>
    // <Container>
    //   <Header>
    //     <WelcomeText>Bienvenido a la comunidad Solbox</WelcomeText>
    //   </Header>
    //   {
    //     userData ?
    //     <>
    //       <Section>
    //         <Column>
    //           <ColumnTitle>Mis plantas de producción</ColumnTitle>
    //           <ProductionBox>
    //             <ProductionNumber>{userData.userTotalPower}<span>kWh</span></ProductionNumber>
    //             <ProductionText>Total energía producida</ProductionText>
    //             <ProductionDetail>Desde el 17-08-23</ProductionDetail>
    //           </ProductionBox>
    //           <UserPlants data={userData.userPlants} />
    //         </Column>
    //         <Column>
    //           <ColumnTitle>Ahorros equivalentes a:</ColumnTitle>
    //           <UserCharts totalIndividualProduction={userData.userTotalPower} />
    //         </Column>
    //         <Column></Column>
    //       </Section>
    //       <Hr />
    //     </> : null
    //   }
    //   <Section>
    //     <Column>
    //       <ColumnTitle>Comunidad Solbox</ColumnTitle>
    //       <ProductionBox>
    //         <ProductionNumber>{communityData.plantsTotalEnergy}<span>kWh</span></ProductionNumber>
    //         <ProductionText>Total energía producida</ProductionText>
    //         <ProductionDetail>Desde el 17-08-23</ProductionDetail>
    //       </ProductionBox>
    //       <ColumnTitle>Nuestros paneles</ColumnTitle>
    //       <MapContainer>
    //           <Map plantsLocations={communityData.plantsLocations} />
    //       </MapContainer>
    //     </Column>
    //     <Column>
    //       <ColumnTitle>Ahorros equivalentes a:</ColumnTitle>
    //       <CommunityCharts plantsTotalEnergy={communityData.plantsTotalEnergy} />
    //     </Column>
    //   </Section>
    //   <Section id="mobile-dashboard-sidebar">
    //   </Section>
    // </Container>
  )
}

export default Home