export type Project = {
  slug: string;
  title: string;
  kind: string;
  summary: string;
  problem: string;
  highlights: string[];
  decisions: string[];
  nextStep: string;
  tech: string[];
  liveUrl?: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    slug: "avolog",
    title: "AvoLog",
    kind: "Next.js / Supabase / TypeScript",
    summary:
      "An avocado plant tracker with individual plant records, care timelines, photos, filtering and pagination.",
    problem:
      "I grow avocado trees. Keeping track of individual plants, their condition, and each care event became cumbersome without a searchable history.",
    highlights: [
      "Built authenticated plant profiles and care-log workflows with Next.js and Supabase.",
      "Added filters for health, status and growing medium alongside sorting and server-side pagination.",
      "Stored care photos in Supabase Storage and surfaced recent photos with plant records.",
      "Added an image compression step before upload and a bulk care-log action.",
    ],
    decisions: [
      "The plant list uses a count query and an inclusive Supabase range, so pagination operates on a subset rather than the entire plants table.",
      "Filters are encoded in URL parameters; page links carry existing filter values forward.",
      "The current dashboard also fetches care logs to identify each plant's most recent activity. For larger datasets, I would move that aggregation closer to the database.",
    ],
    nextStep:
      "Reduce care-log fetching on the dashboard and add focused automated tests for filtering and pagination.",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Supabase Storage"],
    liveUrl: "https://avocado-app-mu.vercel.app/",
    githubUrl: "https://github.com/delaine3/avocado-app",
  },
  {
    slug: "noticing",
    title: "Noticing",
    kind: "Next.js / Data workflows",
    summary:
      "A personal log for tracking everyday activities and reviewing changes in energy, mood, food, hydration and movement.",
    problem:
      "I wanted a way to record activities and compare how I felt over time, without relying on streaks.",
    highlights: [
      "Built authenticated activity logs with Supabase and server-side page loading.",
      "Created forms for different kinds of records, including meals, water and movement.",
      "Organized log history by date and created a separate insights dashboard.",
      "Deployed the application with Next.js and Vercel.",
    ],
    decisions: [
      "Log history is paginated in sets of 20 and ordered by activity date, time and creation timestamp.",
      "The insights page currently retrieves the user's records to render summaries and trends.",
      "Logging and insights live on separate routes, so I can change how records are displayed without rewriting the entry form.",
    ],
    nextStep:
      "Move heavier trend calculations into database queries as the amount of history grows.",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Vercel"],
    liveUrl: "https://noticing-six.vercel.app/",
    githubUrl: "https://github.com/delaine3/noticing",
  },
  {
    slug: "mvula-axis",
    title: "Mvula Axis",
    kind: "Java / Spring Boot / PostgreSQL",
    summary:
      "An order-management API prototype with itemized totals, search, sorting, pagination and typed response objects.",
    problem:
      "I built this API prototype to work through order and line-item relationships, totals, searching, and pagination in Spring Boot.",
    highlights: [
      "Built REST endpoints and service-layer logic for orders and order items.",
      "Calculated order totals from line items using BigDecimal.",
      "Implemented search across vendor, description and status with JPA Specifications.",
      "Returned paginated API responses with item counts and page metadata.",
    ],
    decisions: [
      "DTOs separate the API response shape from the persistence entities.",
      "JPA Specifications keep text-search criteria reusable across paginated requests.",
      "The service recalculates order totals after line items change instead of trusting a client-supplied total.",
    ],
    nextStep:
      "Add stronger request validation, constrain sortable fields and expand the test suite before production use.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "JPA", "REST APIs"],
    githubUrl: "https://github.com/delaine3/mvula-axis-backend",
  },
];
