import React, { useState } from "react";
import { signUp } from "../api/auth"; // Import signUp API call

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signUp(formData);
      setSuccessMessage(response.message);
      setError("");
    } catch (err) {
      setError(err.message || "Something went wrong");
      setSuccessMessage("");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex justify-center">
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
