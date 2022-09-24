import React from 'react'

const Top10Item = ({rank, songName, songArtists}) => {
    // const artists = songArtists((songArtists)=>{
    //     let artistList = ""
    //     for (let index = 0; index < songArtists.length; index++) {
    //         const element = songArtists[index];
    //         artistList += element.name
    //     }
    // })

    
    return(
    <div>
        {rank} | {songName} | {songArtists.name}
    </div>
    )
}
export default Top10Item