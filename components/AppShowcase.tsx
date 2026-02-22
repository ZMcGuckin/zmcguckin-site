import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

const apps = [
  {
    name: "Spotify",
    icon: "/icons/spotify.jpg",
    role: "Senior Software Engineer",
    link: "https://apps.apple.com/us/app/spotify-music-and-podcasts/id324684580",
  },
  {
    name: "Root",
    icon: "/icons/root.jpg",
    role: "Senior Software Engineer",
    link: "https://apps.apple.com/us/app/root-affordable-car-insurance/id1021256908",
  },
  {
    name: "Socially",
    icon: "/icons/socially.png",
    role: "Creator",
    link: "https://apps.apple.com/us/app/socially-music/id1488050333",
  },
  {
    name: "DriveBuddy",
    icon: "/icons/drivebuddy.png",
    role: "Creator",
    link: "https://apps.apple.com/us/app/drivebuddy-drive-analyzer/id1524235426",
  },
  {
    name: "Chase",
    icon: "/icons/chase.jpg",
    role: "iOS Engineer",
    link: "https://apps.apple.com/us/app/chase-mobile-bank-invest/id298867247",
  },
  {
    name: "Daily Puzzle",
    icon: "/icons/daily-puzzle.jpg",
    role: "Creator",
  },
  {
    name: "3264",
    icon: "/icons/3264.jpg",
    role: "Creator",
    link: "https://apps.apple.com/us/app/3264/id1492839216",
  },
];

export default function AppShowcase() {
  return (
    <section id="apps" className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <div className="mb-4 text-center">
            <p className="mb-2 font-mono text-sm text-accent">
              Apps I&apos;ve Built &amp; Shipped
            </p>
            <h2 className="text-2xl font-bold sm:text-3xl">
              On Millions of Devices
            </h2>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <p className="mx-auto mb-10 max-w-2xl text-center text-muted">
            From one of the most popular music apps in the world to personal
            side projects on the App Store — here are the apps I&apos;ve
            contributed to.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-3 justify-items-center gap-x-4 gap-y-8 sm:grid-cols-4 sm:gap-x-10 md:grid-cols-7 md:gap-x-8">
          {apps.map((app, i) => (
            <RevealOnScroll key={app.name} delay={i * 60}>
              <AppIcon {...app} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppIcon({
  name,
  icon,
  role,
  link,
}: {
  name: string;
  icon: string;
  role: string;
  link?: string;
}) {
  const content = (
    <div className="group flex w-20 flex-col items-center gap-3 sm:w-24">
      <div className="relative h-20 w-20 overflow-hidden rounded-[22%] shadow-lg shadow-black/30 ring-1 ring-white/10 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-accent/20 group-hover:ring-accent/30 sm:h-24 sm:w-24">
        <Image src={icon} alt={`${name} app icon`} fill className="object-cover" />
      </div>
      <div className="text-center">
        <p className="text-sm font-medium transition-colors group-hover:text-accent">
          {name}
        </p>
        <p className="text-[11px] text-muted/60">{role}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
