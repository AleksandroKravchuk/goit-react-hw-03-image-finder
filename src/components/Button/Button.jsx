import React from 'react';
import { ButtonLoadMore } from './Button.styled';

const Button = ({ onClickLoadMore }) => (
  <ButtonLoadMore type="button " onClick={onClickLoadMore}>
    Load more
  </ButtonLoadMore>
);
export default Button;
