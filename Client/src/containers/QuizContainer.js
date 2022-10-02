import React, {useState, useEffect} from 'react'
import QuizMap from '../quizComponents/QuizMap';
import QuizQuestions from '../quizComponents/QuizQuestions';
import { getQuizAnswer } from '../services/QuizService';

const QuizContainer = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [questions, setQuestions] = useState([])
	const [answers, setAnswers] = useState([])
	const [answeredQuestions, setAnsweredQuestions] = useState([])


	useEffect(()=>{
        getQuizAnswer().then(answer => setQuestions(answer.slice(0,9)))
        getQuizAnswer().then(answer => setAnswers(answer.slice(9,17)))
    }, []);

	const handleReset = () => {
		setCurrentQuestion(0)
		setShowScore(false)
		setScore(0)
		setAnsweredQuestions([])
	}

	const checkQuestion = (songID) => {
		if (songID == answers[currentQuestion].id) {
			let updateScore = score
			updateScore += 1
			setScore(updateScore)
			// let newAnswer = answeredQuestions
			// newAnswer[answers[currentQuestion].id] = true
			// setAnsweredQuestions(newAnswer)
		} 
		// else {
		// 	let newAnswer = answeredQuestions
		// 	newAnswer[answers[currentQuestion].id] = false
		// 	setAnsweredQuestions(newAnswer)
		// }

		let newAnswer = answeredQuestions
		newAnswer.push(answers[currentQuestion].id)
		setAnsweredQuestions(newAnswer)

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length - 1) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	}
	return (
		
		<div className='app'>
			<button onClick={handleReset}>Reset</button>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length - 1}
					{/* <button onClick={handleReset}>Reset</button> */}
				</div>
			) : (
				<QuizMap currentQuestion={currentQuestion} answers={answers}/>
			)}
			<QuizQuestions answeredQuestions={answeredQuestions} checkQuestion={checkQuestion} questions={questions}/>
		</div>
		
	);
}

export default QuizContainer