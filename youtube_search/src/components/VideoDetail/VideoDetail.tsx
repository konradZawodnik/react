import React from 'react';

import './VideoDetail.scss';

type VideoDetailProps = {
    video?: {
        snippet: {
            description: string,
            title: string,
        },
        id: {
            videoId: string,
        }
    } | null,
}

const VideoDetail = ({ video }: VideoDetailProps) => {
    let videoSrc
    if (video) {
        videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    }
    return (
        <>
            {video &&
                <>
                    <div className="videoPlayer">
                        <iframe
                            height="460"
                            src={videoSrc}
                            allowFullScreen
                            title='Video player'
                            width="700"
                        />
                    </div>
                    <div className="videoDetails">
                        <h4 className="videoTitle">{video.snippet.title}</h4>
                        <p className="videoDescription">{video.snippet.description}</p>
                    </div>
                </>
            }
        </>
    )
}

export default VideoDetail;