// import React, { useState } from 'react';
// import {
//   Box,
//   Typography,
//   InputBase,
//   IconButton,
//   Badge,
//   Paper,
//   useTheme,
//   useMediaQuery,
// } from '@mui/material';
// import NotificationsNoneIcon from '../assets/NotificationIcon.svg';
// import SearchIcon from '../assets/Search.svg';
// import CloseIcon from '@mui/icons-material/Close';
// import NotificationDrawer from './NotificationDrawer'; // adjust path accordingly

// export default function HeaderBar({
//   onToggleSidebar,
// }: {
//   onToggleSidebar?: () => void;
// }) {
//   const theme = useTheme();
//   const isBelow1440 = useMediaQuery('(max-width:1439.95px)');
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const isTablet = useMediaQuery(theme.breakpoints.down('md'));

//   const [showMobileSearch, setShowMobileSearch] = useState(false);

//   const formatted = new Date().toLocaleDateString('en-US', {
//     month: 'long',
//     day: 'numeric',
//     year: 'numeric',
//   });

//   const [openDrawer, setOpenDrawer] = useState(false);

//   return (
//     <Box
//       sx={{
//         height: 70,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         px: 3,
//         py: 1,
//         bgcolor: '#F4F5F7',
//         zIndex: 1200,
//       }}
//     >
//       {/* Left Section */}
//       <Box display="flex" alignItems="center" gap={2}>
//         {isBelow1440 && onToggleSidebar && (
//           <IconButton onClick={onToggleSidebar}>
//             <Typography fontSize={24}>☰</Typography>
//           </IconButton>
//         )}
//         <Typography fontWeight={700} fontSize="24px">
//           {!showMobileSearch ? 'John David' : ''}
//         </Typography>
//         {!isTablet && (
//           <Box display="flex" alignItems="center" color="#9F9F9F">
//             <Typography fontSize="24px" px={1}>
//               »
//             </Typography>
//             <Typography fontSize="14px" mt="5px">
//               {formatted}
//             </Typography>
//           </Box>
//         )}
//       </Box>

//       {/* Right Section */}
//       <Box
//         display="flex"
//         alignItems="center"
//         justifyContent="space-between"
//         gap={2}
//         sx={{
//           width: isTablet ? 'auto' : 416,
//           flexDirection: isMobile ? 'row-reverse' : 'row',
//         }}
//       >
//         <IconButton onClick={() => setOpenDrawer(true)}>
//           <Badge color="success" variant="dot">
//             <img src={NotificationsNoneIcon} alt="Notif" height={24} />
//           </Badge>
//         </IconButton>

//         {/* Desktop: Full Search */}
//         {!isMobile && (
//           <Paper
//             sx={{
//               bgcolor: 'white',
//               display: 'flex',
//               alignItems: 'center',
//               width: 352,
//               p: 1,
//               borderRadius: '4px',
//             }}
//           >
//             <InputBase
//               placeholder="Search here"
//               sx={{ ml: 1, flex: 1, fontSize: 14 }}
//             />
//             <IconButton size="small">
//               <img src={SearchIcon} alt="Search" />
//             </IconButton>
//           </Paper>
//         )}

//         {/* Mobile: Toggle Between Icon and Search Input */}
//         {isMobile &&
//           (showMobileSearch ? (
//             <Paper
//               sx={{
//                 bgcolor: 'white',
//                 display: 'flex',
//                 alignItems: 'center',
//                 width: 240,
//                 p: 1,
//                 borderRadius: '4px',
//               }}
//             >
//               <InputBase
//                 placeholder="Search here"
//                 sx={{ ml: 1, flex: 1, fontSize: 14 }}
//                 autoFocus
//               />
//               <IconButton
//                 size="small"
//                 onClick={() => setShowMobileSearch(false)}
//               >
//                 {/* <CloseIcon fontSize="small" /> */}
//                 <img src={SearchIcon} alt="Search" />
//               </IconButton>
//             </Paper>
//           ) : (
//             <IconButton size="small" onClick={() => setShowMobileSearch(true)}>
//               <img src={SearchIcon} alt="Search" />
//             </IconButton>
//           ))}
//       </Box>
//       <NotificationDrawer
//         open={openDrawer}
//         onClose={() => setOpenDrawer(false)}
//       />
//     </Box>
//   );
// }

import React, { useState } from 'react';
import {
  Box,
  Typography,
  InputBase,
  IconButton,
  Badge,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import NotificationsNoneIcon from '../assets/NotificationIcon.svg';
import SearchIcon from '../assets/Search.svg';
import NotificationDrawer from './NotificationDrawer';

export default function HeaderBar({
  onToggleSidebar,
}: {
  onToggleSidebar?: () => void;
}) {
  const theme = useTheme();

  // ✅ Treat 1024px and above as desktop
  const isBelow1024 = useMediaQuery('(max-width:1019.95px)');
  const isMobile = useMediaQuery('(max-width:599.95px)');
  const isTablet = useMediaQuery('(min-width:600px) and (max-width:1019.95px)');

  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const formatted = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Box
      sx={{
        height: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 3,
        py: 1,
        bgcolor: '#F4F5F7',
        zIndex: 1200,
      }}
    >
      {/* Left Section */}
      <Box display="flex" alignItems="center" gap={2}>
        {isBelow1024 && onToggleSidebar && (
          <IconButton onClick={onToggleSidebar}>
            <Typography fontSize={24}>☰</Typography>
          </IconButton>
        )}
        <Typography fontWeight={700} fontSize="24px">
          {!showMobileSearch ? 'John David' : ''}
        </Typography>
        {!isTablet && !isMobile && (
          <Box display="flex" alignItems="center" color="#9F9F9F">
            <Typography fontSize="24px" px={1}>
              »
            </Typography>
            <Typography fontSize="14px" mt="5px">
              {formatted}
            </Typography>
          </Box>
        )}
      </Box>

      {/* Right Section */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
        sx={{
          width: isTablet || isMobile ? 'auto' : 416,
          flexDirection: isMobile ? 'row-reverse' : 'row',
        }}
      >
        <IconButton onClick={() => setOpenDrawer(true)}>
          <Badge color="success" variant="dot">
            <img src={NotificationsNoneIcon} alt="Notif" height={24} />
          </Badge>
        </IconButton>

        {!isMobile && (
          <Paper
            sx={{
              bgcolor: 'white',
              display: 'flex',
              alignItems: 'center',
              width: 352,
              p: 1,
              borderRadius: '4px',
            }}
          >
            <InputBase
              placeholder="Search here"
              sx={{ ml: 1, flex: 1, fontSize: 14 }}
            />
            <IconButton size="small">
              <img src={SearchIcon} alt="Search" />
            </IconButton>
          </Paper>
        )}

        {isMobile &&
          (showMobileSearch ? (
            <Paper
              sx={{
                bgcolor: 'white',
                display: 'flex',
                alignItems: 'center',
                width: 240,
                p: 1,
                borderRadius: '4px',
              }}
            >
              <InputBase
                placeholder="Search here"
                sx={{ ml: 1, flex: 1, fontSize: 14 }}
                autoFocus
              />
              <IconButton
                size="small"
                onClick={() => setShowMobileSearch(false)}
              >
                <img src={SearchIcon} alt="Search" />
              </IconButton>
            </Paper>
          ) : (
            <IconButton size="small" onClick={() => setShowMobileSearch(true)}>
              <img src={SearchIcon} alt="Search" />
            </IconButton>
          ))}
      </Box>

      <NotificationDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      />
    </Box>
  );
}
