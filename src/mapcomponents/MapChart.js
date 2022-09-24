import React from "react"
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps"
import { useState, useEffect } from "react";
import Top10 from "./Top10";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

function MapChart() {

  const [clickedCountry, setClickedCountry] = useState("");
  const [playlist, setPlaylist] = useState([]);

  const playlistId = '37i9dQZEVXbKM896FDX8L1'
  const accessToken = 'BQCKf8kEpt7KpkCulFv7qYP_Dc53JSfGymEnmhUGalWHgPh5-RC-F34-3i_t50HZbT48KwtBBvn_dOxGM-Hw3DX4UGNQWMBoyUX_OMc3qK9eQCBrWx6EHJSxRYIZTo2swoVBd8A1jEAbV2YF8nt_GqKA-z0a0FO45iirEFRJW6SrvWc'

    useEffect (() => {
      fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        })
            .then(res => res.json())
            .then(top10 => setPlaylist(top10.tracks.items.slice(0, 10)))
    }, [])



    const handleClick = (geo) => {
        setClickedCountry(geo.properties.name);}
    
  return (
    <>
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography 
            key={geo.rsmKey}
            geography={geo}
            onClick={() => handleClick(geo)}
            style={{
                default: {
                  fill: "#ffffff",
                  outline: 'none'
                },
                hover: {
                  fill: "#1ed760",
                  outline: 'none'
                },
                pressed: {
                  fill: "#1db954",
                  outline: 'none'
                },
              }}
    />
          ))
        }
      </Geographies>
    </ComposableMap>
    <div>{clickedCountry}</div>
    {clickedCountry ? 
    <Top10 playlist={playlist}/>
    :
    null
    }
    
    </>
  )
}

export default MapChart;