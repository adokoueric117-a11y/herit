import React from 'react'
import Image from 'next/image'
// Importation du tableau et de son type d'interface depuis votre fichier de données
import SitesTour from '@/app/LieuxT/site' 
import Link from 'next/link'

export default function ToutPage() {


  return (
    <div className="container mx-auto my-10 px-4 mt-24">
      {/* Optionnel : Titre de la section pour une UI plus soignée face au jury */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-success sm:text-4xl tracking-tight">
          Sites Touristiques du Togo
        </h1>
        <p className="mt-2 text-lg text-base-content/70">
          Explorez les richesses culturelles et naturelles de notre patrimoine
        </p>
      </div>

      {/* Grid adaptative et bien espacée */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {SitesTour.map((site) => (
          <div 
            className="card bg-base-100 w-full max-w-xs shadow-xl border border-base-200 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between" 
            key={site.id}
          >
            {/* Conteneur d'image avec ratio fixe pour éviter les déformations et les avertissements de la console */}
            <figure className="relative w-full h-48 overflow-hidden rounded-t-xl">
              <Image 
                src={site.image} 
                alt={site.nom} 
                placeholder="blur" // Active l'effet de flou ultra-rapide au chargement (UX de fou pour le Hackathon)
                fill // Remplit automatiquement le conteneur parent
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              {/* Badge de la région posé discrètement sur l'image */}
              <div className="absolute top-3 right-3 badge badge-success text-white font-medium text-xs shadow">
                {site.région}
              </div>
            </figure>

            <div className="card-body p-5 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="card-title text-lg font-bold text-base-content line-clamp-1">
                  {site.nom}
                </h2>
                <p className="text-xs text-base-content/50 font-semibold mb-2">
                  📍 {site.localite}
                </p>
                <p className="text-sm text-base-content/70 line-clamp-3">
                  {site.description}
                </p>
              </div>

              <div className="card-actions justify-end mt-4 pt-3 border-t border-base-100">
                <Link href={`/lieux_touristiques/${site.id}`}>
                  <button className="btn btn-success btn-sm text-white px-4 hover:brightness-95 transition-all">
                  Découvrir
                </button>
                </Link>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}