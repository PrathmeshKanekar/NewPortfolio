import { Hero } from "@/components/sections/Hero";
import { ProfessionalSnapshot } from "@/components/sections/ProfessionalSnapshot";
import { SkillsOverview } from "@/components/sections/SkillsOverview";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Experience } from "@/components/sections/Experience";
import { EngineeringCapabilities } from "@/components/sections/EngineeringCapabilities";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { getFeaturedProjects } from "@/content/projects/projects-data";

export const revalidate = 3600;

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "https://prathmeshkanekar.in/#website",
                "url": "https://prathmeshkanekar.in/",
                "name": "Prathmesh Kanekar",
                "description": "Full Stack Software Engineer focused on building secure, scalable enterprise applications and banking software.",
                "publisher": {
                  "@id": "https://prathmeshkanekar.in/#person"
                }
              },
              {
                "@type": "Person",
                "@id": "https://prathmeshkanekar.in/#person",
                "name": "Prathmesh Kanekar",
                "url": "https://prathmeshkanekar.in/",
                "jobTitle": "Full Stack Software Engineer",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Three Star Infotech Pvt. Ltd."
                },
                "sameAs": [
                  "https://github.com/prathmeshkanekar",
                  "https://www.linkedin.com/in/prathmesh-kanekar"
                ]
              }
            ]
          }),
        }}
      />
      <Hero />
      <ProfessionalSnapshot />
      <SkillsOverview />
      <FeaturedProjects projects={featuredProjects} />
      <Experience />
      <EngineeringCapabilities />
      <ClosingCTA />
    </>
  );
}
