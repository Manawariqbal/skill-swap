import React, { useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const Navbar = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center p-5 bg-blue-600 text-white">
        <h1 className="text-2xl font-bold">LearnConnect</h1>
        <div className="space-x-4">
          <button
            onClick={() => setShowSignIn(true)}
            className="px-4 py-2 bg-white text-blue-600 rounded"
          >
            Sign In
          </button>
          <button
            onClick={() => setShowSignUp(true)}
            className="px-4 py-2 bg-white text-blue-600 rounded"
          >
            Sign Up
          </button>
        </div>
      </nav>
      {showSignIn && <SignInForm onClose={() => setShowSignIn(false)} />}
      {showSignUp && <SignUpForm onClose={() => setShowSignUp(false)} />}
    </>
  );
};

export default Navbar;
