import { Suspense } from 'react';
import DesignsClient from './DesignClient';

export default function DesignsPage() {
  return (
    <Suspense fallback={<div className="text-center pt-20">Loading...</div>}>
      <DesignsClient />
    </Suspense>
  );
}
