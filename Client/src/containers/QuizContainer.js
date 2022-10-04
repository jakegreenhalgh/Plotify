import React, {useState, useEffect} from 'react'
import QuizMap from '../quizComponents/QuizMap';
import QuizQuestions from '../quizComponents/QuizQuestions';
import { addScore } from '../services/QuizService';
import { getUser } from '../services/QuizService';
import { addUser } from '../services/QuizService';
import { getUsersScore } from '../services/QuizService';
import { getQuizAnswer } from '../services/QuizService';

const QuizContainer = ({userId}) => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [questions, setQuestions] = useState([])
	const [answers, setAnswers] = useState([])
	const [answeredQuestions, setAnsweredQuestions] = useState({})
	const [user, setUser] = useState([])



	useEffect(()=>{
        getQuizAnswer().then(answer => setQuestions(answer.slice(0,9)))
        getQuizAnswer().then(answer => setAnswers(answer.slice(9,17)))
		getUser().then(user => setUser(user))
    }, []);


	const handleReset = () => {
		setCurrentQuestion(0)
		setShowScore(false)
		setScore(0)
		setAnsweredQuestions([])
	}

	const checkQuestion = async (songID) => {
		if (songID == answers[currentQuestion].id) {
			let updateScore = score
			updateScore += 1
			setScore(updateScore)

			let newAnswers = {...answeredQuestions}
			newAnswers[answers[currentQuestion].id] = true
			setAnsweredQuestions(newAnswers)
		} 
		else {
			let newAnswers = {...answeredQuestions}
			newAnswers[answers[currentQuestion].id] = false
			setAnsweredQuestions(newAnswers)
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length - 1) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
			let finalScore = {
				"userID" : userId,
				"scores" : {score}
			}
			console.log("finalScore = ");
			console.log(finalScore);
			// console.log(getUsersScore());
			// addScore(userId, finalScore)
			// let newUser = {"User":userId, "scores":[]}
			addUser({user :userId, playerScore:[]})
		}
	}
	const handleFinalScore = (user, score) => {
		
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