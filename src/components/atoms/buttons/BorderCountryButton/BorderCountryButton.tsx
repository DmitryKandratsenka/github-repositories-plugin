import { Button } from "../Button";
import { useTranslation } from "@/hooks/useTranslation";
import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAllCountries } from "@/hooks/api/rest-countries/useAllCountries";
import { AppRoute } from "@/enums/AppRoute";
import { ButtonProps, CircularProgress } from "@mui/material";

interface Props extends ButtonProps {
  countryCode: string;
}

export function BorderCountryButton({ countryCode, sx, ...rest }: Props) {
  const { data } = useAllCountries();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`${AppRoute.COUNTRY_DETAILS}/${countryCode}`);
  }, [navigate]);

  const name = useMemo(() => {
    return (
      data?.find((country) => country.alpha3Code === countryCode)?.name || ""
    );
  }, [countryCode, data]);

  return (
    <Button
      {...rest}
      sx={{
        minWidth: 50,
        textTransform: "capitalize",
        height: 30,
        ...sx,
      }}
      onClick={handleClick}
    >
      {name ? name : <CircularProgress />}
    </Button>
  );
}
