import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import type { Metadata } from "next"
import { enableBlogSection, enableProjectsSection } from "@/lib/utils"
import Skills from "@/components/skills"

export const metadata: Metadata = {
  title: "Vivek Jadaun | Senior Software Engineer",
  description:
    "Portfolio of Vivek Jadaun, a Senior Software Engineer specializing in JavaScript, TypeScript, React.js, Node.js, Laravel, and AWS.",
};

export default function Home() {
  const showProjects = enableProjectsSection();
  const showBlog = enableBlogSection();
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Experience />
      <Skills />
      {showProjects && <Projects />}
      <Education />
      {showBlog && <Blog />}
      <Contact />
    </div>
  );
}
