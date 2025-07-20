import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Link,
  FormControlLabel,
  Checkbox,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { useLocation, useNavigate } from 'react-router-dom';

import Logo from '../assets/Logo.png';
import EyeOn from '../assets/eyeon.svg';
import EyeOff from '../assets/eyeoff.png';
import CustomButton from '../common/Button.tsx';
import google from '../assets/google.png';
import { Link as RouterLink } from 'react-router-dom';
export default function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = () => {
    sessionStorage.setItem('token', 'mock-jwt-token');
    navigate(from, { replace: true });
  };

  return (
    <>
      <Helmet>
        <title>FINEbank.IO || Login</title>
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
          width={{ xs: '100%', sm: 360 }}
          p={{ xs: 3, sm: 4 }}
          borderRadius={2}
          height={500}
          // boxShadow={3}

          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={1}
        >
          {/* Logo */}
          <Box>
            <img src={Logo} alt="FINEbank.IO" style={{ height: 24 }} />
          </Box>

          {/* Form */}
          <Box width="100%" display="flex" flexDirection="column" gap={1}>
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

            {/* Password Header + Forgot */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography fontWeight={500} variant="body1">
                Password
              </Typography>
              <Link
                component={RouterLink}
                to="/forgot-password"
                underline="hover"
                fontSize={12}
                color="primary.main"
              >
                Forgot Password?
              </Link>
            </Box>

            {/* Password Field */}
            <TextField
              fullWidth
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword} edge="end">
                      <img
                        src={showPassword ? EyeOff : EyeOn}
                        alt="Toggle visibility"
                        width={16}
                        height={16}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
              }
              label="Keep me signed in"
            />

            <CustomButton
              text="Login"
              color="primary.main"
              onClick={handleLogin}
            />
          </Box>

          {/* Divider Section */}
          <Box display="flex" alignItems="center" width="100%" gap={2}>
            <Divider sx={{ flexGrow: 1, borderColor: '#E0E0E0' }} />
            <Typography variant="body2" color="#999DA3">
              or sign in with
            </Typography>
            <Divider sx={{ flexGrow: 1, borderColor: '#E0E0E0' }} />
          </Box>

          {/* Google Sign-In */}
          <CustomButton
            text="Continue with Google"
            icon={google}
            color="#E4E7EB"
            textColor="#4B5768"
            onClick={handleLogin}
          />

          {/* Sign Up Link */}
          <Typography textAlign="center" fontSize={14}>
            Don’t have an account?{' '}
            <Link
              component={RouterLink}
              to="/signUp"
              underline="hover"
              color="primary.main"
            >
              Create one
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
