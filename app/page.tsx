import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AppShowcase from "@/components/AppShowcase";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact, { Footer } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <AppShowcase />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
