import RevealOnScroll from "./RevealOnScroll";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <RevealOnScroll>
          <p className="mb-4 font-mono text-sm text-accent">04. What&apos;s Next?</p>
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">Get In Touch</h2>
          <p className="mb-8 text-lg leading-relaxed text-muted">
            I&apos;m always open to new opportunities, interesting projects, or just
            a friendly chat. Whether you have a question or just want to say hi,
            feel free to reach out.
          </p>
          <a
            href="mailto:zach@zmcguckin.com"
            className="inline-flex items-center gap-2 rounded-full border border-accent px-8 py-3 font-medium text-accent transition-all hover:bg-accent/10"
          >
            Say Hello
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="px-6 pb-8 pt-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
        <SocialLinks />
        <p className="font-mono text-xs text-muted/50">
          Built by Zach McGuckin
        </p>
      </div>
    </footer>
  );
}
