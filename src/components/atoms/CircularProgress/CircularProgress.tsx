import { Box, CircularProgress as CircularProgressMui } from "@mui/material";

export function CircularProgress() {
  return (
    <Box
      sx={{
        width: "100%",
        height: 150,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgressMui size={50} />
    </Box>
  );
}
