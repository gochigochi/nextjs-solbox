"use client"

import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api'
import { mapOptions } from './config'

const center = {
  lat: -36.12674288952328,
  lng: -65.3999464272355
}

const Map = ({ plantsLocations }) => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLEMAPS_API_KEY
  })

  return (
    <>
      {
        isLoaded ?
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            options={mapOptions}
            center={center}
            zoom={3.5}
          >
            { plantsLocations.map(location => <MarkerF position={location} />) }
          </GoogleMap> : null
      }
    </>
  )
}

export default Map