import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Heritogo</a>
  </div>
  <div className="flex-1">
    <ul className="menu menu-horizontal px-1 items-center gap-4">
      <Link href={''}>Découvrir</Link>
      <li>
        <details>
          <summary>Menu</summary>
          <ul className="bg-base-100 rounded-t-none p-2 flex flex-col">
            <Link href={''}>Scan</Link>
            <Link href={''}>Sites touristiques</Link>
            <Link href={''}>Cuisine</Link>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
        </nav>
    </div>
  )
}
