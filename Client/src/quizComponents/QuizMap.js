import React from 'react'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps"
import { useState, useEffect } from "react";
import colourGradient from './colourGradient';


const QuizMap = ({currentQuestion, answers}) => {

    const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

  return (
    <>
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography 
            key={geo.rsmKey}
            geography={geo}
            style={{
                default: {
                  fill: answers[currentQuestion].charts[geo.properties["Alpha-2"]]? colourGradient[answers[currentQuestion].charts[geo.properties["Alpha-2"]]] : "#808080",
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

    
    </>
  )
}

export default QuizMap