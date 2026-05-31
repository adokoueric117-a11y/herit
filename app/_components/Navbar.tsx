import Link from 'next/link'
import React from 'react'
import { Sparkles, ForkKnifeCrossed, LocateFixed, Compass, Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-base-100/90 shadow-md transition-all duration-300">
      <nav className="navbar max-w-7xl mx-auto px-4">
        
        {/* LOGO / NOM DE L'APPLICATION */}
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl font-black tracking-tight text-success gap-1 hover:bg-transparent">
             <span className="bg-linear-to-r from-success via-warning to-error bg-clip-text text-transparent">HeriTogo</span>
          </Link>
        </div>

        {/* MENU DE NAVIGATION */}
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 items-center gap-2 font-semibold text-sm">
            
            {/* Lien direct : Découvrir ( visible sur les écrans normaux ) */}
            <li className="hidden sm:inline-block">
              <Link href="/" className="flex items-center gap-1.5 hover:text-success active:bg-success/20">
                <Compass size={16} />
                Découvrir
              </Link>
            </li>

            {/* MENU DÉROULANT (DROPDOWN) */}
            <li>
              <details className="dropdown dropdown-end">
                {/* Bouton déclencheur du menu */}
                <summary className="btn btn-ghost btn-sm sm:btn-md rounded-xl flex items-center gap-1 hover:bg-base-200">
                  <Menu size={18} className="sm:hidden" />
                  <span className="hidden sm:inline">Explorer</span>
                </summary>
                
                {/* Contenu du menu déroulant */}
                <ul className="menu dropdown-content bg-base-100 rounded-2xl z-50 mt-2 w-56 p-2 shadow-xl border border-base-200 animate-fade-in">
                  
                  {/* Option Découvrir répétée pour le mobile uniquement */}
                  <li className="sm:hidden mb-1">
                    <Link href="/" className="flex items-center gap-3 py-2.5 text-base-content/80">
                      <Compass size={18} className="text-primary" />
                      Découvrir
                    </Link>
                  </li>

                  <div className="divider my-0 sm:hidden"></div>

                  <li>
                    <Link href="/scan" className="flex items-center gap-3 py-2.5 hover:text-success hover:bg-success/10 rounded-xl transition-colors">
                      <Sparkles size={18} className="text-success" />
                      <div>
                        <p className="font-bold text-sm">Scan Monument</p>
                        <p className="text-[11px] text-base-content/50 font-normal">Identifier via notre IA</p>
                      </div>
                    </Link>
                  </li>

                  <li>
                    <Link href="/lieux_touristiques" className="flex items-center gap-3 py-2.5 hover:text-info hover:bg-info/10 rounded-xl transition-colors">
                      <LocateFixed size={18} className="text-info" />
                      <div>
                        <p className="font-bold text-sm">Sites touristiques</p>
                        <p className="text-[11px] text-base-content/50 font-normal">Patrimoine & Nature</p>
                      </div>
                    </Link>
                  </li>

                  <li>
                    <Link href="/cuisine" className="flex items-center gap-3 py-2.5 hover:text-error hover:bg-error/10 rounded-xl transition-colors">
                      <ForkKnifeCrossed size={18} className="text-error" />
                      <div>
                        <p className="font-bold text-sm">Patrimoine culinaire</p>
                        <p className="text-[11px] text-base-content/50 font-normal">Saveurs du Togo</p>
                      </div>
                    </Link>
                  </li>

                </ul>
              </details>
            </li>

          </ul>
        </div>

      </nav>
    </div>
  )
}
