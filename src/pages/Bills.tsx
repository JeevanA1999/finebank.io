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
  Avatar,
  useTheme,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Breadcrumbs, Link } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const generatePastDate = (
  daysAfter: number
): { day: string; month: string } => {
  const date = new Date();
  date.setDate(date.getDate() + daysAfter);
  const day = date.getDate().toString();
  const month = date.toLocaleString('en-US', { month: 'short' });
  return { day, month };
};

const bills = [
  {
    ...generatePastDate(0),
    name: 'Figma',
    type: 'Figma - Yearly Plan',
    description:
      'For advanced security and more flexible controls, the Professional plan helps you scale design processes company-wide.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    lastCharge: '14 May, 2022',
    amount: '$150',
  },
  {
    ...generatePastDate(1),
    name: 'Adobe',
    type: 'Adobe Inc - Yearly Plan',
    description:
      'For advanced security and more flexible controls, the Professional plan helps you scale design processes company-wide.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg',
    lastCharge: '17 Jun, 2022',
    amount: '$559',
  },
  {
    ...generatePastDate(2),
    name: 'Spotify',
    type: 'Spotify - Monthly',
    description: 'Ad-free music experience with high quality streaming.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg',
    lastCharge: '10 Jun, 2023',
    amount: '$10',
  },
  {
    ...generatePastDate(3),
    name: 'Netflix',
    type: 'Netflix - Monthly',
    description: 'Watch unlimited movies and shows on any device anytime.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    lastCharge: '01 Jul, 2023',
    amount: '$20',
  },
];

export default function Bills() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>FINEbank.IO || Bills</title>
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
            Bills
          </Typography>
        </Breadcrumbs>

        {/* <Grid container spacing={2} mt={2}> */}
        <Grid item xs={12} borderRadius={1} mt={2}>
          <Box
            overflow="auto"
            bgcolor="white"
            sx={{
              boxShadow: 12,
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
                    <TableCell>Due Date</TableCell>
                    <TableCell>Logo</TableCell>
                    <TableCell>Item Description</TableCell>
                    <TableCell>Last Charge</TableCell>
                    <TableCell align="right">Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bills.map((bill, idx) => (
                    <TableRow key={idx}>
                      {/* Due Date */}
                      <TableCell>
                        <Box
                          display="flex"
                          flexDirection="column"
                          alignItems="center"
                          justifyContent="center"
                          bgcolor="#f5f5f5"
                          width={72}
                          height={82}
                          borderRadius={1}
                        >
                          <Typography fontSize="14px" fontWeight={500}>
                            {bill.month}
                          </Typography>
                          <Typography fontSize="18px" fontWeight={700}>
                            {bill.day}
                          </Typography>
                        </Box>
                      </TableCell>

                      {/* Logo */}
                      <TableCell sx={{ width: '140px', height: '40px' }}>
                        <Box
                          component="img"
                          src={bill.logo}
                          alt={bill.name}
                          sx={{
                            width: '120px',
                            height: '40px',
                            objectFit: 'contain',
                          }}
                        />
                      </TableCell>

                      {/* Item Description */}
                      <TableCell>
                        <Typography fontWeight={700} fontSize="14px">
                          {bill.type}
                        </Typography>
                        <Typography fontSize="13px" color="text.secondary">
                          {bill.description}
                        </Typography>
                      </TableCell>

                      {/* Last Charge */}
                      <TableCell>
                        <Typography fontSize="14px" color="text.secondary">
                          {bill.lastCharge}
                        </Typography>
                      </TableCell>

                      {/* Amount */}
                      <TableCell align="right">
                        <Box
                          px={2}
                          py={1}
                          bgcolor="#f5f5f5"
                          borderRadius="8px"
                          display="inline-block"
                        >
                          <Typography fontWeight={700}>
                            {bill.amount}
                          </Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
        {/* </Grid> */}
      </Container>
    </>
  );
}
