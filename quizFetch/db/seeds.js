const Db = require('mongodb/lib/db')
const fetch = require('node-fetch')
const { default: countryPlaylistId } = require('../../Client/src/CountryPlaylist')


const token = "BQBizdoLB0xS67WtCcWv4OeqBNxaNv-AwaIGhenAigtp82PODjZCwrOc2BXNF7-pm3cX_wqkTr9cANiclipjHAkjS2uI0XNIL2PPtmGF_zdi369MuMIhUeLJayalWKDW50Kpdv5P5zFEApvSPIikW_1nL5uGKT-aJpjVwiDsZheT6_A" 
const top10Fetch =  (country) => {
        const playlistId = countryPlaylistId.country
        return fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        // Promise.all(fetchTopSongs)
        .then(res => res.json())
        .then(top10 => top10.tracks.items.slice(0, 10))
  }

const getIndividualSongsFromFetch = (countryId, songsFetch)=>{
  let songs =[] 
 for (let index = 0; index < songsFetch.length; index++) {
  const element = songsFetch[index];
  let name = element.track.name
  let id = element.track.id
  let artistsOnSong = element.track.artists
  let artists = []
  for (let index = 0; index < artistsOnSong.length; index++) {
    const element = artistsOnSong[index];
    artists.push({"id" : element.id, "name" : element.name})
  }
  songs.push({"country_id" : countryId, "id" : id, "rank" : index + 1, "name" : name, "artists" : artists})
 }
return songs
}


use plotify
db.dropDatabase();
const addAllSongs = async (countryPlaylist) => {
  for(var country in countryPlaylist) {
    if (!countryPlaylistId[country]){
    console.log(Object.keys(country)[0]);
    let songsToInsert = await top10Fetch(country)
    db.songs.insertMany(getIndividualSongsFromFetch(countryPlaylist, songsToInsert))};
  }
}

const waitingForFetch1 = async function() {
    const songsToInsert = await top10Fetch()
    console.log(songsToInsert);
    db.songs.insertMany(getIndividualSongsFromFetch(songsToInsert));
}


const callQuizData = async () => {
    console.log("1st fetch starts");
    await waitingForFetch1();
    console.log("1st fetch ends");
}
// addAllSongs(countryPlaylistId);
let za = "ZA"
console.log(top10Fetch(za));