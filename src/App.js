import React from "react";
import "./App.css";
import {
  ComposableMap,
  Geographies,
  Geography,
  // Marker,
  // Annotation,
  ZoombleGroup,
} from "react-simple-maps";
// import ReactTooltip from "react-tooltip";
// const markers = [
//   {
//     markerOffset: -15,
//     name: "Sau Paulo",
//     coordinates: [-58.3816, -34.6037],
//   },
// ];

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export default function App() {
  return (
    <div
      className="App"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "1400px", borderStyle: "double" }}>
        <ComposableMap data-tip="">
          <ZoombleGroup zoom={1}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo} />
                ))
              }
            </Geographies>
          </ZoombleGroup>
        </ComposableMap>
      </div>
    </div>
  );
}
