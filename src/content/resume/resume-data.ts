import type { Experience } from "@/types/experience";

export const resumeData = {
  name: "Prathmesh Kanekar",
  title: "Full Stack Developer",
  email: "prathmeshkanekar2002@gmail.com",
  location: "Kolhapur, Maharashtra, India",
  summary:
    "Full Stack Developer with ~1+ year of professional experience building enterprise software and banking domain applications using Angular 17, ASP.NET Core Web API, C#, and SQL Server.",

  experience: [
    {
      company: "SaniSoft Infotech Pvt. Ltd.",
      role: "Software Developer",
      startDate: "08/2023",
      endDate: "01/2024",
      highlights: [
        "Architected enterprise banking modules including customer onboarding and financial transaction workflows.",
        "Built reactive Angular V15+ interfaces with Angular Material data tables, forms, and custom modal dialogs.",
        "Engineered ASP.NET Core RESTful Web APIs with Dapper and Entity Framework for high-throughput database reads.",
        "Wrote normalized SQL Server schemas, stored procedures, and authorization checker workflows."
      ],
      stack: ["Angular", "ASP.NET Core", "C#", "SQL Server", "Dapper", "TypeScript"]
    },
    {
      company: "iGAP Technologies Pvt. Ltd.",
      role: "Trainee Developer / Intern",
      startDate: "01/2023",
      endDate: "07/2023",
      highlights: [
        "Mastered full stack fundamentals across HTML5, CSS3, Bootstrap, JavaScript, and TypeScript.",
        "Built single-page application (SPA) frontends in Angular integrated with backend REST services.",
        "Developed C# .NET Core Web API endpoints connecting to MySQL and MS SQL databases."
      ],
      stack: ["Angular", "TypeScript", "C#", ".NET Core", "MySQL", "MS SQL", "Bootstrap"]
    }
  ] as Experience[],

  education: [
    {
      institution: "Sanjeevan Group of Institutions, Panhala, Kolhapur",
      degree: "B.Tech in Computer Science Engineering",
      year: "08/2023–Present"
    },
    {
      institution: "Institute of Civil & Rural Engineering (ICRE), Gargoti",
      degree: "Diploma in Computer Engineering (81.03%)",
      year: "2019–2022"
    }
  ],

  certifications: [
    {
      name: "Programming in Python",
      issuer: "NPTEL",
      date: "01/04/2024"
    },
    {
      name: ".NET Full Stack Development Using Angular",
      issuer: "iGAP Technologies",
      date: "17/07/2023"
    }
  ],

  skills: {
    frontend: [
      "Angular 17",
      "TypeScript",
      "JavaScript",
      "HTML5/CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "GSAP"
    ],
    backend: [
      "ASP.NET Core Web API",
      "C#",
      "REST APIs",
      "Dapper",
      "JWT Authentication",
      "API Security"
    ],
    database: [
      "SQL Server",
      "PostgreSQL",
      "PostGIS",
      "SQL Optimization",
      "Stored Procedures",
      "Transactions",
      "Database Design"
    ],
    devopsCloud: [
      "Docker",
      "Azure",
      "IIS",
      "Git/GitHub",
      "CI/CD concepts",
      "Load/Performance Testing",
      "k6"
    ],
    other: [
      "Flutter",
      "Node.js",
      "Next.js",
      "Redis",
      "Microservices concepts",
      "System Design"
    ]
  }
};
