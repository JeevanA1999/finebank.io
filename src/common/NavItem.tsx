import { Box, Typography } from '@mui/material';

export default function NavItem({
  label,
  image,
  selected = false,
  onClick,
}: {
  label: string;
  image?: string;
  selected?: boolean;
  onClick?: () => void;
}) {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        px: 2,
        py: 1,
        borderRadius: '6px',
        cursor: 'pointer',
        bgcolor: selected ? '#299D91' : 'transparent',
        color: selected ? 'white' : '#D0D0D0',
        transition: 'all 0.3s',
        '&:hover': {
          bgcolor: selected ? '#299D91' : '#1e1e1e',
        },
      }}
    >
      {image && <img src={image} alt={label} width={18} height={18} />}
      <Typography fontWeight={600} fontSize="12px" noWrap>
        {label}
      </Typography>
    </Box>
  );
}
