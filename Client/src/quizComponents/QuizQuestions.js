import React from 'react'
import QuizItem from './QuizItem'

const QuizQuestions = ({answers, checkQuestion}) => {
    const questionsList = answers.map((question) => {
        return <QuizItem songName={question.name} key={question.id} songID={question.id} checkQuestion={checkQuestion}/>
    })
  return (
    <>
    <div>Questions</div>
    {questionsList}
    </>

    )
}

export default QuizQuestions