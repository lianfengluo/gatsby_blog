import React from 'react';
import { ContentWrapper } from 'src/wrappers';

export const Content: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <ContentWrapper>{children}</ContentWrapper>;
};
