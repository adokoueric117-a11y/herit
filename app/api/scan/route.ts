import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const imageFile = formData.get('image');

    if (!imageFile) {
      return NextResponse.json({ error: "Aucune image fournie" }, { status: 400 });
    }

    // On prépare le formulaire pour FastAPI
    const fastapiFormData = new FormData();
    fastapiFormData.append('file', imageFile); // 'file' doit correspondre au nom attendu dans FastAPI

    // Appel à votre API FastAPI (ajustez l'URL locale ou de production)
    const response = await fetch('https://togovers-production.up.railway.app/predict', {
      method: 'POST',
      body: fastapiFormData,
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
