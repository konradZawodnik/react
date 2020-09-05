import React, { useState, useEffect, Fragment } from 'react';
import { Button, Spinner } from 'reactstrap';
import { connect } from 'react-redux'

import ModalContainer from './ModalContainer/ModalContainer';
import { getAllPhotos, getImageOfClickedBreed, getRandomPhoto } from './store/actions/photosActions';

import './ButtonsContainer.css';

const ButtonsContainer = ({
  getAllPhotos, getImageOfClickedBreed, getRandomPhoto,
  loading, photos, }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    getAllPhotos();
  }, [getAllPhotos]);

  if (loading) {
    return <div className="Loading"><Spinner animation="grow" size="sm"/></div>
  }
  return (
    <Fragment>
      <span className="SiteTitle">Lista ras psów</span>
      <div className="ButtonsContainer">
        {photos && Object.keys(photos).map((key, index) => (
          <Fragment key={index}>
            {photos[key].length <= 0 &&
              <ul>
                <li key={index}>
                  <Button
                    active={active}
                    className="Button"
                    onClick={(e) => {
                      getImageOfClickedBreed(e, `${key}${photos[key]}`);
                      setModalOpen(true);
                      setActive(true);
                    }}
                  >
                    {`${key} ${photos[key]}`}
                  </Button>
                </li>
              </ul>}
            {photos[key].length > 0 && (
              <ul>
                <li key={index}>
                  {Object.values(photos[key]).map((value, id) => (
                    <div key={id} className="ButtonOfTheSameBreedContainer">
                      <Button
                        active={active}
                        className="ButtonOfTheSameBreed"
                        onClick={(e) => {
                          getImageOfClickedBreed(e, `${key}`);
                          setModalOpen(true);
                          setActive(true);
                        }}
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
          <ModalContainer
            getRandomPhoto={getRandomPhoto}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />}
      </div >
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  loading: state.photos.loading,
  photos: state.photos.photos,
  clickedPhoto: state.photos.clickedPhoto,
  randomPhoto: state.photos.randomPhoto
});

export default connect(mapStateToProps, { getAllPhotos, getImageOfClickedBreed, getRandomPhoto})(ButtonsContainer)
