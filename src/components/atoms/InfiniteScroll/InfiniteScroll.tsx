import InfiniteScrollComponent from 'react-infinite-scroll-component';
import { ReactElement } from 'react';
import { CircularProgress } from '@/components/atoms';

export interface InfiniteScrollProps {
  fetchData: () => any;
  hasMore: boolean;
  items?: ReactElement;
  length?: number;
}

export function InfiniteScroll({
  length = 0,
  items,
  fetchData,
  hasMore,
}: InfiniteScrollProps) {
  return (
    <InfiniteScrollComponent
      dataLength={length}
      next={fetchData}
      hasMore={hasMore}
      loader={<CircularProgress />}
    >
      {items}
    </InfiniteScrollComponent>
  );
}
