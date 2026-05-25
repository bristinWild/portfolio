import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Awards from "@/components/Awards";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Experience />
      <Awards />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
