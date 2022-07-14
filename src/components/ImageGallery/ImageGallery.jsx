import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGallerySection } from './ImageGallery.styled';
import { addFoto } from 'components/API/api';

class ImageGallery extends React.Component {
  state = {
    loading: false,
    fotos: [],
  };

  //  componentDidMount() {
  //    this.setState({ fotos: api() })
  //  }
  addFotos = () => {
    addFoto().then(hits => console.log(hits));
    console.log(addFoto());
  };

  render() {
    // console.log(this.addFotos());

    const { fotos } = this.state;
    return (
      <ImageGallerySection>
        {fotos.map(item => (
          <ImageGalleryItem key={item.id} modalOpen={this.props.modalOpen} />
        ))}
      </ImageGallerySection>
    );
  }
}
export default ImageGallery;
// api().then(({ hits }) => console.log(hits));
