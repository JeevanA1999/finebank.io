// import {
//   Container,
//   Grid,
//   Box,
//   Typography,
//   Link,
//   useMediaQuery,
//   useTheme,
// } from '@mui/material';
// import { Link as RouterLink } from 'react-router-dom';
// import AccountCard from '../common/AccountCard';
// import GaugeChart from '../common/GaugeChart';
// import UpcommingBills from '../common/UpcommingBills';
// import RecentTransactions from '../common/RecentTransactions';
// import ComparisonChart from '../common/ComparisonChart';
// import ExpensesBreakdown from '../common/ExpensesBreakdown';

// const weeklyData = [
//   { name: 'Sun', thisWeek: 240000, lastWeek: 200000 },
//   { name: 'Mon', thisWeek: 140000, lastWeek: 180000 },
//   { name: 'Tue', thisWeek: 100000, lastWeek: 160000 },
//   { name: 'Wed', thisWeek: 180000, lastWeek: 200000 },
//   { name: 'Thu', thisWeek: 170000, lastWeek: 180000 },
//   { name: 'Fri', thisWeek: 220000, lastWeek: 100000 },
//   { name: 'Sat', thisWeek: 160000, lastWeek: 140000 },
// ];
// export default function Dashboard() {
//   const theme = useTheme();
//   const isLgUp = useMediaQuery(theme.breakpoints.up('lg')); // ≥1200px
//   const isMdUp = useMediaQuery(theme.breakpoints.up('md')); // ≥900px

//   const isTablet = useMediaQuery('(min-width:900px) and (max-width:1199.95px)');
//   if (isTablet) {
//     console.log(isTablet);
//   }
//   return (
//     <Container maxWidth="xl" sx={{ py: isTablet ? 1 : 2 }}>
//       <Grid container spacing={isTablet ? 1 : 2}>
//         {/* Top 3 Cards */}
//         <Grid item xs={12} sm={6} md={isMdUp ? 4 : 6}>
//           <Typography fontWeight={600} gutterBottom color="#878787">
//             Total Balane
//           </Typography>
//           <AccountCard />
//         </Grid>
//         <Grid item xs={12} sm={6} md={isMdUp ? 4 : 6}>
//           <Typography fontWeight={600} gutterBottom color="#878787">
//             Goals
//           </Typography>
//           <GaugeChart height="232px" />
//         </Grid>
//         <Grid item xs={12} sm={isMdUp ? 6 : 12} md={4}>
//           <Box display="flex" justifyContent="space-between">
//             <Typography fontWeight={600} gutterBottom color="#878787">
//               Upcoming Bill
//             </Typography>
//             {/* <Link
//               component={RouterLink}
//               to="/bills"
//               underline="none"
//               sx={{ fontSize: 14, color: '#525256' }}
//             >
//               View All &gt;
//             </Link> */}
//           </Box>
//           <UpcommingBills />
//         </Grid>

//         {/* Bottom Section */}
//         {isMdUp ? (
//           <>
//             <Grid item md={4}>
//               <RecentTransactions />
//             </Grid>
//             <Grid item md={8}>
//               <Box display="flex" flexDirection="column" gap={2}>
//                 <Box
//                   p={2}
//                   bgcolor="white"
//                   borderRadius={1}
//                   // boxShadow={1}
//                   minHeight={isLgUp ? 298 : 250}
//                 >
//                   <Typography fontWeight={600} gutterBottom color="#878787">
//                     Statistics
//                   </Typography>
//                   <ComparisonChart
//                     title="Weekly Comparison"
//                     data={weeklyData}
//                     // maxWidth="728px"
//                   />
//                 </Box>

