import Im1 from '@/public/Sites/assigamé.jpg';
import Im2 from '@/public/Sites/catédrale.jpg';
import Im3 from '@/public/Sites/germano.jpg';
import Im4 from '@/public/Sites/koutamakou.jpg';
import Im5 from '@/public/Sites/kpalimé.jpg';
import Im6 from '@/public/Sites/maison_des_esclaves.jpg';
import Im7 from '@/public/Sites/monuments_independance.jpg';
import Im8 from '@/public/Sites/musée_lomé.jpg';
import Im9 from '@/public/Sites/palais_de_lome.webp';
import Im10 from '@/public/Sites/vial.jpg';
import Im11 from '@/public/Sites/village_artisanal.jpg';
import Im12 from '@/public/Sites/yikpa.jpg';

import { StaticImageData } from 'next/image';

export interface Monument {
  id: string;
  nom: string;
  région: string;
  localite: string;
  description: string;
  histoire: string;
  lat: number;
  lng: number;
  image: StaticImageData;
}

export const monuments: Monument[] = [
  {
    "id": "grand_marche_lome",
    "nom": "Grand Marché de Lomé",
    "région": "Maritime",
    "localite": "Lomé",
    "description": "Le cœur économique vibrant de Lomé, célèbre pour ses tissus et l'histoire des emblématiques Nana Benz.",
    "histoire": "Aussi connu sous le nom de marché d'Assigamé, c'est le cœur économique historique de la capitale. Il est mondialement célèbre pour avoir vu émerger les 'Nana Benz', de puissantes commerçantes qui ont bâti leur fortune et leur influence sur le commerce exclusif de tissus pagnes Wax imprimés à partir des années 1970.",
    "lat": 6.1264,
    "lng": 1.2222,
    "image": Im1
  },
  {
    "id": "cathedrale_lome",
    "nom": "Cathédrale Sacré-Cœur de Lomé",
    "région": "Maritime",
    "localite": "Lomé",
    "description": "Un joyau architectural de style gothique édifié au début du XXe siècle au centre de la capitale.",
    "histoire": "Construite entre 1901 et 1902 par les missionnaires du Verbe Divin pendant la période coloniale allemande, cet édifice de style gothique est l'un des repères architecturaux et spirituels les plus importants de la capitale togolaise. Elle a été restaurée à la suite de la visite du Pape Jean-Paul II en 1985.",
    "lat": 6.1281,
    "lng": 1.2227,
    "image": Im2
  },
  {
    "id": "statue_amitie_germano",
    "nom": "Statue de l'Amitié Germano-Togolaise",
    "région": "Maritime",
    "localite": "Baguida",
    "description": "Monument historique symbolisant les premiers accords diplomatiques et le traité de protectorat de 1884.",
    "histoire": "Érigée à Baguida en commémoration de la signature du traité de protectorat du 5 juillet 1884 entre l'explorateur allemand Gustav Nachtigal et le roi Mlapa III de Togoville. Ce monument symbolise le point de départ des relations diplomatiques et historiques complexes entre le Togo et l'Allemagne.",
    "lat": 6.1601,
    "lng": 1.3283,
    "image": Im3
  },
  {
    "id": "koutamakou",
    "nom": "Koutamakou",
    "région": "Savanes",
    "localite": "Kandé",
    "description": "Site de l'UNESCO célèbre pour ses Tata Tamberma, de magnifiques fermes-forteresses en terre cuite.",
    "histoire": "Inscrit au patrimoine mondial de l'UNESCO, le paysage culturel de Koutamakou abrite les Batammariba. Leurs remarquables fermes-forteresses à étages en terre, appelées 'Takienta' (ou Tata Tamberma), incarnent une symbiose parfaite entre l'homme, la spiritualité et la nature à l'architecture fortifiée unique.",
    "lat": 10.1075,
    "lng": 1.0119,
    "image": Im4
  },
  {
    "id": "kpalime",
    "nom": "Kpalimé",
    "région": "Plateaux",
    "localite": "Kpalimé",
    "description": "Le paradis vert du Togo, réputé pour sa nature luxuriante, ses randonnées et son artisanat d'art.",
    "histoire": "Niché au cœur de la région du café et du cacao, Kpalimé est considéré comme le paradis vert et le principal pôle artisanal du Togo. Entourée de collines boisées et de vallées fertiles, la localité abrite le mont Agou (plus haut sommet du pays) ainsi que d'importants centres d'art de poterie, tissage et sculpture.",
    "lat": 6.9000,
    "lng": 0.6333,
    "image": Im5
  },
  {
    "id": "maison_des_esclaves",
    "nom": "Maison des Esclaves",
    "région": "Maritime",
    "localite": "Agbodranfo",
    "description": "Un lieu de mémoire poignant, témoin de la traite négrière transatlantique sur la côte togolaise.",
    "histoire": "Aussi appelée 'Wood Home', cette ancienne bâtisse portugaise construite en 1835 par le négrier écossais John Henry Wood servit de lieu de séquestration secret pour les captifs avant leur déportation transatlantique. Située à Agbodranfo sur la 'Côte des Esclaves', elle jouxte le 'puits des enchaînés' où les esclaves se lavaient une dernière fois.",
    "lat": 6.2053,
    "lng": 1.4786,
    "image": Im6
  },
  {
    "id": "monument_independance",
    "nom": "Monument de l'Indépendance",
    "région": "Maritime",
    "localite": "Lomé",
    "description": "Édifice national majestueux célébrant la liberté acquise et la souveraineté du peuple togolais.",
    "histoire": "Inauguré le 27 avril 1960 par le premier président Sylvanus Olympio, ce chef-d'œuvre architectural célèbre l'accession du Togo à la souveraineté internationale. La structure met en scène une silhouette humaine se libérant de sa gangue de pierre pour symboliser la liberté acquise et l'émancipation du peuple.",
    "lat": 6.1311,
    "lng": 1.2162,
    "image": Im7
  },
  {
    "id": "musee_de_lome",
    "nom": "Musée National du Togo",
    "région": "Maritime",
    "localite": "Lomé",
    "description": "Le gardien de l'histoire, des coutumes et des collections ethnographiques et artistiques du pays.",
    "histoire": "Fondé en 1975 et logé au sein du Palais des Congrès de Lomé, ce musée conserve, valorise et expose le patrimoine culturel, ethnographique et artistique togolais. Sa collection rassemble des instruments de musique traditionnels, des poteries, des objets rituels et des vestiges historiques majeurs.",
    "lat": 6.1328,
    "lng": 1.2154,
    "image": Im8
  },
  {
    "id": "palais_de_lome",
    "nom": "Palais de Lomé",
    "région": "Maritime",
    "localite": "Lomé",
    "description": "Ancien palais colonial transformé en un prestigieux centre d'art et un parc botanique en bord de mer.",
    "histoire": "Ancien Palais des Gouverneurs construit en 1905 par les colons allemands (puis occupé par les gouverneurs français), cet édifice majestueux a été entièrement rénové en 2019 pour devenir un centre d'art et de culture d'envergure internationale, entouré d'un parc botanique d'une biodiversité exceptionnelle en bordure d'océan.",
    "lat": 6.1246,
    "lng": 1.2128,
    "image": Im9
  },
  {
    "id": "chateau_vial",
    "nom": "Château Vial",
    "région": "Plateaux",
    "localite": "Kouma-Konda",
    "description": "Une demeure historique aux allures médiévales surplombant les forêts et vallées du mont Kloto.",
    "histoire": "Construit dans les années 1940 par le gouverneur français d'alors sur les hauteurs verdoyantes du mont Kloto à proximité de Kpalimé, ce château aux allures médiévales sert de résidence d'État. Il offre une vue imprenable sur les vallées forestières frontalières avec le Ghana.",
    "lat": 6.9536,
    "lng": 0.5925,
    "image": Im10
  },
  {
    "id": "village_artisanal",
    "nom": "Village Artisanal de Lomé",
    "région": "Maritime",
    "localite": "Lomé",
    "description": "Une vitrine vivante du savoir-faire togolais où les artisans créent et exposent leurs œuvres en direct.",
    "histoire": "Conçu pour regrouper, structurer et promouvoir le savoir-faire local, ce complexe permet aux visiteurs de voir des artisans togolais à l'œuvre. C'est le lieu idéal pour découvrir la fabrication en direct de batik, de pagnes tissés, de bijoux traditionnels et de sculptures sur bois.",
    "lat": 6.1439,
    "lng": 1.2294,
    "image": Im11
  },
  {
    "id": "cascade_yikpa",
    "nom": "Cascade de Yikpa",
    "région": "Plateaux",
    "localite": "Yikpa (Danyi)",
    "description": "L'une des plus spectaculaires et hautes chutes d'eau du Togo, nichée dans une nature sauvage.",
    "histoire": "Aussi appelée Douala Falls, c'est l'une des cascades les plus impressionnantes et les plus hautes du Togo. Située à l'extrême nord du plateau de Danyi, elle se déverse le long d'une falaise abrupte dans une végétation dense, marquant de manière spectaculaire la frontière naturelle avec le Ghana.",
    "lat": 7.1492,
    "lng": 0.6481,
    "image": Im12
  }
];

export default monuments;