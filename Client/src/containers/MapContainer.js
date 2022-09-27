import './App.css';

import MapChart from '../mapcomponents/MapChart';

function MapContainer ({token}){
    console.log(token);
    return (
        <MapChart className="Map" token={token}/>
    )
}

export default MapContainer;