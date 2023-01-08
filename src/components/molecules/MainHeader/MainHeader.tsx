import { Typography } from "@mui/material";
import { MainHeaderContainer } from "./MainHeader.styles";
import { useTranslation } from "@/hooks/useTranslation";

export function MainHeader() {
  const { t } = useTranslation();

  return (
    <MainHeaderContainer>
      <Typography>{t("where.in.the.world")}</Typography>
    </MainHeaderContainer>
  );
}
