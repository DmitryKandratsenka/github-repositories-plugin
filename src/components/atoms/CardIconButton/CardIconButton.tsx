import { IconButton, IconButtonProps } from '@mui/material';

export function CardIconButton(props: IconButtonProps) {
  return (
    <IconButton
      size="large"
      sx={{
        color: 'red',
        position: 'absolute',
        right: (theme) => theme.spacing(1),
        top: (theme) => theme.spacing(1),
      }}
      {...props}
    />
  );
}

export default CardIconButton;
