import React from "react";
import useAuthStore from "../contexts/store/authStore";
import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

export default function App() {
  const { checkAuth, loading, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchAuth = async () => {
      await checkAuth();
    };
    fetchAuth();
  }, [checkAuth]);

  useEffect(() => {
    // Handle authentication-based navigation
    if (!loading) {
      const publicPaths = ['/', '/SignUp', '/SignIn'];
      const isPublicPath = publicPaths.includes(location.pathname);

      if (isAuthenticated && isPublicPath) {
        navigate('/dashboard');
      } else if (!isAuthenticated && !isPublicPath) {
        navigate('/');
      }
    }
  }, [loading, isAuthenticated, location.pathname, navigate]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  return (
    <>
      <Outlet />
    </>
  );
}
