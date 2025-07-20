import { Box, Container, Grid, Typography, Paper, Button } from '@mui/material';
import GaugeChart1 from '../common/GaugeChart1';
import SavingSummary from '../common/SavingSummary';
import ExpensesGoals from '../common/ExpensesGoals';
import { Helmet } from 'react-helmet-async';
export default function Goals() {
  return (
    <>
      <Helmet>
        <title>FINEbank.IO || Goals</title>
      </Helmet>
      <Container maxWidth="xl" sx={{ py: 3, px: 1.5 }}>
        <Typography variant="h6" fontWeight={600} color="#878787" mb={2}>
          Goals
        </Typography>

        <Grid container spacing={2}>
          {/* Gauge Chart Section */}
          <Grid item xs={12} md={4}>
            <GaugeChart1 height="280px" />
          </Grid>

          <Grid item xs={12} md={8}>
            <Box height="280px">
              <SavingSummary />
            </Box>
          </Grid>
          <ExpensesGoals />
        </Grid>
      </Container>
    </>
  );
}
