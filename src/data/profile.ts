export const profile = {
  name: "Kamil Kruszona",
  handle: "sapirowsky",
  role: "Full-stack engineer",
  tagline: "Building observable full-stack systems with Laravel & React.",
  githubUrl: "https://github.com/sapirowsky",
  xUrl: "https://x.com/sapirowski",
  about:
    "I build production systems end to end — Laravel APIs on the server, typed React on the client, and enough observability wired through the middle that I can see what the software actually does in the wild. I care about clean architecture, rigorous tests, and runtime behaviour I can trace. Right now I'm exploring Convex for reactive backends.",
  location: "Native Polish speaker",
} as const;

export const focus = [
  {
    label: "Typed boundaries",
    text: "End-to-end typed contracts between server and client — generated clients, no drift, no guessing.",
  },
  {
    label: "Observable runtime",
    text: "Tracing, errors, and metrics through Sentry so production behaviour is visible, not inferred.",
  },
  {
    label: "Secure multi-tenant APIs",
    text: "Authorization, isolation, and multi-tenant patterns that hold up past the happy path.",
  },
] as const;

export const stack = [
  { group: "Backend", items: ["Laravel", "PHP", "Convex", "REST APIs"] },
  { group: "Frontend", items: ["React", "TypeScript", "TanStack", "Tailwind CSS"] },
  { group: "Data", items: ["MariaDB", "Redis", "Meilisearch"] },
  { group: "Platform", items: ["Docker", "Podman", "Sentry"] },
] as const;
