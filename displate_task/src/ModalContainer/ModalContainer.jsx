import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { getRandomPhoto, resetClickedPhoto, resetRandomPhoto } from '../store/actions/photosActions';

import './ModalContainer.css';

const ModalContainer = ({
    getRandomPhoto, modalOpen, clickedPhoto, photos, randomPhoto,
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
                    {photos && modalOpen &&
                        <img
                            alt={clickedPhoto}
                            src={clickedPhoto}
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
    photos: state.photos.photos,
    clickedPhoto: state.photos.clickedPhoto,
    randomPhoto: state.photos.randomPhoto
})

export default connect(mapStateToProps, { getRandomPhoto, resetClickedPhoto, resetRandomPhoto })(ModalContainer);
