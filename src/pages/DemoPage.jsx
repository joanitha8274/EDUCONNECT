import React from "react";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-green-600">Bienvenue dans la Démo EDUCONNECT</h1>
      <p className="mb-4">
        Ceci est une démonstration de l'interface utilisateur. Vous pouvez visualiser les
        fonctionnalités de la plateforme sans vous connecter.
      </p>

      <ul className="list-disc pl-5 mb-8">
        <li>✅ Gestion des étudiants et des professeurs</li>
        <li>✅ Suivi des absences et des notes</li>
        <li>✅ Planning et emploi du temps</li>
        <li>✅ Interface simple et rapide</li>
      </ul>

      <a href="/" className="text-green-600 underline hover:text-green-800">
        Retour à l’accueil
      </a>
    </div>
  );
}
