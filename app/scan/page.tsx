'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Camera, Upload, Sparkles, Loader2, Volume2, VolumeX } from 'lucide-react';

export default function ScanPage() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // États pour la synthèse vocale (TTS)
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [selectedLang, setSelectedLang] = useState<string>('fr-FR');

  // Stopper l'audio si l'utilisateur quitte la page ou change de monument
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, [result]);

  // Gérer la sélection du fichier (Caméra ou Galerie)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResult(null); // Réinitialise le résultat précédent
      window.speechSynthesis.cancel(); // Arrête la lecture en cours
      setIsSpeaking(false);
    }
  };

  // Envoyer l'image à notre API Next.js
  const handleScan = async () => {
    if (!image) return;
    setLoading(true);
    setResult(null);

    const formData = new FormData();
    formData.append('image', image);

    try {
      const res = await fetch('/api/scan', {
        method: 'POST',
        body: formData,
      });
      
      const data = await res.json();
      if (res.ok) {
        setResult(data);
      } else {
        alert(data.error || "Une erreur est survenue lors de l'analyse.");
      }
    } catch (err) {
      console.error(err);
      alert("Impossible de joindre le serveur.");
    } finally {
      setLoading(false);
    }
  };

  // Gérer la lecture vocale (TTS)
  const toggleSpeech = () => {
    if (!result || !result.data || !result.data.histoire) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      window.speechSynthesis.cancel(); // Sécurité : annule les anciennes lectures

      const texteALire = `${result.data.monument}. ${result.data.histoire}`;
      const utterance = new SpeechSynthesisUtterance(texteALire);
      utterance.lang = selectedLang;

      // Ajustement de la vitesse de lecture (1 = normal, 0.9 = légèrement plus posé)
      utterance.rate = 0.95;

      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 min-h-screen flex flex-col justify-center">
      <h1 className="text-3xl font-black text-center mb-8 text-gray-800 flex items-center justify-center gap-2">
        <Sparkles className="text-yellow-500 animate-pulse" /> SCANNER HERITOGO
      </h1>

      {/* Zone d'upload / Aperçu */}
      <div className="bg-white border-2 border-dashed border-gray-300 rounded-3xl p-8 flex flex-col items-center justify-center min-h-75 relative overflow-hidden shadow-sm">
        {preview ? (
          <div className="w-full flex flex-col items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={preview} alt="Aperçu du monument" className="max-h-64 object-cover rounded-2xl mb-4 shadow" />
            <button 
              onClick={() => { setPreview(null); setImage(null); setResult(null); window.speechSynthesis.cancel(); setIsSpeaking(false); }}
              className="text-xs text-red-500 font-semibold hover:underline"
            >
              {"Changer d'image"}
            </button>
          </div>
        ) : (
          <div className="text-center flex flex-col items-center gap-4">
            <div className="p-4 bg-green-50 text-green-700 rounded-full">
              <Camera size={40} />
            </div>
            <div>
              <p className="font-medium text-gray-700">Prenez ou ajoutez une photo</p>
              <p className="text-xs text-gray-500 mt-1">Monuments historiques, lieux culturels du Togo</p>
            </div>
            
            <div className="flex gap-3 mt-2">
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 bg-green-700 text-white font-semibold py-2 px-4 rounded-xl text-sm cursor-pointer hover:bg-green-800 transition"
              >
                <Upload size={16} /> Sélectionner
              </button>
            </div>
          </div>
        )}

        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
          accept="image/*" 
          capture="environment" 
          className="hidden" 
        />
      </div>

      {/* Bouton d'action pour lancer l'IA */}
      {preview && !result && (
        <button
          onClick={handleScan}
          disabled={loading}
          className="mt-6 w-full bg-linear-to-r from-green-600 to-yellow-500 text-white font-bold py-3 rounded-2xl flex items-center justify-center gap-2 cursor-pointer shadow-md hover:opacity-90 transition disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" /> Analyse par Gemini en cours...
            </>
          ) : (
            <>
              <Sparkles size={18} /> Identifier le monument
            </>
          )}
        </button>
      )}

      {/* Affichage des résultats de Gemini Vision / Base de données */}
      {result && result.data && (
        <div className="mt-8 p-6 bg-green-50 border border-green-100 rounded-3xl shadow-sm">
          
          {/* Entête avec le nom et le contrôleur audio */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <h2 className="text-xl font-black text-green-950 flex items-center gap-2">
              ✨ {result.data.monument}
            </h2>
            
            {/* Barre de contrôle du TTS (Langues + Play/Stop) */}
            <div className="flex items-center gap-2 bg-white border border-green-200 p-1.5 rounded-xl shadow-xs self-start sm:self-auto">
              <select 
                value={selectedLang}
                onChange={(e) => {
                  setSelectedLang(e.target.value);
                  if (isSpeaking) { window.speechSynthesis.cancel(); setIsSpeaking(false); }
                }}
                className="text-xs font-bold text-gray-700 bg-transparent px-2 py-1 outline-hidden cursor-pointer"
              >
                <option value="fr-FR">🇫🇷 FR</option>
                <option value="en-US">🇺🇸 EN</option>
                <option value="es-ES">🇪🇸 ES</option>
              </select>

              <button
                onClick={toggleSpeech}
                className={`p-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  isSpeaking 
                    ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
                title={isSpeaking ? "Arrêter la lecture" : "Écouter l'histoire"}
              >
                {isSpeaking ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
            </div>
          </div>
          
          {/* Affichage de l'histoire en texte pur */}
          <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line font-medium bg-white p-4 rounded-2xl border border-green-100/50 shadow-xs">
            {result.data.histoire}
          </p>

          {/* Badges pour la localisation et la source */}
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-green-800">
            <span className="bg-green-100 px-3 py-1 rounded-full">
              📍 Lat: {result.data.latitude} | Lon: {result.data.longitude}
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full capitalize">
              🗄️ Source: {result.data.source.replace('_', ' ')}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
