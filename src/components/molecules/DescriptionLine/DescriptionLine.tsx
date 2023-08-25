import { Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import {
  DescriptionItemContainer,
  SubTitleTypography,
} from "@/components/molecules/CountryCard/CountryCard.styles";

interface Props {
  body: string;
  title: string;
  variantBody: Variant;
  variantTitle: Variant;
}

export function DescriptionLine({
  title,
  body,
  variantTitle,
  variantBody,
}: Props) {
  return (
    <DescriptionItemContainer>
      <SubTitleTypography variant={variantTitle}>{title}</SubTitleTypography>
      <Typography variant={variantBody}>{body}</Typography>
    </DescriptionItemContainer>
  );
}
