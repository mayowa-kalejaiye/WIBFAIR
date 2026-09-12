export type UnbrokenEdition = {
  year: string;
  theme: string;
  date: string;
  venue: string;
  host: string;
  speakers: { name: string; role: string }[];
  flyer: string;
  register?: string;
  status: "past" | "upcoming";
};

// Chronological, read directly from flyers in /public.
// NOTE: LOLO1 (Omotunde Adebowale David) is Guest on 2025 SHERO — NOT 2019.
export const UNBROKEN_EDITIONS: UnbrokenEdition[] = [
  {
    year: "2019",
    theme: "Unbroken",
    date: "Sunday, 20th October 2019 — 2PM",
    venue: "The Kulture Yard Lounge, 2b Abba Johnson Crescent, off Adeniyi Jones Ave, Ikeja",
    host: "Bunmi Alabi",
    speakers: [
      { name: "Olabisi Ola-Soetan", role: "Speaker" },
      { name: "Bisi Ibitayo", role: "Speaker" },
    ],
    flyer: "/WhatsApp%20Image%202026-09-11%20at%207.10.24%20PM.jpeg",
    register: "bit.ly/SAS-unbroken",
    status: "past",
  },
  {
    year: "2020",
    theme: "A New Beginning",
    date: "Sunday, 18th October 2020 — 1PM",
    venue: "Single Mothers & Single Ladies Conference",
    host: "Bunmi Alabi",
    speakers: [
      { name: "Pst. Olubunmi Odutola", role: "Speaker" },
      { name: "Gladys Ajiri Oghene", role: "Speaker" },
    ],
    flyer: "/WhatsApp%20Image%202026-09-11%20at%206.45.58%20PM.jpeg",
    register: "www.bit.ly/unbroken_2",
    status: "past",
  },
  {
    year: "2021",
    theme: "Beautified",
    date: "31st October 2021 — 2PM",
    venue: "142 Oba Akran Road, Ikeja, Lagos",
    host: "Bunmi Alabi",
    speakers: [
      { name: "Pastor Mrs. Adebayo", role: "Minister / Counsellor — Guest Speaker" },
      { name: "Dr. Tolulope Oko-Igaire (Hons)", role: "Mental Health Counselor — Guest Speaker" },
    ],
    flyer: "/WhatsApp%20Image%202026-09-11%20at%206.45.58%20PM%20(1).jpeg",
    register: "bit.ly/unbroken2021",
    status: "past",
  },
  {
    year: "2022",
    theme: "Against All Odds",
    date: "29th October 2022 — 11AM",
    venue: "142 Oba Akran Avenue, Ikeja",
    host: "Bunmi Alabi",
    speakers: [{ name: "Dapo Adeniyi, Ph.D", role: "Psychological Therapist & CBT Expert — Guest Speaker" }],
    flyer: "/WhatsApp%20Image%202026-09-11%20at%206.45.58%20PM%20(2).jpeg",
    register: "bit.ly/UNBROKEN2022",
    status: "past",
  },
  {
    year: "2023",
    theme: "Refuel",
    date: "Sunday, 22nd October 2023 — 12 Noon",
    venue: "30 Olayiwola Street, New Oko Oba, Lagos",
    host: "Bunmi Alabi",
    speakers: [{ name: "Sis Joy Chinonyerem Emechara", role: "Guest Minister" }],
    flyer: "/WhatsApp%20Image%202026-09-11%20at%207.12.26%20PM.jpeg",
    status: "past",
  },
  {
    year: "2024",
    theme: "Rest",
    date: "Saturday, 19th October 2024 — 9AM",
    venue: "599 Lagos-Abeokuta Expressway, Uturn Busstop, Lagos",
    host: "Bunmi Alabi",
    speakers: [
      { name: "Tinuade Ilesanmi", role: "Panelist" },
      { name: "Dieko", role: "Panelist" },
      { name: "Kenny St. Brown (KSB)", role: "Panelist" },
      { name: "Psalmos", role: "Panelist" },
      { name: "Tinuola Oladeji", role: "Panelist" },
    ],
    flyer: "/WhatsApp%20Image%202026-09-11%20at%206.45.58%20PM%20(3).jpeg",
    status: "past",
  },
  {
    year: "2025",
    theme: "SHERO — She Rose | She Rebuilt | She Reigns",
    date: "18th October 2025 — 9AM",
    venue: "599 U-Turn Bus Stop, Lagos-Abeokuta Express",
    host: "Olubunmi Alabi",
    speakers: [{ name: "Omotunde Adebowale David (LOLO 1)", role: "Guest" }],
    flyer: "/WhatsApp%20Image%202026-09-11%20at%207.10.03%20PM.jpeg",
    status: "past",
  },
  {
    year: "2026",
    theme: "Becoming — From who you are to who God wants you to be",
    date: "Saturday, 31st October 2026 — 10AM",
    venue: "599 U-Turn Bus-Stop, Lag-Abk Exprway, Abule Egba, Lagos",
    host: "Bunmi Alabi",
    speakers: [
      { name: "Dr. Funke Sobowale", role: "G.E.T Founder" },
      { name: "Hunsu Omolara Margaret", role: "Public Health Professional" },
      { name: "Doreen Omosele TMA", role: "CEO Narra Africa Media" },
      { name: "Tessy Osakwe", role: "Legal Practitioner" },
    ],
    flyer: "/WhatsApp%20Image%202026-09-11%20at%207.10.58%20PM.jpeg",
    register: "https://bit.ly/4ywioV5",
    status: "upcoming",
  },
];

export const UNBROKEN_MERCH = {
  title: "Unbroken 2026 Branded Shirts — For Sale",
  note: "Outfit sales for the event. Payment ends 30th September.",
  bank: "Parallex Bank",
  account: "2002994908",
  name: "Oluwatosin Adeyemi",
  instruction: "DM screenshot of payment for confirmation",
  items: [
    { name: "Pink Hoodie", price: "₦15,000" },
    { name: "Hoodie & Trouser", price: "₦25,000" },
    { name: "Shirt", price: "₦8,000" },
  ],
  source: "https://www.instagram.com/p/Dc-3sFSACi4/",
};

export const UNBROKEN_INSTAGRAM = [
  { label: "Unbroken 2026 branded shirts for sale", href: "https://www.instagram.com/p/Dc-3sFSACi4/" },
  { label: "Unbroken Ladies Hangout", href: "https://www.instagram.com/p/DRxtzsJAOK7/" },
  { label: "Pictures from Unbroken 2025", href: "https://www.instagram.com/p/DQ_j85giEAj/" },
  { label: "More pictures from Unbroken 2025", href: "https://www.instagram.com/p/DQupktmgJcA/" },
  { label: "Latest Unbroken — where LOLO1 came (2025 SHERO)", href: "https://www.instagram.com/p/DQeEgsSiKjt/" },
];
