import { Navigate, Outlet } from 'react-router';
import { useAuth } from '@contexts/AuthContext';

  
export default function ProtectedRoute () {
    const { user } = useAuth();

    console.log(user);

    if (!user) {
        return <Navigate to="/auth/login" replace />;
    }

    return <Outlet />;
};