import { Link, LinkProps } from '@mui/material';

export function UrlLink({ sx, children, ...props }: LinkProps) {
  return (
    <Link
      {...props}
      sx={{
        direction: 'rtl',
        minWidth: 300,
        overflow: 'hidden',
        overflowWrap: 'anywhere',
        textAlign: 'left',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        ...sx,
      }}
      target="_blank"
    >
      {children}
    </Link>
  );
}
