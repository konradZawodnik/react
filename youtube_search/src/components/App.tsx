import React, { useCallback, useState } from 'react';
import { Switch, Route, useHistory } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Spinner } from 'reactstrap';

import Header from './Header/Header';
import PlayingView from './PlayingView/PlayingView';
import SearchView from './SearchView/SearchView';
import youtube from '../api/youtube';

import './App.scss';

const App = () => {
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [erroModalOpen, setErrorrModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = useCallback(async (termFromSearchBar) => {
        try {
            setLoading(true);
            const response = await youtube.get('/search', {
                params: {
                    q: termFromSearchBar
                }
            });
            setVideos(response.data.items);
            setLoading(false);
            history.push('/search');
        } catch (err) {
            setErrorrModalOpen(true);
        }
    }, [history]);

    const handleVideoSelect = useCallback((video) => {
        setSelectedVideo(video);
        history.push('/player');
    }, [history]);

    return (
        <>
            {loading && <Spinner />}
            {erroModalOpen &&
                <Modal
                    className="modal"
                    isOpen={erroModalOpen}
                >
                    <ModalHeader className="modalHeader">
                        <i className="fa fa-close closeIcon" onClick={() => setErrorrModalOpen(false)}/>
                    </ModalHeader>
                    <ModalBody className="modalBody">{"Błąd zapytania"} </ModalBody>
                    <ModalFooter className="modalFooter">
                        <Button
                            className="button"
                            color="secondary"
                            onClick={() => setErrorrModalOpen(false)}
                        >
                            Zamknij
                        </Button>
                    </ModalFooter>
                </Modal>}
            <Header
                handleFormSubmit={handleSubmit}
            />
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
