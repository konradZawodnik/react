import React from 'react';

import './VideoDetail.scss';

type VideoDetailProps = {
    video?: {
        snippet: {
            description: string,
            title: string,
        },
        id: {
            channelId: string,
            videoId: string,
        }
    } | null,
}

const VideoDetail = ({ video }: VideoDetailProps) => {
    let videoSrc
    if (video) {
        const { id } = video;
        const { channelId, videoId } = id;
        videoSrc = channelId ? `https://www.youtube.com/embed/${channelId}` : `https://www.youtube.com/embed/${videoId}`;
    }
    return (
        <>
            {video &&
                <>
                    <div className="videoPlayer">
                        <iframe
                            src={videoSrc}
                            allowFullScreen
                            title='Video player'
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
