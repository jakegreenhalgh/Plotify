import React from 'react'
import axios from 'axios';

const Top10Item = ({image, songName, songArtists, preview, id, token, setCurrentIndex, index}) => {

    const chooseTrack = () => {
      setCurrentIndex(index)
    }

    const addToLikes = () => {
        axios({
            method: 'put',
            url: `https://api.spotify.com/v1/me/tracks`,
            headers: { 'Authorization': 'Bearer ' + token },
            data: {
              "ids": [id]
            }
          })
        }

    return(
    <div onClick={chooseTrack}>
        <img src={image} alt='album artwork'/>
        {songName} | {songArtists[0].name}{songArtists[1]?", "+songArtists[1].name:null}{songArtists[2]?", "+songArtists[2].name:null}
        <button onClick={addToLikes}>Add to likes</button>
    </div>
    )
}
export default Top10Item


