import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component {
  // state = {
  //   fotoModal: null,
  // };
  // addFotoModal() {
  //   this.setState({fotoModal:})
  // }
  componentDidMount() {
    window.addEventListener('keydown', this.handlKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlKeydown);
  }
  handlKeydown = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };
  clickOnOverlay = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    // const { fotoModal } = this.props;
    console.log(this.props);
    return createPortal(
      <Overlay onClick={this.clickOnOverlay}>
        <ModalWindow>
          {/* {this.props.children} */}
          {/* <img src={fotoModal} alt="" /> */}
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
