'use client';
import { Suspense } from 'react';
import PostFormClient from './PostformClient';

export default function PostFormPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PostFormClient />
    </Suspense>
  );
}

