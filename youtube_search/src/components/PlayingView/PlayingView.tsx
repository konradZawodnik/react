import React from 'react';

import VideoList from '../VideoList/VideoList';
import VideoDetail from '../VideoDetail/VideoDetail';

import './PlayingView.scss';

type PlayingViewProps = {
    handleVideoSelect: (video: object) => void,
    video?: {
        snippet: {
            description: string,
            title: string,
        },
        id: {
            videoId: string,
        }
    } | null,
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

const PlayingView = ({ handleVideoSelect, videos, video }: PlayingViewProps) => (
    <>
        <div className="column">
            <VideoDetail video={video} />
        </div>
        <div className="column">
            <VideoList handleVideoSelect={handleVideoSelect} videos={videos} />
        </div>
    </>
);

export default PlayingView;