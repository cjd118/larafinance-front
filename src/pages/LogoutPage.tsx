import { useEffect } from 'react';
import AuthHeader from '@layouts/AuthHeader';
import { logout } from '@helpers/auth';  

export default function LogoutPage() {

  const handleLogout = async () => {
    await logout(); 
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