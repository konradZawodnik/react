import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Spinner } from 'reactstrap';

import { getRandomPhoto, resetClickedPhoto, resetRandomPhoto } from '../store/actions/photosActions';

import './ModalContainer.css';

const ModalContainer = ({
    getRandomPhoto, modalOpen, clickedPhoto, photos, randomPhoto, loading,
    resetClickedPhoto, resetRandomPhoto, setModalOpen, }) => (
        <Fragment>
            <Modal
                className="Modal"
                isOpen={modalOpen}
            >
                <ModalHeader className="ModalHeader">
                    Zdjęcie psa
                </ModalHeader>
                <ModalBody className="ModalBody">
                    {loading && modalOpen ? <div className="Loading"><Spinner animation="grow" size="sm" /></div> :
                        <img
                            alt={(photos && clickedPhoto) || randomPhoto}
                            src={(photos && clickedPhoto) || randomPhoto}
                        />}
                </ModalBody>
                <ModalFooter className="ModalFooter">
                    <Button
                        className="Button"
                        color="primary"
                        onClick={() => {
                            clickedPhoto && resetClickedPhoto();
                            getRandomPhoto();
                        }}
                    >
                        Losuj nastepne zdjęcie
                   </Button>
                    <Button
                        className="Button"
                        color="secondary"
                        onClick={() => {
                            randomPhoto && resetRandomPhoto();
                            clickedPhoto && resetClickedPhoto();
                            setModalOpen(false);
                        }}
                    >
                        Zamknij
                    </Button>
                </ModalFooter>
            </Modal>
        </Fragment>
    );

const mapStateToProps = (state) => ({
    loading: state.photos.loading,
    photos: state.photos.photos,
    clickedPhoto: state.photos.clickedPhoto,
    randomPhoto: state.photos.randomPhoto
})

export default connect(mapStateToProps, { getRandomPhoto, resetClickedPhoto, resetRandomPhoto })(ModalContainer);
