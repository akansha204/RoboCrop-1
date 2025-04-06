import React from "react";
import { Outlet } from "react-router-dom";
import useAuthStore from "../contexts/store/authStore";
import { useEffect } from "react";

export default function App() {
  const { checkAuth, loading } = useAuthStore(); // Get Zustand actions/state
  useEffect(() => {
    const fetchAuth = async () => {
      await checkAuth();
    };
    fetchAuth();
  }, [checkAuth]);

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
