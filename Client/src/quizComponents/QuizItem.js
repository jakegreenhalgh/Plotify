import React from 'react'
import styled from 'styled-components'

const QuizItem = ({songName, songID, songArtists, checkQuestion, answeredQuestions}) => {

const handleGuess = () => {
    checkQuestion(songID)
    console.log(songID);
}

const getButtonStatus = (answeredQuestions, songID) => {
    if (!answeredQuestions.hasOwnProperty(songID)){
        return <QuestionUnanswered disabled={answeredQuestions.hasOwnProperty(songID)}  onClick={handleGuess}>{songName} | {songArtists[0].name}{songArtists[1]?", "+songArtists[1].name:null}</QuestionUnanswered>
    } else if (answeredQuestions[songID]) {
        return <QuestionCorrect disabled={answeredQuestions.hasOwnProperty(songID)}  onClick={handleGuess}>{songName} | {songArtists[0].name}{songArtists[1]?", "+songArtists[1].name:null}</QuestionCorrect>
    } else {
        return <QuestionIncorrect disabled={answeredQuestions.hasOwnProperty(songID)}  onClick={handleGuess}>{songName} | {songArtists[0].name}{songArtists[1]?", "+songArtists[1].name:null}</QuestionIncorrect>
    }
}
const buttonStatus = getButtonStatus(answeredQuestions, songID)


  return (
    <>
    {buttonStatus}
    </>
    // <button disabled={answeredQuestions.hasOwnProperty(songID)}  onClick={handleGuess}>
    //     {songID}
    //     {songName} | {songArtists[0].name}{songArtists[1]?", "+songArtists[1].name:null}
    // </button>
  )
}

export default QuizItem

const QuestionUnanswered = styled.button`
    margin-right: 4px;
    color: gray;
`

const QuestionCorrect = styled.button`
    margin-right: 4px;
    color: green;
`

const QuestionIncorrect = styled.button`
    margin-right: 4px;
    color: red;
`