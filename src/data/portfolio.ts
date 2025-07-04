export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  sourceCode?: string;
  liveDemo?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'other';
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}

export const personalInfo = {
  name: "Thato Mmadi",
  title: "Full Stack Developer",
  currentPosition: "Senior Software Developer II",
  email: "tpmmadi@gmail.com",
  phone: "078 333 1417",
  location: "South Africa",
  about: "I am a qualified software engineer and internationally certified Oracle Java 8 SE developer with experience in building web applications using modern technologies. I enjoy solving complex problems and creating intuitive user experiences.",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/Mojasagwe",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/tpmmadi",
      icon: "linkedin"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/thatommadi",
      icon: "twitter"
    }
  ] as SocialLink[]
};

export const projects: Project[] = [
  {
    id: "taxiranklocatorbackend",
    title: "Taxi Rank Locator Backend",
    description: "A Spring Boot application for managing taxi ranks, routes, and users. Features include user management, route management, rank management, and security with Spring Security.",
    image: "/taxilocator.jpg",
    tags: ["Java", "Spring Boot", "Spring Security", "H2 Database", "JPA"],
    sourceCode: "https://github.com/Mojasagwe/taxiranklocatorbackend",
    liveDemo: "https://taxiranklocator-backend.herokuapp.com/"
  },
  {
    id: "taxiRankApp",
    title: "Taxi Rank Mobile App",
    description: "A React Native mobile application that helps users locate taxi ranks, view routes, and get transportation information. This frontend app connects to the Taxi Rank Locator Backend.",
    image: "/taxifrontend.png",
    tags: ["React Native", "TypeScript", "Mobile App", "JavaScript"],
    sourceCode: "https://github.com/Mojasagwe/taxiRankApp"
  },
  {
    id: "tasty2",
    title: "Couteux Restaurant Website",
    description: "An elegant restaurant website featuring menu items, event booking, gallery, and reservation system. The site showcases gourmet dishes, upcoming events, and provides a sophisticated dining experience.",
    image: "/resturant.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Restaurant"],
    sourceCode: "https://github.com/Mojasagwe/tasty2",
    liveDemo: "https://mojasagwe.github.io/tasty1/"
  },
  {
    id: "JsonParserTemplate",
    title: "JSON Parser Template",
    description: "A template for parsing and processing JSON data with support for complex data structures and validation. Useful for handling API responses and data transformation.",
    image: "/JSON-icon-2.jpg",
    tags: ["Java", "JSON", "Parser", "API", "Template"],
    sourceCode: "https://github.com/Mojasagwe/JsonParserTemplate"
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: "HTML/CSS", level: 5, category: "frontend" },
  { name: "JavaScript", level: 5, category: "frontend" },
  { name: "TypeScript", level: 4, category: "frontend" },
  { name: "React", level: 4, category: "frontend" },
  { name: "React Native", level: 4, category: "frontend" },
  { name: "Next.js", level: 4, category: "frontend" },
  { name: "Tailwind CSS", level: 4, category: "frontend" },
  { name: "Bootstrap", level: 4, category: "frontend" },
  
  // Backend
  { name: "Java", level: 5, category: "backend" },
  { name: "Spring Boot", level: 4, category: "backend" },
  { name: "Spring (Core, MVC, Data)", level: 4, category: "backend" },
  { name: "Node.js", level: 4, category: "backend" },
  { name: "Salesforce", level: 4, category: "backend" },
  { name: "MuleSoft", level: 4, category: "backend" },
  { name: "REST API", level: 4, category: "backend" },
  { name: "SOAP API", level: 3, category: "backend" },
  { name: "Hibernate/JPA", level: 4, category: "backend" },
  { name: "RabbitMQ", level: 3, category: "backend" },
  { name: "Synatic", level: 3, category: "backend" },
  
  // Databases
  { name: "PostgreSQL", level: 4, category: "backend" },
  { name: "MySQL", level: 4, category: "backend" },
  { name: "SQL", level: 4, category: "backend" },
  { name: "SOQL", level: 3, category: "backend" },
  { name: "MongoDB", level: 3, category: "backend" },
  
  // DevOps & Cloud
  { name: "AWS (EC2, S3, Lambda, SQS)", level: 3, category: "other" },
  { name: "Azure", level: 3, category: "other" },
  { name: "Docker", level: 3, category: "other" },
  { name: "Git", level: 4, category: "other" },
  { name: "GitHub Actions", level: 3, category: "other" },
  { name: "CI/CD Pipelines", level: 3, category: "other" },
  { name: "Apache Tomcat", level: 3, category: "other" },
  
  // Testing & Tools
  { name: "JUnit", level: 4, category: "other" },
  { name: "Mockito", level: 3, category: "other" },
  { name: "Gradle", level: 3, category: "other" },
  { name: "Jira", level: 4, category: "other" },
  { name: "Confluence", level: 4, category: "other" },
  { name: "Postman", level: 4, category: "other" },
  { name: "Xcode", level: 3, category: "other" },
  { name: "Android Studio", level: 3, category: "other" },
  
  // Methodologies
  { name: "Agile/Scrum", level: 4, category: "other" },
  { name: "Kanban", level: 3, category: "other" },
  { name: "Game Development", level: 3, category: "other" }
];

