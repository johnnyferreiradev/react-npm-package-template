import React from 'react';

import { ButtonProps } from './types';

import './styles.css';

const Button = ({ className, ...rest }: ButtonProps) => {
  return (
    <button className={`button-test outline-none ${className}`} {...rest} />
  );
};

export default Button;
