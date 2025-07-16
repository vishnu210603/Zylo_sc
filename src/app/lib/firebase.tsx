// // src/app/lib/firebase.ts (or lib/firebase.ts)
// import { initializeApp, getApps, getApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDE4bBs-7E3_wy8jiRTJ8mNjug09aCOdEY",
//   authDomain: "zylo-ai-65394.firebaseapp.com",
//   projectId: "zylo-ai-65394",
//   storageBucket: "zylo-ai-65394.appspot.com", // ← FIXED: corrected storage bucket domain
//   messagingSenderId: "762176036145",
//   appId: "1:762176036145:web:ab59218c750d79e34d2410",
//   measurementId: "G-4RFG4VQ3X6"
// };

// // Prevent reinitializing in hot-reload
// const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// // Export Firebase Auth instance
// export const auth = getAuth(app);




import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID!,
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
