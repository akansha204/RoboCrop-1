import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [RePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/SignIn");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!Name || !Email || !Password || !RePassword) {
      alert("Please fill in all fields.");
      return;
    }
    if (Password !== RePassword) {
      alert("Passwords do not match.");
      return;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      <div className="w-full md:w-1/2 flex justify-center items-center p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="font-bold text-3xl mb-6 text-center">
            Create Account
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="font-medium text-sm block mb-1 text-gray-700">
                Name
              </label>
              <input
                className="bg-white text-gray-600 p-3 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="Enter your name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="font-medium text-sm block mb-1 text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="bg-white text-gray-600 p-3 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="your.email@example.com"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="font-medium text-sm block mb-1 text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="bg-white text-gray-600 p-3 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="••••••••"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label className="font-medium text-sm block mb-1 text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                className="bg-white text-gray-600 p-3 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="••••••••"
                value={RePassword}
                onChange={(e) => setRePassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white font-medium text-sm w-full py-3 px-4 rounded-md hover:bg-blue-700 transition mt-4 flex justify-center items-center"
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <p className="text-sm mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <button
              type="button"
              className="text-blue-600 font-medium hover:underline focus:outline-none"
              onClick={handleButtonClick}
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
