import './App.css';

import MapChart from '../mapcomponents/MapChart';
import Footer from '../mapcomponents/Footer';
import { useState } from 'react';

function MapContainer ({token}){
    
    const [playlistID, setPlaylistID] = useState([]);


    return (
        <>
        <MapChart className="Map" token={token} setPlaylistID={setPlaylistID}/>
        <Footer playlistID={playlistID}/>
        </>
    )
}

export default MapContainer;