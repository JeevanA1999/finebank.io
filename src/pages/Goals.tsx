import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Button,
  Link,
  Breadcrumbs,
} from '@mui/material';
import GaugeChart1 from '../common/GaugeChart1';
import SavingSummary from '../common/SavingSummary';
import ExpensesGoals from '../common/ExpensesGoals';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
export default function Goals() {
  return (
    <>
      <Helmet>
        <title>FINEbank.IO || Goals</title>
      </Helmet>
      <Container maxWidth="xl" sx={{ py: 1, px: 1.5 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" component={RouterLink} to="/">
            Dashboard
          </Link>
          <Typography variant="h6" fontWeight={600} color="#878787">
            Goals
          </Typography>
        </Breadcrumbs>

        <Grid container spacing={2} mt={1}>
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
