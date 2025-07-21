import React, { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import HomeIcon from '@mui/icons-material/Home';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MovieIcon from '@mui/icons-material/Movie';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppsIcon from '@mui/icons-material/Apps';

const categoryIcons = {
  Housing: (
    <HomeIcon sx={{ width: '24px', height: '24px', color: '#525256' }} />
  ),
  Food: (
    <FastfoodIcon sx={{ width: '24px', height: '24px', color: '#525256' }} />
  ),
  Transportation: (
    <DirectionsCarIcon
      sx={{ width: '24px', height: '24px', color: '#525256' }}
    />
  ),
  Entertainment: (
    <MovieIcon sx={{ width: '24px', height: '24px', color: '#525256' }} />
  ),
  Shopping: (
    <ShoppingCartIcon
      sx={{ width: '24px', height: '24px', color: '#525256' }}
    />
  ),
  Others: <AppsIcon sx={{ width: '24px', height: '24px', color: '#525256' }} />,
};

const initialGoals = {
  Housing: 250,
  Food: 250,
  Transportation: 250,
  Entertainment: 250,
  Shopping: 250,
  Others: 250,
};

export default function ExpensesGoals() {
  const [goals, setGoals] = useState(initialGoals);
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [newValue, setNewValue] = useState('');
  const [newCategory, setNewCategory] = useState('');

  const handleOpen = (category) => {
    setSelectedCategory(category);
    setNewValue(goals[category]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenAdd(false);
    setSelectedCategory('');
    setNewValue('');
    setNewCategory('');
  };

  const handleSave = () => {
    if (!selectedCategory || isNaN(newValue)) return;
    setGoals((prev) => ({
      ...prev,
      [selectedCategory]: parseFloat(newValue),
    }));
    handleClose();
  };

  const handleSaveAdd = () => {
    if (!newCategory || isNaN(newValue)) return;
    setGoals((prev) => ({
      ...prev,
      [newCategory]: parseFloat(newValue),
    }));
    handleClose();
  };

  return (
    <Grid item xs={12}>
      <Box>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="h6" fontWeight={600} color="#878787" mb={2}>
            Goals
          </Typography>
          <Button
            sx={{ width: '150px', height: '48px', borderRadius: '6px' }}
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setOpenAdd(true)}
          >
            Add Goals
          </Button>
        </Box>

        <Grid container spacing={2} mt={2}>
          {Object.keys(goals).map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category}>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  bgcolor: '#fff',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2,
                  height: '100%',
                }}
              >
                <Box
                  sx={{
                    bgcolor: '#D2D2D240',
                    width: 48,
                    height: 48,
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {categoryIcons[category] || (
                    <AppsIcon sx={{ color: '#525256' }} />
                  )}
                </Box>

                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  flexGrow={1}
                >
                  <Box>
                    <Typography fontSize={14} fontWeight={500}>
                      {category}
                    </Typography>
                    <Typography fontWeight={600} mb={1}>
                      ${goals[category].toFixed(2)}
                    </Typography>
                  </Box>

                  <Button
                    variant="outlined"
                    size="small"
                    endIcon={<EditIcon sx={{ fontSize: 16 }} />}
                    onClick={() => handleOpen(category)}
                    sx={{
                      width: '99px',
                      height: '36px',
                      alignSelf: 'flex-start',
                      borderRadius: '6px',
                    }}
                  >
                    Adjust
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Dialog: Add New Goal */}
        <Dialog
          open={openAdd}
          onClose={handleClose}
          PaperProps={{
            sx: {
              p: 3,
              borderRadius: '8px',
              minWidth: 300,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            },
          }}
        >
          <DialogTitle>Add New Goal</DialogTitle>
          <DialogContent sx={{ width: '100%', px: 0 }}>
            <TextField
              label="Category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Target Amount"
              type="number"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
              fullWidth
            />
          </DialogContent>
          <DialogActions sx={{ justifyContent: 'center', mt: 2 }}>
            <Button
              variant="contained"
              sx={{ width: 100, height: 40, borderRadius: '6px' }}
              onClick={handleSaveAdd}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>

        {/* Dialog: Adjust Existing Goal */}
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            sx: {
              p: 3,
              borderRadius: '8px',
              minWidth: 300,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            },
          }}
        >
          <DialogTitle>Adjust Goal - {selectedCategory}</DialogTitle>
          <DialogContent sx={{ width: '100%', px: 0 }}>
            <TextField
              label="Target Amount"
              type="number"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
              fullWidth
            />
          </DialogContent>
          <DialogActions sx={{ justifyContent: 'center', mt: 2 }}>
            <Button
              variant="contained"
              sx={{ width: 100, height: 40, borderRadius: '6px' }}
              onClick={handleSave}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Grid>
  );
}
