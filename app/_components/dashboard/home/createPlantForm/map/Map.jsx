import { GoogleMap, useJsApiLoader, Marker, StandaloneSearchBox } from "@react-google-maps/api"
import { MapContainer } from "./Elements"
import { mapOptions } from "./config"

const center = {
    lat: -36.12674288952328,
    lng: -65.3999464272355
}

const Map = ({ lat, lng, setLat, setLng }) => {

    const handleClick = (e) => {
        setLat(e.latLng.lat())
        setLng(e.latLng.lng())
    }

    return (
        <MapContainer>
            <GoogleMap
                onClick={handleClick}
                zoom={4}
                center={center}
                mapContainerStyle={{ width: '100%', height: '100%' }}
                options={mapOptions}
            >
                <Marker position={{ lat: lat, lng: lng }} />
            </GoogleMap>
        </MapContainer>
    )
}

export default Map