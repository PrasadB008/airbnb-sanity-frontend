import React from "react"
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"

const DashboardMap = ({ properties }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.googlePlacesAPI,
  })

  const containerStyle = {
    width: "100%",
    height: "100vh",
  }

  // Fallback center used when there are no properties (San Francisco)
  const defaultCenter = { lat: 37.7749, lng: -122.4194 }

  const firstLocation = properties?.[0]?.location
  const center =
    firstLocation?.lat != null && firstLocation?.lng != null
      ? { lat: firstLocation.lat, lng: firstLocation.lng }
      : defaultCenter

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds()
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {(properties ?? [])
        .filter(
          (property) =>
            property?.location?.lat != null && property?.location?.lng != null
        )
        .map((property) => (
        <Marker
          key={property._id}
          position={{
            lat: property.location.lat,
            lng: property.location.lng,
          }}
          icon={{
            url: image,
            anchor: new google.maps.Point(5, 58),
          }}
        />
      ))}
      <></>
    </GoogleMap>
  ) : (
    <></>
  )
}

export default React.memo(DashboardMap)
