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


	useEffect(()=>{
        getQuizAnswer().then(answer => setQuestions(answer.slice(0,8)))
        getQuizAnswer().then(answer => setAnswers(answer.slice(8,16)))
    }, []);

	const handleReset = () => {
		setCurrentQuestion(0)
		setShowScore(false)
	}

	const checkQuestion = (songID) => {
		if (songID == questions[currentQuestion].id) {
			let updateScore = score
			updateScore += 1
			setScore(updateScore)
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	}
	return (
		
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
					<button onClick={handleReset}>Reset</button>
				</div>
			) : (
				<QuizMap currentQuestion={currentQuestion} questions={questions}/>
			)}
			<QuizQuestions checkQuestion={checkQuestion} answers={answers}/>
		</div>
		
	);
}

export default QuizContainer