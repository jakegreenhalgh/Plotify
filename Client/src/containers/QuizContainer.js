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

const QuizContainer = ({userid, userquiz}) => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [questions, setQuestions] = useState([])
	const [answers, setAnswers] = useState([])
	const [answeredQuestions, setAnsweredQuestions] = useState({})
	const [userCurrent, setUserCurrent] = useState([])

console.log(userid);

	useEffect(()=>{
        getQuizAnswer().then(answer => setQuestions(answer.slice(0,9)))
        getQuizAnswer().then(answer => setAnswers(answer.slice(9,17)))
		setUserCurrent(userquiz)
    }, []);

	const handleReset = () => {
		setCurrentQuestion(0)
		setShowScore(false)
		setScore(0)
		setAnsweredQuestions([])
	}

	const checkQuestion = async (songID) => {
		let finalScore = 0
		if (songID == answers[currentQuestion].id) {
			let updateScore = score
			updateScore += 1
			finalScore = updateScore
			setScore(updateScore)

			let newAnswers = {...answeredQuestions}
			newAnswers[answers[currentQuestion].id] = true
			setAnsweredQuestions(newAnswers)
		} 
		else {
			let newAnswers = {...answeredQuestions}
			newAnswers[answers[currentQuestion].id] = false
			finalScore = score
			setAnsweredQuestions(newAnswers)
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length -2) {
			setUserCurrent(userquiz)
		}
		if (nextQuestion < questions.length - 1) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
			handleFinalScore(userCurrent, finalScore)
		}
		
	}
	const handleFinalScore = (user, score) => {
		console.log("HandleFinalScore");
		console.log(user);
		console.log(score);
		let quizId = questions[0]._id
		if (user === null || user == "") {
			console.log("New user");
			let newUser = {
				"user": parseInt(userid),
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
			newUser["quizIds"].push(quizId)
			newUser["scores"][parseInt(score)] += 1
			addUser(newUser)
			setUserCurrent(newUser)
		} else {
			console.log("new quiz?");
			if (!userCurrent.quizIds.includes(quizId)){
			let tempUser = {...userCurrent}
			tempUser["scores"][parseInt(score)] += 1
			tempUser["quizIds"].push(quizId)
			updateScore(tempUser)
			setUserCurrent(tempUser)
			console.log(tempUser);
			} else {
				console.log("quiz already done");
			}
		}
	}
	return (
		
		<div className='app'>
			{/* <button onClick={handleReset}>Reset</button> */}
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length - 1}
					<QuizBarChart userCurrentScores={userCurrent}/>
					<QuizQuestions answeredQuestions={answeredQuestions} checkQuestion={checkQuestion} questions={questions}/>
				</div>
				
			) : (
				<div className='map-screen'>
				<div>
				<QuizMap currentQuestion={currentQuestion} answers={answers}/>
				</div>
				<div className="SongList">
					<QuizQuestions answeredQuestions={answeredQuestions} checkQuestion={checkQuestion} questions={questions}/>
				</div>
			</div>
			)}
		</div>
	);
}

export default QuizContainer