import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

export default function Map({data}) {

    const mapStyle = {
        height: "50vh",
        width: "100%"
    }

    const defaultCenter = {
        lat: 4.575, lng: -74.24
    }

    return (
        <div>
            <LoadScript googleMapsApiKey='AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'>
                <GoogleMap
                    
                    mapContainerStyle={mapStyle}
                    zoom={9}
                    center={defaultCenter}
                >

                   <Marker position={defaultCenter}></Marker>
                </GoogleMap>
            </LoadScript>

        </div>
    )
}
