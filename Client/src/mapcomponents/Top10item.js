import React from 'react'

const Top10Item = ({image, songName, songArtists, preview}) => {

    let audio = new Audio(preview)

    const playTrack = () => {
        audio.play()
  }
    const pauseTrack = () => {
        audio.pause()
    }  

    const addToLikes = () => {
        console.log("hi!")
    }

    return(
    <div>
        <img src={image} alt='album artwork' onMouseEnter={playTrack} onMouseLeave={pauseTrack}/>
        {songName} | {songArtists[0].name}{songArtists[1]?", "+songArtists[1].name:null}{songArtists[2]?", "+songArtists[2].name:null}
        <button onClick={addToLikes}>Add to likes</button>
    </div>
    )
}
export default Top10Item


