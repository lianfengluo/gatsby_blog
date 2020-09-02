import React from 'react';
import { ContainerWrapper } from 'src/wrappers';

export const Container: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};
