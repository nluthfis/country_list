import React from "react";
import GoogleMapReact from "google-map-react";

export default function Maps({ data }) {
  console.log(data);
  const [lat, lng] = data;
  const defaultProps = {
    center: {
      lat: lat !== undefined ? lat : 0,
      lng: lng !== undefined ? lng : 0,
    },
    zoom: 11,
  };
  console.log(defaultProps);
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
}
