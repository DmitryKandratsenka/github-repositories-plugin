import InfiniteScrollComponent from "react-infinite-scroll-component";
import { ReactElement } from "react";
import { CircularProgress } from "@/components/atoms";

export interface InfiniteScrollProps {
  items?: ReactElement;
  fetchData: () => any;
  length?: number;
  hasMore: boolean;
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
