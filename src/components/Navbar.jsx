// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">EduConnect</h1>
      <ul className="flex space-x-4">
        <li><a href="#" className="hover:underline">Accueil</a></li>
        <li><a href="#" className="hover:underline">Étudiants</a></li>
        <li><a href="#" className="hover:underline">Enseignants</a></li>
        <li><a href="#" className="hover:underline">Cours</a></li>
        <li><a href="#" className="hover:underline">Déconnexion</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
