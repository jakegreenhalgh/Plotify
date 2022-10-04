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

export const addUser = (user) => {
    console.log("ADDUSER");
    console.log(user);
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  }

export const getUser = (user) =>  {
    console.log("GETUSER");
    console.log(user);
    return fetch(baseURL + user)
      .then(res => res.json());
  }

export const updateScore = (newScore) => {
    console.log("update score");
    return fetch(baseURL + newScore._id, {
      method: 'PUT',
      body: JSON.stringify(newScore),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  }