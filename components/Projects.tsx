import RevealOnScroll from "./RevealOnScroll";

const projects = [
  {
    title: "SociallyMusicService",
    description:
      "Open-source Swift framework that bridges iOS apps with Spotify and Apple Music APIs. Enables seamless cross-platform music service integration.",
    tech: ["Swift", "iOS", "SPM", "Open Source"],
    github: "https://github.com/OnEdgeInnovation/SociallyMusicService",
  },
  {
    title: "react-wordle",
    description:
      "A polished Wordle clone built with React, TypeScript, and Tailwind CSS. Full game logic with animations and keyboard support.",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/ZMcGuckin/react-wordle",
  },
  {
    title: "SwiftUI-2048",
    description:
      "The classic 2048 puzzle game rebuilt entirely in SwiftUI with smooth animations and gesture controls.",
    tech: ["SwiftUI", "iOS"],
    github: "https://github.com/ZMcGuckin/SwiftUI-2048",
  },
  {
    title: "3264",
    description:
      "A twist on the 2048 game — available on both the App Store and Google Play Store, built natively for both platforms.",
    tech: ["Swift", "Android", "Game"],
    github: "https://github.com/ZMcGuckin/3264",
  },
  {
    title: "LeetCode Solutions",
    description:
      "Collection of algorithmic problem solutions tracked via LeetHub. Covering data structures, dynamic programming, graphs, and more.",
    tech: ["Algorithms", "Data Structures"],
    github: "https://github.com/ZMcGuckin/LeetCode",
  },
  {
    title: "ControlRoom",
    description:
      "A macOS app to control the Xcode Simulator — manage settings, appearance, location, and more from a clean interface.",
    tech: ["Swift", "macOS", "Xcode"],
    github: "https://github.com/ZMcGuckin/ControlRoom",
  },
];

function GitHubIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <div className="mb-10 flex items-center gap-4">
            <h2 className="text-2xl font-bold sm:text-3xl">
              <span className="mr-2 font-mono text-lg text-accent">03.</span>
              Side Projects
            </h2>
            <div className="h-px flex-1 bg-card-border" />
          </div>
        </RevealOnScroll>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <RevealOnScroll key={project.title} delay={i * 75}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-xl border border-card-border bg-card/50 p-6 transition-all hover:-translate-y-1 hover:border-accent/30 hover:bg-card"
              >
                <div className="mb-4 flex items-center justify-between">
                  <svg
                    className="h-10 w-10 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                  <GitHubIcon />
                </div>
                <h4 className="mb-2 text-lg font-semibold transition-colors group-hover:text-accent">
                  {project.title}
                </h4>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs text-muted/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
