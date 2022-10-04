import React, {Component}from 'react'
import Plot from 'react-plotly.js'

export const QuizBarChart = ({userCurrentScores}) => {
    console.log(
        Object.keys(userCurrentScores)
    );

  return (
    <div>
        <Plot 
        data={[
            {type: 'bar',
                x: Object.keys(userCurrentScores),
                y: Object.entries(userCurrentScores)}
        ]}
        layout={ {width:1000, height:500, title: "Results"}}
        />
    </div>
  )
}
