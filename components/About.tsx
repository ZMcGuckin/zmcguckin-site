import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

const skills = [
  { category: "Mobile", items: ["Swift", "SwiftUI", "Kotlin", "React Native", "Android"] },
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Java", "Apollo", "Spring Boot", "Ruby on Rails"] },
  { category: "Data & Infra", items: ["BigQuery", "Data Pipelines", "Docker", "CI/CD"] },
];

const education = {
  school: "The Ohio State University",
  degree: "B.S. Computer Science & Engineering",
  minor: "Minor in Economics",
  honors: "Cum Laude",
  year: "2019",
  logo: "/icons/ohio-state.png",
};

export default function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <div className="mb-10 flex items-center gap-4">
            <h2 className="text-2xl font-bold sm:text-3xl">
              <span className="mr-2 font-mono text-lg text-accent">01.</span>
              About Me
            </h2>
            <div className="h-px flex-1 bg-card-border" />
          </div>
        </RevealOnScroll>

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <RevealOnScroll delay={100}>
              <div className="space-y-4 leading-relaxed text-muted">
                <p>
                  I&apos;m a Senior Software Engineer at{" "}
                  <span className="font-semibold text-[#1DB954]">Spotify</span>{" "}
                  based in Columbus, Ohio. I currently work in the live events
                  space, building the concert discovery and ticketing flows that
                  help fans find and attend shows by their favorite artists.
                </p>
                <p>
                  Before live events, I built and scaled Spotify&apos;s in-app
                  messaging platform and push notification systems — the
                  infrastructure that powers how Spotify communicates with hundreds
                  of millions of users. My work spans across mobile (iOS &amp;
                  Android), backend services in Java and Spotify&apos;s Apollo
                  framework, and data pipelines in BigQuery.
                </p>
                <p>
                  Prior to Spotify, I worked at{" "}
                  <span className="text-foreground">Root Insurance</span> as a
                  senior engineer,{" "}
                  <span className="text-foreground">JPMorgan Chase</span> as an
                  iOS engineer on the Chase Mobile app, and interned at{" "}
                  <span className="text-foreground">NASA</span> Glenn Research
                  Center. Outside of work, I&apos;ve shipped multiple personal
                  apps to the App Store and won hackathons along the way.
                </p>
              </div>
            </RevealOnScroll>

            {/* Education */}
            <RevealOnScroll delay={200}>
              <div className="mt-8 flex items-center gap-4 rounded-xl border border-card-border bg-card/50 p-5">
                <div className="relative h-12 w-12 shrink-0">
                  <Image
                    src={education.logo}
                    alt="Ohio State University"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-semibold">{education.school}</p>
                  <p className="text-sm text-muted">
                    {education.degree} &middot; {education.minor}
                  </p>
                  <p className="text-sm text-muted">
                    {education.honors} &middot; {education.year}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-2">
            <RevealOnScroll delay={200}>
              <div className="space-y-6">
                {skills.map((group) => (
                  <div key={group.category}>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-card-border bg-card px-3 py-1 font-mono text-xs text-muted"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
