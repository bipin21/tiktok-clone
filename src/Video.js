import React, { useRef, useState } from 'react'
import "./Video.css"
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
function Video() {
    const videoRef = useRef(null);
    const [play, setPlay] = useState(false)
    const onVideoPress = () => {
        if (play) {
            videoRef.current.pause();
            setPlay(false);
        } else {
            videoRef.current.play();
            setPlay(true);
        }
    };


    return (
        <div className="video">
            <video
                className="video__player"
                src="sample.mp4"
                loop
                ref={videoRef}
                onClick={onVideoPress}
            >

            </video>


            {/* Video Footer */}
            <VideoFooter  />
            {/* Video Sidebar */}
            <VideoSidebar />
        </div>
    )
}

export default Video
