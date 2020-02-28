import React from 'react';
import { PaginationContainer, ThreeDot, ItemButton, PageInfo } from './styled';

export interface IPaginationProps {
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageCount: number;
  pageIndex: number;
  gotoPage: (updater: number | ((pageIndex: number) => number)) => void;
  nextPage: () => void;
  previousPage: () => void;
}

const filterPages = (visiblePages: number[], total: number): number[] =>
  visiblePages.filter(page => page <= total);

const getVisiblePages = (page: number, total: number): (number | string)[] => {
  if (total < 5) {
    return filterPages([1, 2, 3, 4], total);
  }
  if (page > 3 && page < total - 2) {
    return ['...', page - 1, page, page + 1, '...'];
  }
  if (page > 3 && page >= total - 2) {
    return ['...', total - 3, total - 2, total - 1, total];
  }
  return [1, 2, 3, 4, '...'];
};

const Pagination = ({
  canPreviousPage,
  canNextPage,
  pageCount,
  pageIndex = 0,
  gotoPage,
  nextPage,
  previousPage,
}: IPaginationProps) => {
  const visiblePages = getVisiblePages(pageIndex + 1, pageCount);

  return (
    <PaginationContainer>
      <PageInfo>
        Page {pageIndex + 1} of {pageCount}
      </PageInfo>
      <ItemButton onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        {'<<'}
      </ItemButton>
      <ItemButton onClick={() => previousPage()} disabled={!canPreviousPage}>
        {'<'}
      </ItemButton>
      {visiblePages.map((p, i) =>
        typeof p === 'number' ? (
          <ItemButton key={i} onClick={() => gotoPage(p - 1)} active={pageIndex === p - 1}>
            {p}
          </ItemButton>
        ) : (
          <ThreeDot key={i}>...</ThreeDot>
        ),
      )}
      <ItemButton onClick={() => nextPage()} disabled={!canNextPage}>
        {'>'}
      </ItemButton>
      <ItemButton onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        {'>>'}
      </ItemButton>
    </PaginationContainer>
  );
};

export default Pagination;
