import { Box, Skeleton, Typography } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { CountryBase } from "@/hooks/api/rest-countries/types";
import { CardWrapper } from "@/components/molecules/CountryCard/CountryCard.styles";
import { useTranslation } from "@/hooks/useTranslation";
import { DynamicIcon } from "@/components/atoms/DynamicIcon";
import { AppRoute } from "@/enums/AppRoute";
import { DescriptionLine } from "@/components/molecules/DescriptionLine";

interface Props {
  country: CountryBase;
}

function FlagLoader() {
  return <Skeleton width="100%" height={215} />;
}

export function CountryCard({ country }: Props) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`${AppRoute.COUNTRY_DETAILS}/${country.alpha3Code}`);
  }, [country.alpha3Code, navigate]);

  return (
    <CardWrapper elevation={3} onClick={handleClick}>
      <DynamicIcon
        url={country.flag}
        width="100%"
        height={215}
        loading={FlagLoader}
      />
      {/* <FlagLoader /> */}
      <Box mx={2} my={3}>
        <Typography
          variant="h6"
          sx={{ marginBottom: (theme) => theme.spacing(2) }}
        >
          {country.name}
        </Typography>
        <DescriptionLine
          title={t("population")}
          variantTitle="subtitle1"
          variantBody="body1"
          body={country.population.toLocaleString()}
        />
        <DescriptionLine
          title={t("region")}
          variantTitle="subtitle1"
          variantBody="body1"
          body={country.region}
        />
        <DescriptionLine
          title={t("capital")}
          variantTitle="subtitle1"
          variantBody="body1"
          body={country.capital}
        />
      </Box>
    </CardWrapper>
  );
}
