import React from 'react'
import QuizItem from './QuizItem'

const QuizQuestions = ({questions, checkQuestion, answeredQuestions}) => {
    const questionsList = questions.map((question) => {
        return <QuizItem answeredQuestions={answeredQuestions} songName={question.name} preview={question.preview_url} key={question.id} songID={question.id} checkQuestion={checkQuestion} songArtists={question.artists}/>
    })
  return (
    <>
    <div>Questions</div>
    {questionsList}
    </>

    )
}

export default QuizQuestions