import React from "react";
import logo from "../../assets/logoo.png"; // adapte le chemin selon ton logo
import { useNavigate } from "react-router-dom";

export default function ChooseRole() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <img src={logo} alt="EDUCONNECT" className="h-16 mb-6" />
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Choisissez votre rôle</h2>
      <p className="text-gray-600 mb-8">Veuillez sélectionner votre rôle pour vous connecter à EDUCONNECT.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl mx-auto">
        <button onClick={() => navigate("/auth/login-superadmin")} className="bg-green-600 text-white py-3 px-6 rounded hover:bg-green-700 transition">
          🎯 Super Admin
        </button>
        <button onClick={() => navigate("/auth/adminlogin")} className="bg-green-600 text-white py-3 px-6 rounded hover:bg-green-700 transition">
          🎯 Admin Ecole
        </button>
        <button onClick={() => navigate("/auth/studentlogin")} className="bg-green-600 text-white py-3 px-6 rounded hover:bg-green-700 transition">
          👨‍🎓 Étudiant
        </button>
        <button onClick={() => navigate("/auth/proflogin")} className="bg-green-600 text-white py-3 px-6 rounded hover:bg-green-700 transition">
          👩‍🏫 Professeur
        </button>
      </div>
    </div>
  );
}
