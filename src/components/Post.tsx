import React from 'react';
import { PostWrapper } from 'src/wrappers';

export const Post: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <PostWrapper>{children}</PostWrapper>;
};
