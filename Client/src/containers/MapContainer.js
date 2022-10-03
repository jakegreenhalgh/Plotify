import './Container.css';

import MapChart from '../mapcomponents/MapChart';
import Player from '../MusicPlayer';
import { useState } from 'react';

function MapContainer ({token}){

    const [playlistID, setPlaylistID] = useState(null);
    const [currentTrack, setCurrentTrack] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);


    return (
        <>
        <MapChart
        token={token} 
        setPlaylistID={setPlaylistID}
        setCurrentIndex={setCurrentIndex}
        />
        {(!playlistID) ? <p>Nothing here yet, pick a country to get started</p> : <Player 
        playlistID={playlistID} 
        token={token}
        currentTrack={currentTrack} 
        setCurrentTrack={setCurrentTrack}
        currentIndex={currentIndex} 
        setCurrentIndex={setCurrentIndex}
        />  }
        
        </>
    )
}

export default MapContainer;