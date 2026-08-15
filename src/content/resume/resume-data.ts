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
      company: "Three Star Infotech Pvt. Ltd.",
      role: "Full Stack Developer",
      startDate: "11/2024",
      endDate: "Present",
      highlights: [
        "Architecting enterprise core banking software modules, joint holder protocols, and secure maker-checker workflows.",
        "Developing component-driven Angular 17 frontends integrated with ASP.NET Core Web APIs and SQL Server databases."
      ],
      stack: ["Angular 17", "ASP.NET Core", "C#", "SQL Server", "JWT", "Docker"]
    },
    {
      company: "SaniSoft Infotech Pvt. Ltd.",
      role: "Software Developer",
      startDate: "08/2023",
      endDate: "01/2024",
      highlights: [
        "Built enterprise customer management systems with reactive Angular interfaces and Angular Material components.",
        "Engineered high-throughput ASP.NET Core Web APIs using Dapper ORM and optimized SQL Server procedures."
      ],
      stack: ["Angular", "ASP.NET Core", "C#", "SQL Server", "Dapper"]
    },
    {
      company: "iGAP Technologies Pvt. Ltd.",
      role: "Trainee Developer",
      startDate: "01/2023",
      endDate: "07/2023",
      highlights: [
        "Developed single-page application (SPA) frontends in Angular connected to .NET Core Web API services.",
        "Created RESTful endpoints and managed database interactions across MS SQL and MySQL environments."
      ],
      stack: ["Angular", "TypeScript", "C#", ".NET Core", "MS SQL"]
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
