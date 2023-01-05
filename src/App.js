import React, { useState } from "react";
import "./App.css";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import ReactTooltip from "react-tooltip";
const markers = [
  {
    markerOffset: -15,
    name: "Sau Paulo",
    coordinates: [-58.3816, -34.6037],
  },
  {
    markerOffset: -15,
    name: "Melbourne",
    coordinates: [144.963058, -37.813629],
  },
];

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export default function App() {
  const [content, setContent] = useState("");
  return (
    <div className="App">
      {/* <ReactTooltip>{content}</ReactTooltip> */}
      <div style={{ width: "1000px", borderStyle: "double" }}>
        <ComposableMap data-tip="">
          {/* <ZoombleGroup zoom={1}> */}
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    setContent(`${NAME}`);
                  }}
                  onMouseLeave={() => {
                    setContent("");
                  }}
                  style={{
                    hover: {
                      fill: "red",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
          {markers.map(({ name, coordinates, markerOffset }) => (
            <Marker key={name} coordinates={coordinates}>
              <circle r={10} fill="#F00" strokeWidth={2} />
              <text
                textAnchor="middle"
                y={markerOffset}
                style={{ fontFamily: "system-ui", fill: "red" }}
              >
                {name}
              </text>
            </Marker>
          ))}
          {/* </ZoombleGroup> */}
        </ComposableMap>
      </div>
    </div>
  );
}
