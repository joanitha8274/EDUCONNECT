import React from 'react';
import { Link } from 'react-router-dom';

const StudentLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#1a1a1a] px-4">
      <div className="w-full max-w-md bg-white dark:bg-[#222] p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Connexion Étudiant
        </h2>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1">
              ID Étudiant
            </label>
            <input
              type="text"
              placeholder="Ex : EDU-2024-0035"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-[#111] dark:text-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-[#111] dark:text-white"
            />
          </div>

          <div className="flex justify-between items-center mb-4">
            <Link
              to="/forgot-password-student"
              className="text-sm text-green-600 hover:underline"
            >
              Mot de passe oublié ?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;
