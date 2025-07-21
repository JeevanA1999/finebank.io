// import {
//   Box,
//   Container,
//   Grid,
//   Typography,
//   Avatar,
//   Button,
// } from '@mui/material';
// import CardLogo from '../assets/CardLogo.svg';
// import Visacard from '../assets/Visacard.svg';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import { Helmet } from 'react-helmet-async';

// export const accountsData = [
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

// export default function Balances() {
//   const [data, setData] = useState(accountsData);
//   const navigate = useNavigate();

//   const handleRemove = (id) => {
//     setData((prevData) => prevData.filter((_, index) => index !== id));
//   };

//   return (
//     <>
//       <Helmet>
//         <title>FINEbank.IO || Balances</title>
//       </Helmet>
//       <Container maxWidth="xl" sx={{ py: 2 }}>
//         <Box width="100%" mb={1}>
//           <Typography variant="h6" fontWeight={600} color="#878787">
//             Balances
//           </Typography>
//         </Box>

//         <Grid container spacing={2}>
//           {data.map((bank, i) => (
//             <Grid item xs={12} sm={6} md={4} key={bank.id}>
//               <h1>{(bank.id, i)}</h1>
//               <Box
//                 sx={{ boxShadow: 12 }}
//                 p={3}
//                 bgcolor="white"
//                 borderRadius={1}
//                 height="282px"
//                 display="flex"
//                 flexDirection="column"
//                 justifyContent="space-between"
//                 boxShadow={1}
//               >
//                 {/* Header */}
//                 <Box
//                   display="flex"
//                   justifyContent="space-between"
//                   alignItems="center"
//                 >
//                   <Typography
//                     fontSize="16px"
//                     lineHeight="24px"
//                     fontWeight={700}
//                     color="#666666"
//                   >
//                     {bank.type}
//                   </Typography>

//                   <Box display="flex" alignItems="center" gap={1}>
//                     <Typography
//                       fontSize="12px"
//                       fontWeight={500}
//                       color="#666666"
//                     >
//                       {bank.bank}
//                     </Typography>
//                     {bank.bankLogo && (
//                       <Avatar
//                         alt="Card Logo"
//                         src={bank.bankLogo}
//                         sx={{ width: 48, height: 32 }}
//                         variant="square"
//                       />
//                     )}
//                   </Box>
//                 </Box>

//                 {/* Body */}
//                 <Box
//                   width="100%"
//                   height="180px"
//                   borderRadius={1}
//                   display="flex"
//                   flexDirection="column"
//                   alignItems="center"
//                   justifyContent="center"
//                   gap={2}
//                 >
//                   <Box
//                     height="52px"
//                     width="100%"
//                     display="flex"
//                     flexDirection="column"
//                   >
//                     <Typography fontWeight={600} fontSize="20px">
//                       {bank.number}
//                     </Typography>
//                     <Typography color="#9F9F9F">Account Number</Typography>
//                   </Box>
//                   <Box
//                     height="52px"
//                     width="100%"
//                     display="flex"
//                     flexDirection="column"
//                   >
//                     <Typography fontWeight={600} fontSize="20px">
//                       ${bank.amount.toLocaleString()}
//                     </Typography>
//                     <Typography color="#9F9F9F">Total amount</Typography>
//                   </Box>
//                   <Box
//                     mt={3}
//                     width="100%"
//                     display="flex"
//                     justifyContent="space-between"
//                   >
//                     <Button
//                       variant="text"
//                       color="primary"
//                       onClick={() => handleRemove(i)}
//                     >
//                       Remove
//                     </Button>
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       sx={{ width: '110px', borderRadius: '4px' }}
//                       onClick={() => navigate(`/balances/${bank.id}`)}
//                     >
//                       Details
//                     </Button>
//                   </Box>
//                 </Box>
//               </Box>
//             </Grid>
//           ))}

//           {/* Add Account Card */}
//           <Grid item xs={12} sm={6} md={4}>
//             <Box
//               sx={{ boxShadow: 12 }}
//               height="282px"
//               bgcolor="white"
//               borderRadius={1}
//               boxShadow={1}
//               p={3}
//               display="flex"
//               flexDirection="column"
//               alignItems="center"
//               justifyContent="center"
//               gap={2}
//             >
//               <Button
//                 variant="contained"
//                 color="primary"
//                 sx={{ width: '150px', height: '48px', borderRadius: '4px' }}
//               >
//                 Add Accounts
//               </Button>
//               <Typography fontSize="14px" fontWeight={500} color="#878787">
//                 Edit Accounts
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </>
//   );
// }

