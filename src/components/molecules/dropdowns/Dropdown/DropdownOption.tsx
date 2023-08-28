import { ListItem, ListItemButton } from '@mui/material';
import { useCallback } from 'react';
import { Option } from '@/components/molecules';

interface Props<T extends string> {
  onClick: (option: Option<T>) => void;
  option: Option<T>;
}

export function DropdownOption<T extends string>({
  option,
  onClick,
}: Props<T>) {
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
