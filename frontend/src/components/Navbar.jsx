import React from 'react';
import { Link } from 'react-router-dom';
import useAuthStore from '../contexts/store/authStore';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuthStore();

  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          RoboCrop
        </Link>
        
        <div className="flex space-x-4">
          {isAuthenticated ? (
            <>
              <span className="self-center">
                Welcome, {user?.firstName || 'User'}
              </span>
              <button 
                onClick={logout}
                className="bg-white text-green-600 px-4 py-2 rounded hover:bg-green-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link 
                to="/login" 
                className="hover:text-green-200"
              >
                Login
              </Link>
              <Link 
                to="/SignUp" 
                className="hover:text-green-200"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 