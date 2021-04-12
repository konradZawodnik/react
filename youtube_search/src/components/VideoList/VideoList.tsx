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
            videoId: string,
        }
    }>,
}

const VideoList = ({ videos, handleVideoSelect }: VideoListProps) => {
    const renderedVideos = videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
    });

    return <div className="renderedVideos">{renderedVideos}</div>;
};
export default VideoList;