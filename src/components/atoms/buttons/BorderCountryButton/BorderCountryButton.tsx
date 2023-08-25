import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonProps, CircularProgress } from "@mui/material";
import { Button } from "../Button";
import { useAllCountries } from "@/hooks/api/rest-countries/useAllCountries";
import { AppRoute } from "@/enums/AppRoute";

interface Props extends ButtonProps {
  countryCode: string;
}

export function BorderCountryButton({ countryCode, sx, ...rest }: Props) {
  const { data } = useAllCountries();
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`${AppRoute.COUNTRY_DETAILS}/${countryCode}`);
  }, [countryCode, navigate]);

  const name = useMemo(() => {
    return (
      data?.find((country) => country.alpha3Code === countryCode)?.name || ""
    );
  }, [countryCode, data]);

  return (
    <Button
      {...rest}
      sx={{
        height: 30,
        minWidth: 50,
        textTransform: "capitalize",
        ...sx,
      }}
      onClick={handleClick}
    >
      {name || <CircularProgress />}
    </Button>
  );
}
