export interface Project {
  id: string;
  name: string;
  tagline: string;
  year: string;
  description: string;
  challenge: string;
  tech: string[];
  links: {
    demo?: string;
    source?: string;
  };
}

export const projects: Project[] = [
  {
    id: "keystore",
    name: "Keystore",
    tagline: "In-memory key-value database",
    year: "2025",
    description: "A Redis-inspired storage engine written from scratch. Custom wire protocol, persistence layer, and TTL-based expiration.",
    challenge: "The interesting part was implementing lock-free reads while maintaining consistency. Uses compare-and-swap & sharded hash tables for writes.",
    tech: ["C++", "TCP/IP"],
    links: {
      source: "https://github.com/thatcatfromspace/keystore",
    },
  },
  {
    id: "proleap",
    name: "ProLeap",
    tagline: "Event organization platform",
    year: "2024",
    description: "End-to-end event organization platform for students, professionals and organizations.",
    challenge: "Building a general purpose event organization platform is harder than it looks. ",
    tech: ["React", "Django", "PostgreSQL"],
    links: {
      demo: "https://proleap.vercel.app",
    },
  },
  {
    id: "proxy",
    name: "Proxy",
    tagline: "High-performance proxy server",
    year: "2026",
    description: "A high-performance multi-threaded HTTP/2 proxy server written from scratch.",
    challenge: "Implementing epoll for non-blocking I/O and distinct handling for HTTP and HTTPS, along with request multiplexing.",
    tech: ["C++", "epoll", "HTTP", "TLS"],
    links: {
      source: "https://github.com/thatcatfromspace/proxy",
    },
  },
  {
    id: "foresight",
    name: "ForeSight",
    tagline: "Weather forecasting at scale",
    year: "2025",
    description: "Distributed analytics on historical weather data. Time-series storage with Cassandra, custom ML models for prediction.",
    challenge: "Cassandra partition sizing for time-series queries. Ended up with a bucketed approach that balances write and read patterns.",
    tech: ["Python", "Cassandra", "Spark"],
    links: {
      source: "https://github.com/thatcatfromspace/foresight",
    },
  },
];
