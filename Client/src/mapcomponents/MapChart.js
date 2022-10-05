import React from "react"
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps"
import { useState, useEffect } from "react";
import Top10 from "./Top10";
import countryPlaylistId from "../CountryPlaylist";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

function MapChart({token, setPlaylistID, setCurrentIndex}) {

  const [clickedCountry, setClickedCountry] = useState("");
  const [playlist, setPlaylist] = useState([]);

    useEffect (() => {
      const playlistId = countryPlaylistId[clickedCountry["Alpha-2"]]
      if (playlistId){
      setPlaylistID(playlistId)
      fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then(top10 => setPlaylist(top10.tracks.items.slice(0, 10)))
    }}, [clickedCountry])

    const handleClick = (geo) => {
        setClickedCountry(geo.properties)
        ;
    }
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
                  fill: countryPlaylistId[geo.properties["Alpha-2"]]? "#ffffff" : "#808080",
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
    <div>{clickedCountry.name}</div>
    {clickedCountry ? 
    <Top10 playlist={playlist} token={token} setCurrentIndex={setCurrentIndex}/>
    :
    null
    }
    
    </>
  )
}

export default MapChart;