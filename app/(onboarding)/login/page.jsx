"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLoginUser } from '@/hooks/user.hook';
import Image from 'next/image';
import { Link } from 'lucide-react';

const Login = () => {
  const { login, data, loading, error } = useLoginUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (data?.success) {
      console.log('Login data:', data); // Debugging
      if (data.data?.token) {
        localStorage.setItem('userToken', data.data.token);
        router.push('/admin');
      }
    }
  }, [data, router]);

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem('userToken');
    if (token) {
      // Redirect to admin dashboard if token exists
      router.push('/admin');
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email,
      password,
    };

    await login(payload);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <Image src="/logo.png" alt="Logo" className="w-16 h-16" width={16} height={16} />
        </div>
        <h2 className="text-2xl font-semibold text-center text-gray-800">Login</h2>
        <p className="text-center text-gray-500 mb-8">Enter your credentials to login</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}

          <div className="text-center mt-4">
            <a href="/forgot-password" className="text-sm text-gray-500 hover:underline">
              Forgotten Password?
            </a>
            {/* <span className="mx-2">|</span>
            <a href="" className="text-sm text-green-600 hover:underline">
              Reset
            </a> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;