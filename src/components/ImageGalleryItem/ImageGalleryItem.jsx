import React from 'react';
import { ImageGalleryIt, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ modalOpen }) => (
  <ImageGalleryIt>
    <Image src="" alt="" onClick={modalOpen} />
  </ImageGalleryIt>
);
export default ImageGalleryItem;
