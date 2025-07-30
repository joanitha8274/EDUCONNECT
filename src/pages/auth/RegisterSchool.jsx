import React, { useState } from "react";

export default function RegisterSchool() {
  const [formData, setFormData] = useState({
    schoolName: "",
    type: "",
    responsible: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    message: "",
    document: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu envoies les données vers ton backend
    console.log("Formulaire soumis :", formData);
    alert("Demande d'inscription envoyée !");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-green-600 mb-4 text-center">Demande d’inscription</h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Merci de remplir ce formulaire. Votre demande sera examinée et validée manuellement.
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <input type="text" name="schoolName" onChange={handleChange} required placeholder="Nom de l’école" className="input" />
          <select name="type" onChange={handleChange} required className="input">
            <option value="">Type d’établissement</option>
            <option value="Primaire">Primaire</option>
            <option value="Secondaire">Secondaire</option>
            <option value="Supérieur">Supérieur</option>
          </select>
          <input type="text" name="responsible" onChange={handleChange} required placeholder="Nom du responsable" className="input" />
          <input type="email" name="email" onChange={handleChange} required placeholder="Email de l’établissement" className="input" />
          <input type="tel" name="phone" onChange={handleChange} required placeholder="Téléphone" className="input" />
          <input type="text" name="address" onChange={handleChange} required placeholder="Adresse complète" className="input" />
          <input type="text" name="country" onChange={handleChange} required placeholder="Pays" className="input" />
          <textarea name="message" rows="4" onChange={handleChange} placeholder="Pourquoi EDUCONNECT ?" className="input" />
          
          <label className="text-gray-700 font-medium">Document officiel (PDF/image) *</label>
          <input type="file" name="document" onChange={handleChange} accept=".pdf,.jpg,.jpeg,.png" required className="file:border file:rounded file:py-1 file:px-3" />

          <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
            Envoyer la demande
          </button>
        </form>
      </div>
    </div>
  );
}
