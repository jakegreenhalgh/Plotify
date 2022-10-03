const baseURL = 'http://localhost:9000/api/users/'
const baseUrl = 'http://localhost:9000/api/'

export const getQuizAnswer = () => {
    return fetch(baseUrl + "quiz")
        .then(res => res.json())
}

export const getAllSongs = () => {
    return fetch(baseUrl + "songs")
        .then(res => res.json())
}