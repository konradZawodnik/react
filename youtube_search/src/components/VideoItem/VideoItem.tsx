import React from 'react';

import './VideoItem.scss';

type VideoItemProps = {
    handleVideoSelect: (video: object) => void,
    video: {
        snippet: {
            description?: string,
            title?: string,
            thumbnails: {
                medium: {
                    url?: string,
                }
            }
        }
    }
}

const VideoItem = ({ video, handleVideoSelect }: VideoItemProps) => (
    <div onClick={() => handleVideoSelect(video)} className='video-item item'>
        <img
            alt={video.snippet.description}
            className='image'
            src={video.snippet.thumbnails.medium.url}
        />
        <div className='content'>
            <div className='title'>{video.snippet.title}</div>
        </div>
    </div>
);

export default VideoItem;
