// import PreviewClient from './PreviewClient';

// export default function PreviewPage() {
//   return <PreviewClient />;
// }




import { Suspense } from 'react';
import PreviewClient from './PreviewClient';

export default function PreviewPage() {
  return (
    <Suspense fallback={<div className="text-center pt-20">Loading preview...</div>}>
      <PreviewClient />
    </Suspense>
  );
}
