const baseURL = 'http://localhost:9000/api/users/'
const baseUrl = 'http://localhost:9000/api/'

export const getQuizAnswer = () => {
    return fetch(baseUrl + "quizanswers")
        .then(res => res.json())
}