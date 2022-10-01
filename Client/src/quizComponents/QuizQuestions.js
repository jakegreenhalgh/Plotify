import React from 'react'
import QuizItem from './QuizItem'

const QuizQuestions = ({questions}) => {
    const questionsList = questions.map((question) => {
        return <QuizItem songName={question.name}/>
    })
  return (
    <>
    <div>Questions</div>
    {questionsList}
    </>

    )
}

export default QuizQuestions