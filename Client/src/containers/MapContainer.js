import './App.css';

import MapChart from '../mapcomponents/MapChart';
import Player from '../MusicPlayer';
import { useState } from 'react';

function MapContainer ({token}){
    
    const [playlistID, setPlaylistID] = useState([]);
    const [currentTrack, setCurrentTrack] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);



    return (
        <>
        <MapChart className="Map" 
        token={token} 
        setPlaylistID={setPlaylistID}
        setCurrentIndex={setCurrentIndex}
        />
        <Player 
        playlistID={playlistID} 
        token={token}
        currentTrack={currentTrack} 
        setCurrentTrack={setCurrentTrack}
        currentIndex={currentIndex} 
        setCurrentIndex={setCurrentIndex}
        />
        </>
    )
}

export default MapContainer;