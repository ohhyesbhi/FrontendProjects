import React from 'react';
import video from "../assets/MBA Chai Wala.mp4";

function Section1() {
  return (
<div className="intro" id='Home'>
      <video src={video} muted autoPlay loop controlsList="nodownload"></video>
      <div></div>
    </div>
  )
}

export default Section1
