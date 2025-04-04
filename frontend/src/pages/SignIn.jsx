import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Email || !Password) {
      alert("Check Your username or Password again!!");
      return;
    }

    navigate("/Home");
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/SignUp");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-200">
      <div className="w-full md:w-1/2 flex justify-center items-center p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="font-bold text-3xl mb-6 text-center">Welcome Back</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="font-medium text-sm block mb-1 text-gray-700">
                Username or Email
              </label>
              <input
                className="bg-white text-gray-600 p-3 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="Enter your mail"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <h3 className="text-sm font-normal mr-auto mb-1">Password</h3>
              <input
                type="password"
                className="bg-white text-gray-600 p-3 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="••••••••"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="bg-blue-600 text-white font-medium text-sm w-full py-3 px-4 rounded-md hover:bg-blue-700 transition mt-4 flex justify-center items-center">
              Continue
            </button>

            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-4 text-sm text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Google login button */}
          </form>
          <button className="w-full border border-gray-300 flex items-center justify-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-100 transition-all mb-3 cursor-pointer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/09/IOS_Google_icon.png"
              alt="Google"
              className="w-5 h-5"
            />
            SIGN UP WITH GOOGLE
          </button>
          <p className="text-sm mt-3 text-center">
            Don't have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={handleButtonClick}
            >
              SignUp
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
