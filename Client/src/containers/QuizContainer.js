import React, {useState, useEffect} from 'react'
import QuizMap from '../quizComponents/QuizMap';
import QuizQuestions from '../quizComponents/QuizQuestions';
import { getUsersScore } from '../services/QuizService';
import { getQuizAnswer } from '../services/QuizService';

const QuizContainer = ({userId}) => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [questions, setQuestions] = useState([])
	const [answers, setAnswers] = useState([])
	// const [answeredQuestions, setAnsweredQuestions] = useState([])
	const [answeredQuestions, setAnsweredQuestions] = useState({})



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
			// console.log("getUserService");
			// console.log(await getUsersScore(userId));

			let today = new Date();
			var dd = String(today.getDate()).padStart(2, '0');
			var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
			var yyyy = today.getFullYear();
			today = mm + '/' + dd + '/' + yyyy;

			let finalScore = {
				"userID" : userId,
				"scores" : {today:score}
			}
			console.log("finalScore = ");
			console.log(finalScore);
		

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