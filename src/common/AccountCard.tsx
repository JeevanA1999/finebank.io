// import {
//   Box,
//   Typography,
//   Link,
//   Divider,
//   Avatar,
//   useMediaQuery,
//   IconButton,
// } from '@mui/material';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { Link as RouterLink } from 'react-router-dom';
// import { useState } from 'react';
// import CardLogo from '../assets/CardLogo.svg';
// import Visacard from '../assets/Visacard.svg'; // Add your Visacard asset
// import arrow from '../assets/arrow.png';

// export const cards = [
//   {
//     id: 1,
//     type: 'Credit Card',
//     bank: 'Master Card',
//     bankLogo: CardLogo,
//     number: '3388 4556 8860 8***',
//     amount: 25000,
//   },
//   {
//     id: 2,
//     type: 'Checking',
//     bank: 'AB Bank Ltd',
//     bankLogo: Visacard,
//     number: '693 456 69 9****',
//     amount: 25000,
//   },
//   {
//     id: 3,
//     type: 'Savings',
//     bank: 'Brac Bank Ltd.',
//     bankLogo: '',
//     number: '133 456 886 8****',
//     amount: 25000,
//   },
//   {
//     id: 4,
//     type: 'Investment',
//     bank: 'AB Bank Ltd',
//     bankLogo: '',
//     number: '698 456 866 2****',
//     amount: 25000,
//   },
//   {
//     id: 5,
//     type: 'Loan',
//     bank: 'City Bank Ltd.',
//     bankLogo: '',
//     number: '363 456 896 6****',
//     amount: 25000,
//   },
// ];

// export default function AccountCard() {
//   const isTablet = useMediaQuery('(min-width:900px) and (max-width:1199.95px)');
//   const [present, setPresent] = useState(0);

//   const handlePrev = () => {
//     setPresent((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setPresent((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
//   };

//   const card = cards[present];

//   return (
//     <Box
//       width={isTablet ? '320px' : '100%'}
//       height="232px"
//       bgcolor="white"
//       borderRadius="8px"
//       px={isTablet ? 1.5 : 3}
//       py={isTablet ? 1.25 : 2.5}
//       display="flex"
//       flexDirection="column"
//       justifyContent="space-between"
//     >
//       {/* Header */}
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <Typography fontSize={22} fontWeight={800} lineHeight="32px">
//           ${card.amount.toLocaleString()}
//         </Typography>
//         <Link
//           component={RouterLink}
//           to="/balances"
//           underline="none"
//           sx={{
//             fontSize: 14,
//             lineHeight: '20px',
//             color: '#525256',
//           }}
//         >
//           All Accounts
//         </Link>
//       </Box>

//       <Divider sx={{ my: 2 }} />

//       {/* Card Content */}
//       <Link
//         component={RouterLink}
//         to={`/balances/${card.id}`}
//         style={{ textDecoration: 'none' }}
//       >
//         <Box
//           height="96px"
//           borderRadius="4px"
//           bgcolor="#299D91"
//           display="flex"
//           justifyContent="space-between"
//           alignItems="center"
//           px={2}
//           py={1}
//         >
//           {/* Left Info */}
//           <Box display="flex" flexDirection="column">
//             <Typography color="#FFFFFFB2" fontSize={14} lineHeight="20px">
//               {card.type}
//             </Typography>
//             <Typography color="#FFFFFF" fontSize={16} lineHeight="24px">
//               {card.bank}
//             </Typography>
//             <Typography color="#FFFFFFB2" fontSize={14} lineHeight="20px">
//               {card.number}
//             </Typography>
//           </Box>

//           {/* Right Logo and Amount */}
//           <Box
//             display="flex"
//             flexDirection="column"
//             alignItems="flex-end"
//             gap={1}
//           >
//             {card.bankLogo ? (
//               <Avatar
//                 src={card.bankLogo}
//                 variant="rounded"
//                 sx={{ width: 48, height: 28 }}
//               />
//             ) : (
//               <Box sx={{ width: 48, height: 28 }} />
//             )}
//             <Box display="flex" alignItems="center" gap={1}>
//               <Typography color="#FFFFFF" fontSize={16} lineHeight="24px">
//                 ${card.amount.toLocaleString()}
//               </Typography>
//               <Avatar
//                 src={arrow}
//                 variant="rounded"
//                 sx={{ width: 24, height: 24, bgcolor: '#fff' }}
//               />
//             </Box>
//           </Box>
//         </Box>
//       </Link>

//       {/* Footer Navigation */}
//       <Box
//         display="flex"
//         justifyContent="space-between"
//         alignItems="center"
//         mt={2}
//       >
//         {/* Prev */}
//         <Box
//           display="flex"
//           alignItems="center"
//           gap={0.5}
//           onClick={handlePrev}
//           sx={{ cursor: 'pointer' }}
//         >
//           <IconButton size="small">
//             <ChevronLeftIcon fontSize="small" />
//           </IconButton>
//           <Typography fontSize={14} fontWeight={500} sx={{ color: '#525256' }}>
//             Previous
//           </Typography>
//         </Box>

