import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Im1 from '@/public/heritogo.png'
import { ChevronDown, ForkKnifeCrossed, Info, LocateFixed, Sparkles, ArrowRight } from 'lucide-react'

export default function Acceuilpage() {

  const Boutons = [
    { id: 1, label: 'Scan monument', lien: '/scan', icon: <Sparkles size={18} />, colorClass: 'btn-success' },
    { id: 2, label: 'Patrimoine culinaire', lien: '/cuisine', icon: <ForkKnifeCrossed size={18} />, colorClass: 'btn-error' },
    { id: 3, label: 'Sites touristiques', lien: '/lieux_touristiques', icon: <LocateFixed size={18} />, colorClass: 'btn-info' },
  ]

  const EtapesApp = [
    {
      id: 1,
      titre: "À propos d'HeriTogo",
      description: "Votre compagnon de voyage intelligent pour explorer, apprendre et préserver l'histoire, la culture et les traditions uniques du Togo.",
      icon: <Info className="w-6 h-6 text-success" />,
      badge: "Vision",
      cardStyle: "bg-success/10 border-success/30 text-success-content"
    },
    {
      id: 2,
      titre: "1. Scannez un Monument",
      description: "Prenez une photo d'un monument historique ou d'un vestige. Notre IA l'analyse instantanément pour vous raconter son histoire.",
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
      badge: "IA Vision",
      cardStyle: "bg-base-100 border-base-200"
    },
    {
      id: 3,
      titre: "2. Savourez la Cuisine",
      description: "Découvrez l'origine, les ingrédients et les secrets de fabrication des plats traditionnels qui font la fierté de notre patrimoine culinaire.",
      icon: <ForkKnifeCrossed className="w-6 h-6 text-error" />,
      badge: "Gastronomie",
      cardStyle: "bg-base-100 border-base-200"
    },
    {
      id: 4,
      titre: "3. Visitez les Sites",
      description: "Explorez la carte interactive pour localiser les sites touristiques incontournables et planifier votre prochain itinéraire de voyage.",
      icon: <LocateFixed className="w-6 h-6 text-info" />,
      badge: "Exploration",
      cardStyle: "bg-base-100 border-base-200"
    }
  ];

  return (
    <div className="bg-base-100 min-h-screen">
      
      {/* SECTION HERO (Composant natif DaisyUI) */}
      <div className="hero min-h-screen bg-base-200/50 relative overflow-hidden">
        {/* Cercles décoratifs en arrière-plan pour donner de la profondeur */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-success/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-error/10 rounded-full blur-3xl"></div>

        <div className="hero-content text-center flex-col z-10 max-w-4xl px-4">
          
          {/* Logo d'en-tête */}
          <div className="avatar mb-2 animate-fade-in">
            <div className="w-24 md:w-32 rounded-full ring ring-success ring-offset-base-100 ring-offset-2 bg-white p-2 shadow-lg">
              <Image src={Im1} alt='HeriTogo logo' priority />
            </div>
          </div>

          {/* Titre aux couleurs du drapeau Togolais */}
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-r from-[#006a4e] via-[#ffcc00] to-[#d21034] bg-clip-text text-transparent drop-shadow-sm select-none">
            HERITOGO
          </h1>
          
          <p className="py-2 text-base md:text-xl font-medium text-base-content/80 max-w-2xl">
            Explorez la richesse du patrimoine culturel et naturel togolais en un seul clic.
          </p>

          <div className="divider w-24 mx-auto my-1 opacity-40"></div>

          {/* GRILLE DE BOUTONS (Boutons DaisyUI modernes et tactiles) */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center mt-6 gap-4 w-full">
            {Boutons.map((b) => (
              <Link href={b.lien} key={b.id} className="w-full sm:w-auto">
                <button className={`btn ${b.colorClass} text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:px-6 gap-2 text-[15px]`}>
                  {b.icon}
                  {b.label}
                  <ArrowRight size={14} className="opacity-70 ml-1" />
                </button>
              </Link>
            ))}
          </div>

          {/* Bouton de défilement vers le bas */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <Link href="#comment">
              <button className="btn btn-circle btn-ghost bg-warning text-warning-content border-none shadow-md hover:scale-110 transition-all duration-200 animate-bounce">
                <ChevronDown size={24} />
              </button>
            </Link>
          </div>

        </div>
      </div>
      
      {/* SECTION COMMENT ÇA MARCHE */}
      <section id="comment" className="scroll-mt-10 bg-base-100">
        <div className="max-w-6xl mx-auto px-6 py-20">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-base-content mb-3">
              Comment ça marche ?
            </h2>
            <p className="text-base-content/60 max-w-md mx-auto text-sm md:text-base">
              Une technologie moderne au service de la culture togolaise.
            </p>
            <div className="w-16 h-1 bg-success mx-auto mt-4 rounded-full"></div>
          </div>
          
          {/* Grille de cartes adaptatives DaisyUI */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EtapesApp.map((etape) => (
              <div 
                key={etape.id} 
                className={`card compact border shadow-xs hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${etape.cardStyle}`}
              >
                <div className="card-body p-6 flex flex-col justify-between">
                  <div>
                    {/* Badge supérieur de catégorie */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-base-200/80 backdrop-blur-md rounded-2xl shadow-2xs">
                        {etape.icon}
                      </div>
                      <span className={`badge badge-sm font-bold ${
                        etape.id === 1 ? 'badge-success text-white' : 'badge-ghost text-base-content/75'
                      }`}>
                        {etape.badge}
                      </span>
                    </div>

                    <h3 className="card-title text-lg font-extrabold text-base-content tracking-tight mb-2">
                      {etape.titre}
                    </h3>
                    <p className="text-sm leading-relaxed text-base-content/70">
                      {etape.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}
