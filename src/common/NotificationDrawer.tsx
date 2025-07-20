// components/NotificationDrawer.tsx
import React from 'react';
import { Drawer, Box, Typography, IconButton, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function NotificationDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          width: 320,
          height: '100%',
          p: 2,
          bgcolor: 'black',
          color: 'white',
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography fontWeight={600} fontSize="18px">
            Notifications
          </Typography>
          <IconButton onClick={onClose} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ my: 2 }} />

        {/* Sample Notification Items */}
        <Box display="flex" flexDirection="column" gap={2} color="white">
          <Typography variant="body2">
            ✅ Your account has been updated successfully.
          </Typography>
          <Typography variant="body2">
            🔔 Reminder: Pay your electricity bill before 20th July.
          </Typography>
          <Typography variant="body2">
            📢 New feature added to your dashboard.
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
}
