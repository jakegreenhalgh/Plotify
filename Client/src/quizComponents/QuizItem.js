import React from 'react'

const QuizItem = ({songName, songID, songArtists, checkQuestion, answeredQuestions}) => {

const handleGuess = () => {
    checkQuestion(songID)
}
// const questionNodes = () => {
//     if (!answeredQuestions.includes(songID)) {
        
//     } else {
        
//     }

// }
  return (
    <button disabled={answeredQuestions.includes(songID)} onClick={handleGuess}>{songName} | {songArtists[0].name}{songArtists[1]?", "+songArtists[1].name:null}</button>
  )
}

export default QuizItem