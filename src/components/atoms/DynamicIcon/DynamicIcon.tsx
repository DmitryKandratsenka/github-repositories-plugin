import { ComponentType, FC } from "react";
import { ReactSVG } from "react-svg";
import { styled } from "@mui/material";

interface IconProps {
  url: string;
  width: string | number;
  height: string | number;
  loading: ComponentType;
}

export const StyledReactSVG = styled(ReactSVG)(() => ({}));

export const DynamicIcon: FC<IconProps> = ({ url, width, height, loading }) => {
  return (
    <StyledReactSVG
      src={url}
      sx={{
        "& svg": {
          width: width,
          height: height,
        },
      }}
      loading={loading}
    />
  );
};
