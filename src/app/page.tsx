import Hero from "@/components/ui/Hero";
import SkillsSection from "@/components/ui/SkillsSection";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Hero />
      
      <SkillsSection />
      
      {/* Featured Projects Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Projects</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Check out some of my recent work
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
