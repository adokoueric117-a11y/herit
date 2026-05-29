import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Im1 from '@/public/heritogo.png'
import { ChevronDown, ForkKnifeCrossed, Info, LocateFixed, Sparkles } from 'lucide-react'

export default function page() {

const NavLiens = [
  {id:1, label: 'Scan', lien: ''},
  {id:2, label: 'Sites', lien: ''},
  {id:3, label: '', lien: ''},
]

const Boutons = [
  {id:1, label: 'Scan monument', lien: 'scan/', icon: <Sparkles className='p-0.5 md:p-0'/>},
  {id:2, label: 'Patrimoine culinaire', lien: 'cuisine/', icon: <ForkKnifeCrossed className='p-0.5 md:p-0'/>},
  {id:3, label: 'Sites touristiques', lien: 'sites_touristiques/', icon: <LocateFixed className='p-0.5 md:p-0'/>},
]

const EtapesApp = [
  {
    id: 1,
    titre: "À propos d'HeriTogo",
    description: "Votre compagnon de voyage intelligent pour explorer, apprendre et préserver l'histoire, la culture et les traditions uniques du Togo.",
    icon: <Info className="w-6 h-6 text-green-600" />,
    isIntro: true // Permet de donner un style unique à la première carte
  },
  {
    id: 2,
    titre: "1. Scannez un Monument",
    description: "Prenez une photo d'un monument historique ou d'un vestige. Notre IA l'analyse instantanément pour vous raconter son histoire.",
    icon: <Sparkles className="w-6 h-6 text-yellow-500" />,
    isIntro: false
  },
  {
    id: 3,
    titre: "2. Savourez la Cuisine",
    description: "Découvrez l'origine, les ingrédients et les secrets de fabrication des plats traditionnels qui font la fierté de notre patrimoine culinaire.",
    icon: <ForkKnifeCrossed className="w-6 h-6 text-red-500" />,
    isIntro: false
  },
  {
    id: 4,
    titre: "3. Visitez les Sites",
    description: "Explorez la carte interactive pour localiser les sites touristiques incontournables et planifier votre prochain itinéraire de voyage.",
    icon: <LocateFixed className="w-6 h-6 text-blue-500" />,
    isIntro: false
  }
];


  return (
    <div>
      
      {/*Header */}
      <div className='flex items-center justify-center h-150 flex-col'>
        <h1 className='bg-linear-to-r from-green-500 via-yellow-500 to-red-500 bg-clip-text text-transparent text-6xl md:text-8xl font-black '>HERITOGO</h1>
        <p className='text-center text-xs md:text-[19.5px]'>Explorez la richesse du patrimoine togolais en un seul clic</p>
        <Image src={Im1} alt='hero' width={100} className='md:w-30'/>
        <span className='h-0.5 w-10 bg-black/25 rounded-full -my-2'></span>

        <div className='flex flex-col mt-10 gap-3 md:flex-row'>
          {Boutons.map((b)=>(
            <div key={b.id}>
              <Link href={b.lien}>
                <button className='bg-green-700 cursor-pointer font-semibold text-white py-2 px-4 rounded-4xl flex gap-2 hover:scale-105 transition-all duration-200 text-[15px] '>{b.label}{b.icon}</button>
              </Link>
            </div>
            
          ))}
        </div>

        <div className='mt-10'>
          <Link href={'#comment'}>
              <ChevronDown size={35} className='bg-yellow-500 rounded-full hover:scale-105 transition-all duration-200 cursor-pointer animate-bounce p-2'/>
          </Link>
        
        </div>
      </div>
      
      <section id='comment'>
        {/* Section Guide d'utilisation */}
<div className="max-w-6xl mx-auto px-4 py-16">
  <h2 className="text-center text-2xl md:text-3xl font-bold mb-10 text-gray-800">
    Comment ça marche ?
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {EtapesApp.map((etape) => (
      <div 
        key={etape.id} 
        className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
          etape.isIntro 
            ? 'bg-green-50 border-green-200 lg:col-span-1' 
            : 'bg-white border-gray-100 hover:-translate-y-1'
        }`}
      >
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
          etape.isIntro ? 'bg-green-100' : 'bg-gray-50'
        }`}>
          {etape.icon}
        </div>
        <h3 className={`text-lg font-bold mb-2 ${etape.isIntro ? 'text-green-900' : 'text-gray-800'}`}>
          {etape.titre}
        </h3>
        <p className={`text-sm leading-relaxed ${etape.isIntro ? 'text-green-800' : 'text-gray-600'}`}>
          {etape.description}
        </p>
      </div>
    ))}
  </div>
</div>
      </section>
    </div>
  )
}
