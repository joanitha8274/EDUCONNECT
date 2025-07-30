import React from "react";
import logo from "../assets/logoo.png";
import bgPattern from "../assets/Vectorpf.png";
import student from "../assets/student-hero.png";
import Slider from "react-slick";
import responsiveImage from "../assets/phone-removebg-preview.png";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-20 bg-white shadow-md">
  <div className="flex items-center space-x-3">
    <img src={logo} alt="EDUCONNECT" className="h-12 w-auto object-contain" />
    <h1 className="text-2xl font-bold text-green-900">EDUCONNECT</h1>
  </div>

  <nav className="space-x-8 hidden md:flex items-center">
    <a href="#" className="hover:text-green-600">Accueil</a>
    <a href="#" className="hover:text-green-600">Fonctionnalités</a>
    <a href="#" className="hover:text-green-600">Tarification</a>
    <a href="#" className="hover:text-green-600">À propos</a>
    <a
      href="/auth"
      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
    >
      Connexion
    </a>
    <a
      href="/auth/register-school"
      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
    >
      Inscrire ton Ecole
    </a>

    <div className="inline-block relative">
  <span className="mr-2">🌐</span>
  <select
    onChange={(e) => i18n.changeLanguage(e.target.value)}
    className="appearance-none bg-transparent text-sm focus:outline-none"
  >
    <option value="fr">Francais</option>
    <option value="en">English</option>
  </select>
</div>
  </nav>
</header>

      <section className="relative min-h-[90vh] overflow-hidden flex items-center px-10 bg-white">
  {/* Dégradé flou vert à gauche */}
  <div className="absolute left-0 top-0 h-full w-1/2 bg-green-200 blur-2xl opacity-70 z-0"></div>

  {/* Motif de fond en arrière-plan */}
  <div className="absolute inset-0 z-0">
    <img
      src={bgPattern}
      alt=""
      className="w-full h-full object-cover opacity-10"
    />
  </div>

  {/* Contenu principal */}
  <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between z-10">
    {/* Texte à gauche */}
    <div className="md:w-1/2 mb-10 md:mb-0 z-10">
      <h2 className="text-sm text-green-600 font-semibold mb-2">
       Avec EDUCONNECT
      </h2>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
        Gérez vos écoles <br /> comme un(e) pro !
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Centralisez la gestion des étudiants, enseignants et cours. Une solution tout-en-un pour établissements modernes.
      </p>
      <div className="flex space-x-4">
        <a
          href="/auth"
          className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Se connecter
        </a>
        <a
          href="/demo"
          className="px-6 py-3 border border-green-600 text-green-600 rounded hover:bg-green-50"
        >
          Voir une démo
        </a>
      </div>
    </div>

    {/* Image de l’étudiante à droite */}
    <div className="md:w-1/2 flex justify-center z-10">
      <img
        src={student}
        alt="Étudiante"
        className="w-[70%] max-w-md object-contain drop-shadow-xl"
      />
    </div>
  </div>
</section>

    {/* Section : Ils nous font confiance */}
<section className="py-10 bg-gray-10">
  <h3 className="text-2xl font-semibold text-center mb-10 text-gray-800">
    Ils ont misé sur notre expertise
  </h3>
  <div className="container mx-auto px-4">
    <Slider
      dots={false}
      infinite={true}
      speed={1000}
      autoplay={true}
      autoplaySpeed={2000}
      slidesToShow={3}
      slidesToScroll={1}
      responsive={[
        {
          breakpoint: 768,
          settings: { slidesToShow: 2 },
        },
        {
          breakpoint: 480,
          settings: { slidesToShow: 1 },
        },
      ]}
    >
      {[
        "Université Marie Saint Clair",
        "ISPATEC",
        "Havard",
        "Collège Digital",
        "Université BAZO",
        "OXFORD",
        "Institut Supérieur IAM",
        "TechnoLab",
        "Université IPSMART",
        "Institut Supérieur IAM",
        "Groupe Scolaire La Sagesse"
      ].map((school, index) => (
        <div key={index} className="flex justify-center items-center px-4">
          <div className="bg-white p-6 rounded shadow text-center w-full text-green-300 font-semibold text-lg">
            {school}
          </div>
        </div>
      ))}
    </Slider>
  </div>
</section>

<section className="py-16 px-6 bg-white">
  <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-gray-800">
    3 Raisons de nous choisir
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
    {/* Bloc 1 */}
    <div className="relative bg-white px-6 py-8 shadow-md rounded-lg border border-gray-200 ">
      {/* Coins verts */}
      {/* <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-green-500 rounded-tl-lg" /> */}
      <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-green-500 rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-green-500 rounded-bl-lg" />
      {/* <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-green-500 rounded-br-lg" /> */}

      <div className="text-green-600 text-3xl mb-4">🎧</div>
      <h4 className="text-xl font-semibold mb-2 text-gray-800">Support 24/7</h4>
      <p className="text-gray-600 text-sm">
        Une assistance continue pour toutes les écoles et administrateurs.
      </p>
    </div>

    {/* Bloc 2 */}
    <div className="relative bg-white px-6 py-8 shadow-md rounded-lg border border-gray-200">
      {/* <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-green-500 rounded-tl-lg" /> */}
      <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-green-500 rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-green-500 rounded-bl-lg" />
      {/* <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-green-500 rounded-br-lg" /> */}

      <div className="text-green-600 text-3xl mb-4">📘</div>
      <h4 className="text-xl font-semibold mb-2 text-gray-800">Formation simple</h4>
      <p className="text-gray-600 text-sm">
        Un guide clair pour utiliser chaque fonctionnalité sans complexité.
      </p>
    </div>

    {/* Bloc 3 */}
    <div className="relative bg-white px-6 py-8 shadow-md rounded-lg border border-gray-200">
      {/* <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-green-500 rounded-tl-lg" /> */}
      <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-green-500 rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-green-500 rounded-bl-lg" />
      {/* <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-green-500 rounded-br-lg" /> */}

      <div className="text-green-600 text-3xl mb-4">⚡</div>
      <h4 className="text-xl font-semibold mb-2 text-gray-800">Plateforme rapide</h4>
      <p className="text-gray-600 text-sm">
        Naviguez, gérez et visualisez vos données en quelques clics.
      </p>
    </div>
  </div>