export const experiences: Experience[] = [
  {
    title: "Senior Software Engineer II",
    company: "Old Mutual Insure",
    location: "South Africa",
    startDate: "August 2025",
    endDate: "Present",
    description: [
      "Recently joined as Senior Software Engineer II"
    ]
  },
  {
    title: "Java & Salesforce Developer and Integration Specialist",
    company: "Exah",
    location: "South Africa",
    startDate: "2023",
    endDate: "May 2025",
    description: [
      "Developed scalable backend solutions using both Java (Spring Boot) and Salesforce (Apex).",
      "Designed and maintained Salesforce custom objects, flows, and LWC components.",
      "Built RESTful and SOAP-based APIs to integrate Salesforce and external Java services.",
      "Delivered clean, maintainable, and high-performing code for multi-platform applications.",
      "Implemented backend logic using Spring Framework (Core, MVC, Data) for business process automation.",
      "Collaborated with cross-functional teams to understand requirements and deliver full-stack solutions."
    ]
  },
  {
    title: "Salesforce Developer and Integration Specialist",
    company: "Tetrad Group",
    location: "South Africa",
    startDate: "2022",
    endDate: "2023",
    description: [
      "Developed code to integrate systems using REST APIs to fetch data from Java-based systems.",
      "Utilized Synatic middleware to automate data flow between systems.",
      "Participated in daily standups and adhered to Agile Scrum methodologies.",
      "Ensured seamless integration by coordinating between Salesforce and backend systems."
    ]
  },
  {
    title: "Java Fullstack Developer",
    company: "Zensar Technologies",
    location: "South Africa",
    startDate: "2020",
    endDate: "2022",
    description: [
      "Designed and maintained server-side applications using Java and Spring Boot.",
      "Developed user-friendly web interfaces and responsive UIs.",
      "Implemented database integration and data access layers (PostgreSQL, SQL).",
      "Built CI/CD pipelines and managed automation using GitHub Actions.",
      "Managed AWS resources including EC2, S3, Lambda, and SQS.",
      "Contributed to scalable, high-performance software solutions with Docker containerization."
    ]
  }
];

export const education: Education[] = [
  {
    degree: "Advanced Diploma in Computer Science",
    institution: "Tshwane University of Technology",
    location: "South Africa",
    startDate: "2023",
    endDate: "In Progress (2025)",
    description: "Advancing knowledge in advanced computer science concepts and specialized areas of software development."
  },
  {
    degree: "Diploma in Software Development",
    institution: "Tshwane University of Technology",
    location: "South Africa",
    startDate: "2017",
    endDate: "2021",
    description: "Focused on software engineering, web development, and database management."
  },
  {
    degree: "National Senior Certificate",
    institution: "Hoërskool Lydenburg",
    location: "South Africa",
    startDate: "2008",
    endDate: "2012"
  }
];

export const certifications: Certification[] = [
  {
    name: "Salesforce Certified AI Associate",
    issuer: "Salesforce",
    date: "October 2024"
  },
  {
    name: "Salesforce Certified Platform App Builder",
    issuer: "Salesforce",
    date: "May 2024"
  },
  {
    name: "Salesforce Certified Platform Developer I",
    issuer: "Salesforce",
    date: "January 2023",
    credentialId: "2917970"
  },
  {
    name: "MuleSoft Certified Developer",
    issuer: "Salesforce",
    date: "July 2023",
    credentialId: ""
  },
  {
    name: "CompTIA Cloud+ CE Certification",
    issuer: "CompTIA",
    date: "May 2022"
  },
  {
    name: "Oracle Certified Associate, Java SE 8 Programmer",
    issuer: "Oracle",
    date: "December 2021",
    credentialId: "1Z0-808"
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "April 2021"
  }
]; 