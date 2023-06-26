import { useCallback, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
} from "reactstrap";
import { AxiosResponse } from "axios";

import Header from "./Header/Header";
import PlayingView from "./PlayingView/PlayingView";
import SearchView from "./SearchView/SearchView";
import { SelectedItem, SelectedVideo, SelectedVideos } from "../types/types";
import youtube from "../api/youtube";

import "./App.scss";

const App = () => {
  const [videos, setVideos] = useState<SelectedVideos>([]);
  const [selectedVideo, setSelectedVideo] = useState<SelectedVideo>(null);
  const [errorModalOpen, setErrorModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (termFromSearchBar: string | undefined) => {
      try {
        setLoading(true);
        const response: AxiosResponse = await youtube.get("/search", {
          params: {
            q: termFromSearchBar,
          },
        });
        setVideos(response.data.items);
        setLoading(false);
        navigate("/search");
      } catch (err) {
        setErrorModalOpen(true);
      }
    },
    [navigate]
  );

  const handleVideoSelect = useCallback(
    (video: SelectedVideo | SelectedItem | any) => {
      setSelectedVideo(video);
      navigate("/player");
    },
    [navigate]
  );

  return (
    <>
      {loading && <Spinner className="spinner" />}
      {errorModalOpen && (
        <Modal className="modal" isOpen={errorModalOpen}>
          <ModalHeader className="modalHeader">
            <i
              className="fa fa-close closeIcon"
              onClick={() => setErrorModalOpen(false)}
            />
          </ModalHeader>
          <ModalBody className="modalBody">{"Błąd zapytania"} </ModalBody>
          <ModalFooter className="modalFooter">
            <Button
              className="button"
              color="secondary"
              onClick={() => setErrorModalOpen(false)}
            >
              Zamknij
            </Button>
          </ModalFooter>
        </Modal>
      )}
      <Header handleFormSubmit={handleSubmit} />
      <div className="container">
        <Routes>
          <Route
            element={
              <PlayingView
                handleVideoSelect={handleVideoSelect}
                video={selectedVideo}
                videos={videos}
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
  );
};

export default App;
