import React from 'react';
import { PaginationElement, PaginationWrapper } from 'src/wrappers';

interface PropsItf {
  isFirst: boolean;
  isLast: boolean;
  prevPage: string;
  nextPage: string;
}

export const Pagination: React.FC<PropsItf> = ({
  isFirst,
  isLast,
  prevPage,
  nextPage,
}) => {
  return (
    <PaginationWrapper isFirst={isFirst} isLast={isLast}>
      <PaginationElement to={prevPage}>Previous Page</PaginationElement>
      <PaginationElement to={nextPage}>Next Page</PaginationElement>
    </PaginationWrapper>
  );
};
