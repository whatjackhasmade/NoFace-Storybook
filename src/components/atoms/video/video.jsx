import React from "react"

const Video = ({ autoPlay, className, loop, muted, video }) => (
  <video className={className} autoPlay loop muted>
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
)

export default Video
