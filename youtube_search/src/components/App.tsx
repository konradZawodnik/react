import React, { useCallback, useState } from 'react';
import SearchBar from './SearchBar/Searchbar';
import youtube from '../api/youtube';
import VideoList from './VideoList/VideoList';
import VideoDetail from './VideoDetail/VideoDetail';

import './App.scss';

const App = () => {

    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleSubmit = useCallback(async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        setVideos(response.data.items)
    }, []);

    const handleVideoSelect = useCallback((video) => {
        setSelectedVideo(video);
    }, []);

    return (
        <div className='container'>
            <header className='header'>
                <SearchBar handleFormSubmit={handleSubmit} />
            </header>
            <div className="column">
                <VideoDetail video={selectedVideo} />
            </div>
            <div className="column">
                <VideoList handleVideoSelect={handleVideoSelect} videos={videos} />
            </div>
        </div>
    )
}

export default App;
