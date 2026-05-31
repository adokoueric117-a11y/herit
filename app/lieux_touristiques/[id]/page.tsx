import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import SitesTour from '@/app/LieuxT/site' 

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default async function SiteDetailPage({ params }: PageProps) {

  const resolvedParams = await params

  // 2. On cherche le lieu qui possède l'id présent dans l'URL
  const site = SitesTour.find((m) => m.id === resolvedParams.id)

  // 3. Sécurité : si l'ID n'existe pas, on renvoie une 404 propre
  if (!site) {
    notFound()
  }

  return (
    <div className="container mx-auto my-10 px-4 mt-28 max-w-6xl">
      {/* Bouton Retour stylisé */}
      <Link href="/lieux_touristiques" className="btn btn-ghost btn-sm mb-6 inline-flex items-center gap-2">
        ← Retour aux sites
      </Link>

      {/* Conteneur principal : Disposition en deux colonnes sur grand écran (md:grid-cols-2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start bg-base-100 shadow-2xl rounded-3xl overflow-hidden border border-base-200 p-6 md:p-8">
        
        {/* COLONNE GAUCHE : L'Image du Site */}
        <div className="relative w-full h-75 sm:h-100 md:h-125 rounded-2xl overflow-hidden shadow-md group">
          <Image
            src={site.image}
            alt={site.nom}
            placeholder="blur" // Effet de flou progressif au chargement
            fill
            priority // Image critique, chargée en priorité
            className="object-cover transition-transform duration-700 group-hover:scale-102"
          />
          {/* Badge de la Région superposé sur l'image */}
          <div className="absolute top-4 left-4 badge badge-success text-white p-3 font-bold shadow-lg">
            Région {site.région}
          </div>
        </div>

        {/* COLONNE DROITE : Localisation, Nom et Histoire */}
        <div className="flex flex-col justify-between h-full space-y-6">
          <div>
            {/* Localisation / Badge de la localité */}
            <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-success tracking-wide uppercase">
              <span>📍 {site.localite}</span>
              <span className="text-base-content/30">•</span>
              <span className="text-base-content/60 lowercase font-normal italic">Togo</span>
            </div>

            {/* Nom du Site */}
            <h1 className="text-3xl md:text-4xl font-black text-base-content tracking-tight mt-2 mb-4">
              {site.nom}
            </h1>

            <div className="divider my-2"></div>

            {/* En bref / Description courte */}
            <div className="bg-base-200/50 rounded-xl p-4 border border-base-200 mb-6">
              <p className="text-base-content/80 text-sm leading-relaxed italic">
                {site.description}
              </p>
            </div>

            {/* Section Histoire détaillée */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-success flex items-center gap-2">
               Histoire & Patrimoine
              </h3>
              <p className="text-base-content/90 text-justify leading-relaxed text-base">
                {site.histoire}
              </p>
            </div>
          </div>

          {/* Pied de la carte : Coordonnées et bouton de guidage */}
          <div className="pt-6 border-t border-base-200 mt-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-xs text-base-content/50">
              Coordonnées GPS : <span className="font-mono bg-base-200 px-2 py-1 rounded">{site.lat.toFixed(4)}, {site.lng.toFixed(4)}</span>
            </div>
            
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${site.lat},${site.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success text-white btn-sm sm:btn-md w-full sm:w-auto shadow-md"
            >
              Y aller (GPS)
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}