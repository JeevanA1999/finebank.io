import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useMediaQuery,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  useTheme,
  TableHead,
} from '@mui/material';
import { useParams } from 'react-router-dom';
// import { accountsData } from './Balances';
import { cards } from '../common/AccountCard';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const transactions = [
  {
    date: '17 Apr, 2023',
    status: 'Complete',
    type: 'Credit',
    receipt: '8C52D5DKDJ5',
    amount: 160,
  },
  {
    date: '18 Apr, 2023',
    status: 'Pending',
    type: 'Debit',
    receipt: '9X12B7QWER3',
    amount: 220,
  },
  {
    date: '19 Apr, 2023',
    status: 'Complete',
    type: 'Credit',
    receipt: '5H76G8JKLZ1',
    amount: 95.5,
  },
  {
    date: '20 Apr, 2023',
    status: 'Failed',
    type: 'Debit',
    receipt: '3Z89T2MNVP4',
    amount: 130,
  },
  {
    date: '18 Apr, 2023',
    status: 'Complete',
    type: 'Debit',
    receipt: '8X23B7QWER3',
    amount: 2202,
  },
  {
    date: '18 Apr, 2023',
    status: 'Pending',
    type: 'Debit',
    receipt: '56L2B7QWER3',
    amount: 820,
  },
];

export default function BalanceDetails() {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const len = isMdDown ? transactions.length : 4;
  const [length, setlength] = useState(len);
  const { id } = useParams();
  // const account = accountsData[id];
  const account = cards[id - 1];

  // 1. Use state for editable fields
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({
    bank: account.bank,
    type: account.type,
    balance: `$${account.amount.toLocaleString()}`,
    branch: 'Park Street Branch',
    number: account.number,
  });

  // 2. Update handler
  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // 3. Map with keys for clean access
  const fieldMap = [
    { label: 'Bank Name', key: 'bank' },
    { label: 'Account Type', key: 'type' },
    { label: 'Balance', key: 'balance' },
    { label: 'Branch Name', key: 'branch' },
    { label: 'Account Number', key: 'number' },
  ];

  return (
    <>
      <Helmet>
        <title>FINEbank.IO || Balance Details</title>
      </Helmet>
      <Container
        maxWidth="xl"
        sx={{
          py: 3,
          px: 1.5,
          maxWidth: { xs: '380px', sm: '100%' },
          overflow: 'hidden',
        }}
      >
        {/* Account Details */}
        <Typography fontWeight={600} color="#878787" mb={1}>
          Account Details
        </Typography>

        <Box
          gap={2}
          className="test"
          display="flex"
          flexDirection="column"
          bgcolor="white"
          width="100%"
          minWidth="100%"
          justifyContent="space-between"
          sx={{
            p: 4,
            borderRadius: '8px',
            height: { xs: 'auto', md: '292px' },
          }}
        >
          <Grid container spacing={3}>
            {fieldMap.map((item, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Typography color="#9F9F9F" fontSize={14}>
                  {item.label}
                </Typography>
                {edit ? (
                  <TextField
                    value={formData[item.key]}
                    size="small"
                    fullWidth
                    onChange={(e) => handleChange(item.key, e.target.value)}
                  />
                ) : (
                  <Typography fontWeight={700} fontSize="18px">
                    {formData[item.key]}
                  </Typography>
                )}
              </Grid>
            ))}
          </Grid>

          <Grid
            item
            xs={12}
            sm={4}
            display="flex"
            alignItems="center"
            gap={2}
            sx={{ mt: isMdDown ? '10px' : 0 }}
          >
            <Button
              sx={{ width: '160px', height: '48px', borderRadius: '4px' }}
              variant="contained"
              color="primary"
              onClick={() => {
                if (edit) {
                  // Save logic here if needed
                  console.log('Saved:', formData);
                }
                setEdit(!edit);
              }}
            >
              {edit ? 'Save' : 'Edit Details'}
            </Button>

            {/* <Button
              variant="text"
              sx={{
                width: '106px',
                height: '48px',
                borderRadius: '4px',
                color: '#666666',
                textTransform: 'none',
                fontWeight: 500,
              }}
            >
              Remove
            </Button> */}
          </Grid>
        </Box>

        {/* Transactions History */}
        <Box mt={4}>
          <Typography
            fontWeight={600}
            color="#878787"
            mb={1}
            // sx={{ overflowX: 'auto' }}
          >
            Transactions History
          </Typography>

          <Box
            sx={{
              borderRadius: 1,
              bgcolor: 'white',
              overflowX: 'auto',
              width: '100%',
              // maxWidth: { xs: '420px', sm: '100%' },

              // WebkitOverflowScrolling: 'touch',
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
            <Box
            //  sx={{ minWidth: '420px' }}
            >
              <TableContainer>
                <Table sx={{ marginBottom: 2 }}>
                  <TableHead>
                    <TableRow>
                      {[
                        'Date',
                        'Status',
                        'Transaction Type',
                        'Receipt',
                        'Amount',
                      ].map((head, idx) => (
                        <TableCell
                          key={idx}
                          sx={{ fontSize: '16px', fontWeight: 700 }}
                          align={head === 'Amount' ? 'right' : 'left'}
                        >
                          {head}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {transactions.slice(0, length).map((tx, idx) => (
                      <TableRow key={idx}>
                        <TableCell sx={{ fontSize: '16px', color: '#525256' }}>
                          {tx.date}
                        </TableCell>
                        <TableCell sx={{ fontSize: '16px', color: '#525256' }}>
                          {tx.status}
                        </TableCell>
                        <TableCell sx={{ fontSize: '16px', color: '#525256' }}>
                          {tx.type}
                        </TableCell>
                        <TableCell sx={{ fontSize: '16px', color: '#525256' }}>
                          {tx.receipt}
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{ fontSize: '16px', color: '#525256' }}
                        >
                          <Typography fontWeight={600}>
                            ${tx.amount.toFixed(2)}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              {/* Load More */}
              <Box
                p={2}
                textAlign="center"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {transactions.length !== length && (
                  <Button
                    sx={{
                      width: '192px',
                      height: '48px',
                      borderRadius: '4px',
                      ml: { xs: '20px' },
                    }}
                    variant="contained"
                    color="primary"
                    onClick={() => setlength(transactions.length)}
                  >
                    Load More
                  </Button>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
