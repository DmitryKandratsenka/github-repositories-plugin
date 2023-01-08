import { CountryBase } from "@/hooks/api/rest-countries/types";
import { Typography } from "@mui/material";
import { CardWrapper } from "@/components/molecules/CountryCard/CountryCard.styles";

interface Props {
  country: CountryBase;
}

export function CountryCard({ country }: Props) {
  return (
    <CardWrapper elevation={3}>
      <Typography>{country.name}</Typography>
      <Typography>{country.population}</Typography>
      <Typography>{country.region}</Typography>
      <Typography>{country.capital}</Typography>
    </CardWrapper>
  );
}
