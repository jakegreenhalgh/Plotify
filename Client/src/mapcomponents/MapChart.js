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
  const accessToken = 'BQDBPe-pwRDis8PnH0l3YPiBvhxvn8ymi5gkt_034Oppiry0RrJuZRvd5NUNMS1JukZrxvsdA0PDZFkufs7u7BbIJmI4P1TCLzwdc-rCmdRzBW_BNs969sbCI_cVayssr5mSflqGW26HwJZV8IQtOA5tAR59HtTk2ixqP8oFQ_cwayI'
//bob
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