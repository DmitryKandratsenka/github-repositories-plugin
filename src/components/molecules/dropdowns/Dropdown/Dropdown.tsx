import { MouseEvent, useState } from "react";
import Popover from "@mui/material/Popover";
import { DropdownProps, Option } from "@/components/molecules";
import {
  DropdownButton,
  DropdownContainer,
  DropdownList,
  KeyboardArrowDownIcon,
} from "@/components/molecules/dropdowns/Dropdown/Dropdown.styles";
import { DropdownOption } from "@/components/molecules/dropdowns/Dropdown/DropdownOption";

export function Dropdown({
  placeholder,
  onChange,
  selectedOption,
  options,
}: DropdownProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleChange = (option: Option) => {
    onChange(option);
    handleClose();
  };

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
        {selectedOption
          ? `${placeholder}: ${selectedOption?.label}`
          : placeholder}
      </DropdownButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{ marginTop: (theme) => theme.spacing(1) }}
      >
        <DropdownList role={"menu"}>
          {options.map((option) => (
            <DropdownOption
              key={option.value}
              option={option}
              onClick={handleChange}
            />
          ))}
        </DropdownList>
      </Popover>
    </DropdownContainer>
  );
}
