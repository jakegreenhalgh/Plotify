import './Components.css'
import React from "react";
import { IconContext } from "react-icons";
import { FaPause } from "react-icons/fa";
import { IoPlaySkipBack, IoPlaySkipForward, IoPlay } from "react-icons/io5";

export default function Controls({
  isPlaying,
  setIsPlaying,
  handleNext,
  handlePrev,
  trackProgress,
  addZero
}) {
  return (
    
    <IconContext.Provider value={{ color: "#C4D0E3", className:"btn" }}>
      <div className="playback">
        <div className='buttons'>
        <div onClick={handlePrev}>
          <IoPlaySkipBack />
        </div>
        <div
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <FaPause /> : <IoPlay />}
        </div>
        <div onClick={handleNext}>
          <IoPlaySkipForward/>
        </div></div>
        <p>
        </p>
        <div className='time'>
          <div>0:{addZero(Math.round(trackProgress))}</div>
          <div>0:30</div>
      </div>
      </div>
    </IconContext.Provider>
  
  );
}