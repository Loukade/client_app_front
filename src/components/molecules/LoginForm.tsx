'use client'
import React, { useState } from 'react';
import InputField from '@/components/atoms/InputField';
import PasswordToggle from '@/components/atoms/PasswordToggle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authenticate } from '@/lib/actions';
import { useRouter } from "next/navigation";
import { StatusCodes } from "http-status-codes";
import { UserLoginInput } from "@generated/models/UserLoginInput";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [pending, setPending] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    try {
      const user: UserLoginInput = {
        username,
        password
      };
      /*const response = await authenticate(user);
      if (response?.statusCode === StatusCodes.NOT_FOUND) {
        showErrorToast(response.data);
      } else {
        router.push('/dashboard');
      }
      */
      router.push('/dashboard')
    } catch (error) {
      console.error("An error occurred while authenticating:", error);
      showErrorToast("An error occurred. Please try again later.");
    } finally {
      setPending(false);
    }
  };

  const showErrorToast = (error: string) => {
    toast.error(error, {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      style: {
        backgroundColor: 'red',
      },
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="relative">
          <InputField
            type="text"
            value={username}
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="relative">
          <InputField
            type={passwordVisible ? 'text' : 'password'}
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <PasswordToggle
            showPassword={passwordVisible}
            togglePassword={togglePasswordVisibility}
          />
        </div>
        <button
          type="submit"
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
            pending && 'opacity-50 cursor-not-allowed'
          }`}
          aria-disabled={pending}
        >
          {pending ? 'Logging in...' : 'Sign in'}
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default LoginForm;