//         {/* Dots */}
//         <Box display="flex" gap={1}>
//           {cards.map((_, i) => (
//             <Box
//               key={i}
//               width={8}
//               height={8}
//               borderRadius="50%"
//               bgcolor={i === present ? '#299D91' : '#ccc'}
//             />
//           ))}
//         </Box>

//         {/* Next */}
//         <Box
//           display="flex"
//           alignItems="center"
//           gap={0.5}
//           onClick={handleNext}
//           sx={{ cursor: 'pointer' }}
//         >
//           <Typography fontSize={14} fontWeight={500} sx={{ color: '#525256' }}>
//             Next
//           </Typography>
//           <IconButton size="small">
//             <ChevronRightIcon fontSize="small" />
//           </IconButton>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

import {
  Box,
  Typography,
  Link,
  Divider,
  Avatar,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import CardLogo from '../assets/CardLogo.svg';
import Visacard from '../assets/Visacard.svg';
import arrow from '../assets/arrow.png';

export const cards = [
  {
    id: 1,
    type: 'Credit Card',
    bank: 'Master Card',
    bankLogo: CardLogo,
    number: '3388 4556 8860 8***',
    amount: 25000,
  },
  {
    id: 2,
    type: 'Checking',
    bank: 'AB Bank Ltd',
    bankLogo: Visacard,
    number: '693 456 69 9****',
    amount: 25000,
  },
  {
    id: 3,
    type: 'Savings',
    bank: 'Brac Bank Ltd.',
    bankLogo: '',
    number: '133 456 886 8****',
    amount: 25000,
  },
  {
    id: 4,
    type: 'Investment',
    bank: 'AB Bank Ltd',
    bankLogo: '',
    number: '698 456 866 2****',
    amount: 25000,
  },
  {
    id: 5,
    type: 'Loan',
    bank: 'City Bank Ltd.',
    bankLogo: '',
    number: '363 456 896 6****',
    amount: 25000,
  },
];

export default function AccountCard() {
  const isTablet = useMediaQuery('(max-width:1023.95px)');
  const [present, setPresent] = useState(0);
  const card = cards[present];

  const handlePrev = () => {
    setPresent((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setPresent((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box
      width={isTablet ? '320px' : '100%'}
      height="232px"
      bgcolor="white"
      borderRadius="8px"
      px={isTablet ? 1.5 : 3}
      py={isTablet ? 1.25 : 2.5}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontSize={22} fontWeight={800} lineHeight="32px">
          ${card.amount.toLocaleString()}
        </Typography>
        <Link
          component={RouterLink}
          to="/balances"
          underline="none"
          sx={{ fontSize: 14, lineHeight: '20px', color: '#525256' }}
        >
          All Accounts
        </Link>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Card Box */}
      <Link
        component={RouterLink}
        to={`/balances/${card.id}`}
        style={{ textDecoration: 'none' }}
      >
        <Box
          height="96px"
          borderRadius="4px"
          bgcolor="#299D91"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px={2}
          py={1}
        >
          {/* Card Info */}
          <Box display="flex" flexDirection="column">
            <Typography color="#FFFFFFB2" fontSize={14}>
              {card.type}
            </Typography>
            <Typography color="#FFFFFF" fontSize={16}>
              {card.bank}
            </Typography>
            <Typography color="#FFFFFFB2" fontSize={14}>
              {card.number}
            </Typography>
          </Box>

          {/* Logo & Amount */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            gap={1}
          >
            {card.bankLogo ? (
              <Avatar
                src={card.bankLogo}
                variant="rounded"
                sx={{ width: 48, height: 28 }}
              />
            ) : (
              <Box sx={{ width: 48, height: 28 }} />
            )}
            <Box display="flex" alignItems="center" gap={1}>
              <Typography color="#FFFFFF" fontSize={16}>
                ${card.amount.toLocaleString()}
              </Typography>
              <Avatar
                src={arrow}
                variant="rounded"
                sx={{ width: 24, height: 24, bgcolor: '#fff' }}
              />
            </Box>
          </Box>
        </Box>
      </Link>

      {/* Navigation */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={2}
      >
        {/* Prev */}
        <Box
          display="flex"
          alignItems="center"
          gap={0.5}
          onClick={handlePrev}
          sx={{ cursor: 'pointer' }}
        >
          <IconButton size="small">
            <ChevronLeftIcon fontSize="small" />
          </IconButton>
          <Typography fontSize={14} fontWeight={500} sx={{ color: '#525256' }}>
            Previous
          </Typography>
        </Box>

        {/* Dots */}
        <Box display="flex" gap={1}>
          {cards.map((_, i) => (
            <Box
              key={i}
              width={8}
              height={8}
              borderRadius="50%"
              bgcolor={i === present ? '#299D91' : '#ccc'}
            />
          ))}
        </Box>

        {/* Next */}
        <Box
          display="flex"
          alignItems="center"
          gap={0.5}
          onClick={handleNext}
          sx={{ cursor: 'pointer' }}
        >
          <Typography fontSize={14} fontWeight={500} sx={{ color: '#525256' }}>
            Next
          </Typography>
          <IconButton size="small">
            <ChevronRightIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
