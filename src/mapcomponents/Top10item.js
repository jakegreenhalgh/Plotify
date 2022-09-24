import React from 'react'

const Top10Item = ({rank, songName, songArtists}) => {
    return(
    <div>
        {rank} | {songName} | {songArtists[0].name}{songArtists[1]?", "+songArtists[1].name:null}{songArtists[2]?", "+songArtists[2].name:null}
    </div>
    )
}
export default Top10Item


