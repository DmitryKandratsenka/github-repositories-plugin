import { ListItem, ListItemButton } from "@mui/material";
import { Option } from "@/components/molecules";
import { useCallback } from "react";

interface Props {
  option: Option;
  onClick: (option: Option) => void;
}

export function DropdownOption({ option, onClick }: Props) {
  const handleClick = useCallback(() => {
    onClick(option);
  }, [option, onClick]);

  return (
    <ListItem value={option.value} disablePadding>
      <ListItemButton
        sx={{ paddingX: (theme) => theme.spacing(4) }}
        onClick={handleClick}
      >
        {option.label}
      </ListItemButton>
    </ListItem>
  );
}
