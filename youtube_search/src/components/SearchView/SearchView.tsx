import React from 'react';

import VideoList from '../VideoList/VideoList';

import './SearchView.scss';

type SearchViewProps = {
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

const SearchView = ({ handleVideoSelect, videos }: SearchViewProps) => (
    <div className="searchViewContainer">
        <VideoList handleVideoSelect={handleVideoSelect} videos={videos} />
    </div>
)

export default SearchView;
