import { MouseEvent, useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { DropdownProps } from "@/components/molecules";
import {
  DropdownButton,
  DropdownContainer,
  KeyboardArrowDownIcon,
} from "@/components/molecules/dropdowns/Dropdown/Dropdown.styles";

export function Dropdown({
  placeholder,
  onChange,
  selectedOption,
  options,
}: DropdownProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <DropdownContainer>
      <DropdownButton onClick={handleClick} endIcon={<KeyboardArrowDownIcon />}>
        {placeholder}
      </DropdownButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </DropdownContainer>
  );
}
