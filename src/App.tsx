import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import BalanceDetails from './pages/BalanceDetails';
import Overview from './pages/Overview';
import Balances from './pages/Balances';
import Transactions from './pages/Transactions';
import Bills from './pages/Bills';
import Expenses from './pages/Expenses';
import Goals from './pages/Goals';
import Settings from './pages/Settings';

function App() {
  return (
    <Box
      component="main"
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      // bgcolor="white"
    >
      {/* Public Routes */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Overview />} />
          <Route path="/balances" element={<Balances />} />
          <Route path="/balances/:id" element={<BalanceDetails />} />

          <Route path="/transactions" element={<Transactions />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
