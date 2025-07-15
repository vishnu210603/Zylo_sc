'use client';

import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/app/lib/firebase';

const ProfilePage = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Cover */}
      <div className="w-full h-48 bg-gradient-to-r from-[#73DFE7] via-[#0063F7] to-[#73DFE7] relative">
        {/* Profile Picture */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="w-24 h-24 rounded-full bg-white p-1 shadow-lg">
            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-[#0063F7]">
              {user?.displayName?.[0]?.toUpperCase() || 'U'}
            </div>
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="mt-20 w-full max-w-md bg-white rounded-xl shadow-md p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-900">{user?.displayName || 'User Name'}</h2>
        <p className="text-sm text-gray-600 mt-1">{user?.email || 'user@example.com'}</p>

        <div className="mt-6 space-y-4 text-left text-sm text-gray-700">
          <div className="flex justify-between">
            <span className="font-medium">Company:</span>
            <span>Acme Corp</span> {/* Replace dynamically if needed */}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Contact No.:</span>
            <span>+91-9876543210</span> {/* Replace dynamically if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
