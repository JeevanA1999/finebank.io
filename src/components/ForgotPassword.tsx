import { useState } from 'react';
import { Box, Typography, TextField, Link } from '@mui/material';
import CustomButton from '../common/Button.tsx';
import Logo from '../assets/Logo.png';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  return (
    <>
      <Helmet>
        <title>FINEbank.IO || Forgot Password</title>
      </Helmet>
      <Box
        minHeight="100vh"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={2}
        bgcolor="white"
      >
        <Box
          gap={4}
          width={{ xs: '90%', sm: '360px' }}
          mx="auto"
          bgcolor="white"
          height={500}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          px={2}
        >
          {/* Header */}
          <Box
            gap={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <img src={Logo} alt="FINEbank.IO" style={{ height: 24 }} />
            <Typography fontSize="20px" fontWeight="bold">
              Forgot Password?
            </Typography>
            <Typography fontSize="16px" color="text.secondary">
              Enter your email address to get the password reset link.
            </Typography>
          </Box>

          {/* Form */}
          <Box
            mt={3}
            width="100%"
            display="flex"
            flexDirection="column"
            gap={2}
          >
            <Typography fontWeight={500} variant="body1">
              Email Address
            </Typography>
            <TextField
              fullWidth
              placeholder="johndoe@email.com"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <CustomButton
              text="Send Reset Link"
              color="primary.main"
              textColor="white"
            />

            {/* Links */}
            <Box
              mt={1}
              display="flex"
              flexDirection="column"
              gap={1}
              textAlign="center"
            >
              <Link
                component={RouterLink}
                to="/login"
                underline="hover"
                color="text.secondary"
              >
                Back to login
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
