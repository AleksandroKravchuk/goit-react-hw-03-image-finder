import { AppStyle } from './App.styled';
import React from 'react';
import { Component } from 'react';
import { Notify } from 'notiflix';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import { Oval } from 'react-loader-spinner';
import ApiService from './API/api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';

const apiData = new ApiService();
class App extends Component {
  state = {
    searchName: '',
    totalHits: null,
    // fotoModal: null,
    // loading: false,
    showModal: false,
    foto: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { totalHits, foto } = this.state;
    const prevFoto = prevState.searchName;
    const currentFoto = this.state.searchName;
    if (prevFoto !== currentFoto) {
      apiData.query = currentFoto.trim();
      apiData.resetPage();

      apiData.fetchImages().then(({ hits, totalHits }) => {
        // <Oval color="#00BFFF" height={80} width={80} />;
        this.setState({ foto: hits, totalHits });
        if (totalHits === 0) {
          Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
      });
    }

    // if (
    //   foto !== null &&
    //   totalHits !== 0 &&
    //   foto.length >= totalHits &&
    //   foto.length !== 0
    // ) {

    //   Notify.warning(
    //     "We're sorry, but you've reached the end of search results."
    //   );
    // }
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
