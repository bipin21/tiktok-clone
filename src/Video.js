import React, { useRef, useState } from 'react'
import "./Video.css"
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
function Video({
    url, channel, description, song, likes, shares, messages
}) {
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
                src={url}
                loop
                ref={videoRef}
                onClick={onVideoPress}
            >

            </video>


            {/* Video Footer */}
            <VideoFooter 
            channel={channel} 
            description={description}
            song={song}
              />
            {/* Video Sidebar */}
            <VideoSidebar 
            likes={likes} 
            shares={shares}
            messages={messages}
             />
        </div>
    )
}

export default Video
