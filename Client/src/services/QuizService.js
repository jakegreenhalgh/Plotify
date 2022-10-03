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

export const getUsers = () => {
    return fetch(baseUrl + "users/")
        .then(res => res.json())
}

export const getUsersScore = (id) => {
    return fetch(baseUrl + "users/" + id)
        .then(res => res.json())
        .then(data => data.portfolio)
}

export const updateUser = (payload) => {
    return fetch(baseUrl + "users/" + payload._id, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}