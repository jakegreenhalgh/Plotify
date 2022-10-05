import axios from 'axios';
import { useEffect, useState } from 'react';
import AudioPlayer from './AudioPlayer';
import './Components.css'

const Player = ({playlistID, token, currentTrack, setCurrentTrack, currentIndex, setCurrentIndex}) => {
      
    const [tracks, setTracks] = useState([]);
      

    useEffect(() => {
      if (playlistID) {
        axios({
            method: 'get',
            url: `https://api.spotify.com/v1/playlists/${playlistID}/tracks`,
            headers: { 'Authorization': 'Bearer ' + token },
          })
          .then((res) => {
            setTracks(res.data.items);
            setCurrentTrack(res.data?.items[0]?.track);
          });
      }
    }, [playlistID]);
  
    useEffect(() => {
      setCurrentTrack(tracks[currentIndex]?.track);
    }, [currentIndex, tracks]);

    return (
        <div className="footer_container">
            <AudioPlayer
            currentTrack={currentTrack}
            total={tracks}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}/>
        </div>
    )
}

export default Player