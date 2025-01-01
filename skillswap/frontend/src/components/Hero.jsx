import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-center mb-4">Connect. Learn. Grow.</h1>
      <p className="text-center text-lg text-gray-700 max-w-2xl">
        Join our platform to connect with people who can help you learn new technologies and share your expertise with others.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded">Get Started</button>
    </section>
  );
};

export default Hero;
