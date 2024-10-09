"use client"

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import 'react-quill/dist/quill.snow.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (!token) {
      router.push('/login'); // Redirect to login page if token does not exist
    }
  }, [router]);

  return (
    <main>
      <div>
        {children}
      </div>
    </main>
  );
}
