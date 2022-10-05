import React from 'react'
import axios from 'axios';
import { FaHeart } from 'react-icons/fa';
import './Map.css'


const Top10Item = ({image, songName, songArtists, id, token, setCurrentIndex, index}) => {

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
    <div onClick={chooseTrack} className='chart-track'>
        <img src={image} alt='album artwork'/>
        {songName} | {songArtists[0].name}{songArtists[1]?", "+songArtists[1].name:null}{songArtists[2]?", "+songArtists[2].name:null}
        <FaHeart onClick={addToLikes} value={{ size: "20px", color: "#C4D0E3" }} className="btn-body" />
    </div>
    )
}
export default Top10Item


