import { AppStyle } from './App.styled';
import React from 'react';
import ApiService from './API/api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import { Component } from 'react';

const apiData = new ApiService();
class App extends Component {
  state = {
    searchName: '',
    fotoModal: null,
    loading: false,
    showModal: false,
    foto: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevFoto = prevState.searchName;
    const currentFoto = this.state.searchName;
    if (prevFoto !== currentFoto) {
      apiData.query = currentFoto.trim();
      apiData.resetPage();
      apiData.fetchImages().then(({ hits }) => this.setState({ foto: hits }));
    }
  }

  onSubmitName = searchName => {
    this.setState({ searchName });
  };
  onClickLoadMore = () => {
    apiData
      .fetchImages()
      .then(({ hits }) =>
        this.setState(prevState => ({ foto: [...prevState.foto, ...hits] }))
      );
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    const { showModal, searchName, foto } = this.state;

    return (
      <AppStyle>
        <Searchbar onSubmit={this.onSubmitName}></Searchbar>
        {foto && (
          <ImageGallery
            fotoArray={foto}
            searchName={searchName}
            modalOpen={this.toggleModal}
          ></ImageGallery>
        )}

        {foto && foto.length >= 12 && (
          <Button onClickLoadMore={this.onClickLoadMore}></Button>
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            {/* <img src={fotoModal} alt="" /> */}
          </Modal>
        )}
      </AppStyle>
    );
  }
}
export default App;
