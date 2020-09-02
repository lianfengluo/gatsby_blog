import React from 'react';
import { ContainerWrapper } from 'src/wrappers';
import { Nav, Footer } from 'src/components';

export const Container: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ContainerWrapper>
      <Nav />
      {children}
      <Footer />
    </ContainerWrapper>
  );
};
