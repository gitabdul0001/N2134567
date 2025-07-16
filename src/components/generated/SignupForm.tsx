"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, AlertCircle, Check } from 'lucide-react';
interface SignupFormProps {
  onSignup?: (email: string, password: string) => void;
}
const SignupForm: React.FC<SignupFormProps> = ({
  onSignup
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return 'Email is required';
    }
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };
  const validatePassword = (password: string) => {
    if (!password) {
      return 'Password is required';
    }
    if (password.length < 8) {
      return 'Password must be at least 8 characters';
    }
    return '';
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (emailError) {
      setEmailError(validateEmail(value));
    }
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (passwordError) {
      setPasswordError(validatePassword(value));
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    setEmailError(emailValidation);
    setPasswordError(passwordValidation);
    if (emailValidation || passwordValidation) {
      return;
    }
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    onSignup?.(email, password);
  };
  const isEmailValid = email && !emailError;
  const isPasswordValid = password && !passwordError;
  return <div className="text-center space-y-8 md:space-y-12">
      <div className="space-y-4 md:space-y-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full border-2 border-gray-200 flex items-center justify-center bg-white shadow-sm p-2">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 375 374.999991" preserveAspectRatio="xMidYMid meet" version="1.2">
            <defs>
              <clipPath id="7a447a7b48">
                <path d="M 109.125 181.933594 L 161.625 181.933594 L 161.625 234.433594 L 109.125 234.433594 Z M 109.125 181.933594 " />
              </clipPath>
              <clipPath id="69a4bb68e6">
                <path d="M 109.125 130.183594 L 161.625 130.183594 L 161.625 182.683594 L 109.125 182.683594 Z M 109.125 130.183594 " />
              </clipPath>
              <clipPath id="1346d79464">
                <path d="M 213.375 181.933594 L 265.875 181.933594 L 265.875 234.433594 L 213.375 234.433594 Z M 213.375 181.933594 " />
              </clipPath>
              <clipPath id="e0afa5629e">
                <path d="M 213.375 208.183594 C 213.375 201.21875 216.140625 194.542969 221.0625 189.621094 C 225.984375 184.699219 232.664062 181.933594 239.625 181.933594 C 246.585938 181.933594 253.265625 184.699219 258.1875 189.621094 C 263.109375 194.542969 265.875 201.21875 265.875 208.183594 C 265.875 215.144531 263.109375 221.820312 258.1875 226.742188 C 253.265625 231.667969 246.585938 234.433594 239.625 234.433594 C 232.664062 234.433594 225.984375 231.667969 221.0625 226.742188 C 216.140625 221.820312 213.375 215.144531 213.375 208.183594 Z M 213.375 208.183594 " />
              </clipPath>
              <clipPath id="7e559bee84">
                <path d="M 161.625 181.933594 L 214.125 181.933594 L 214.125 234.433594 L 161.625 234.433594 Z M 161.625 181.933594 " />
              </clipPath>
              <clipPath id="497bfb539c">
                <path d="M 109.125 69.617188 L 214.125 69.617188 L 214.125 122.117188 L 109.125 122.117188 Z M 109.125 69.617188 " />
              </clipPath>
              <clipPath id="14ca239f8c">
                <path d="M 214.125 95.867188 C 214.125 102.828125 211.359375 109.507812 206.4375 114.429688 C 201.515625 119.351562 194.835938 122.117188 187.875 122.117188 L 135.375 122.117188 C 128.414062 122.117188 121.734375 119.351562 116.8125 114.429688 C 111.890625 109.507812 109.125 102.828125 109.125 95.867188 C 109.125 88.90625 111.890625 82.230469 116.8125 77.304688 C 121.734375 72.382812 128.414062 69.617188 135.375 69.617188 L 187.875 69.617188 C 194.835938 69.617188 201.515625 72.382812 206.4375 77.304688 C 211.359375 82.230469 214.125 88.90625 214.125 95.867188 Z M 214.125 95.867188 " />
              </clipPath>
              <clipPath id="f1bf27afc0">
                <path d="M 213.375 69.617188 L 265.875 69.617188 L 265.875 122.117188 L 213.375 122.117188 Z M 213.375 69.617188 " />
              </clipPath>
              <clipPath id="8af721dc9c">
                <path d="M 213.375 121.367188 L 265.875 121.367188 L 265.875 173.867188 L 213.375 173.867188 Z M 213.375 121.367188 " />
              </clipPath>
              <clipPath id="ae7f69b539">
                <path d="M 213.375 181.933594 L 239.625 181.933594 L 239.625 234.433594 L 213.375 234.433594 Z M 213.375 181.933594 " />
              </clipPath>
              <clipPath id="f74768e930">
                <path d="M 132.058594 69.617188 L 214.125 69.617188 L 214.125 122.117188 L 132.058594 122.117188 Z M 132.058594 69.617188 " />
              </clipPath>
            </defs>
            <g>
              <rect x="0" width="375" y="0" height="374.999991" fill="#ffffff" fillOpacity="1" stroke="none" />
              <g clipRule="nonzero" clipPath="url(#7a447a7b48)">
                <path fill="#fc7557" fillOpacity="1" d="M 109.125 181.933594 L 161.625 181.933594 L 161.625 234.433594 L 109.125 234.433594 Z M 109.125 181.933594 " />
              </g>
              <g clipRule="nonzero" clipPath="url(#69a4bb68e6)">
                <path fill="#989cfc" fillOpacity="1" d="M 161.625 130.183594 C 132.628906 130.183594 109.125 153.6875 109.125 182.683594 L 161.625 182.683594 Z M 161.625 130.183594 " />
              </g>
              <g clipRule="nonzero" clipPath="url(#1346d79464)">
                <g clipRule="nonzero" clipPath="url(#e0afa5629e)">
                  <path fill="#f9c558" fillOpacity="1" d="M 213.375 234.433594 L 213.375 181.933594 L 265.875 181.933594 L 265.875 234.433594 Z M 213.375 234.433594 " />
                </g>
              </g>
              <g clipRule="nonzero" clipPath="url(#7e559bee84)">
                <path fill="#989cfc" fillOpacity="1" d="M 161.625 181.933594 C 161.625 210.925781 185.128906 234.433594 214.125 234.433594 L 214.125 181.933594 Z M 161.625 181.933594 " />
              </g>
              <g clipRule="nonzero" clipPath="url(#497bfb539c)">
                <g clipRule="nonzero" clipPath="url(#14ca239f8c)">
                  <path fill="#fc7557" fillOpacity="1" d="M 214.125 69.617188 L 214.125 122.117188 L 109.125 122.117188 L 109.125 69.617188 Z M 214.125 69.617188 " />
                </g>
              </g>
              <g clipRule="nonzero" clipPath="url(#f1bf27afc0)">
                <path fill="#989cfc" fillOpacity="1" d="M 265.875 122.117188 C 265.875 93.121094 242.371094 69.617188 213.375 69.617188 L 213.375 122.117188 Z M 265.875 122.117188 " />
              </g>
              <g clipRule="nonzero" clipPath="url(#8af721dc9c)">
                <path fill="#f9c558" fillOpacity="1" d="M 213.375 173.867188 C 242.371094 173.867188 265.875 150.363281 265.875 121.367188 L 213.375 121.367188 Z M 213.375 173.867188 " />
              </g>
              <g clipRule="nonzero" clipPath="url(#ae7f69b539)">
                <path fill="#fc7557" fillOpacity="1" d="M 213.375 234.433594 L 213.375 181.933594 L 239.625 181.933594 L 239.625 234.433594 Z M 213.375 234.433594 " />
              </g>
              <g clipRule="nonzero" clipPath="url(#f74768e930)">
                <path fill="#f9c558" fillOpacity="1" d="M 214.125 69.617188 L 214.125 122.117188 L 132.09375 122.117188 L 132.09375 69.617188 Z M 214.125 69.617188 " />
              </g>
            </g>
          </svg>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.1
      }} className="space-y-3 md:space-y-4 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight">
            Create Account
          </h1>
          <p className="text-base md:text-lg text-gray-500 max-w-lg mx-auto font-light leading-relaxed">
            Join Reaxo to start managing your social media presence with clean, powerful analytics.
          </p>
        </motion.div>
      </div>

      <motion.div initial={{
      opacity: 0,
      y: 30
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5,
      delay: 0.2
    }} className="max-w-sm mx-auto px-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-4 w-4 text-gray-400" />
              </div>
              <input type="email" value={email} onChange={handleEmailChange} onBlur={() => setEmailError(validateEmail(email))} placeholder="Email address" className={`w-full pl-11 pr-10 py-3 md:py-4 bg-white border rounded-2xl font-light text-sm md:text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent ${emailError ? 'border-red-300 bg-red-50' : isEmailValid ? 'border-green-300 bg-green-50' : 'border-gray-200 hover:border-gray-300'}`} />
              {isEmailValid && <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                  <Check className="h-4 w-4 text-green-500" />
                </div>}
              {emailError && <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                  <AlertCircle className="h-4 w-4 text-red-500" />
                </div>}
            </div>
            {emailError && <motion.p initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} className="text-xs text-red-600 font-light pl-1">
                {emailError}
              </motion.p>}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-4 w-4 text-gray-400" />
              </div>
              <input type={showPassword ? 'text' : 'password'} value={password} onChange={handlePasswordChange} onBlur={() => setPasswordError(validatePassword(password))} placeholder="Password" className={`w-full pl-11 pr-10 py-3 md:py-4 bg-white border rounded-2xl font-light text-sm md:text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent ${passwordError ? 'border-red-300 bg-red-50' : isPasswordValid ? 'border-green-300 bg-green-50' : 'border-gray-200 hover:border-gray-300'}`} />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-4 flex items-center">
                {showPassword ? <EyeOff className="h-4 w-4 text-gray-400 hover:text-gray-600 transition-colors" /> : <Eye className="h-4 w-4 text-gray-400 hover:text-gray-600 transition-colors" />}
              </button>
            </div>
            {passwordError && <motion.p initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} className="text-xs text-red-600 font-light pl-1">
                {passwordError}
              </motion.p>}
            {password && !passwordError && <motion.p initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} className="text-xs text-green-600 font-light pl-1">
                Password looks good
              </motion.p>}
          </div>

          {/* Submit Button */}
          <motion.button type="submit" disabled={isSubmitting || !isEmailValid || !isPasswordValid} whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} className={`w-full py-3 md:py-4 rounded-2xl font-light text-sm md:text-base transition-all duration-200 ${isSubmitting || !isEmailValid || !isPasswordValid ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-900 text-white hover:bg-gray-800 shadow-sm hover:shadow-md'}`}>
            {isSubmitting ? <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                <span>Creating Account...</span>
              </div> : 'Create Account'}
          </motion.button>
        </form>

        {/* Sign In Link */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.4
      }} className="mt-6 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-500 font-light">
            Already have an account?{' '}
            <button className="text-gray-900 hover:text-gray-700 transition-colors font-normal">
              Sign in
            </button>
          </p>
        </motion.div>
      </motion.div>
    </div>;
};
export default SignupForm;