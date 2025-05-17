import { useState } from 'react';
import { useNavigate } from 'react-router';
import AuthHeader from '@layouts/AuthHeader';
import TextInput from '@components/TextInput';
import Button from '@components/Button';
import ErrorMessage from '@components/ErrorMessage';
import { getCsrfCookie, login } from '@helpers/auth';  
import { useAuth } from '@contexts/AuthContext';

export default function LoginPage() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const authContext = useAuth();
  if (!authContext) {
    throw new Error('AuthContext is not available');
  }
  const { login: authLogin } = authContext;

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('clicked');
    e.preventDefault();
    //todo: check if this is the best place for this
    try {
      await getCsrfCookie();
      await login(email, password);
      authLogin({'email': email});
      navigate('/');
    } catch (error) {
      if (error instanceof Error){
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  return (
    <div>
      <AuthHeader title="Login"></AuthHeader>
      <form onSubmit={handleLogin}>
        {error && (
          <ErrorMessage error={error}></ErrorMessage>
        )}
        <div>
          <TextInput required label="Email" type="email" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}></TextInput>
          <TextInput required label="Password" type="password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}></TextInput>
        </div>
        <div className="mt-10">
          <Button type="submit" className="w-full">Login</Button>
        </div>
      </form>
    </div>
  );
}