// import {
//   Box,
//   Typography,
//   Grid,
//   Avatar,
//   useTheme,
//   Link,
//   useMediaQuery,
// } from '@mui/material';
// import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
// import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
// import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
// import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
// import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
// import CommuteRoundedIcon from '@mui/icons-material/CommuteRounded';
// import MovieRoundedIcon from '@mui/icons-material/MovieRounded';
// import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
// import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
// import { Link as RouterLink } from 'react-router-dom';

// const categories = [
//   {
//     name: 'Housing',
//     icon: <HomeRoundedIcon />,
//     amount: 250,
//     change: 15,
//     trend: 'up',
//   },
//   {
//     name: 'Food',
//     icon: <LocalGroceryStoreRoundedIcon />,
//     amount: 350,
//     change: 8,
//     trend: 'down',
//   },
//   {
//     name: 'Transportation',
//     icon: <CommuteRoundedIcon />,
//     amount: 50,
//     change: 12,
//     trend: 'down',
//   },
//   {
//     name: 'Entertainment',
//     icon: <MovieRoundedIcon />,
//     amount: 80,
//     change: 15,
//     trend: 'down',
//   },
//   {
//     name: 'Shopping',
//     icon: <ShoppingBagRoundedIcon />,
//     amount: 420,
//     change: 25,
//     trend: 'up',
//   },
//   {
//     name: 'Others',
//     icon: <WidgetsRoundedIcon />,
//     amount: 650,
//     change: 23,
//     trend: 'up',
//   },
// ];

// const ExpensesBreakdown = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   return (
//     <Box
//       width="100%"
//       //  maxWidth="728px"
//       height={isMobile ? '100%' : '252px'}
//     >
//       <Box display="flex" justifyContent="space-between" mb={2}>
//         <Typography fontWeight={600} color="#878787">
//           Expenses Breakdown
//         </Typography>
//         <Typography fontSize={12} color="#9E9E9E">
//           *Compare to last month
//         </Typography>
//       </Box>

//       <Grid container spacing={2}>
//         {categories.map((cat, index) => (
//           <Grid item xs={12} sm={4} md={4} key={index}>
//             <Link component={RouterLink} to="/expenses" underline="none">
//               <Box
//                 display="flex"
//                 alignItems="center"
//                 gap={1.5}
//                 p={1.5}
//                 border="1px solid #f0f0f0"
//                 borderRadius={2}
//                 height="92px"
//               >
//                 <Avatar
//                   sx={{
//                     borderRadius: '4px',
//                     bgcolor: theme.palette.grey[100],
//                     width: 40,
//                     height: 40,
//                     color: '#878787',
//                   }}
//                 >
//                   {cat.icon}
//                 </Avatar>

//                 <Box flexGrow={1}>
//                   <Typography fontSize={13} fontWeight={500} color="#666">
//                     {cat.name}
//                   </Typography>
//                   <Typography fontSize={16} fontWeight={700}>
//                     ${cat.amount.toFixed(2)}
//                   </Typography>
//                   <Box display="flex" alignItems="center" gap={0.5}>
//                     <Typography
//                       fontSize={12}
//                       color={cat.trend === 'up' ? '#E53935' : '#43A047'}
//                       fontWeight={500}
//                     >
//                       {cat.change}%
//                     </Typography>
//                     {cat.trend === 'up' ? (
//                       <ArrowDropUpRoundedIcon sx={{ color: '#E53935' }} />
//                     ) : (
//                       <ArrowDropDownRoundedIcon sx={{ color: '#43A047' }} />
//                     )}
//                   </Box>
//                 </Box>

//                 <ArrowForwardIosRoundedIcon
//                   sx={{ fontSize: 14, color: '#BDBDBD' }}
//                 />
//               </Box>
//             </Link>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default ExpensesBreakdown;

import {
  Box,
  Typography,
  Grid,
  Avatar,
  useTheme,
  Link,
  useMediaQuery,
} from '@mui/material';
import {
  ArrowForwardIosRounded,
  ArrowDropUpRounded,
  ArrowDropDownRounded,
  HomeRounded,
  LocalGroceryStoreRounded,
  CommuteRounded,
  MovieRounded,
  ShoppingBagRounded,
  WidgetsRounded,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const categories = [
  {
    name: 'Housing',
    icon: <HomeRounded />,
    amount: 250,
    change: 15,
    trend: 'up',
  },
  {
    name: 'Food',
    icon: <LocalGroceryStoreRounded />,
    amount: 350,
    change: 8,
    trend: 'down',
  },
  {
    name: 'Transportation',
    icon: <CommuteRounded />,
    amount: 50,
    change: 12,
    trend: 'down',
  },
  {
    name: 'Entertainment',
    icon: <MovieRounded />,
    amount: 80,
    change: 15,
    trend: 'down',
  },
  {
    name: 'Shopping',
    icon: <ShoppingBagRounded />,
    amount: 420,
    change: 25,
    trend: 'up',
  },
  {
    name: 'Others',
    icon: <WidgetsRounded />,
    amount: 650,
    change: 23,
    trend: 'up',
  },
];

const ExpensesBreakdown = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:1023px)');

  return (
    <Box width="100%" height={isMobile ? '100%' : 'auto'}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography fontWeight={600} color="#878787">
          Expenses Breakdown
        </Typography>
        <Typography fontSize={12} color="#9E9E9E">
          *Compared to last month
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {categories.map((cat, index) => {
          const trendColor = cat.trend === 'up' ? '#E53935' : '#43A047';
          const TrendIcon =
            cat.trend === 'up' ? ArrowDropUpRounded : ArrowDropDownRounded;

          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                // Custom media query override
                '@media (min-width:1024px)': {
                  flexBasis: '33.3333%',
                  maxWidth: '33.3333%',
                },
              }}
            >
              <Link component={RouterLink} to="/expenses" underline="none">
                <Box
                  display="flex"
                  alignItems="center"
                  gap={1.5}
                  p={1.5}
                  border="1px solid #f0f0f0"
                  borderRadius={2}
                  height="92px"
                  sx={{
                    transition: '0.2s ease',
                    '&:hover': { boxShadow: 1, backgroundColor: '#fafafa' },
                  }}
                >
                  <Avatar
                    sx={{
                      borderRadius: '4px',
                      bgcolor: theme.palette.grey[100],
                      width: 40,
                      height: 40,
                      color: '#878787',
                    }}
                  >
                    {cat.icon}
                  </Avatar>

                  <Box flexGrow={1}>
                    <Typography fontSize={13} fontWeight={500} color="#666">
                      {cat.name}
                    </Typography>
                    <Typography fontSize={16} fontWeight={700}>
                      ${cat.amount.toFixed(2)}
                    </Typography>
                    <Box display="flex" alignItems="center" gap={0.5}>
                      <Typography
                        fontSize={12}
                        color={trendColor}
                        fontWeight={500}
                      >
                        {cat.change}%
                      </Typography>
                      <TrendIcon sx={{ color: trendColor, fontSize: 18 }} />
                    </Box>
                  </Box>

                  <ArrowForwardIosRounded
                    sx={{ fontSize: 14, color: '#BDBDBD' }}
                  />
                </Box>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ExpensesBreakdown;
