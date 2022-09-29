const fetch = require('node-fetch')
const baseUrl = 'http://localhost:9000/api/songs'

const getSongs = async () => {
    return await fetch(baseUrl)
        .then(res => res.json())
    };

    const songs = getSongs()

    console.log(songs);