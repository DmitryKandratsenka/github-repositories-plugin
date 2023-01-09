import { CountryBase } from "@/hooks/api/rest-countries/types";
import { Box, Skeleton, Typography } from "@mui/material";
import {
  CardWrapper,
  DescriptionItemContainer,
  SubTitleTypography,
} from "@/components/molecules/CountryCard/CountryCard.styles";
import { useTranslation } from "@/hooks/useTranslation";
import { DynamicIcon } from "@/components/atoms/DynamicIcon";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "@/enums/AppRoute";

interface Props {
  country: CountryBase;
}

function LoadingFlag() {
  return <Skeleton width={"100%"} height={215} />;
}

export function CountryCard({ country }: Props) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(AppRoute.COUNTRY_DETAILS + "/" + country.alpha3Code);
  }, [navigate]);

  return (
    <CardWrapper elevation={3} onClick={handleClick}>
      <DynamicIcon
        url={country.flag}
        width={"100%"}
        height={215}
        loading={LoadingFlag}
      />
      {/*<LoadingFlag />*/}
      <Box mx={2} my={3}>
        <Typography
          variant={"h6"}
          sx={{ marginBottom: (theme) => theme.spacing(2) }}
        >
          {country.name}
        </Typography>

        <DescriptionItemContainer>
          <SubTitleTypography variant={"subtitle1"}>
            {t("population")}
          </SubTitleTypography>
          <Typography variant={"body1"}>
            {country.population.toLocaleString()}
          </Typography>
        </DescriptionItemContainer>
        <DescriptionItemContainer>
          <SubTitleTypography variant={"subtitle1"}>
            {t("region")}
          </SubTitleTypography>
          <Typography variant={"body1"}>{country.region}</Typography>
        </DescriptionItemContainer>
        <DescriptionItemContainer>
          <SubTitleTypography variant={"subtitle1"}>
            {t("capital")}
          </SubTitleTypography>
          <Typography variant={"body1"}>{country.capital}</Typography>
        </DescriptionItemContainer>
      </Box>
    </CardWrapper>
  );
}
