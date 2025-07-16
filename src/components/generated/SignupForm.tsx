"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, AlertCircle, Check } from 'lucide-react';
interface SignupFormProps {
  onSignup?: (email: string, password: string) => void;
  mpid?: string;
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
  return <div className="text-center space-y-8 md:space-y-12" data-magicpath-id="0" data-magicpath-path="SignupForm.tsx">
      <div className="space-y-4 md:space-y-6" data-magicpath-id="1" data-magicpath-path="SignupForm.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-gray-900 rounded-full flex items-center justify-center" data-magicpath-id="2" data-magicpath-path="SignupForm.tsx">
          <span className="text-xl md:text-2xl font-light text-white" data-magicpath-id="3" data-magicpath-path="SignupForm.tsx">R</span>
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
      }} className="space-y-3 md:space-y-4 px-4" data-magicpath-id="4" data-magicpath-path="SignupForm.tsx">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight" data-magicpath-id="5" data-magicpath-path="SignupForm.tsx">
            Create Account
          </h1>
          <p className="text-base md:text-lg text-gray-500 max-w-lg mx-auto font-light leading-relaxed" data-magicpath-id="6" data-magicpath-path="SignupForm.tsx">
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
    }} className="max-w-sm mx-auto px-4" data-magicpath-id="7" data-magicpath-path="SignupForm.tsx">
        <form onSubmit={handleSubmit} className="space-y-6" data-magicpath-id="8" data-magicpath-path="SignupForm.tsx">
          {/* Email Field */}
          <div className="space-y-2" data-magicpath-id="9" data-magicpath-path="SignupForm.tsx">
            <div className="relative" data-magicpath-id="10" data-magicpath-path="SignupForm.tsx">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none" data-magicpath-id="11" data-magicpath-path="SignupForm.tsx">
                <Mail className="h-4 w-4 text-gray-400" data-magicpath-id="12" data-magicpath-path="SignupForm.tsx" />
              </div>
              <input type="email" value={email} onChange={handleEmailChange} onBlur={() => setEmailError(validateEmail(email))} placeholder="Email address" className={`w-full pl-11 pr-10 py-3 md:py-4 bg-white border rounded-2xl font-light text-sm md:text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent ${emailError ? 'border-red-300 bg-red-50' : isEmailValid ? 'border-green-300 bg-green-50' : 'border-gray-200 hover:border-gray-300'}`} data-magicpath-id="13" data-magicpath-path="SignupForm.tsx" />
              {isEmailValid && <div className="absolute inset-y-0 right-0 pr-4 flex items-center" data-magicpath-id="14" data-magicpath-path="SignupForm.tsx">
                  <Check className="h-4 w-4 text-green-500" data-magicpath-id="15" data-magicpath-path="SignupForm.tsx" />
                </div>}
              {emailError && <div className="absolute inset-y-0 right-0 pr-4 flex items-center" data-magicpath-id="16" data-magicpath-path="SignupForm.tsx">
                  <AlertCircle className="h-4 w-4 text-red-500" data-magicpath-id="17" data-magicpath-path="SignupForm.tsx" />
                </div>}
            </div>
            {emailError && <motion.p initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} className="text-xs text-red-600 font-light pl-1" data-magicpath-id="18" data-magicpath-path="SignupForm.tsx">
                {emailError}
              </motion.p>}
          </div>

          {/* Password Field */}
          <div className="space-y-2" data-magicpath-id="19" data-magicpath-path="SignupForm.tsx">
            <div className="relative" data-magicpath-id="20" data-magicpath-path="SignupForm.tsx">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none" data-magicpath-id="21" data-magicpath-path="SignupForm.tsx">
                <Lock className="h-4 w-4 text-gray-400" data-magicpath-id="22" data-magicpath-path="SignupForm.tsx" />
              </div>
              <input type={showPassword ? 'text' : 'password'} value={password} onChange={handlePasswordChange} onBlur={() => setPasswordError(validatePassword(password))} placeholder="Password" className={`w-full pl-11 pr-10 py-3 md:py-4 bg-white border rounded-2xl font-light text-sm md:text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent ${passwordError ? 'border-red-300 bg-red-50' : isPasswordValid ? 'border-green-300 bg-green-50' : 'border-gray-200 hover:border-gray-300'}`} data-magicpath-id="23" data-magicpath-path="SignupForm.tsx" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-4 flex items-center" data-magicpath-id="24" data-magicpath-path="SignupForm.tsx">
                {showPassword ? <EyeOff className="h-4 w-4 text-gray-400 hover:text-gray-600 transition-colors" data-magicpath-id="25" data-magicpath-path="SignupForm.tsx" /> : <Eye className="h-4 w-4 text-gray-400 hover:text-gray-600 transition-colors" data-magicpath-id="26" data-magicpath-path="SignupForm.tsx" />}
              </button>
            </div>
            {passwordError && <motion.p initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} className="text-xs text-red-600 font-light pl-1" data-magicpath-id="27" data-magicpath-path="SignupForm.tsx">
                {passwordError}
              </motion.p>}
            {password && !passwordError && <motion.p initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} className="text-xs text-green-600 font-light pl-1" data-magicpath-id="28" data-magicpath-path="SignupForm.tsx">
                Password looks good
              </motion.p>}
          </div>

          {/* Submit Button */}
          <motion.button type="submit" disabled={isSubmitting || !isEmailValid || !isPasswordValid} whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} className={`w-full py-3 md:py-4 rounded-2xl font-light text-sm md:text-base transition-all duration-200 ${isSubmitting || !isEmailValid || !isPasswordValid ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-900 text-white hover:bg-gray-800 shadow-sm hover:shadow-md'}`} data-magicpath-id="29" data-magicpath-path="SignupForm.tsx">
            {isSubmitting ? <div className="flex items-center justify-center space-x-2" data-magicpath-id="30" data-magicpath-path="SignupForm.tsx">
                <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" data-magicpath-id="31" data-magicpath-path="SignupForm.tsx" />
                <span data-magicpath-id="32" data-magicpath-path="SignupForm.tsx">Creating Account...</span>
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
      }} className="mt-6 pt-6 border-t border-gray-100" data-magicpath-id="33" data-magicpath-path="SignupForm.tsx">
          <p className="text-xs text-gray-500 font-light" data-magicpath-id="34" data-magicpath-path="SignupForm.tsx">
            Already have an account?{' '}
            <button className="text-gray-900 hover:text-gray-700 transition-colors font-normal" data-magicpath-id="35" data-magicpath-path="SignupForm.tsx">
              Sign in
            </button>
          </p>
        </motion.div>
      </motion.div>
    </div>;
};
export default SignupForm;