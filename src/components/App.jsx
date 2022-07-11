import { AppStyle } from './App.styled';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import { Component } from 'react';

class App extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    const { showModal } = this.state;
    return (
      <AppStyle>
        <Searchbar></Searchbar>
        <ImageGallery modalOpen={this.toggleModal}></ImageGallery>
        <Button></Button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum a sequi, cum aspernatur eum nobis ipsa quidem. Vero
              maiores at perspiciatis eius ipsam alias est, accusamus corrupti
              voluptate voluptatibus dolorum!
            </p>
          </Modal>
        )}
      </AppStyle>
    );
  }
}
export default App;
