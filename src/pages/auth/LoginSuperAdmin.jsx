import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginSuperAdmin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation simple
    if (email === "superadmin@educonnect.com" && password === "123456") {
      navigate("/dashboard-superadmin"); // redirection vers le dashboard
    } else {
      setError("Email ou mot de passe incorrect");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Connexion SuperAdmin</h2>

        {error && (
          <div className="mb-4 text-red-500 text-sm text-center">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
  <div>
    <label className="block text-gray-700">Email</label>
    <input
      type="email"
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="ex: superadmin@educonnect.com"
      className="w-full mt-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
    />
  </div>

  <div>
    <label className="block text-gray-700">Mot de passe</label>
    <input
      type="password"
      required
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Votre mot de passe"
      className="w-full mt-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
    />
    {/* Lien mot de passe oublié */}
    <div className="text-right text-sm text-blue-600 hover:underline cursor-pointer mt-1">
      Mot de passe oublié ?
    </div>
  </div>

  <button onClick={() => navigate("/Superadmin/dashboard-super")} className="bg-green-600 text-white py-3 px-6 rounded hover:bg-green-700 transition">
    Connexion
  </button>
</form>

      </div>
    </div>
  );
}
