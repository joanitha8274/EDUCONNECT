// SuperadminDashboard.jsx
import React from "react";
import SidebarSuperadmin from "./SidebarSuperadmin";
import TopbarSuperadmin from "./TopbarSuperadmin";

export default function SuperadminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SidebarSuperadmin />

      {/* Content */}
      <div className="flex-1">
        {/* Topbar */}
        <TopbarSuperadmin />

        {/* Dashboard Content */}
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-6 text-green-800">Tableau de bord Superadmin</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Écoles</h3>
              <p className="text-3xl font-bold text-green-600">15</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Étudiants</h3>
              <p className="text-3xl font-bold text-green-600">1240</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Enseignants</h3>
              <p className="text-3xl font-bold text-green-600">95</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Admins d’école</h3>
              <p className="text-3xl font-bold text-green-600">12</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
