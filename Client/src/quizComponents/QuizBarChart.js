import React, {Component}from 'react'
import Plot from 'react-plotly.js'

export const QuizBarChart = ({userCurrentScores}) => {
    console.log(userCurrentScores);
    console.log("bar chart y values");
    console.log(
        Object.values(userCurrentScores.scores)
    );

  return (
    <div>
        <div>Statistics</div>
        <div>Played : {userCurrentScores.quizIds.length}</div>
        <Plot 
        data={[
            {
                // type: 'bar',
                x: ['0', '1', '2', '3', '4', '5', '6', '7', '8'],
                y: Object.values(userCurrentScores.scores),
                // marker: {color: 'rgb(255,255,255)'},
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'red'},
            }
            
        ]}
        layout={ {width:1000, height:500} }
        />
    </div>
  )
}
