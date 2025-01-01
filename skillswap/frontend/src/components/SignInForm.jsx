import React, { useState } from 'react';
import axios from 'axios';

const SignInForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!email || !password) {
      setError('Both email and password are required');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    try {
      // Sending the data to the backend /signin route
      const response = await axios.post('http://localhost:5000/signin', {
        email,
        password,
      });

      // If successful, handle the response (store JWT token or redirect)
      console.log(response.data); // For example, save the token in localStorage
      alert('Sign In Successful');
      onClose();
    } catch (err) {
      // Handle error
      setError(err.response ? err.response.data.error : 'Error signing in');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        
        {/* Show error if any */}
        {error && <p className="text-red-500">{error}</p>}
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded disabled:bg-blue-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Signing In...' : 'Sign In'}
            </button>
          </div>

          {/* Cancel Button */}
          <div>
            <button
              type="button"
              onClick={onClose}
              className="w-full mt-2 bg-gray-200 p-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
