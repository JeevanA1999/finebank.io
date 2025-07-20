import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Link,
  Divider,
} from '@mui/material';
import Logo from '../assets/Logo.png';
import EyeOn from '../assets/eyeon.svg';
import EyeOff from '../assets/eyeoff.png';
import CustomButton from '../common/Button.tsx';
import google from '../assets/google.png';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

type SignUpStates = {
  name: string;
  password: string;
  email: string;
};

export default function SignUp() {
  const [form, setForm] = useState<SignUpStates>({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleForm = () => {
    console.log(form);
    navigate('/'); // handle signup form here
  };

  return (
    <>
      <Helmet>
        <title>FINEbank.IO || Sign Up</title>
      </Helmet>
      <Box
        display="flex"
        width="100%"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        px={2}
        bgcolor="white"
      >
        <Box
          height="100%"
          width="100%"
          maxWidth="400px"
          bgcolor="white"
          p={4}
          borderRadius={2}
          display="flex"
          flexDirection="column"
          gap={1}
        >
          {/* Logo + Heading */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
          >
            <img src={Logo} alt="FINEbank.IO" style={{ height: 24 }} />
            <Typography variant="body1" fontWeight="bold">
              Create an account
            </Typography>
          </Box>

          {/* Input Fields */}
          <Box display="flex" flexDirection="column" gap={1}>
            <TextField
              label="Name"
              name="name"
              placeholder="John Doe"
              fullWidth
              variant="outlined"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <TextField
              label="Email Address"
              name="email"
              placeholder="johndoe@email.com"
              fullWidth
              variant="outlined"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <TextField
              label="Password"
              name="password"
              placeholder="Enter your password"
              fullWidth
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
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

            <Typography color="text.secondary" fontSize="12px">
              By continuing, you agree to our{' '}
              <Link underline="hover">terms of service</Link>.
            </Typography>

            <CustomButton
              text="Sign Up"
              color="primary.main"
              onClick={handleForm}
            />
          </Box>

          {/* Divider and Google Sign In */}
          <Box display="flex" alignItems="center" gap={2}>
            <Divider sx={{ flex: 1 }} />
            <Typography variant="body2" color="text.secondary">
              or sign up with
            </Typography>
            <Divider sx={{ flex: 1 }} />
          </Box>

          <CustomButton
            text="Continue with Google"
            icon={google}
            color="#E4E7EB"
            textColor="#4B5768"
            onClick={handleForm}
          />

          {/* Footer */}
          <Typography textAlign="center" fontSize="14px">
            Already have an account?{' '}
            <Link
              component={RouterLink}
              to="/login"
              underline="hover"
              color="primary.main"
            >
              Sign in here
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
