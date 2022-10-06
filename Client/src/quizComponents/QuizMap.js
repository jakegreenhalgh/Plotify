import React from 'react'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps"
import { useState, useEffect } from "react";
import colourGradient from './colourGradient';


const QuizMap = ({currentQuestion, answers}) => {

    const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

  return (
    <>
    <h5>Guess the song based on its chart map ranking.</h5>
		<h7>(The colour gradient represents it's standing in the chart)</h7>
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
    {/* <div>Guess the song based on its chart map ranking.</div>
		<div>(The colour gradient represents it's standing in the chart)</div> */}
    
    </>
  )
}

export default QuizMap