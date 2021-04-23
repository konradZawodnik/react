import React from 'react';
import VideoItem from '../VideoItem/VideoItem';

import './VideoList.scss';

type VideoListProps = {
    handleVideoSelect: (video: object) => void,
    videos: Array<{
        snippet: {
            description?: string,
            title?: string,
            thumbnails: {
                medium: {
                    url?: string,
                }
            }
        },
        id: {
            channelId: string,
            videoId: string,
        }
    }>,
}

const VideoList = ({ videos, handleVideoSelect }: VideoListProps) => {
    const renderedVideos = videos.map((video) => {
        return <VideoItem key={video.id.channelId ? `https://www.youtube.com/embed/${video.id.channelId}`
            : `https://www.youtube.com/embed/${video.id.videoId}`}
            video={video}
            handleVideoSelect={handleVideoSelect} />
    });

    return <div className="renderedVideos">{renderedVideos}</div>;
};
export default VideoList;