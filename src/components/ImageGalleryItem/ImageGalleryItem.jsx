import React from 'react';
import { ImageGalleryIt, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ modalOpen, fotoCard }) => (
  <ImageGalleryIt>
    <Image src={fotoCard} alt="" onClick={modalOpen} />
  </ImageGalleryIt>
);
export default ImageGalleryItem;
