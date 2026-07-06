export const profile = {
  name: "Sapir Sapirsky",
  handle: "sapirowsky",
  role: "Full-stack product engineer",
  githubUrl: "https://github.com/sapirowsky",
  summary:
    "I build practical software with strong interfaces, typed contracts, and backend systems that hold up past the demo.",
  about:
    "My recent work is centered on full-stack application architecture: React and TanStack on the client, Laravel APIs on the server, generated TypeScript clients between them, and containerized infrastructure around the whole system. I care about boring reliability, clear domain modeling, and UI that helps people get work done.",
};

export const strengths = [
  {
    title: "Product-minded frontend",
    text: "Typed React interfaces, route-driven workflows, form states, dense dashboards, and component systems that stay maintainable.",
  },
  {
    title: "API-first backend",
    text: "Laravel services, authorization, validation, search, queues, media processing, and OpenAPI contracts for generated clients.",
  },
  {
    title: "System ownership",
    text: "Docker and Podman environments, storage services, Redis, Meilisearch, observability, documentation, and operational scripts.",
  },
  {
    title: "Quality habits",
    text: "Focused tests, type checks, linting, explicit edge cases, and code that is structured for future change.",
  },
] as const;

export const stackGroups = [
  {
    label: "Frontend",
    items: ["Astro", "TypeScript", "React", "TanStack", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Laravel", "PHP", "REST APIs", "OpenAPI", "Authentication"],
  },
  {
    label: "Data and infra",
    items: ["MariaDB", "Redis", "Meilisearch", "Docker", "Podman"],
  },
  {
    label: "Engineering",
    items: ["Testing", "Observability", "CI thinking", "Documentation", "Generated clients"],
  },
] as const;
