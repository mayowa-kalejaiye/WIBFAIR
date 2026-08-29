export interface Project {
  id: string;
  name: string;
  description: string;
  year: string;
  link: string | null;
  coverImage: string;
}

export const PROJECTS: Project[] = [
  {
    id: "proj-001",
    name: "Just A Chat",
    description: "No scripts. No perfect answers. Just conversations about the things that matter—faith, family, relationships, and life.",
    year: "2024–Present",
    link: "/just-a-chat",
    coverImage: "/assets/business_meetings.jpg",
  },
  {
    id: "proj-002",
    name: "Vintage Africana",
    description: "A cultural preservation project and museum owned alongside Akin, dedicated to saving old Nigerian objects and memories.",
    year: "2020–Present",
    link: "https://vintageafricana.com",
    coverImage: "/assets/cultural_festivals.jpg",
  },
  {
    id: "proj-003",
    name: "T.I.V (The Inspired Voices)",
    description: "The music duo behind hits like 'Komole' and 'Vanity'. A beautiful chapter of creating music that resonated across Nigeria.",
    year: "2010s",
    link: null,
    coverImage: "/assets/Nigerian_fashion_displays.jpg",
  },
  {
    id: "proj-004",
    name: "Single & Special",
    description: "A community and initiative focused on guiding singles through relationships, dating, and discovering self-worth.",
    year: "2010s",
    link: null,
    coverImage: "/assets/african_women_entrepreneurs.jpg",
  }
];
