import React, { useState } from "react";

export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <div className="flex justify-between mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 py-2 font-semibold ${
              isLogin ? "text-green-600 border-b-2 border-green-600" : "text-gray-500"
            }`}
          >
            Connexion
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 py-2 font-semibold ${
              !isLogin ? "text-green-600 border-b-2 border-green-600" : "text-gray-500"
            }`}
          >
            Connexion (École)
          </button>
        </div>

        {isLogin ? (
          // Connexion (Étudiant / Professeur)
          <form>
            <h2 className="text-xl font-bold text-black-400 mb-4 text-center">C'est un réel plaisir de t'avoir à Bord</h2>
            <div className="mb-4">
              <label className="block text-sm">Nom Ecole</label>
              <input
                type="name"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="ex: ISPATEC"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="ex: prof@ecole.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm">ID Ecole</label>
              <input
                type="name"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="ex: 2025_0567_IS"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm">Mot de passe</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="********"
              /> 
              
              <br />
              
              <p>Pas de compte? Inscris toi par ton école</p>
            </div>
            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
              Se connecter
            </button>
          </form>
        ) : (
          // Inscription (École uniquement)
          <form>
            <h2 className="text-xl font-bold text-green-600 mb-4 text-center">Connexion École</h2>
            <div className="mb-4">
              <label className="block text-sm">Nom de l'école</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="ex: Lycée Moderne ABC"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="ex: admin@ecole.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm">Mot de passe</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="********"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm">Confirmation du mot de passe</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="********"
              />
            </div>
            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
              Se Connecter
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