</section>

<section className="py-16 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
    
    {/* Texte à gauche */}
    <div className="md:w-1/2 mb-10 md:mb-0">
      <h3 className="text-3xl font-bold text-gray-800 mb-4">
        Notre application est 100% responsive, où que vous soyez 🌍
      </h3>
      <p className="text-gray-700 text-lg">  
Elle s’adapte automatiquement à tous vos appareils : <br /> 
- Téléphone : interface fluide, facile à naviguer même sur petit écran <br /> 
- Tablette : affichage optimisé pour un confort visuel amélioré  <br />
- Ordinateur (PC) : mise en page étendue et intuitive pour une productivité maximale  
<br />
Peu importe l’appareil que vous utilisez, l’expérience reste cohérente, rapide et agréable !
      </p>
    </div>

    {/* Image à droite */}
    <div className="md:w-1/2 text-center">
      <img
  src={responsiveImage}
  alt="Aperçu responsive"
  className="w-full max-w-md mx-auto rounded-lg shadow-md"
/>

    </div>
  </div>
</section>


      {/* Fonctionnalités */}
      <section className="py-16 px-8">
        <h3 className="text-3xl font-semibold text-center mb-10">Pourquoi choisir EDUCONNECT ?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-white rounded shadow">
            <h4 className="font-bold mb-2"></h4>
            <p>Visualisez les progrès des élèves instantanément.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h4 className="font-bold mb-2">🧑‍🏫 Rôles séparés</h4>
            <p>Espace dédié pour chaque utilisateur : Admin, Prof, Élève.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h4 className="font-bold mb-2">📚 Gestion scolaire complète</h4>
            <p>Notes, bulletins, cours, absences, tout est automatisé.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h4 className="font-bold mb-2">🔐 Sécurité assurée</h4>
            <p>Connexion sécurisée et données protégées.</p>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-6 bg-gray-50 dark:bg-[#1a1a1a]">
  <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
    Temoignages
  </h3>
  <div className="grid md:grid-cols-3 gap-8">
    {[
      {
        name: "M. Diabaté",
        role: "Directeur, Groupe Scolaire Avenir",
        quote: "Grâce à EDUCONNECT, nous avons digitalisé notre école en 2 semaines !",
        image: "/images/diabate.jpg", // ajoute cette image dans public/images/
      },
      {
        name: "Mme Koulibaly",
        role: "Responsable pédagogique",
        quote: "Très intuitive et efficace. Une vraie révolution pour notre établissement.",
        image: "/images/koulibaly.jpg",
      },
      {
        name: "Y. Traoré",
        role: "Professeur",
        quote: "Enfin une plateforme simple pour saisir mes notes et suivre mes élèves.",
        image: "/images/traore.jpg",
      },
    ].map((item, i) => (
      <div key={i} className="bg-white dark:bg-[#222] p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-green-500"
          />
          <div>
            <p className="font-semibold text-gray-800 dark:text-white">{item.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{item.role}</p>
          </div>
        </div>
        <p className="italic text-gray-600 dark:text-gray-300">“{item.quote}”</p>
      </div>
    ))}
  </div>
</section>



      {/* Footer */}
      <footer className="bg-green-950 text-white py-12 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
    
    {/* Colonne 1 - EDUCONNECT Logo et description */}
    <div>
      <h1 className="text-2xl font-bold text-green-300 mb-4">EDUCONNECT</h1>
      <p className="text-sm text-gray-300">
        Notre plateforme assure une gestion scolaire moderne, centralisée et sécurisée. Transformez votre établissement dès aujourd’hui.
      </p>
      <div className="flex space-x-4 mt-4 text-xl text-white">
        <a href="#"><i className="fab fa-facebook-f" /></a>
        <a href="#"><i className="fab fa-instagram" /></a>
        <a href="#"><i className="fab fa-linkedin-in" /></a>
        <a href="#"><i className="fab fa-twitter" /></a>
      </div>
    </div>

    {/* Colonne 2 - Company */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Entreprise</h4>
      <ul className="space-y-2 text-sm text-gray-300">
        <li><a href="#">À propos</a></li>
        <li><a href="#">Nos services</a></li>
        <li><a href="#">Nos écoles</a></li>
        <li><a href="#">Blog & actualités</a></li>
      </ul>
    </div>

    {/* Colonne 3 - Liens */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Liens</h4>
      <ul className="space-y-2 text-sm text-gray-300">
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Témoignages</a></li>
        <li><a href="#">Travaux récents</a></li>
        <li><a href="#">Fonctionnalités</a></li>
      </ul>
    </div>

    {/* Colonne 4 - Contact */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Contact</h4>
      <ul className="space-y-3 text-sm text-gray-300">
        <li>📞 +223 77 00 00 00</li>
        <li>📧 contact@educonnect.com</li>
        <li>📍 Bamako, Mali</li>
      </ul>
    </div>
  </div>

  <div className="text-center text-gray-400 mt-10 text-sm border-t border-gray-700 pt-6">
    &copy; {new Date().getFullYear()} EDUCONNECT. Tous droits réservés.
  </div>
</footer>

    </div>
  );
}
