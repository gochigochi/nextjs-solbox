"use client"

import Map from '../map/Map'
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


const Dashboard = ({ communityData }) => {

  console.log(communityData)

  return (
    <Container>
      <Header>
        <WelcomeText>Bienvenido a la comunidad Solbox</WelcomeText>
      </Header>
      {/* {
        user.isAuth ?
        <>
          <Section>
            <Column>
              <ColumnTitle>Mis plantas de producción</ColumnTitle>
              <ProductionBox>
                <ProductionNumber>{user.userTotalPower}<span>kWh</span></ProductionNumber>
                <ProductionText>Total energía producida</ProductionText>
                <ProductionDetail>Desde el 17-08-23</ProductionDetail>
              </ProductionBox>
              <Plants data={user.userPlants} />
            </Column>
            <Column>
              <ColumnTitle>Ahorros equivalentes a:</ColumnTitle>
              <Results totalIndividualProduction={user.userTotalPower} />
            </Column>
            <Column></Column>
          </Section>
          <Hr />
        </> : null
      } */}
      <Section>
        <Column>
          <ColumnTitle>Comunidad Solbox</ColumnTitle>
          <ProductionBox>
            <ProductionNumber>{communityData.plantsTotalEnergy}<span>kWh</span></ProductionNumber>
            <ProductionText>Total energía producida</ProductionText>
            <ProductionDetail>Desde el 17-08-23</ProductionDetail>
          </ProductionBox>
          <ColumnTitle>Nuestros paneles</ColumnTitle>
          <MapContainer>
            <Map plantsLocations={communityData.plantsLocations} />
          </MapContainer>
          {/* <div id="desktop-dashboard-sidebar">
            <DashboardSidebar />
          </div> */}
        </Column>
        <Column>
          <ColumnTitle>Ahorros equivalentes a:</ColumnTitle>
          {/* <Graphics totalCommunityProduction={data.solboxData.communityPlantsTotalEnergy} /> */}
        </Column>
      </Section>
      <Section id="mobile-dashboard-sidebar">
        <Column>
          {/* <DashboardSidebar /> */}
        </Column>
      </Section>
    </Container>
  )
}

export default Dashboard