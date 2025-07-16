'use client';
export const dynamic = 'force-dynamic';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '@/app/lib/firebase';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

declare global {
  interface Window {
    recaptchaVerifier?: RecaptchaVerifier;
    confirmationResult?: any;
  }
}

export default function LoginClient() {
  const router = useRouter();
  const [redirect, setRedirect] = useState('/');

  const [isLogin, setIsLogin] = useState(true);
  const [isResetting, setIsResetting] = useState(false);
  const [usePhone, setUsePhone] = useState(false);

  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState<any>(null);

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [resendTimer, setResendTimer] = useState(0);
  const [resendDisabled, setResendDisabled] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redir = params.get('redirect') || '/';
    setRedirect(redir);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) router.replace(redirect);
    });
    return () => unsubscribe();
  }, [router, redirect]);

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: () => {},
      });
    }
  };

  const startResendCooldown = () => {
    let counter = 30;
    setResendDisabled(true);
    setResendTimer(counter);

    const interval = setInterval(() => {
      counter--;
      setResendTimer(counter);
      if (counter === 0) {
        clearInterval(interval);
        setResendDisabled(false);
      }
    }, 1000);
  };

  const handleSendOTP = async () => {
    setErrorMessage('');
    if (!phone.startsWith('+')) {
      setErrorMessage('Include country code (e.g. +91)');
      return;
    }

    setLoading(true);
    try {
      setupRecaptcha();
      const result = await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier!);
      setConfirmationResult(result);
      startResendCooldown();
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    setLoading(true);
    try {
      await confirmationResult.confirm(otp);
      router.replace(redirect);
    } catch (err: any) {
      setErrorMessage('Invalid OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    try {
      if (!isLogin) {
        if (!agreeTerms) {
          setErrorMessage('Please agree to the terms and conditions.');
          return;
        }
        if (password !== confirmPassword) {
          setErrorMessage('Passwords do not match.');
          return;
        }
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: fullName });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      router.replace(redirect);
    } catch (err: any) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    if (!email) {
      setErrorMessage('Please enter your email address.');
      return;
    }
    setResetLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
    } catch (err: any) {
      setErrorMessage(err.message);
    } finally {
      setResetLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.replace(redirect);
    } catch (err: any) {
      setErrorMessage(err.message);
    } finally {
      setGoogleLoading(false);
    }
  };

  const toggleAuthMode = (login: boolean) => {
    setIsLogin(login);
    setIsResetting(false);
    setErrorMessage('');
    setUsePhone(false);
    setOtp('');
    setPhone('');
    setConfirmationResult(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0f2ff] to-[#f5f7ff] px-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-extrabold text-center text-[#4F82FF] mb-6">
          {isResetting ? 'Reset Password' : isLogin ? 'Sign In to Zylo' : 'Register for Zylo'}
        </h2>

        {errorMessage && <p className="text-red-600 text-center mb-4">{errorMessage}</p>}

        {isResetting ? (
          resetSent ? (
            <>
              <p className="text-green-600 text-center mb-4">
                A password reset link has been sent to your email.
              </p>
              <p className="text-center text-sm mt-4">
                <button onClick={() => setIsResetting(false)} className="text-[#4F82FF] hover:underline">
                  Back to Sign In
                </button>
              </p>
            </>
          ) : (
            <>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg mb-4 text-black placeholder-gray-500"
              />
              <button
                onClick={handlePasswordReset}
                disabled={resetLoading}
                className="w-full py-2 text-white rounded-lg bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF]"
              >
                {resetLoading ? 'Sending...' : 'Send Reset Link'}
              </button>
              <p className="text-center text-sm mt-4">
                <button onClick={() => setIsResetting(false)} className="text-[#4F82FF] hover:underline">
                  Back to Sign In
                </button>
              </p>
            </>
          )
        ) : usePhone ? (
          confirmationResult ? (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg mb-4 text-black placeholder-gray-500"
              />
              <button
                onClick={handleVerifyOTP}
                disabled={loading}
                className="w-full py-2 text-white rounded-lg bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF]"
              >
                {loading ? 'Verifying...' : 'Verify OTP'}
              </button>
              <p className="text-center text-black text-sm mt-2">
                Didn't receive the code?{' '}
                <button
                  onClick={handleSendOTP}
                  disabled={resendDisabled}
                  className={`hover:underline ${
                    resendDisabled ? 'opacity-50 cursor-not-allowed text-black' : 'text-[#4F82FF]'
                  }`}
                >
                  {resendDisabled ? `Resend in ${resendTimer}s` : 'Resend code'}
                </button>
              </p>
            </>
          ) : (
            <>
              <PhoneInput
                country={'in'}
                value={phone}
                onChange={(value) => setPhone('+' + value)}
                inputStyle={{
                  width: '100%',
                  height: '42px',
                  color: 'black',
                }}
                placeholder="Phone number"
                containerStyle={{ marginBottom: '1rem' }}
                dropdownStyle={{ zIndex: 9999 }}
                enableSearch
              />
              <div id="recaptcha-container" />
              <button
                onClick={handleSendOTP}
                disabled={loading}
                className="w-full py-2 text-white rounded-lg bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF]"
              >
                {loading ? 'Sending OTP...' : 'Send OTP'}
              </button>
              <p className="text-center text-sm mt-4">
                <button onClick={() => setUsePhone(false)} className="text-[#4F82FF] hover:underline">
                  Use Email instead
                </button>
              </p>
            </>
          )
        ) : (
          <>
            <form onSubmit={handleAuth} className="space-y-4">
              {!isLogin && (
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg text-black placeholder-gray-500"
                />
              )}
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg text-black placeholder-gray-500"
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg text-black placeholder-gray-500"
              />
              {!isLogin && (
                <>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg text-black placeholder-gray-500"
                  />
                  <label className="flex items-center text-sm space-x-2 text-black">
                    <input
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                    />
                    <span>
                      I agree to the{' '}
                      <a href="#" className="text-[#4F82FF] underline">
                        Terms & Conditions
                      </a>
                    </span>
                  </label>
                </>
              )}
              {isLogin && (
                <p className="text-right text-sm">
                  <button
                    type="button"
                    onClick={() => setIsResetting(true)}
                    className="text-[#4F82FF] hover:underline"
                  >
                    Forgot Password?
                  </button>
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 text-white rounded-lg bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF]"
              >
                {loading ? 'Please wait...' : isLogin ? 'Sign In' : 'Register'}
              </button>
            </form>

            <div className="my-4 flex items-center justify-center text-gray-400 text-sm">
              <div className="w-full border-t border-gray-300" />
              <span className="mx-2">or</span>
              <div className="w-full border-t border-gray-300" />
            </div>

            <button
              onClick={handleGoogleLogin}
              disabled={googleLoading}
              className="w-full py-2 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50 text-black"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-5 w-5"
              />
              <span>{googleLoading ? 'Signing in...' : 'Continue with Google'}</span>
            </button>

            <button
              onClick={() => setUsePhone(true)}
              className="mt-4 w-full text-center text-sm text-[#4F82FF] hover:underline"
            >
              Use Phone Number instead
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
              <button
                onClick={() => toggleAuthMode(!isLogin)}
                className="text-[#4F82FF] font-medium hover:underline"
              >
                {isLogin ? 'Register' : 'Sign In'}
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
