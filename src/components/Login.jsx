import { useNavigate } from 'react-router-dom';
import React from 'react';


const Login = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/main');
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Bienvenue sur notre jeu!
        </h1>
        <button onClick={handleStart} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 transform hover:scale-105">
          Débuter
        </button>
      </div>
    </div>
  );
}

export default Login;