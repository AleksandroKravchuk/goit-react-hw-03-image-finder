import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGallerySection } from './ImageGallery.styled';

const ImageGallery = ({ modalOpen }) => (
  <ImageGallerySection>
    <ImageGalleryItem modalOpen={modalOpen}></ImageGalleryItem>
  </ImageGallerySection>
);
export default ImageGallery;
