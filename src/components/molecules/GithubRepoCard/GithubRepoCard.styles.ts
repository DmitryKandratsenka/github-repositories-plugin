import { Box, Card, styled, Typography } from '@mui/material';

export const CardWrapper = styled(Card)(({ theme }) => ({
  '&:hover': {
    boxShadow: theme.shadows[10],
  },
  background: theme.palette.background.default,
  borderRadius: 16,
  height: 'auto',
  marginBottom: theme.spacing(3),
  position: 'relative',
  transition: 'box-shadow .3s;',
}));

export const EmptyCardWrapper = styled(Card)(({ theme }) => ({
  alignItems: 'center',
  background: theme.palette.background.default,
  borderRadius: 16,
  display: 'flex',
  height: 100,
  justifyContent: 'center',
  margin: theme.spacing(3),
  position: 'relative',
}));

export const DescriptionItemContainer = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  marginBottom: theme.spacing(3),
}));

export const SubTitleTypography = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(0.5),
}));
