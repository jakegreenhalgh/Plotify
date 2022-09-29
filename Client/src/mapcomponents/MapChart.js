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

  // const accessToken = 'BQBwvvbYEjsDAOSydJNHGJAwwpPaXI8Ah7-jqEDqGBI90LIsDzsoNxcRQXTuZWSLP9rrLdTxxv3wjbPm5XrAx9TH03S4QQx5VZ7xk1-5ejwTBZEg1O3YrNJ1csw6Do6iP-9CKengXyQ-XxxG_nUXoqyvG3q7XUnLSeVqiYveiwbZU00'
  let accessToken = 'BQCiikIC1H2g7QpApvcPFntbe645TkY7l1QWRomHA5Rv7mPZrAEl2DCHbTqB-QfdHxLJoMk0f8-dFgnFBDlix4VKZnrQiHZbvs0PRQg2mE5sNRnCO7CbT2_M-ibqJIB62krrts8bmqQ3M0u_baXT3eW0Plzz2v0HVw5MkhcGKmypYbQ'


    useEffect (() => {
      const playlistId = countryPlaylistId[clickedCountry["Alpha-2"]]
      fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
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