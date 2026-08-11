import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { getAllProjects } from "@/content/projects/projects-data";
import { ISR_REVALIDATE_SECONDS } from "@/lib/constants";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies of enterprise-grade systems — from banking platforms to healthcare solutions and commerce architectures.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <section className="py-24 md:py-32" aria-labelledby="projects-heading">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          heading="All Projects"
          description="Enterprise systems I've designed, built, and shipped."
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
