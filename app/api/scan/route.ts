// app/api/upload/route.ts (ou le nom de votre dossier)
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const imageFile = formData.get('image');

    // Vérification de la présence du fichier
    if (!imageFile || !(imageFile instanceof Blob)) {
      return NextResponse.json({ error: "Aucune image valide fournie" }, { status: 400 });
    }

    // Récupération de l'URL FastAPI depuis l'environnement
    const fastapiUrl = process.env.API_SECRET_KEY;
    if (!fastapiUrl) {
      return NextResponse.json({ error: "URL FastAPI non configurée" }, { status: 500 });
    }

    // Préparation du formulaire pour FastAPI
    const fastapiFormData = new FormData();
    // 'file' doit correspondre exactement à l'argument attendu dans votre fonction FastAPI
    fastapiFormData.append('file', imageFile); 

    // Appel à l'API FastAPI
    const response = await fetch(fastapiUrl, {
      method: 'POST',
      body: fastapiFormData,
      // ⚠️ Ne pas ajouter de header 'Content-Type'. 
      // Le Fetch API va automatiquement générer le bon header 'multipart/form-data' avec le 'boundary'.
    });

    if (!response.ok) {
      throw new Error(`FastAPI a répondu avec le statut ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
