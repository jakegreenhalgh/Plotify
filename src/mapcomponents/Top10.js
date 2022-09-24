import React from 'react'
import Top10Item from './Top10item'

const Top10 = ({playlist}) => {

    console.log("passed to Top10 = ");
    console.log(playlist);

    const individualTop10items = playlist.map( (songObj, i) => {
        return(
            <Top10Item 
            key={i}
            rank={i+1} 
            songName={songObj.track.name} 
            songArtists={songObj.track.artists[0]}
            />
        )
    })

    return(
        <ul>{individualTop10items} </ul>
    )
}

export default Top10

