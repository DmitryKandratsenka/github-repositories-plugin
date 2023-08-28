import { Button as ButtonMui, ButtonProps, styled } from "@mui/material";
import { forwardRef } from "react";

export const StyledButton = styled(ButtonMui)(({ theme }) => ({
  boxShadow: `0px 0px 5px 0px ${theme.palette.primary.main}`,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return <StyledButton ref={ref} {...props} />;
  }
);
