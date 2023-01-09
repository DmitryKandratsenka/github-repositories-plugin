import { CircularProgress, InfiniteScroll } from "@/components/atoms";
import { useAllCountries } from "@/hooks/api/rest-countries/useAllCountries";
import { CountryCard } from "@/components/molecules/CountryCard";
import { useCallback, useMemo, useState } from "react";
import { GridProps } from "@mui/material/Grid/Grid";
import { Grid } from "@mui/material";
import { useCountryContext } from "@/contexts";
import { CountryBase } from "@/hooks/api/rest-countries/types";

const PAGE_SIZE = 16;

export function GridContainer(props: GridProps) {
  return <Grid container spacing={4} {...props} />;
}

export function GridItem(props: GridProps) {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={6}
      lg={3}
      sx={{ display: "flex", justifyContent: "center" }}
      {...props}
    />
  );
}

export function AllCountries() {
  const { filterByRegion, searchValue } = useCountryContext();
  const { data, isFetching } = useAllCountries();

  const [page, setPage] = useState(1);

  const filteredData = useMemo<CountryBase[]>(() => {
    return (
      data?.filter((country: CountryBase) => {
        return (
          country.name.toLowerCase().includes(searchValue.toLowerCase()) &&
          (filterByRegion
            ? country.region.toLowerCase() ===
              filterByRegion?.value.toLowerCase()
            : true)
        );
      }) || []
    );
  }, [data, searchValue, filterByRegion]);

  const displayingData = useMemo(() => {
    return filteredData.slice(0, page * PAGE_SIZE);
  }, [filteredData, page]);

  const handleFetchData = useCallback(() => {
    setPage((prevState) => {
      return prevState + 1;
    });
  }, []);

  if (isFetching) {
    return <CircularProgress />;
  }

  return (
    <InfiniteScroll
      length={displayingData?.length}
      hasMore={page * PAGE_SIZE < (filteredData?.length || 0)}
      items={
        <GridContainer>
          {displayingData?.map((country) => (
            <GridItem key={country.name}>
              <CountryCard country={country} />
            </GridItem>
          ))}
        </GridContainer>
      }
      fetchData={handleFetchData}
    />
  );
}
