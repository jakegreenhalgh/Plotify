import React, {useState, useEffect} from 'react'
import { QuizBarChart } from '../quizComponents/QuizBarChart';
import QuizMap from '../quizComponents/QuizMap';
import QuizQuestions from '../quizComponents/QuizQuestions';
import { updateScore } from '../services/QuizService';
import { addScore } from '../services/QuizService';
import { getUser } from '../services/QuizService';
import { addUser } from '../services/QuizService';
import { getUsersScore } from '../services/QuizService';
import { getQuizAnswer } from '../services/QuizService';

const QuizContainer = ({userId, userQuiz}) => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [questions, setQuestions] = useState([])
	const [answers, setAnswers] = useState([])
	const [answeredQuestions, setAnsweredQuestions] = useState({})
	const [userCurrent, setUserCurrent] = useState([])



	useEffect(()=>{
        getQuizAnswer().then(answer => setQuestions(answer.slice(0,9)))
        getQuizAnswer().then(answer => setAnswers(answer.slice(9,17)))
		setUserCurrent(userQuiz)
    }, []);

	// useEffect(() => {

	// }, [])


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
			handleFinalScore(userCurrent, score)
		}
	}
	const handleFinalScore = (user, score) => {
		console.log("HandleFinalScore");
		console.log(user);
		console.log(score);
		if (user === null || user == "") {
			let newUser = {
				"user": parseInt(userId),
				"quizIds": [],
				"scores":{
					"0":0,
					"1":0,
					"2":0,
					"3":0,
					"4":0,
					"5":0,
					"6":0,
					"7":0,
					"8":0,
				}
			}
			// console.log(newUser);
			newUser["scores"][parseInt(score)] += 1
			addUser(newUser)
			setUserCurrent(newUser)
		} else {
			let quizId = questions[0]._id
			console.log("new quiz?");
			if (!userCurrent.quizIds.includes(quizId)){
			let tempUser = {...userCurrent}
			tempUser["scores"][parseInt(score)] += 1
			tempUser["quizIds"].push(quizId)
			updateScore(tempUser)
			setUserCurrent(tempUser)
			} else {
				console.log("quiz already done");
			}
		}
	}
	return (
		
		<div className='app'>
			<button onClick={handleReset}>Reset</button>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length - 1}
					<QuizBarChart userCurrentScores={userCurrent}/>
				</div>
			) : (
				<QuizMap currentQuestion={currentQuestion} answers={answers}/>
			)}
			<QuizQuestions answeredQuestions={answeredQuestions} checkQuestion={checkQuestion} questions={questions}/>
		</div>
		
	);
}

export default QuizContainer