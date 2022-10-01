import React from 'react'
import Top10Item from './Top10item'

const Top10 = ({playlist}) => {

    const individualTop10items = playlist.map( (songObj, i) => {
        return(
            <Top10Item 
            key={i}
            rank={i+1} 
            songName={songObj.track.name} 
            songArtists={songObj.track.artists}
            />
        )
    })

    return(
        <ul>{individualTop10items} </ul>
    )
}

export default Top10

