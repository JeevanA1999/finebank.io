import {
  Box,
  Container,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Button,
  Tabs,
  Tab,
  Avatar,
  useTheme,
  useMediaQuery,
  Breadcrumbs,
  Link,
  TableSortLabel,
} from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import HomeIcon from '@mui/icons-material/Home';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import { Helmet } from 'react-helmet-async';

const generatePastDate = (daysAgo: number): string => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();
  return `${day}, ${month} ${year}`;
};

const transactionData = [
  {
    id: 1,
    icon: <SportsEsportsIcon fontSize="small" />,
    title: 'GTR 5',
    subtitle: 'Gadget & Gear',
    amount: '$160.00',
    date: generatePastDate(1),
    type: 'expense',
    paymentMethod: 'Credit Card',
  },
  {
    id: 2,
    icon: <AssignmentIcon fontSize="small" />,
    title: 'Polo Shirt',
    subtitle: 'XL fashions',
    amount: '$20.00',
    date: generatePastDate(2),
    type: 'expense',
    paymentMethod: 'UPI',
  },
  {
    id: 3,
    icon: <HomeIcon fontSize="small" />,
    title: 'Rental Income',
    subtitle: 'Real Estate',
    amount: '$300.00',
    date: generatePastDate(3),
    type: 'revenue',
    paymentMethod: 'Bank Transfer',
  },
  {
    id: 4,
    icon: <LocalTaxiIcon fontSize="small" />,
    title: 'Taxi Fare',
    subtitle: 'Uber',
    amount: '$12.00',
    date: generatePastDate(4),
    type: 'expense',
    paymentMethod: 'Credit Card',
  },
  {
    id: 5,
    icon: <AssignmentIcon fontSize="small" />,
    title: 'Freelance',
    subtitle: 'Upwork',
    amount: '$500.00',
    date: generatePastDate(5),
    type: 'revenue',
    paymentMethod: 'PayPal',
  },
  {
    id: 6,
    icon: <LocalTaxiIcon fontSize="small" />,
    title: 'Taxi Fare',
    subtitle: 'Ola',
    amount: '$200.00',
    date: generatePastDate(5),
    type: 'expense',
    paymentMethod: 'Cash',
  },
];

type Order = 'asc' | 'desc';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (orderBy === 'amount') {
    const aValue = parseFloat((a[orderBy] as string).replace('$', ''));
    const bValue = parseFloat((b[orderBy] as string).replace('$', ''));
    return bValue - aValue;
  }
  if (orderBy === 'date') {
    return (
      new Date(b[orderBy] as string).getTime() -
      new Date(a[orderBy] as string).getTime()
    );
  }

  return ('' + b[orderBy]).localeCompare('' + a[orderBy]);
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (a: { [key in Key]: any }, b: { [key in Key]: any }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export default function Transactions() {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [visible, setVisible] = useState(5);

  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] =
    useState<keyof (typeof transactionData)[0]>('date');

  const handleTabChange = (_: any, newValue: number) => {
    setTabValue(newValue);
    setVisible(5);
  };

  const handleSort = (property: keyof (typeof transactionData)[0]) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const filteredData = transactionData.filter((tx) => {
    if (tabValue === 1) return tx.type === 'revenue';
    if (tabValue === 2) return tx.type === 'expense';
    return true;
  });

  const sortedData = filteredData.sort(getComparator(order, orderBy));
  const visibleData = sortedData.slice(0, visible);

  return (
    <>
      <Helmet>
        <title>FINEbank.IO || Transactions</title>
      </Helmet>
      <Container
        maxWidth="xl"
        sx={{ py: 1, px: 1.5, maxWidth: { xs: '380px', sm: '100%' } }}
      >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" component={RouterLink} to="/">
            Dashboard
          </Link>
          <Typography variant="h6" fontWeight={600} color="#878787">
            Transactions
          </Typography>
        </Breadcrumbs>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box overflow="auto">
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                textColor="primary"
                indicatorColor="primary"
                sx={{ borderBottom: '1px solid #e0e0e0', px: 2 }}
              >
                <Tab sx={{ fontSize: '16px', fontWeight: 700 }} label="All" />
                <Tab label="Revenue" />
                <Tab label="Expenses" />
              </Tabs>

              <Box
                mt={2}
                sx={{
                  bgcolor: 'white',
                  borderRadius: 1,
                  scrollbarColor: `${theme.palette.primary.main} transparent`,
                  scrollbarWidth: 'thin',
                  '&::-webkit-scrollbar': {
                    height: 8,
                  },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 4,
                  },
                  '&::-webkit-scrollbar-track': {
                    backgroundColor: '#f1f1f1',
                  },
                }}
              >
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        {[
                          { id: 'title', label: 'Item' },
                          { id: 'subtitle', label: 'Shop Name' },
                          { id: 'date', label: 'Date' },
                          { id: 'paymentMethod', label: 'Payment Method' },
                          { id: 'amount', label: 'Amount' },
                        ].map((headCell) => (
                          <TableCell
                            key={headCell.id}
                            align={
                              headCell.label === 'Amount' ? 'right' : 'left'
                            }
                            sortDirection={
                              orderBy === headCell.id ? order : false
                            }
                            sx={{
                              fontWeight: 600,
                              fontSize: 14,
                              color: '#333',
                            }}
                          >
                            <TableSortLabel
                              active={orderBy === headCell.id}
                              direction={
                                orderBy === headCell.id ? order : 'asc'
                              }
                              onClick={() =>
                                handleSort(
                                  headCell.id as keyof (typeof transactionData)[0]
                                )
                              }
                            >
                              {headCell.label}
                            </TableSortLabel>
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {visibleData.map((tx) => (
                        <TableRow key={tx.id}>
                          <TableCell>
                            <Box display="flex" alignItems="center" gap={1}>
                              <Avatar
                                sx={{
                                  borderRadius: 1,
                                  bgcolor: 'white',
                                  color: theme.palette.text.secondary,
                                  width: 40,
                                  height: 40,
                                }}
                              >
                                {tx.icon}
                              </Avatar>
                              <Typography fontSize="14px">
                                {tx.title}
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell>{tx.subtitle}</TableCell>
                          <TableCell>{tx.date}</TableCell>
                          <TableCell>{tx.paymentMethod}</TableCell>
                          <TableCell align="right">
                            <Typography fontWeight={600}>
                              {tx.amount}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>

              {visible < filteredData.length && (
                <Box textAlign="center" py={2}>
                  <Button
                    variant="contained"
                    onClick={() => setVisible((prev) => prev + 3)}
                    sx={{
                      textTransform: 'none',
                      borderRadius: '6px',
                      width: '160px',
                      height: '48px',
                      px: 4,
                      py: 1,
                      fontWeight: 600,
                    }}
                  >
                    Load More
                  </Button>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
