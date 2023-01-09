import {
  DescriptionItemContainer,
  SubTitleTypography,
} from "@/components/molecules/CountryCard/CountryCard.styles";
import { Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";

interface Props {
  title: string;
  body: string;
  variantTitle: Variant;
  variantBody: Variant;
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
