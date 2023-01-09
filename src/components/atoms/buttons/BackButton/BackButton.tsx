import { Button } from "../Button";
import { useTranslation } from "@/hooks/useTranslation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export function BackButton() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <Button
      startIcon={
        <ArrowBackIcon
          sx={{
            color: (theme) => theme.palette.primary.dark,
            marginRight: (theme) => theme.spacing(1),
          }}
        />
      }
      sx={{
        width: 150,
        textTransform: "capitalize",
        display: "flex",
      }}
      onClick={handleClick}
    >
      {t("back")}
    </Button>
  );
}
