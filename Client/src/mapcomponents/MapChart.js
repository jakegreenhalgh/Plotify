import React from "react"
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps"
import { useState, useEffect } from "react";
import Top10 from "./Top10";
import countryPlaylistId from "../CountryPlaylist";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

function MapChart({token}) {

  const [clickedCountry, setClickedCountry] = useState("");
  const [playlist, setPlaylist] = useState([]);

  // const playlistId = '37i9dQZEVXbKM896FDX8L1'
  // const accessToken = 'BQCqGLiJXAjjbVUkhACelmhtxBA3D_fxMjAQm5116Z80a_3ZmSFJs8Ra_YxOw12KS9h0qa4g63vCAnMgq6mw_Dz-nP5PNs9wpvQ4zA7TjGlxSyMQGMLpbh_RVVoEBdtH0t3GMDeDbK-9CV9VVP2sOfgjXomC3AV8n-Vg4XFtirNLFh4'

    useEffect (() => {
      const playlistId = countryPlaylistId[clickedCountry["Alpha-2"]]
      fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then(top10 => setPlaylist(top10.tracks.items.slice(0, 10)))
    }, [clickedCountry])



    const handleClick = (geo) => {
        setClickedCountry(geo.properties);
        // console.log(clickedCountry);
        // console.log(clickedCountry["Alpha-2"]);
        // console.log(countryPlaylistId[clickedCountry["Alpha-2"]])
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
                  // fill: "#ffffff",
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
    <Top10 playlist={playlist}/>
    :
    null
    }
    
    </>
  )
}

export default MapChart;