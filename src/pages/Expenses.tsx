import {
  Box,
  Avatar,
  Container,
  Grid,
  Typography,
  Divider,
  Paper,
} from '@mui/material';

import DownArrow from '../assets/Down arrow.svg';
import UpArrow from '../assets/Up arrow.svg';
import { Helmet } from 'react-helmet-async';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import CommuteRoundedIcon from '@mui/icons-material/CommuteRounded';
import MovieRoundedIcon from '@mui/icons-material/MovieRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';

import ComparisonChart from '../common/ComparisonChart';

const expenseBreakDown = [
  {
    logo: <HomeRoundedIcon sx={{ fontSize: 28, color: '#525256' }} />,
    name: 'Housing',
    amount: '$250.00',
    rate: '15%',
    condition: 'increase',
    subCat1: 'House Rent',
    subAmount1: '$230.00',
    date1: '17 May 2023',
    subCat2: 'Parking',
    subAmount2: '$20.00',
    date2: '17 May 2023',
  },
  {
    logo: (
      <LocalGroceryStoreRoundedIcon sx={{ fontSize: 28, color: '#525256' }} />
    ),
    name: 'Food',
    amount: '$350.00',
    rate: '08%',
    condition: 'decrease',
    subCat1: 'Grocery',
    subAmount1: '$230.00',
    date1: '17 May 2023',
    subCat2: 'Restaurant bill',
    subAmount2: '$120.00',
    date2: '17 May 2023',
  },
  {
    logo: <CommuteRoundedIcon sx={{ fontSize: 28, color: '#525256' }} />,
    name: 'Transportation',
    amount: '$50.00',
    rate: '12%',
    condition: 'decrease',
    subCat1: 'Taxi Fare',
    subAmount1: '$30.00',
    date1: '17 May 2023',
    subCat2: 'Metro Card bill',
    subAmount2: '$20.00',
    date2: '17 May 2023',
  },
  {
    logo: <MovieRoundedIcon sx={{ fontSize: 28, color: '#525256' }} />,
    name: 'Entertainment',
    amount: '$80.00',
    rate: '15%',
    condition: 'decrease',
    subCat1: 'Movie ticket',
    subAmount1: '$30.00',
    date1: '17 May 2023',
    subCat2: 'iTunes',
    subAmount2: '$50.00',
    date2: '17 May 2023',
  },
  {
    logo: <ShoppingBagRoundedIcon sx={{ fontSize: 28, color: '#525256' }} />,
    name: 'Shopping',
    amount: '$420.00',
    rate: '25%',
    condition: 'increase',
    subCat1: 'Shirt',
    subAmount1: '$230.00',
    date1: '17 May 2023',
    subCat2: 'Jeans',
    subAmount2: '$190.00',
    date2: '17 May 2023',
  },
  {
    logo: <WidgetsRoundedIcon sx={{ fontSize: 28, color: '#525256' }} />,
    name: 'Others',
    amount: '$50.00',
    rate: '23%',
    condition: 'increase',
    subCat1: 'Donation',
    subAmount1: '$30.00',
    date1: '17 May 2023',
    subCat2: 'Gift',
    subAmount2: '$20.00',
    date2: '17 May 2023',
  },
];

const monthlyData = [
  { name: 'Jan', thisMonth: 600000, lastMonth: 540000 },
  { name: 'Feb', thisMonth: 720000, lastMonth: 680000 },
  { name: 'Mar', thisMonth: 800000, lastMonth: 700000 },
  { name: 'Apr', thisMonth: 750000, lastMonth: 720000 },
  { name: 'May', thisMonth: 900000, lastMonth: 850000 },
  { name: 'Jun', thisMonth: 880000, lastMonth: 920000 },
  { name: 'Jul', thisMonth: 950000, lastMonth: 910000 },
  { name: 'Aug', thisMonth: 970000, lastMonth: 940000 },
  { name: 'Sep', thisMonth: 860000, lastMonth: 830000 },
  { name: 'Oct', thisMonth: 930000, lastMonth: 880000 },
  { name: 'Nov', thisMonth: 990000, lastMonth: 940000 },
  { name: 'Dec', thisMonth: 1020000, lastMonth: 960000 },
];

export default function Expenses() {
  return (
    <>
      <Helmet>
        <title>FINEbank.IO || Expenses</title>
      </Helmet>
      <Container maxWidth="xl" sx={{ py: 3, px: 1.5 }}>
        <Typography variant="h6" fontWeight={600} color="#878787" mb={1}>
          Expenses Comparison
        </Typography>

        <Box display="flex" gap={2} flexDirection="column">
          <Box width="100%" mb={2} boxShadow={12}>
            <ComparisonChart title="Monthly Comparison" data={monthlyData} />
          </Box>

          <Typography variant="h6" fontWeight={600} color="#878787" mb={1}>
            Expenses Breakdown
          </Typography>

          <Grid container spacing={2}>
            {expenseBreakDown.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  sx={{ borderRadius: '6px' }}
                  height="238px"
                  elevation={0}
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    px={2}
                    py={2}
                    gap={3}
                  >
                    <Box display="flex" alignItems="center" gap={1}>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        bgcolor="#E8E8E8"
                        borderRadius={'8px'}
                        width={40}
                        height={40}
                      >
                        {item.logo}
                      </Box>
                      <Box>
                        <Typography fontSize={16} color="text.secondary">
                          {item.name}
                        </Typography>
                        <Typography fontSize={18} fontWeight={770}>
                          {item.amount}
                        </Typography>
                      </Box>
                    </Box>

                    <Box textAlign="right">
                      <Box
                        display="flex"
                        alignItems="center"
                        gap={1}
                        justifyContent="flex-end"
                      >
                        <Typography fontSize={16} color="#666666">
                          {item.rate}
                        </Typography>
                        <Avatar
                          sx={{ width: 16, height: 16, bgcolor: 'transparent' }}
                          variant="square"
                        >
                          <img
                            src={
                              item.condition === 'increase'
                                ? UpArrow
                                : DownArrow
                            }
                            alt="arrow"
                            width={16}
                          />
                        </Avatar>
                      </Box>
                      <Typography
                        fontSize="12px"
                        variant="caption"
                        color="#878787"
                        noWrap
                        sx={{
                          maxWidth: '100px',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        Compare to last month
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    px={2}
                    py={1.5}
                    bgcolor="white"
                    height="76px"
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography
                        fontSize={16}
                        fontWeight="600"
                        color="#525256"
                      >
                        {item.subCat1}
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-end"
                      justifyContent="center"
                    >
                      <Typography
                        variant="caption"
                        fontSize="16px"
                        color="#525256"
                        fontWeight="600"
                      >
                        {item.subAmount1}
                      </Typography>
                      <Typography
                        variant="caption"
                        fontSize="12px"
                        color="#9F9F9F"
                      >
                        {item.date1}
                      </Typography>
                    </Box>
                  </Box>

                  <Divider variant="middle" />

                  <Box
                    px={2}
                    py={1.5}
                    bgcolor="white"
                    height="84px"
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography
                        fontSize={16}
                        fontWeight="600"
                        color="#525256"
                      >
                        {item.subCat2}
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-end"
                      justifyContent="center"
                    >
                      <Typography
                        variant="caption"
                        fontSize="16px"
                        color="#525256"
                        fontWeight="600"
                      >
                        {item.subAmount2}
                      </Typography>
                      <Typography
                        variant="caption"
                        fontSize="12px"
                        color="#9F9F9F"
                      >
                        {item.date2}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
