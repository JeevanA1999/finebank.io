// import {
//   Box,
//   Typography,
//   Avatar,
//   IconButton,
//   Divider,
//   useTheme,
//   useMediaQuery,
// } from '@mui/material';
// import { useNavigate, useLocation } from 'react-router-dom';
// import NavItem from './NavItem';

// import Overview from '../assets/Overview.svg';
// import Bills from '../assets/Bill.svg';
// import Expenses from '../assets/Expenses.svg';
// import Balances from '../assets/wallet.svg';
// import Goals from '../assets/Goal.svg';
// import Settings from '../assets/Settings.svg';
// import Transactions from '../assets/Transaction.svg';
// import FINEbank from '../assets/FINEbank.png';
// import LogoutIcon from '../assets/Logout.svg';
// import MoreVertIcon from '../assets/moreVector.png';

// const items = [
//   { label: 'Overview', icon: Overview, path: '/' },
//   { label: 'Balances', icon: Balances, path: '/balances' },
//   { label: 'Transactions', icon: Transactions, path: '/transactions' },
//   { label: 'Bills', icon: Bills, path: '/bills' },
//   { label: 'Expenses', icon: Expenses, path: '/expenses' },
//   { label: 'Goals', icon: Goals, path: '/goals' },
//   { label: 'Settings', icon: Settings, path: '/settings' },
// ];

// export default function Navbar({ onClose }: { onClose?: () => void }) {
//   const theme = useTheme();
//   const isBelow1440 = useMediaQuery('(max-width:1439.95px)');
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleLogout = () => {
//     sessionStorage.removeItem('token');
//     navigate('/login');
//   };

//   return (
//     <Box
//       sx={{
//         width: isMobile ? '65vw' : 280,
//         height: '100vh',
//         bgcolor: '#121212',
//         px: isMobile ? 2 : 3,
//         py: isMobile ? 2 : 4,
//         position: isBelow1440 ? 'fixed' : 'relative',
//         top: 0,
//         left: 0,
//         zIndex: 1300,
//         display: 'flex',
//         flexDirection: 'column',
//       }}
//     >
//       {isBelow1440 && onClose && (
//         <Box textAlign="right">
//           <IconButton
//             onClick={onClose}
//             sx={{ color: 'white', width: '12px', height: '12px' }}
//           >
//             ✕
//           </IconButton>
//         </Box>
//       )}

//       <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
//         <Box textAlign="center" mb={3}>
//           <img
//             src={FINEbank}
//             alt="Logo"
//             style={{ height: isMobile ? 14 : 18 }}
//           />
//         </Box>

//         <Box display="flex" flexDirection="column" gap={1}>
//           {items.map((item) => (
//             <NavItem
//               key={item.label}
//               label={item.label}
//               image={item.icon}
//               selected={
//                 item.path === '/'
//                   ? location.pathname === '/'
//                   : location.pathname.startsWith(item.path)
//               }
//               onClick={() => {
//                 navigate(item.path);
//                 onClose?.();
//               }}
//               small={false}
//             />
//           ))}
//         </Box>
//       </Box>

//       <Box>
//         <Box
//           onClick={handleLogout}
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             p: 0.5,
//             bgcolor: '#1E1E1E',
//             borderRadius: '6px',
//             cursor: 'pointer',
//             mb: 1,
//           }}
//         >
//           <NavItem
//             label="Logout"
//             image={LogoutIcon}
//             onClick={handleLogout}
//             small={false}
//           />
//         </Box>

//         <Divider sx={{ borderColor: '#444' }} />

//         <Box
//           display="flex"
//           alignItems="center"
//           justifyContent="space-between"
//           p={1}
//         >
//           <Box display="flex" alignItems="center" gap={1}>
//             <Avatar
//               src="https://i.pravatar.cc/100/"
//               sx={{ width: 24, height: 24 }}
//               alt="John"
//             />
//             <Box>
//               <Typography fontSize={12} color="white" fontWeight={500}>
//                 John David
//               </Typography>
//               <Typography fontSize={10} color="#999DA3">
//                 View profile
//               </Typography>
//             </Box>
//           </Box>
//           <IconButton size="small">
//             <img src={MoreVertIcon} alt="More" style={{ height: 20 }} />
//           </IconButton>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import NavItem from './NavItem';

import Overview from '../assets/Overview.svg';
import Bills from '../assets/Bill.svg';
import Expenses from '../assets/Expenses.svg';
import Balances from '../assets/wallet.svg';
import Goals from '../assets/Goal.svg';
import Settings from '../assets/Settings.svg';
import Transactions from '../assets/Transaction.svg';
import FINEbank from '../assets/FINEbank.png';
import LogoutIcon from '../assets/Logout.svg';
import MoreVertIcon from '../assets/moreVector.png';

const items = [
  { label: 'Overview', icon: Overview, path: '/' },
  { label: 'Balances', icon: Balances, path: '/balances' },
  { label: 'Transactions', icon: Transactions, path: '/transactions' },
  { label: 'Bills', icon: Bills, path: '/bills' },
  { label: 'Expenses', icon: Expenses, path: '/expenses' },
  { label: 'Goals', icon: Goals, path: '/goals' },
  { label: 'Settings', icon: Settings, path: '/settings' },
];

export default function Navbar({ onClose }: { onClose?: () => void }) {
  const theme = useTheme();
  const isBelow1024 = useMediaQuery('(max-width:1023.95px)');
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Box
      sx={{
        width: isMobile ? '65vw' : '220px',
        height: '100vh',
        bgcolor: '#121212',
        px: isMobile ? 2 : 3,
        py: isMobile ? 2 : 3,
        position: isBelow1024 ? 'fixed' : 'relative',
        top: 0,
        left: 0,
        zIndex: 1300,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: isBelow1024 ? '0 0 10px rgba(0,0,0,0.5)' : 'none',
      }}
    >
      {isBelow1024 && onClose && (
        <Box textAlign="right">
          <IconButton
            onClick={onClose}
            sx={{ color: 'white', width: 32, height: 32 }}
          >
            ✕
          </IconButton>
        </Box>
      )}

      <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
        <Box textAlign="center" mb={3}>
          <img
            src={FINEbank}
            alt="Logo"
            style={{ height: isMobile ? 14 : 18 }}
          />
        </Box>

        <Box display="flex" flexDirection="column" gap={1}>
          {items.map((item) => (
            <NavItem
              key={item.label}
              label={item.label}
              image={item.icon}
              selected={
                item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.path)
              }
              onClick={() => {
                navigate(item.path);
                onClose?.(); // Close drawer on mobile
              }}
              small={false}
            />
          ))}
        </Box>
      </Box>

      <Box>
        <Box
          onClick={handleLogout}
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 0.5,
            bgcolor: '#1E1E1E',
            borderRadius: '6px',
            cursor: 'pointer',
            mb: 1,
          }}
        >
          <NavItem
            label="Logout"
            image={LogoutIcon}
            onClick={handleLogout}
            small={false}
          />
        </Box>

        <Divider sx={{ borderColor: '#444' }} />

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={1}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <Avatar
              src="https://i.pravatar.cc/100/"
              sx={{ width: 24, height: 24 }}
              alt="John"
            />
            <Box sx={{cursor: 'pointer'}} onClick={() => navigate('/settings')}>
              <Typography fontSize={12} color="white" fontWeight={500}>
                John David
              </Typography>
              <Typography fontSize={10} color="#999DA3">
                View profile
              </Typography>
            </Box>
          </Box>
          <IconButton size="small">
            <img src={MoreVertIcon} alt="More" style={{ height: 20 }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
