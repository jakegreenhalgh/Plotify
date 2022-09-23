import React from "react"
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps"
import { useState, useEffect } from "react";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

function MapChart() {

  const [clickedCountry, setClickedCountry] = useState("");
  const [playlist, setPlaylist] = useState([]);

  const playlistId = '37i9dQZEVXbKM896FDX8L1'
  const accessToken = 'BQBAtck9nbr0sDBTc6HJd1Wkrs3YOJfqiOkBdlIW6YcP_nwZdeJjEAKN0Qi-rkgn91NUJZSOCPAeyF-scMvCLE5aa1v2hEwzqceE7KVxOt8UFN230to7W9qfyc-iZZ-fbbT7cmNxq3Vqvt_MdfFcvYUZVMJ9OkB9lJMpWBoQWTrZaNg'

    useEffect (() => {
      fetch('https://api.spotify.com/v1/playlists/37i9dQZEVXbKM896FDX8L1', {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        })
            .then(res => res.json())
            .then(top10 => setPlaylist(top10.tracks.items))
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
    </>
  )
}

export default MapChart;