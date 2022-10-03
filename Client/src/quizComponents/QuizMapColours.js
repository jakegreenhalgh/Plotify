import React from 'react'
import { Geography } from 'react-simple-maps'

const QuizMapColours = (geo, currentQuestion, questions) => {
  return (
    <Geography
    key={geo.rsmKey}
    geography={geo}
    // onClick={() => handleClick(geo)}
    style={{
        default: {
        //   fill: {colourNodes},
          fill: questions[currentQuestion].charts[geo.properties["Alpha-2"]]? "#ffffff" : "#808080",
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
  )
}

export default QuizMapColours