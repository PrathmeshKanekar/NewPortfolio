import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { getAllProjects } from "@/content/projects/projects-data";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies of applications and systems — from attendance platforms to management solutions.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <section className="py-24 md:py-32" aria-labelledby="projects-heading">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          heading="All Projects"
          description="Systems I've designed, built, and shipped."
          id="projects-heading"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
