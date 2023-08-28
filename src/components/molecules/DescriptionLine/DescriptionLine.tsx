import { Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { PropsWithChildren } from 'react';
import {
  DescriptionItemContainer,
  SubTitleTypography,
} from '@/components/molecules/GithubRepoCard/GithubRepoCard.styles';

interface Props {
  body?: string;
  title: string;
  variantBody: Variant;
  variantTitle: Variant;
}

export function DescriptionLine({
  title,
  body,
  variantTitle,
  variantBody,
  children,
}: PropsWithChildren<Props>) {
  return (
    <DescriptionItemContainer>
      <SubTitleTypography variant={variantTitle}>{title}</SubTitleTypography>
      {body ? <Typography variant={variantBody}>{body}</Typography> : children}
    </DescriptionItemContainer>
  );
}
