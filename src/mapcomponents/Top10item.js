import React from 'react'

const Top10Item = ({rank, songName, songArtist}) => {
    return(
    <div>
        {rank}, {songName}, {songArtist}
    </div>
    )
}
export default Top10Item