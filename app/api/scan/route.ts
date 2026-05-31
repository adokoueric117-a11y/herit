import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // En TypeScript, on force le type avec "as File | null" pour pouvoir manipuler le fichier proprement
    const imageFile = formData.get('image') as File | null; 

    // 1. Vérification de la présence et de la validité du fichier
    if (!imageFile || !(imageFile instanceof Blob)) {
      return NextResponse.json({ error: "Aucune image valide fournie" }, { status: 400 });
    }

    // 2. Récupération des variables d'environnement indispensables
    const fastapiBaseUrl = process.env.FASTAPI_URL;
    const secretKey = process.env.API_SECRET_KEY;

    if (!fastapiBaseUrl || !secretKey) {
      return NextResponse.json(
        { error: "Configuration du serveur incomplète (URL ou Clé API manquante)" }, 
        { status: 500 }
      );
    }

    // 3. Préparation du formulaire multipart pour FastAPI
    const fastapiFormData = new FormData();
    
    // On ajoute le fichier. 'file' correspond à l'argument attendu côté Python (FastAPI)
    fastapiFormData.append('file', imageFile); 

    // 4. Appel à la route "/predict" de FastAPI avec l'en-tête de sécurité
    const response = await fetch(`${fastapiBaseUrl}/predict`, {
      method: 'POST',
      headers: {
        'herit': secretKey 
      },
      body: fastapiFormData,
    });

    // 5. Gestion des erreurs renvoyées par le backend FastAPI
    if (!response.ok) {
      const errorDetail = await response.text();
      return NextResponse.json(
        { error: `Le moteur d'IA (FastAPI) a répondu avec une erreur: ${errorDetail}` }, 
        { status: response.status }
      );
    }

    // 6. Succès : renvoi direct des données de prédiction à votre composant Client
    const data = await response.json();
    return NextResponse.json(data);

  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Erreur interne du serveur de route" }, 
      { status: 500 }
    );
  }
}
