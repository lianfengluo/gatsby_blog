import React from 'react';
import { TableWrapper } from 'src/wrappers';

export const Table: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <TableWrapper>
      <table>{children}</table>
    </TableWrapper>
  );
};
