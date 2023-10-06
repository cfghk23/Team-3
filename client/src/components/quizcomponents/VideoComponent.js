import React from 'react';

function YouTubeVideo({ videoLink, width = "560", height = "315" }) {
    return (
        <div className="youtube-video-container">
            <iframe
                width={width}
                height={height}
                src={`${videoLink}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
    );
}

export default YouTubeVideo;