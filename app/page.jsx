import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import MLSkills from "../components/MLSkills";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Creative from "../components/Creative";
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Background />
      <Navbar />
      <Hero />
      <Projects />
      <MLSkills />
      <Education />
      <Contact />
      <Creative />
      <footer className="py-8 text-center font-mono text-xs text-gray-500">
        © {new Date().getFullYear()} Maleesha Piyumini Pathirana
      </footer>
    </main>
  );
}
