"use client"

import React, { useState } from 'react'
import Image from 'next/image'
// Importation du tableau depuis votre fichier de données
import SitesTour from '@/app/LieuxT/site' 
import Link from 'next/link'
import { Search } from 'lucide-react'

export default function ToutPage() {
  // 1. État pour stocker la saisie de l'utilisateur
  const [searchInput, setSearchInput] = useState('')

  // 2. Filtrage en temps réel à chaque changement de l'input
  const SitesReached = SitesTour.filter((site) => {
    // Sécurité au cas où un site n'aurait pas de nom renseigné
    if (!site.nom) return false;
    
    // Rendre la recherche insensible à la casse (majuscules/minuscules)
    return site.nom.toLowerCase().includes(searchInput.toLowerCase())
  })

  return (
    <div className="container mx-auto my-10 px-4 mt-24">

      {/* LA barre de recherche */}
      <div className='flex items-center justify-center p-4 mb-4'>
        <input 
          type="search" 
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder='Rechercher un site touristique...'
          className='border text-center rounded-l-2xl w-80 p-2 text-black bg-white focus:outline-success'
        />
        <div className='p-2 text-white bg-success rounded-r-2xl flex items-center justify-center h-full'>
          <Search size={24} />
        </div>
      </div>

      {/* Texte dynamique affiché en temps réel sous l'input */}
      {searchInput && (
        <p className="text-center text-sm italic text-base-content/70 mb-6">
          Vous cherchez : <strong className="text-success">{searchInput}</strong>
        </p>
      )}

      {/* Titre de la section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-success sm:text-4xl tracking-tight">
          Sites Touristiques du Togo
        </h1>
        <p className="mt-2 text-lg text-base-content/70">
          Explorez les richesses culturelles et naturelles de notre patrimoine
        </p>
      </div>

      {/* Affichage d'un message si aucun site ne correspond à la recherche */}
      {SitesReached.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-base-content/60">Aucun site touristique ne correspond à votre recherche.</p>
        </div>
      ) : (
        /* Grid adaptative */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {SitesReached.map((site) => (
            <div 
              className="card bg-base-100 w-full max-w-xs shadow-xl border border-base-200 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between" 
              key={site.id}
            >
              {/* Conteneur d'image */}
              <figure className="relative w-full h-48 overflow-hidden rounded-t-xl">
                <Image 
                  src={site.image} 
                  alt={site.nom} 
                  placeholder="blur" // Assurez-je que vos imports d'images statiques supportent le blur, sinon utilisez une String floue ou enlevez-le
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Badge de la région */}
                <div className="absolute top-3 right-3 badge badge-success text-white font-medium text-xs shadow">
                  {site.région}
                </div>
              </figure>

              <div className="card-body p-5 flex flex-col justify-between grow">
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
                    <span className="btn btn-success btn-sm text-white px-4 hover:brightness-95 transition-all inline-block text-center leading-8">
                      Découvrir
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
