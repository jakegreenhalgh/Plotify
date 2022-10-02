import React from 'react'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps"
import { useState, useEffect } from "react";
import QuizMapColours from './QuizMapColours';


const QuizMap = ({currentQuestion, questions}) => {

    // const getLog = () => {
    //     console.log(questions[currentQuestion].charts["BR"])
    // }
    const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

    // const getColourNodes = (currentQuestion, questions, geo) => {
    //     console.log("getColourNodes");
    //     if (!questions[currentQuestion]) {
    //         if (questions[currentQuestion].charts[geo.properties["Alpha-2"]] < 10) {
    //             return "#FFD700"
    //         } else {
    //             return "808080"
    //         }
    //     } else {
    //         return "#ffffff"
    //     }
    // }

  return (
    <>
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography 
            key={geo.rsmKey}
            geography={geo}
            // onClick={() => handleClick(geo)}
            style={{
                default: {
                //   fill: "#ffffff",
                  fill: questions[currentQuestion].charts[geo.properties["Alpha-2"]]? "#ffffff" : "#808080",
                //   fill: getColourNodes(currentQuestion, questions, geo),
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