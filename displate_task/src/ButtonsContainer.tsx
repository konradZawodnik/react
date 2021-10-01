import { useState, useEffect, Fragment } from 'react';
import { Button, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux'

import ModalContainer from './ModalContainer/ModalContainer';
import { getAllPhotos, getImageOfClickedBreed } from './store/actions/photosActions';

import './ButtonsContainer.css';

type TReduxState = {
  loading: boolean
  photos: any,
  clickedPhoto: string,
  randomPhoto: string
}

type TReduxActions = {
  getAllPhotos: () => void,
  getImageOfClickedBreed: (e: any, key: string) => void,
}

type TButtonsContainer = TReduxActions & TReduxState

const ButtonsContainer = ({ getAllPhotos, getImageOfClickedBreed, loading, photos }: TButtonsContainer) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    getAllPhotos();
  }, [getAllPhotos]);

  return loading ? <div className="Loading"><Loader animation="grow" size="small" /></div>
    : (
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
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
            />}
        </div >
      </Fragment>
    );
};

const mapStateToProps = (state: TReduxState) => ({
  loading: state.photos.loading,
  photos: state.photos.photos,
  clickedPhoto: state.photos.clickedPhoto,
  randomPhoto: state.photos.randomPhoto
});

export default connect(mapStateToProps, { getAllPhotos, getImageOfClickedBreed })(ButtonsContainer)
