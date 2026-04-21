export const projects = [
  {
    id: 1,
    featured: true,
    title: "PeerWork",
    description: "Classroom-scoped project discovery platform for Indian college students. Browse and publish projects filtered by college → branch → year → section. Features JWT auth, Google OAuth 2.0, OTP verification, and GitHub repo auto-analysis for tech stack detection.",
    tags: ["React 19", "Spring Boot", "PostgreSQL", "JWT", "Google OAuth"],
    logos: ["react", "spring", "postgresql", "java", "tailwindcss"],
    github: null,
    live: null
  },
  {
    id: 2,
    featured: false,
    title: "Employee Management System",
    description: "Full-stack Employee Management System with Angular + Spring Boot + PostgreSQL, featuring dynamic PDF report generation via JasperReports. Supports paginated CRUD, bulk export, and DB migrations with Flyway.",
    tags: ["Angular", "Spring Boot", "PostgreSQL", "Java", "JasperReports"],
    logos: ["angular", "spring", "postgresql", "java"],
    github: "https://github.com/Shivamirji36/Employee-Management-System",
    live: "https://fullstack-employee-ms.vercel.app/"
  },
  {
    id: 3,
    featured: false,
    title: "AI Integrated Full Stack Chatbot",
    description: "Full-featured chatbot platform with Spring Boot backend, MongoDB persistence, JWT auth, and GROQ API (mixtral-8x7b) for AI-powered responses. Secure REST API with BCrypt password hashing and CORS.",
    tags: ["Spring Boot", "MongoDB", "Groq API", "Java", "JavaScript"],
    logos: ["spring", "mongodb", "java", "javascript"],
    github: "https://github.com/Shivamirji36/Full-Stack-Chatbot",
    live: "https://full-stack-chatbot-dun.vercel.app/"
  }
]
