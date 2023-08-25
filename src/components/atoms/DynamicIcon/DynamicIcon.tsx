import { ComponentType, FC } from "react";
import { ReactSVG } from "react-svg";
import { styled } from "@mui/material";

interface IconProps {
  height: string | number;
  loading: ComponentType;
  url: string;
  width: string | number;
}

export const StyledReactSVG = styled(ReactSVG)(() => ({}));

export const DynamicIcon: FC<IconProps> = ({ url, width, height, loading }) => {
  return (
    <StyledReactSVG
      src={url}
      sx={{
        "& svg": {
          height,
          width,
        },
      }}
      loading={loading}
    />
  );
};
