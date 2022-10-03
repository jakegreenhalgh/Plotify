import Top10Item from './Top10item'

const Top10 = ({playlist, token, setCurrentIndex}) => {


    const individualTop10items = playlist.map( (songObj, i) => {
        return(
            <Top10Item 
            key={i}
            image={songObj.track.album.images[2].url} 
            songName={songObj.track.name} 
            songArtists={songObj.track.artists}
            preview={songObj.track.preview_url}
            id={songObj.track.id}
            token={token}
            setCurrentIndex={setCurrentIndex}
            index={i}
            />
        )
    })

    return(
        <ul>{individualTop10items} </ul>
    )
}

export default Top10

