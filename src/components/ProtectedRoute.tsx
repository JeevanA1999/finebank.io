import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Layout from '../common/Layout';

export default function ProtectedRoute() {
  const isAuthenticated = !!sessionStorage.getItem('token');
  const location = useLocation();

  return isAuthenticated ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}