import {
  Box,
  Container,
  Grid,
  Typography,
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Breadcrumbs,
  Link,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Autocomplete from '@mui/material/Autocomplete';
import { Link as RouterLink } from 'react-router-dom';
import CardLogo from '../assets/CardLogo.svg';
import Visacard from '../assets/Visacard.svg';
import { cards } from '../common/AccountCard';

export default function Balances() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(cards);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    type: '',
    bank: '',
    bankLogo: '',
    number: '',
    amount: '',
  });

  const [accountTypes, setAccountTypes] = useState([
    'Credit Card',
    'Checking',
    'Savings',
    'Investment',
    'Loan',
  ]);

  const [bankNames, setBankNames] = useState([
    'Master Card',
    'AB Bank Ltd',
    'Brac Bank Ltd.',
    'City Bank Ltd.',
  ]);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setForm({
      type: '',
      bank: '',
      bankLogo: '',
      number: '',
      amount: '',
    });
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddAccount = () => {
    const { type, bank, number, amount } = form;
    if (type && bank && number && amount !== '') {
      const newAccount = {
        id: Date.now(),
        ...form,
        amount: parseFloat(amount),
      };
      setData((prev) => [...prev, newAccount]);
      handleClose();
    } else {
      alert('Please fill all required fields.');
    }
  };

  const handleRemove = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <Helmet>
        <title>FINEbank.IO || Balances</title>
      </Helmet>

      <Container
        maxWidth="xl"
        sx={{ py: 1, px: 1.5, maxWidth: { xs: '380px', sm: '100%' } }}
      >
        <Box mb={2}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              component={RouterLink}
              to="/"
            >
              Dashboard
            </Link>
            <Typography color="#878787" variant="h6" fontWeight={600}>
              Balances
            </Typography>
          </Breadcrumbs>
        </Box>

        <Grid container spacing={2}>
          {data.map((bank) => (
            <Grid item xs={12} sm={6} md={4} key={bank.id}>
              <Box
                p={3}
                bgcolor="white"
                borderRadius={1}
                height="282px"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                boxShadow={12}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography fontSize={16} fontWeight={700} color="#666">
                    {bank.type}
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography fontSize={12} fontWeight={500} color="#666">
                      {bank.bank}
                    </Typography>
                    {bank.bankLogo && (
                      <Avatar
                        src={bank.bankLogo}
                        alt="Bank Logo"
                        sx={{ width: 48, height: 32 }}
                        variant="square"
                      />
                    )}
                  </Box>
                </Box>

                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  gap={2}
                  height="180px"
                >
                  <Box width="100%">
                    <Typography fontWeight={600} fontSize={20}>
                      {bank.number}
                    </Typography>
                    <Typography color="#9F9F9F">Account Number</Typography>
                  </Box>
                  <Box width="100%">
                    <Typography fontWeight={600} fontSize={20}>
                      ${bank.amount.toLocaleString()}
                    </Typography>
                    <Typography color="#9F9F9F">Total amount</Typography>
                  </Box>
                  <Box
                    mt={3}
                    width="100%"
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Button
                      variant="text"
                      color="primary"
                      onClick={() => handleRemove(bank.id)}
                    >
                      Remove
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ width: 110, borderRadius: 1 }}
                      onClick={() => navigate(`/balances/${bank.id}`)}
                    >
                      Details
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}

          {/* Add Account Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Box
              height="282px"
              bgcolor="white"
              borderRadius={1}
              boxShadow={12}
              p={3}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap={2}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{ width: 150, height: 48, borderRadius: 1 }}
                onClick={handleOpen}
              >
                Add Account
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Dialog */}
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
          <DialogTitle>Add New Account</DialogTitle>
          <DialogContent
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}
          >
            <Autocomplete
              freeSolo
              options={accountTypes}
              value={form.type}
              onChange={(e, newVal) => {
                if (newVal && !accountTypes.includes(newVal)) {
                  setAccountTypes((prev) => [...prev, newVal]);
                }
                setForm((prev) => ({ ...prev, type: newVal || '' }));
              }}
              renderInput={(params) => (
                <TextField {...params} label="Account Type" fullWidth />
              )}
            />
            <Autocomplete
              freeSolo
              options={bankNames}
              value={form.bank}
              onChange={(e, newVal) => {
                if (newVal && !bankNames.includes(newVal)) {
                  setBankNames((prev) => [...prev, newVal]);
                }
                setForm((prev) => ({ ...prev, bank: newVal || '' }));
              }}
              renderInput={(params) => (
                <TextField {...params} label="Bank Name" fullWidth />
              )}
            />
            <TextField
              label="Account Number"
              name="number"
              value={form.number}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Amount"
              name="amount"
              type="number"
              value={form.amount}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Bank Logo URL (optional)"
              name="bankLogo"
              value={form.bankLogo}
              onChange={handleChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              sx={{ width: 160, height: 48, borderRadius: 1 }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleAddAccount}
              variant="contained"
              sx={{ width: 160, height: 48, borderRadius: 1 }}
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
}
