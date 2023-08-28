import { styled } from '@mui/material';

export const MainContainer = styled('main')(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
}));

export const ContentContainer = styled('section')(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  boxShadow: `inset 0px 9px 10px -13px ${theme.palette.primary.main}`,
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 0,
  minWidth: 420,
  paddingBottom: theme.spacing(4),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    paddingTop: theme.spacing(5),
  },
}));
