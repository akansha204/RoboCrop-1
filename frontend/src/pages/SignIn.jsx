import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../contexts/store/authStore';

const SignIn = () => {
    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login);
    const { googleLogin } = useAuthStore();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError({});

        try {
            const response = await login(email, password);

            if (!response.success) {
                setError({ general: response.message || "Login failed" });
                return;
            }
            
            setError({});
            console.log("✅ Login successful! Redirecting...");
            navigate("/Dashboard");
        } catch (error) {
            console.error("❌ Login Error:", error);
            setError({
                general: "Something went wrong. Please try again."
            });
        }
    };
    
    const handleSignUpClick = () => {
        navigate('/SignUp');
    };
    
    return (
        <div className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-green-200">
            <div className="w-full md:w-1/2 flex justify-center items-center p-6">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h1 className="font-bold text-3xl mb-6 text-center">
                        Welcome Back
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="font-medium text-sm block mb-1 text-gray-700">
                                Username or Email
                            </label>
                            <input
                                className="bg-white text-gray-600 p-3 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        
                        <div>
                            <label className="text-sm font-medium block mb-1 text-gray-700">Password</label>
                            <input
                                type="password"
                                className="bg-white text-gray-600 p-3 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {error.general && (
                            <div className="text-red-500 text-sm mt-1">
                                {error.general}
                            </div>
                        )}
                        
                        <button
                            type="submit"
                            className="bg-green-500 text-white font-medium text-sm w-full py-3 px-4 rounded-md hover:bg-green-600 transition mt-4 flex justify-center items-center"
                        >
                            Continue
                        </button>
                    </form>
                    
                    <div className="flex items-center my-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="px-4 text-sm text-gray-500">or</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                    
                    {/* Google login button */}
                    <button
                        onClick={googleLogin}
                        className="w-full border border-gray-300 flex items-center justify-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-100 transition-all mb-3 cursor-pointer"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                        </svg>
                        SIGN IN WITH GOOGLE
                    </button>
                    
                    <p className="text-sm mt-3 text-center">
                        Don't have an account?{" "}
                        <span
                            className="text-green-500 cursor-pointer"
                            onClick={handleSignUpClick}
                        >
                            Sign Up
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;