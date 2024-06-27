import React, { useState } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import MapMarkerIcon from "../icons/MapMarkerIcon.svg";

export default function MarkerMap({ post }) {
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleMapLoad = () => {
    setMapLoaded(true);
  };

  const center = {
    lat: post.latitude,
    lng: post.longitude,
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDRGjPRqJSdBjgjXC4HEunnxZ9fM_9zvgc"
      onLoad={handleMapLoad}
    >
      {mapLoaded && (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={19}>
          <MarkerF
            position={{ lat: center.lat, lng: center.lng }}
            icon={{
              url: MapMarkerIcon,
              scaledSize: new window.google.maps.Size(60, 60),
            }}
          />
        </GoogleMap>
      )}
    </LoadScript>
  );
}

const containerStyle = {
  width: "100%",
  height: "22.5rem",
  borderRadius: "1.875rem",
  border: "solid 0.09375rem rgba(175, 191, 165, 0.3)",
};
