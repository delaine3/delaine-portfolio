export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  highlights: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  liveAppLink?: string;
};

export const projects: Project[] = [
  {
    slug: "mvula-axis",
    title: "Mvula Axis",
    liveAppLink: "",
    summary:
      "A full-stack business management system for tracking operational records, payments, orders, and searchable business data.",
    problem:
      "Small business operations often spread important records across notebooks, chats, spreadsheets, and memory. Mvula Axis brings that information into structured, searchable workflows.",
    highlights: [
      "Built REST API patterns with Java, Spring Boot, JPA, and PostgreSQL.",
      "Implemented pagination, sorting, filtering, and search using backend specifications.",
      "Designed reusable React and TypeScript table flows for business records.",
      "Structured DTOs and entities to keep API boundaries maintainable.",
    ],
    tech: ["React", "TypeScript", "Java", "Spring Boot", "PostgreSQL", "JPA"],
    githubUrl: "https://github.com/delaine3/mvula-axis-backend",
  },
  {
    slug: "noticing",
    title: "Noticing",
    liveAppLink: "https://noticing-six.vercel.app/",
    summary:
      "A personal tracking app for observing patterns across mood, energy, food, hydration, movement, sunlight, and daily routines.",
    problem:
      "Most habit apps reward streaks. Noticing focuses on evidence: what makes life hurt less, what improves energy, and what patterns are worth paying attention to.",
    highlights: [
      "Built with Next.js, Supabase, TypeScript, and Vercel deployment.",
      "Designed flexible logging flows for daily actions and body-state tracking.",
      "Created dashboard concepts for insights, trend analysis, and daily evidence.",
      "Used product thinking to turn personal observation into structured data.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel",
    ],
  },
  {
    slug: "avolog",
    title: "Avolog",
    liveAppLink: "https://avocado-app-mu.vercel.app/",
    summary:
      "An avocado plant care tracker for growth logs, care history, plant profiles, and photo-based progress tracking.",
    problem:
      "Plant care becomes easier when observations, watering, root growth, leaf growth, and photos live in one timeline instead of scattered notes.",
    highlights: [
      "Built plant profiles and care logs using Next.js and Supabase.",
      "Implemented image upload and display with Supabase Storage.",
      "Designed friendly UI patterns for daily care tracking.",
      "Modeled care events like water changes, root growth, leaf growth, and seed cracks.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Supabase Storage",
      "Tailwind CSS",
    ],
  },
];
