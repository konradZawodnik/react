import React, { useCallback, useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [randomPhoto, setRandomPhoto] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const getListOfDogs = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://dog.ceo/api/breeds/list/all');
      setData(response.data.message);
      setLoading(false);
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getImageOfClickedBreed = useCallback(async (e, value) => {
    try {
      setLoading(true);
      setRandomPhoto(null);
      const response = await axios.get(`https://dog.ceo/api/breed/${value.trim()}/images/random`);
      setPhoto(response.data.message);
      setActive(true);
      setModalOpen(true);
      setLoading(false);
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getImageOfClickedSubBreed = useCallback(async (e, value) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://dog.ceo/api/breed/${value}/images/random`);
      setPhoto(response.data.message);
      setActive(true);
      setModalOpen(true);
      setLoading(false);
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getRandomImage = useCallback(async () => {
    try {
      setPhoto(null);
      setLoading(true);
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      setRandomPhoto(response.data.message);
      setActive(true);
      setModalOpen(true);
      setLoading(false);
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getListOfDogs();
  }, [getListOfDogs]);

  if (loading) {
    return <div className="Loading">{"Loading"}</div>
  }
  return (
    <Fragment>
      <span className="SiteTitle">{"Breeds of dogs"}</span>
      <div className="App">
        {data && Object.keys(data).map((key, index) => (
          <Fragment key={index}>
            {data[key].length <= 0 &&
              <ul>
                <li key={index}>
                  <Button
                    active={active}
                    className="Button"
                    onClick={(e) => getImageOfClickedBreed(e, `${key}${data[key]}`)}
                  >
                    {`${key} ${data[key]}`}
                  </Button>
                </li>
              </ul>}
            {data[key].length > 0 && (
              <ul>
                <li key={index}>
                  {Object.values(data[key]).map((value, id) => (
                    <div key={id} className="ButtonOfTheSameBreedContainer">
                      <Button
                        active={active}
                        className="ButtonOfTheSameBreed"
                        onClick={(e) => getImageOfClickedSubBreed(e, `${key}`)}
                      >
                        {`${key} ${value}`}
                      </Button>
                    </div>
                  ))}
                </li>
              </ul>)}
          </Fragment>
        ))}
        {active &&
          <div >
            <Modal isOpen={modalOpen} className="Modal">
              <ModalBody className="ModalBody">
                {photo && modalOpen &&
                  <img
                    alt={photo}
                    src={photo}
                  />}
                {randomPhoto && modalOpen &&
                  <img
                    alt={randomPhoto}
                    src={randomPhoto}
                  />}
              </ModalBody>
              <ModalFooter className="ModalFooter">
                <Button
                  className="Button"
                  color="primary"
                  onClick={getRandomImage}
                >
                  {"Losuj nastepne zdjęcie"}
                </Button>
                <Button
                  className="Button"
                  color="secondary"
                  onClick={() => {
                    setPhoto(null);
                    setModalOpen(false);
                  }}
                >
                  {"Zamknij"}
                </Button>
              </ModalFooter>
            </Modal>
          </div>}
      </div >
    </Fragment>
  );
};

export default App;
