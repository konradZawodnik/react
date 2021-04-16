import React, { useCallback, useState } from 'react';
import { Switch, Route, useHistory } from "react-router-dom";

import Header from './Header/Header';
import PlayingView from './PlayingView/PlayingView';
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
        <>
            <Header handleFormSubmit={handleSubmit} />
            <div className='container'>
                <Switch>
                    <Route
                        path="/player"
                    >
                        <PlayingView
                            handleVideoSelect={handleVideoSelect}
                            videos={videos}
                            video={selectedVideo}
                        />
                    </Route>
                    <Route
                        path="/search"
                    >
                        <SearchView
                            handleVideoSelect={handleVideoSelect}
                            videos={videos}
                        />
                    </Route>
                </Switch>
            </div>
        </>
    )
}

export default App;
