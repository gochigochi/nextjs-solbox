export const getSolarmanCommunityData = (solarmanStationsData) => {
    
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