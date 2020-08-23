import React from 'react'
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";

function VideoFooter() {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@bipinkarki</h3>
                <p>This is description</p>
                <MusicNoteIcon className="videoFooter__icon" />
            </div>
            <img
                className="videoFooter__record"
                src="https://static.thenounproject.com/png/934821-200.png"
                alt=""
            />
        </div>
    )
}

export default VideoFooter
