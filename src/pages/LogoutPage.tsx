import { useEffect } from 'react';
import AuthHeader from '@layouts/AuthHeader';
import { logout } from '@helpers/auth';  
import { useAuth } from '@contexts/AuthContext';


export default function LogoutPage() {

  const { logout: authLogout } = useAuth();

  const handleLogout = async () => {
    await logout(); 
    authLogout();
  }

  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <div>
      <AuthHeader title="Logout"></AuthHeader>
      <div>
          <p>You're now logged out. </p>
        </div>
    </div>
  );
}