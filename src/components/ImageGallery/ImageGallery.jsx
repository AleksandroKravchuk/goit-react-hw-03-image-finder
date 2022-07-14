import React from 'react';
// import axios from 'axios';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGallerySection } from './ImageGallery.styled';
// import Modal from 'components/Modal/Modal';
// import { addFoto } from 'components/API/api';

// class ImageGallery extends React.Component {
//   state = {
//     loading: false,
//     foto: null,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevFoto = prevProps.searchName;
//     const currentFoto = this.props.searchName;
//     if (prevFoto !== currentFoto) {
//       axios
//         .get(
//           `https://pixabay.com/api/?q=${currentFoto}&key=27518443-a5857259e188e1fcb2dbeb9ca&image_type=photo&orientation=horizontal&per_page=12`
//         )
//         .then(({ data }) => this.setState({ foto: data.hits }));
//     }
//   }

//   render() {
//     const { foto } = this.state;
//     if (!foto) {
//       return;
//     }
//     return (
//       <ImageGallerySection>
//         {foto.map(item => (
//           <ImageGalleryItem
//             key={item.id}
//             fotoCard={item.webformatURL}
//             fotoModal={item.largeImageURL}
//             modalOpen={this.props.modalOpen}
//           />
//         ))}
//       </ImageGallerySection>
//     );
//   }
// }
// export default ImageGallery;

const ImageGallery = ({ fotoArray, modalOpen }) => {
  return (
    <ImageGallerySection>
      {fotoArray.map(item => (
        <ImageGalleryItem
          key={item.id}
          fotoCard={item.webformatURL}
          // fotoModal={item.largeImageURL}
          modalOpen={modalOpen}
        >
          {/* <Modal>
            <img src={item.webformatURLl} alt="" />
          </Modal> */}
        </ImageGalleryItem>
      ))}
    </ImageGallerySection>
  );
};
export default ImageGallery;
