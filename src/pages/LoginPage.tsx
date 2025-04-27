import { useState } from 'react';
import { useNavigate } from 'react-router';
import AuthHeader from '@layouts/AuthHeader';
import TextInput from '@components/TextInput';
import Button from '@components/Button';
import { getCsrfCookie, login } from '@helpers/auth';  

export default function LoginPage() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    console.log('clicked');
    e.preventDefault();
    //todo: check if this is the best place for this
    try {
      await getCsrfCookie();
      const loginResponse = await login(email, password);

      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <AuthHeader title="Login"></AuthHeader>
      <form onSubmit={handleLogin}>
        {error && (
          <div className="rounded-md bg-red-50 border-red-400 border-1 border text-red-500 my-4 p-2">
            {error}
          </div>
        )}
        <div>
          <TextInput required label="Email" type="email" onChange={(e) => setEmail(e.target.value)}></TextInput>
          <TextInput required label="Password" type="password" onChange={(e) => setPassword(e.target.value)}></TextInput>
        </div>
        <div className="mt-10">
          <Button type="submit" className="w-full">Login</Button>
        </div>
      </form>
    </div>
  );
}