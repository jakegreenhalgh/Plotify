import React from 'react'
import QuizItem from './QuizItem'

const QuizQuestions = ({questions, checkQuestion, answeredQuestions}) => {
    const questionsList = questions.map((question) => {
        return <QuizItem answeredQuestions={answeredQuestions} songName={question.name} 
        preview={question.preview_url} 
        key={question.id} songID={question.id} songImage={question.album.images[2].url}checkQuestion={checkQuestion} songArtists={question.artists}/>
    })
  return (
    <>
    {questionsList}
    </>

    )
}

export default QuizQuestions