import { ListItem, ListItemButton } from "@mui/material";
import { useCallback } from "react";
import { Option } from "@/components/molecules";

interface Props {
  onClick: (option: Option) => void;
  option: Option;
}

export function DropdownOption({ option, onClick }: Props) {
  const handleClick = useCallback(() => {
    onClick(option);
  }, [option, onClick]);

  return (
    <ListItem value={option.value} disablePadding role="option">
      <ListItemButton
        sx={{ paddingX: (theme) => theme.spacing(4) }}
        onClick={handleClick}
      >
        {option.label}
      </ListItemButton>
    </ListItem>
  );
}
