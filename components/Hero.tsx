import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Subtle gradient orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 -bottom-40 h-[500px] w-[500px] rounded-full bg-accent-secondary/5 blur-[120px]" />

      <div className="relative z-10 max-w-3xl">
        <p className="animate-fade-in-up mb-4 font-mono text-sm tracking-wide text-accent opacity-0 stagger-1">
          Hi, my name is
        </p>
        <h1 className="animate-fade-in-up mb-4 text-5xl font-bold tracking-tight opacity-0 stagger-2 sm:text-7xl">
          Zach McGuckin.
        </h1>
        <h2 className="animate-fade-in-up mb-6 text-3xl font-bold tracking-tight text-muted opacity-0 stagger-3 sm:text-5xl">
          I build things people use every day.
        </h2>
        <p className="animate-fade-in-up mb-8 max-w-xl text-lg leading-relaxed text-muted opacity-0 stagger-4">
          Senior Software Engineer at{" "}
          <span className="font-semibold text-[#1DB954]">Spotify</span>,
          building the live events and ticketing experiences that connect fans
          with the artists they love. Previously shipping products at Root, Chase,
          and NASA.
        </p>
        <div className="animate-fade-in-up flex flex-wrap items-center gap-5 opacity-0 stagger-5">
          <a
            href="#apps"
            className="group relative inline-flex items-center gap-2 rounded-full border border-accent px-7 py-3 text-sm font-medium text-accent transition-all hover:bg-accent/10"
          >
            See my work
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
