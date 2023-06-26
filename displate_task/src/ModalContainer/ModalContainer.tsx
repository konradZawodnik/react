import { Fragment } from "react";
import { connect } from "react-redux";
import {
  Button,
  Loader,
  Modal,
  ModalActions,
  ModalContent,
  ModalHeader,
} from "semantic-ui-react";

import {
  getRandomPhoto,
  resetClickedPhoto,
  resetRandomPhoto,
} from "../store/actions/photosActions";

import "./ModalContainer.css";

type TReduxState = {
  loading: boolean;
  photos: any;
  clickedPhoto: string;
  randomPhoto: string;
};

type TReduxActions = {
  getRandomPhoto: () => void;
  resetClickedPhoto: () => void;
  resetRandomPhoto: () => void;
};

type TModalContainerProps = {
  modalOpen: boolean;
  setModalOpen: (key: boolean) => void;
};

type TModalContainer = TReduxActions & TReduxState & TModalContainerProps;

const ModalContainer = ({
  getRandomPhoto,
  modalOpen,
  clickedPhoto,
  photos,
  randomPhoto,
  loading,
  resetClickedPhoto,
  resetRandomPhoto,
  setModalOpen,
}: TModalContainer) => (
  <Fragment>
    <Modal className="Modal" size="large" open={modalOpen}>
      <ModalHeader className="ModalHeader">
        {`Zdjęcie psa: ${
          !clickedPhoto && !randomPhoto
            ? ""
            : (clickedPhoto && clickedPhoto.substring(30).split("/")[0]) ||
              (randomPhoto && randomPhoto.substring(30).split("/")[0])
        }`}
      </ModalHeader>
      <ModalContent className="ModalBody">
        {loading && modalOpen ? (
          <div className="Loading">
            <Loader animation="grow" size="small" />
          </div>
        ) : (
          <img
            alt={(photos && clickedPhoto) || randomPhoto}
            src={(photos && clickedPhoto) || randomPhoto}
          />
        )}
      </ModalContent>
      <ModalActions className="ModalFooter">
        <Button
          className="Button"
          primary
          onClick={() => {
            clickedPhoto && resetClickedPhoto();
            getRandomPhoto();
          }}
        >
          {"Losuj nastepne zdjęcie"}
        </Button>
        <Button
          className="Button"
          primary
          onClick={() => {
            randomPhoto && resetRandomPhoto();
            clickedPhoto && resetClickedPhoto();
            setModalOpen(false);
          }}
        >
          {"Zamknij"}
        </Button>
      </ModalActions>
    </Modal>
  </Fragment>
);

const mapStateToProps = (state: TReduxState) => ({
  loading: state.photos.loading,
  photos: state.photos.photos,
  clickedPhoto: state.photos.clickedPhoto,
  randomPhoto: state.photos.randomPhoto,
});

export default connect(mapStateToProps, {
  getRandomPhoto,
  resetClickedPhoto,
  resetRandomPhoto,
})(ModalContainer);
