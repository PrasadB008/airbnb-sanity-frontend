import React from "react"
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"

const DEFAULT_CENTER = { lat: 51.5072, lng: -0.1276 }

const DashboardMap = ({ properties }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.googlePlacesAPI,
  })

  const containerStyle = {
    width: "100%",
    height: "100vh",
  }

  const hasCoordinates = (property) =>
    Number.isFinite(property?.location?.lat) &&
    Number.isFinite(property?.location?.lng)

  const locatedProperties = (properties ?? []).filter(hasCoordinates)

  // Centre on the first property that has coordinates; otherwise use London.
  const center = locatedProperties.length
    ? {
        lat: locatedProperties[0].location.lat,
        lng: locatedProperties[0].location.lng,
      }
    : DEFAULT_CENTER

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

  if (!properties?.length) {
    return <></>
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {locatedProperties.map((property) => (
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
