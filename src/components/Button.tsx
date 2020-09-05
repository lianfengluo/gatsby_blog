import React from 'react';
import { ButtonWrapper } from 'src/wrappers';

interface PropsItf {
  children: React.ReactNode;
  href: string;
}

export const Button: React.FC<PropsItf> = ({ children, href }) => {
  return <ButtonWrapper to={href}>{children}</ButtonWrapper>;
};
