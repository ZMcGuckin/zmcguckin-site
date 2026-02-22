import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

const jobs = [
  {
    company: "Spotify",
    role: "Senior Software Engineer",
    period: "2022 – Present",
    logo: "/icons/spotify.jpg",
    description:
      "Currently powering the live events space — building the concert discovery and ticketing flows within the Spotify app. Previously built and scaled the in-app messaging platform and push notification systems that reach hundreds of millions of users.",
    details: [
      "Architecting concert discovery and ticketing experiences across iOS and Android",
      "Previously owned the in-app messaging platform and push notification infrastructure",
      "Building backend services in Java and Spotify's Apollo framework",
      "Managing data pipelines and analytics in BigQuery",
    ],
    tech: ["Swift", "Kotlin", "Java", "Apollo", "BigQuery", "iOS", "Android"],
    current: true,
  },
  {
    company: "Root Insurance",
    role: "Senior Software Engineer",
    period: "2020 – 2022",
    logo: "/icons/root.jpg",
    description:
      "Built and scaled the Root car insurance platform across mobile and web. Worked full stack on features serving millions of customers, from native iOS interfaces to backend services.",
    tech: ["Swift", "React", "Spring Boot", "Ruby on Rails"],
  },
  {
    company: "JPMorgan Chase",
    role: "iOS Software Engineer",
    period: "2018 – 2020",
    logo: "/icons/chase.jpg",
    description:
      "Developed features for the Chase Mobile app, one of the most widely used banking apps in the world. Contributed to the iOS codebase serving tens of millions of daily active users.",
    tech: ["Swift", "Objective-C", "iOS", "Agile"],
    highlight: "Won the JPMorgan Chase Hackathon (March 2020)",
  },
  {
    company: "NASA",
    role: "Software Engineering Intern",
    period: "2017",
    logo: "/icons/nasa.png",
    description:
      "Built an application for streamlining testing facility procedures at NASA Glenn Research Center, improving efficiency in how teams managed and executed test processes.",
    tech: ["iOS", "Swift", "Mobile Development"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <div className="mb-10 flex items-center gap-4">
            <h2 className="text-2xl font-bold sm:text-3xl">
              <span className="mr-2 font-mono text-lg text-accent">02.</span>
              Where I&apos;ve Worked
            </h2>
            <div className="h-px flex-1 bg-card-border" />
          </div>
        </RevealOnScroll>

        <div className="space-y-6">
          {jobs.map((job, i) => (
            <RevealOnScroll key={job.company} delay={i * 100}>
              <div
                className={`group rounded-xl border p-8 transition-all ${
                  job.current
                    ? "border-accent/40 bg-accent/5 hover:border-accent/60 hover:bg-accent/10"
                    : "border-card-border bg-card/50 hover:border-accent/30 hover:bg-card"
                }`}
              >
                <div className="mb-5 flex items-start gap-5">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <div>
                        <h3 className="text-xl font-semibold">
                          {job.role}{" "}
                          <span className="text-accent">@ {job.company}</span>
                        </h3>
                        {job.current && (
                          <span className="mt-1 inline-block rounded-full bg-accent/20 px-2.5 py-0.5 text-xs font-medium text-accent">
                            Current
                          </span>
                        )}
                        {job.highlight && (
                          <p className="mt-1 text-sm text-accent/80">
                            {job.highlight}
                          </p>
                        )}
                      </div>
                      <span className="shrink-0 font-mono text-sm text-muted">
                        {job.period}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mb-4 leading-relaxed text-muted">
                  {job.description}
                </p>

                {job.details && (
                  <ul className="mb-5 space-y-2">
                    {job.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 text-sm text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
