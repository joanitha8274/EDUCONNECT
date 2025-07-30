import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { FaHome, FaSchool, FaUsers, FaCog, FaSignOutAlt } from "react-icons/fa";

export default function DashboardSuperadmin() {
  const location = useLocation();

  const menuItems = [
    { label: "Accueil", icon: <FaHome />, path: "/superadmin" },
    { label: "Écoles", icon: <FaSchool />, path: "/superadmin/ecoles" },
    { label: "Utilisateurs", icon: <FaUsers />, path: "/superadmin/utilisateurs" },
    { label: "Paramètres", icon: <FaCog />, path: "/superadmin/settings" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-64 bg-green-700 text-white p-6 space-y-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">EDUCONNECT</h2>
        
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center space-x-3 py-2 px-3 rounded hover:bg-green-600 transition ${
              location.pathname === item.path ? "bg-green-600" : ""
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}

        <button className="flex items-center space-x-2 mt-10 text-sm text-white hover:underline">
          <FaSignOutAlt />
          <span>Se déconnecter</span>
        </button>
      </aside>

      {/* Content */}
      <div className="flex-1">
        {/* Topbar */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-green-700">Tableau de bord - SuperAdmin</h1>
          <div className="text-sm text-gray-600">Bienvenue, SuperAdmin</div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
