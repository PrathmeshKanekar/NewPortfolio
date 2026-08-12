import type { Experience } from "@/types/experience";

export const resumeData = {
  name: "Prathmesh Kanekar",
  title: "Full Stack Software Engineer",
  email: "hello@prathmeshkanekar.in",
  location: "India",
  summary:
    "A Full Stack Software Engineer working in enterprise banking software, with experience across frontend development, backend API development, relational databases, application architecture, and deployment.",

  experience: [
    {
      company: "Three Star Infotech Pvt. Ltd.",
      role: "Full Stack Software Engineer",
      startDate: "Unknown",
      endDate: "Present",
      highlights: [
        "Customer management and Account management modules",
        "Account request, Nominee management, and Joint holder workflows",
        "Guarantor workflows and Freeze/unfreeze workflows",
        "Authorization workflows and Financial transaction modules",
        "Database design and performance optimization using SQL Server"
      ],
      stack: ["Angular", "ASP.NET Core", "C#", "SQL Server", "Dapper"]
    }
  ] as Experience[],

  education: [
    {
      institution: "Sanjeevan Group of Institutions, Panhala, Kolhapur",
      degree: "Computer Science Engineering",
      year: "Started 2023"
    },
    {
      institution: "Institute of Civil & Rural Engineering, Gargoti",
      degree: "Diploma in Computer Engineering",
      year: "2018–2022"
    }
  ],

  certifications: [
    {
      name: "Programming in Python",
      issuer: "NPTEL",
      date: "01/04/2024"
    },
    {
      name: ".NET Full Stack Using Angular",
      issuer: "Unknown",
      date: "17/07/2023"
    }
  ],

  skills: {
    languages: [
      { name: "C#", proficiency: "Primary", level: 100 },
      { name: "TypeScript", proficiency: "Primary", level: 100 },
      { name: "JavaScript", proficiency: "Professional", level: 80 },
      { name: "Python", proficiency: "Working Knowledge", level: 60 },
      { name: "C", proficiency: "Learning", level: 40 },
      { name: "C++", proficiency: "Learning", level: 40 },
      { name: "Java", proficiency: "Learning", level: 40 }
    ],
    frontend: [
      { name: "Angular", proficiency: "Primary", level: 100 },
      { name: "TypeScript", proficiency: "Primary", level: 100 },
      { name: "React", proficiency: "Professional", level: 80 },
      { name: "Next.js", proficiency: "Working Knowledge", level: 60 },
      { name: "JavaScript", proficiency: "Professional", level: 80 },
      { name: "HTML5", proficiency: "Professional", level: 80 },
      { name: "CSS3", proficiency: "Professional", level: 80 },
      { name: "Tailwind CSS", proficiency: "Professional", level: 80 },
      { name: "Bootstrap", proficiency: "Professional", level: 80 }
    ],
    backend: [
      { name: "ASP.NET Core Web API", proficiency: "Primary", level: 100 },
      { name: "C#", proficiency: "Primary", level: 100 },
      { name: "REST APIs", proficiency: "Primary", level: 100 },
      { name: "Entity Framework Core", proficiency: "Professional", level: 80 },
      { name: "Dapper", proficiency: "Professional", level: 80 }
    ],
    databases: [
      { name: "Microsoft SQL Server", proficiency: "Primary", level: 100 },
      { name: "PostgreSQL", proficiency: "Primary", level: 100 },
      { name: "MySQL", proficiency: "Professional", level: 80 },
      { name: "SQLite", proficiency: "Working Knowledge", level: 60 }
    ],
    cloudDevOps: [
      { name: "Docker", proficiency: "Primary", level: 100 },
      { name: "Azure", proficiency: "Primary", level: 100 },
      { name: "Git", proficiency: "Professional", level: 80 },
      { name: "GitHub", proficiency: "Professional", level: 80 }
    ],
    architecture: [
      { name: "REST API Design", proficiency: "Primary", level: 100 },
      { name: "Database Design", proficiency: "Primary", level: 100 },
      { name: "Authentication", proficiency: "Professional", level: 80 },
      { name: "Authorization", proficiency: "Professional", level: 80 },
      { name: "Enterprise Application Development", proficiency: "Primary", level: 100 },
      { name: "System Design", proficiency: "Professional", level: 80 },
      { name: "SaaS Architecture", proficiency: "Professional", level: 80 },
      { name: "Performance Optimization", proficiency: "Professional", level: 80 }
    ],
    tools: [
      { name: "AI-assisted Development", proficiency: "Professional", level: 80 },
      { name: "AI-powered Product Development", proficiency: "Professional", level: 80 }
    ]
  },
};
