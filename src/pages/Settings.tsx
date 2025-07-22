import {
  Box,
  Button,
  Typography,
  Container,
  TextField,
  Avatar,
  Breadcrumbs,
  Link,
} from '@mui/material';
import { useState, useRef } from 'react';
import uploadprofile from '../assets/uploadprofile.svg';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
export default function Settings() {
  const [page, setPage] = useState('Account');
  const [isEditing, setIsEditing] = useState(false);
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: 'John David',
    email: 'John.david@email.com',
    username: 'John.David',
    phone: '+880 | 51547 58686',
    oldPassword: '',
    newPassword: '',
    retypePassword: '',
  });

  const handleViewChange = (tab) => {
    setPage(tab);
    setIsEditing(false); // reset editing when tab changes
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleEditToggle = () => {
    if (isEditing) {
      console.log('Save data:', formData); // You can submit here
    }
    setIsEditing((prev) => !prev);
  };

  return (
    <>
      <Helmet>
        <title>FINEbank.IO || Settings</title>
      </Helmet>
      <Container maxWidth="xl" sx={{ py: 1, px: 1.5 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" component={RouterLink} to="/">
            Dashboard
          </Link>

          <Typography variant="h6" fontWeight={600} color="#878787">
            Settings
          </Typography>
        </Breadcrumbs>
        <Box
          mt={1}
          bgcolor="white"
          width="100%"
          // maxHeight="750px"
          pt="24px"
          pb="48px"
          px="24px"
          gap="32px"
          display="flex"
          flexDirection="column"
          borderRadius="12px"
          boxShadow={1}
        >
          {/* Tabs */}
          <Box width="100%" height="56px" display="flex" gap={'32px'}>
            {['Account', 'Security'].map((tab) => (
              <Box
                key={tab}
                width="88px"
                height="56px"
                textAlign="center"
                fontSize="16px"
                alignContent="center"
                sx={{
                  borderBottom: page === tab ? '2px solid #00A76F' : 'none',
                }}
              >
                <Button
                  variant="text"
                  sx={{
                    fontWeight: 600,
                    fontFamily: 'Inter',
                    color: page === tab ? '#00A76F' : 'inherit',
                  }}
                  onClick={() => handleViewChange(tab)}
                >
                  {tab}
                </Button>
              </Box>
            ))}
          </Box>

          {/* Main Content */}
          <Box
            width="100%"
            height="100%"
            display="flex"
            sx={{ flexDirection: { xs: 'column-reverse', sm: 'row' } }}
            justifyContent="space-between"
          >
            {page === 'Account' ? (
              <>
                {/* Left: Account Info */}
                <Box display="flex" flexDirection="column" gap={3} flex={1}>
                  {isEditing ? (
                    <>
                      <TextField
                        label="Full name"
                        value={formData.fullName}
                        onChange={handleInputChange('fullName')}
                        fullWidth
                      />
                      <TextField
                        label="Email"
                        value={formData.email}
                        onChange={handleInputChange('email')}
                        fullWidth
                      />
                      <TextField
                        label="Username"
                        value={formData.username}
                        onChange={handleInputChange('username')}
                        fullWidth
                      />
                      <TextField
                        label="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange('phone')}
                        fullWidth
                      />
                    </>
                  ) : (
                    <>
                      <Typography
                        variant="subtitle2"
                        fontSize="16px"
                        fontWeight="600"
                      >
                        Full Name
                      </Typography>
                      <Typography color="#9F9F9F">
                        {formData.fullName}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        fontSize="16px"
                        fontWeight="600"
                      >
                        Email
                      </Typography>
                      <Typography color="#9F9F9F">{formData.email}</Typography>
                      <Typography
                        variant="subtitle2"
                        fontSize="16px"
                        fontWeight="600"
                      >
                        Username
                      </Typography>
                      <Typography color="#9F9F9F">
                        {formData.username}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        fontSize="16px"
                        fontWeight="600"
                      >
                        Phone Number
                      </Typography>
                      <Typography color="#9F9F9F">{formData.phone}</Typography>
                    </>
                  )}

                  <Button
                    variant="contained"
                    sx={{ width: 'fit-content', mt: 2 }}
                    onClick={handleEditToggle}
                  >
                    {isEditing ? 'Save' : 'Update Profile'}
                  </Button>
                </Box>

                {/* Right: Profile Picture */}
                <Box
                  flex="0 0 250px"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  gap={2}
                >
                  <Typography variant="body2">Your Profile Picture</Typography>

                  <Box
                    onClick={handleImageClick}
                    border="1px dashed #ccc"
                    width={120}
                    height={120}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="8px"
                    sx={{ cursor: 'pointer', overflow: 'hidden' }}
                  >
                    {image ? (
                      <img
                        src={image}
                        alt="Uploaded"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    ) : (
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        textAlign="center"
                      >
                        <Avatar
                          src={uploadprofile}
                          alt="Profile Picture"
                          sx={{ borderRadius: '6px' }}
                        />
                        <Typography fontSize="12px" color="text.secondary">
                          {isEditing ? 'Upload  your photo' : 'Your Photo'}
                        </Typography>
                      </Box>
                    )}
                  </Box>

                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                  />
                </Box>
              </>
            ) : (
              // Security Tab
              <Box display="flex" flexDirection="column" gap={3} width="50%">
                {isEditing ? (
                  <>
                    <TextField
                      label="Old Password"
                      type="password"
                      value={formData.oldPassword}
                      onChange={handleInputChange('oldPassword')}
                      fullWidth
                    />
                    <TextField
                      label="New Password"
                      type="password"
                      value={formData.newPassword}
                      onChange={handleInputChange('newPassword')}
                      fullWidth
                    />
                    <TextField
                      label="Retype Password"
                      type="password"
                      value={formData.retypePassword}
                      onChange={handleInputChange('retypePassword')}
                      fullWidth
                    />
                    <TextField
                      label="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange('phone')}
                      fullWidth
                    />
                  </>
                ) : (
                  <>
                    <Typography
                      variant="subtitle2"
                      fontSize="16px"
                      fontWeight="600"
                    >
                      Old Password
                    </Typography>
                    <Typography color="#9F9F9F">**********</Typography>
                    <Typography
                      variant="subtitle2"
                      fontSize="16px"
                      fontWeight="600"
                    >
                      New Password
                    </Typography>
                    <Typography color="#9F9F9F">**********</Typography>
                    <Typography
                      variant="subtitle2"
                      fontSize="16px"
                      fontWeight="600"
                    >
                      Retype Password
                    </Typography>
                    <Typography color="#9F9F9F">**********</Typography>

                    <Typography variant="subtitle2">Phone Number</Typography>
                    <Typography color="#9F9F9F">{formData.phone}</Typography>
                  </>
                )}

                <Button
                  variant="contained"
                  sx={{ width: 'fit-content', mt: 2 }}
                  onClick={handleEditToggle}
                >
                  {isEditing ? 'Save' : 'Update Password'}
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </>
  );
}
