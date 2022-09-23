import React from "react"
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps"
import { useState, useEffect } from "react";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

function MapChart() {

    const [clickedCountry, setClickedCountry] = useState("");
    const handleClick = (geo) => {
        setClickedCountry(geo.properties.name);}
    
  return (
    <>
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography 
            key={geo.rsmKey}
            geography={geo}
            onClick={() => handleClick(geo)}
            style={{
                default: {
                  fill: "#ffffff",
                  outline: 'none'
                },
                hover: {
                  fill: "#1ed760",
                  outline: 'none'
                },
                pressed: {
                  fill: "#1db954",
                  outline: 'none'
                },
              }}
    />
          ))
        }
      </Geographies>
    </ComposableMap>
    <div>{clickedCountry}</div>
    </>
  )
}

export default MapChart;