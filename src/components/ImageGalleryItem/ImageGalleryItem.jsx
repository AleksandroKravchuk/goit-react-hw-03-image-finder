import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryIt, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ modalOpen, fotoCard }) => (
  <ImageGalleryIt>
    <Image src={fotoCard} alt="" onClick={modalOpen} />
  </ImageGalleryIt>
);
ImageGalleryItem.propTypes = {
  modalOpen: PropTypes.func.isRequired,
  fotoCard: PropTypes.string.isRequired,
};
export default ImageGalleryItem;
