import { useCallback, useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Spinner } from 'reactstrap';

import Header from './Header/Header';
import PlayingView from './PlayingView/PlayingView';
import SearchView from './SearchView/SearchView';
import youtube from '../api/youtube';

import './App.scss';

export type SelectedVideo = { 
    snippet: { description: string; title: string; }; 
    id: { channelId: string; videoId: string; }; 
} | null | undefined

export type SelectedItem = { 
    snippet: { description?: string; title?: string; }; 
} | null | undefined;

type SelectedVideos = Array<{ 
    snippet: { description?: string | undefined; title?: string | undefined;
    thumbnails: { medium: { url?: string | undefined; }; }; }; 
    id: { channelId: string; videoId: string; }; 
}>

const App = () => {
    const [videos, setVideos] = useState<SelectedVideos>([])
    const [selectedVideo, setSelectedVideo] = useState<SelectedVideo>(null);
    const [erroModalOpen, setErrorrModalOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSubmit = useCallback(async (termFromSearchBar: string | undefined) => {
        try {
            setLoading(true);
            const response: any = await youtube.get('/search', {
                params: {
                    q: termFromSearchBar
                }
            });
            setVideos(response.data.items);
            setLoading(false);
            navigate('/search');
        } catch (err) {
            setErrorrModalOpen(true);
        }
    }, [navigate]);

    const handleVideoSelect = useCallback((video: SelectedVideo) => {
        setSelectedVideo(video);
        navigate('/player');
    }, [navigate]);

    return (
        <>
            {loading && <Spinner />}
            {erroModalOpen &&
                <Modal
                    className="modal"
                    isOpen={erroModalOpen}
                >
                    <ModalHeader className="modalHeader">
                        <i className="fa fa-close closeIcon" onClick={() => setErrorrModalOpen(false)} />
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
                <Routes>
                    <Route
                        element={
                            <PlayingView
                              handleVideoSelect={handleVideoSelect}
                              videos={videos}
                              video={selectedVideo}
                            /> 
                        }
                        path="/player"
                    /> 
                    <Route
                        element={
                            <SearchView
                              handleVideoSelect={handleVideoSelect}
                              videos={videos}
                            />
                        }
                        path="/search"
                    />
                </Routes>
            </div>
        </>
    )
}

export default App;
