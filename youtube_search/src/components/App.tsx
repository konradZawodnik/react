import React, { useCallback, useState } from 'react';
import { Switch, Route, useHistory } from "react-router-dom";

import PlayingView from './PlayingView/PlayingView';
import SearchBar from './SearchBar/Searchbar';
import SearchView from './SearchView/SearchView';
import youtube from '../api/youtube';

import './App.scss';

const App = () => {

    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null);
    const history = useHistory();

    const handleSubmit = useCallback(async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        });
        setVideos(response.data.items);
        history.push('/search');
    }, [history]);

    const handleVideoSelect = useCallback((video) => {
        setSelectedVideo(video);
        history.push('/player');
    }, [history]);

    return (
        <div className='container'>
            <header className='header'>
                <SearchBar handleFormSubmit={handleSubmit} />
            </header>
            <Switch>
                <Route
                    path="/player"
                >
                    <PlayingView handleVideoSelect={handleVideoSelect} videos={videos} video={selectedVideo} />
                </Route>
                <Route
                    path="/search"
                >
                    <SearchView handleVideoSelect={handleVideoSelect} videos={videos} />
                </Route>
            </Switch>
        </div>
    )
}

export default App;
