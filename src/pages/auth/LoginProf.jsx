import React from "react";
import { Link } from "react-router-dom";

const LoginProf = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-[#1a1a1a] px-4">
      <div className="bg-white dark:bg-[#222] shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Connexion Professeur
        </h2>

        <form>
          {/* ID de l’école */}
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              ID professeur (fourni par l’école)
            </label>
            <input
              type="text"
              placeholder="ex: PROF2025001"
              className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-[#333] text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Mot de passe */}
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Mot de passe
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-[#333] text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Lien mot de passe oublié */}
          <div className="text-right mb-4">
            <Link to="/auth/forgot-password-prof" className="text-sm text-green-600 hover:underline">
              Mot de passe oublié ?
            </Link>
          </div>

          {/* Bouton de connexion */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginProf;
