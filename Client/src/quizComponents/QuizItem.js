import React from 'react'

const QuizItem = ({songName, songID, checkQuestion}) => {

const handleGuess = () => {
    checkQuestion(songID)
}
  return (
    <button onClick={handleGuess}>{songName} {songID}</button>
  )
}

export default QuizItem