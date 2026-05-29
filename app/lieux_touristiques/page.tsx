
"use client"
import React, { useEffect, useState } from 'react'
import lieu from '@/app/monuments.json'

export default function TourPage() {

    const[ville, setVille] = useState('')

    const villefilter = lieu.filter(v=> v.nom.toLowerCase().includes(ville.toLowerCase()))
    
        useEffect(()=>{
        
            
            

    },[ville])
   

  return (
    <div>
        

        <input type="text"
        value={ville}
        onChange={(e)=>setVille(e.target.value)}
         className='w-40 border m-8'/>
         <p>Vous rechercher la ville de {ville}</p>
         {villefilter.map((l)=>(
            <p key={l.id}>{l.nom}</p>
         ))}
    </div>
  )
}
