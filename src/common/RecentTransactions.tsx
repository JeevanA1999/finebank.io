import {
  Box,
  Typography,
  Tabs,
  Tab,
  Avatar,
  Stack,
  Divider,
  Link,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import HomeIcon from '@mui/icons-material/Home';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import { Link as RouterLink } from 'react-router-dom';

// Helper to generate a past date string in "14, May 2025" format
const generatePastDate = (daysAgo: number): string => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();
  return `${day}, ${month} ${year}`;
};

// Updated data with "type" field
const transactionData = [
  {
    id: 1,
    icon: <SportsEsportsIcon fontSize="small" />,
    title: 'GTR 5',
    subtitle: 'Gadget & Gear',
    amount: '$160.00',
    date: generatePastDate(1),
    type: 'expense',
  },
  {
    id: 2,
    icon: <AssignmentIcon fontSize="small" />,
    title: 'Polo Shirt',
    subtitle: 'XL fashions',
    amount: '$20.00',
    date: generatePastDate(2),
    type: 'expense',
  },
  {
    id: 3,
    icon: <HomeIcon fontSize="small" />,
    title: 'Rental Income',
    subtitle: 'Real Estate',
    amount: '$300.00',
    date: generatePastDate(3),
    type: 'revenue',
  },
  {
    id: 4,
    icon: <LocalTaxiIcon fontSize="small" />,
    title: 'Taxi Fare',
    subtitle: 'Uber',
    amount: '$12.00',
    date: generatePastDate(4),
    type: 'expense',
  },
  {
    id: 5,
    icon: <AssignmentIcon fontSize="small" />,
    title: 'Freelance',
    subtitle: 'Upwork',
    amount: '$500.00',
    date: generatePastDate(5),
    type: 'revenue',
  },
];

export default function RecentTransactions() {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);

  const filterByType = () => {
    switch (tabValue) {
      case 1:
        return transactionData.filter((item) => item.type === 'revenue');
      case 2:
        return transactionData.filter((item) => item.type === 'expense');
      default:
        return transactionData;
    }
  };

  const filteredTransactions = filterByType();

  return (
    <Box
      width="100%"
      height="100%"
      bgcolor="white"
      p={2}
      borderRadius="8px"
      display="flex"
      flexDirection="column"
      gap={2}
    >
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          fontWeight={600}
          fontSize="16px"
          gutterBottom
          color="#878787"
        >
          Recent Transactions
        </Typography>
        <Link
          component={RouterLink}
          to="/transactions"
          underline="none"
          fontSize="12px"
          color="text.secondary"
        >
          View All
        </Link>
      </Box>

      {/* Tabs */}
      <Tabs
        value={tabValue}
        onChange={(e, newValue) => setTabValue(newValue)}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        sx={{
          mt: 1,
          minHeight: 36,
          '& .MuiTab-root': {
            fontSize: '14px',
            minHeight: 36,
            fontWeight: 600,
            textTransform: 'none',
          },
        }}
      >
        <Tab label="All" />
        <Tab label="Revenue" />
        <Tab label="Expenses" />
      </Tabs>

      <Divider sx={{ my: 1 }} />

      {/* Transactions List */}
      <Box flex={1} overflow="auto">
        <Stack spacing={2}>
          {filteredTransactions.map((item) => (
            <Box
              key={item.id}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box display="flex" alignItems="center" gap={1.5}>
                <Avatar
                  sx={{
                    borderRadius: '8px',
                    bgcolor: theme.palette.grey[100],
                    color: '#666666',
                    width: 40,
                    height: 40,
                  }}
                >
                  {item.icon}
                </Avatar>
                <Box>
                  <Typography fontSize="14px" fontWeight={600}>
                    {item.title}
                  </Typography>
                  <Typography fontSize="12px" color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>

              <Box textAlign="right">
                <Typography fontSize="14px" fontWeight={600} color="#525256">
                  {item.amount}
                </Typography>
                <Typography fontSize="12px" color="text.secondary">
                  {item.date}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
