const baseURL = 'http://localhost:8000/api/users/'
const baseUrl = 'http://localhost:8000/api/'

export const getQuizAnswer = () => {
    return fetch(baseUrl + "quiz")
        .then(res => res.json())
}

export const getAllSongs = () => {
    return fetch(baseUrl + "songs")
        .then(res => res.json())
}