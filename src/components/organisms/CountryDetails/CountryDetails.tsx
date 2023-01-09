import { CountryDetails as CountryDetailsType } from "@/hooks/api/rest-countries/types";
import { Box, Grid, Skeleton, Typography } from "@mui/material";
import { DynamicIcon } from "@/components/atoms";
import { useTranslation } from "@/hooks/useTranslation";
import { DescriptionLine } from "@/components/molecules/DescriptionLine";
import { BorderCountryButton } from "@/components/atoms/buttons/BorderCountryButton";

interface Props {
  countryDetails: CountryDetailsType;
}

function FlagLoader() {
  return <Skeleton width={"100%"} height={400} />;
}

export function CountryDetails({
  countryDetails: {
    name,
    nativeName,
    population,
    flag,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  },
}: Props) {
  const { t } = useTranslation();

  return (
    <Grid container my={3} spacing={6}>
      <Grid item lg={6} xs={12}>
        <DynamicIcon
          url={flag}
          width={"100%"}
          height={"100%"}
          loading={FlagLoader}
        />
      </Grid>
      <Grid item lg={6} xs={12} container spacing={1}>
        <Grid item xs={12}>
          <Typography
            variant={"h5"}
            sx={{ marginBottom: (theme) => theme.spacing(2) }}
          >
            {name}
          </Typography>
        </Grid>
        <Grid item md={6} xs={12}>
          <DescriptionLine
            title={t("native.name")}
            variantTitle={"subtitle2"}
            variantBody={"body2"}
            body={nativeName}
          />
          <DescriptionLine
            title={t("population")}
            variantTitle={"subtitle2"}
            variantBody={"body2"}
            body={population.toLocaleString()}
          />
          <DescriptionLine
            title={t("region")}
            variantTitle={"subtitle2"}
            variantBody={"body2"}
            body={region}
          />
          <DescriptionLine
            title={t("sub.region")}
            variantTitle={"subtitle2"}
            variantBody={"body2"}
            body={subregion}
          />
          <DescriptionLine
            title={t("capital")}
            variantTitle={"subtitle2"}
            variantBody={"body2"}
            body={capital}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <DescriptionLine
            title={t("top.level.domain")}
            variantTitle={"subtitle2"}
            variantBody={"body2"}
            body={topLevelDomain}
          />
          <DescriptionLine
            title={t("currencies")}
            variantTitle={"subtitle2"}
            variantBody={"body2"}
            body={currencies.map((currency) => currency.name).join(", ")}
          />
          <DescriptionLine
            title={t("languages")}
            variantTitle={"subtitle2"}
            variantBody={"body2"}
            body={languages.map((lang) => lang.name).join(", ")}
          />
        </Grid>
        <Grid item xs={12}>
          <Box display={"flex"} flexDirection={"column"}>
            <Box>
              <Typography variant={"caption"}>
                {t("border.countries")}
              </Typography>
            </Box>
            <Box>
              {borders.map((countryCode) => (
                <BorderCountryButton
                  key={countryCode}
                  countryCode={countryCode}
                  sx={{ margin: (theme) => theme.spacing(0.5) }}
                />
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
