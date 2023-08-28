import { Box, CircularProgress as CircularProgressMui } from '@mui/material';

export function CircularProgress() {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        height: 150,
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <CircularProgressMui size={50} />
    </Box>
  );
}
