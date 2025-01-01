import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

const LandingPage = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowSignIn(false);
  };

  const handleSignInClick = () => {
    setShowSignUp(false);
    setShowSignIn(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white text-center py-12">
        <h1 className="text-5xl font-extrabold leading-tight mb-4">Welcome to Skill Swap</h1>
        <p className="text-lg mb-8">Connect with people who have opposite skills and learn together. Grow your skills by collaborating!</p>
        <div className="space-x-4">
          <button
            onClick={handleSignUpClick}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md text-lg font-semibold"
          >
            Join Now
          </button>
          <button
            onClick={handleSignInClick}
            className="bg-transparent text-white border-2 border-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold"
          >
            Sign In
          </button>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="text-center py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-6">How Skill Swap Works</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600">1. Define Your Skill</h3>
            <p className="mt-4 text-gray-600">Tell us what you are good at and what you want to learn.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600">2. Find Your Match</h3>
            <p className="mt-4 text-gray-600">We'll connect you with someone who has the skills you're looking for and vice versa.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600">3. Learn & Grow</h3>
            <p className="mt-4 text-gray-600">Collaborate, learn, and grow your skills through interaction and knowledge exchange.</p>
          </div>
        </div>
      </div>

      {/* Join the Community Section */}
      <div className="text-center py-12 bg-blue-600 text-white">
        <h2 className="text-3xl font-semibold mb-4">Ready to Swap Skills?</h2>
        <p className="mb-6 text-lg">Start by signing up or logging in to get connected with like-minded learners!</p>
        <div className="space-x-4">
          <button
            onClick={handleSignUpClick}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md text-lg font-semibold"
          >
            Sign Up
          </button>
          <button
            onClick={handleSignInClick}
            className="bg-transparent text-white border-2 border-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold"
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2025 Skill Swap. All rights reserved.</p>
      </footer>

      {/* Forms */}
      {showSignUp && <SignUpForm />}
      {showSignIn && <SignInForm />}
    </div>
  );
};

export default LandingPage;