//                 <Box
//                   p={2}
//                   bgcolor="white"
//                   borderRadius={1}
//                   // boxShadow={1}
//                   minHeight={isLgUp ? 252 : 200}
//                 >
//                   <ExpensesBreakdown />
//                 </Box>
//               </Box>
//             </Grid>
//           </>
//         ) : (
//           <>
//             <Grid item xs={12}>
//               <RecentTransactions />
//             </Grid>
//             <Grid item xs={12}>
//               <Box
//                 p={2}
//                 bgcolor="white"
//                 borderRadius={1}
//                 // boxShadow={1}
//                 minHeight={280}
//               >
//                 <Typography fontWeight={600} gutterBottom color="#878787">
//                   Statistics
//                 </Typography>
//                 <ComparisonChart
//                   title="Weekly Comparison"
//                   data={weeklyData}
//                   // maxWidth="728px"
//                 />
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Box
//                 p={2}
//                 bgcolor="white"
//                 borderRadius={1}
//                 // boxShadow={1}
//                 minHeight={250}
//               >
//                 <ExpensesBreakdown />
//               </Box>
//             </Grid>
//           </>
//         )}
//       </Grid>
//     </Container>
//   );
// }

import {
  Container,
  Grid,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import AccountCard from '../common/AccountCard';
import GaugeChart from '../common/GaugeChart';
import UpcommingBills from '../common/UpcommingBills';
import RecentTransactions from '../common/RecentTransactions';
import ComparisonChart from '../common/ComparisonChart';
import ExpensesBreakdown from '../common/ExpensesBreakdown';

const weeklyData = [
  { name: 'Sun', thisWeek: 240000, lastWeek: 200000 },
  { name: 'Mon', thisWeek: 140000, lastWeek: 180000 },
  { name: 'Tue', thisWeek: 100000, lastWeek: 160000 },
  { name: 'Wed', thisWeek: 180000, lastWeek: 200000 },
  { name: 'Thu', thisWeek: 170000, lastWeek: 180000 },
  { name: 'Fri', thisWeek: 220000, lastWeek: 100000 },
  { name: 'Sat', thisWeek: 160000, lastWeek: 140000 },
];

export default function Dashboard() {
  const theme = useTheme();

  // Custom breakpoints
  const isDesktop = useMediaQuery('(min-width:1024px)'); // Treat 1024px like 1440px
  const isLarge = useMediaQuery('(min-width:1440px)');
  const isTablet = useMediaQuery('(min-width:900px) and (max-width:1023.95px)');

  return (
    <Container maxWidth="xl" sx={{ py: isTablet ? 1 : 2 }}>
      <Grid container spacing={isTablet ? 1 : 2}>
        {/* Top 3 Cards */}
        <Grid item xs={12} sm={6} md={isDesktop ? 4 : 6}>
          <Typography fontWeight={600} gutterBottom color="#878787">
            Total Balance
          </Typography>
          <AccountCard />
        </Grid>

        <Grid item xs={12} sm={6} md={isDesktop ? 4 : 6}>
          <Typography fontWeight={600} gutterBottom color="#878787">
            Goals
          </Typography>
          <GaugeChart height="232px" />
        </Grid>

        <Grid item xs={12} sm={isDesktop ? 6 : 12} md={4}>
          <Box display="flex" justifyContent="space-between">
            <Typography fontWeight={600} gutterBottom color="#878787">
              Upcoming Bill
            </Typography>
          </Box>
          <UpcommingBills />
        </Grid>

        {/* Bottom Section */}
        {isDesktop ? (
          <>
            <Grid item md={4}>
              <RecentTransactions />
            </Grid>
            <Grid item md={8}>
              <Box display="flex" flexDirection="column" gap={2}>
                <Box
                  p={2}
                  bgcolor="white"
                  borderRadius={1}
                  minHeight={isLarge ? 298 : 250}
                >
                  <Typography fontWeight={600} gutterBottom color="#878787">
                    Statistics
                  </Typography>
                  <ComparisonChart
                    title="Weekly Comparison"
                    data={weeklyData}
                  />
                </Box>

                <Box
                  p={2}
                  bgcolor="white"
                  borderRadius={1}
                  minHeight={isLarge ? 252 : 200}
                >
                  <ExpensesBreakdown />
                </Box>
              </Box>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12}>
              <RecentTransactions />
            </Grid>
            <Grid item xs={12}>
              <Box p={2} bgcolor="white" borderRadius={1} minHeight={280}>
                <Typography fontWeight={600} gutterBottom color="#878787">
                  Statistics
                </Typography>
                <ComparisonChart title="Weekly Comparison" data={weeklyData} />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box p={2} bgcolor="white" borderRadius={1} minHeight={250}>
                <ExpensesBreakdown />
              </Box>
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
}
