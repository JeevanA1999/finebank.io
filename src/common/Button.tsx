// import { Box, Typography } from '@mui/material';

// interface ButtonProps {
//   text: string;
//   icon?: string;
//   color?: string;
//   textColor?: string;
//   onClick?: () => void;
// }

// export default function CustomButton({
//   text,
//   icon,
//   color = 'white',
//   textColor = 'white',
//   onClick,
// }: ButtonProps) {
//   return (
//     <Box
//       onClick={onClick}
//       width="100%"
//       height="48px"
//       bgcolor={color}
//       display="flex"
//       alignItems="center"
//       justifyContent="center"
//       gap={1}
//       sx={{ cursor: 'pointer', borderRadius: 1 }}
//     >
//       {icon && <img src={icon} alt="icon" style={{ height: 24, width: 24 }} />}
//       <Typography
//         variant="button"
//         fontWeight={500}
//         color={textColor}
//         fontSize="16px"
//       >
//         {text}
//       </Typography>
//     </Box>
//   );
// }

import { Box, Typography } from '@mui/material';
import type { ReactNode } from 'react';


interface ButtonProps {
  text: string;
  icon?: ReactNode; // Flexible icon type
  color?: string;
  textColor?: string;
  onClick?: () => void;
}

export default function CustomButton({
  text,
  icon,
  color = '#299D91', // Default to teal shade
  textColor = '#FFFFFF', // Default to white text
  onClick,
}: ButtonProps) {
  return (
    <Box
      onClick={onClick}
      width="100%"
      height="48px"
      bgcolor={color}
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={1}
      borderRadius={1}
      sx={{
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        '&:hover': {
          backgroundColor: '#247f78', // Slightly darker on hover
        },
      }}
    >
      {icon && (
        <Box
          component="span"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 24,
            height: 24,
          }}
        >
          {typeof icon === 'string' ? (
            <img src={icon} alt="icon" style={{ height: 24, width: 24 }} />
          ) : (
            icon
          )}
        </Box>
      )}
      <Typography
        variant="button"
        fontWeight={600}
        color={textColor}
        fontSize="16px"
        textTransform="none"
      >
        {text}
      </Typography>
    </Box>
  );
}
