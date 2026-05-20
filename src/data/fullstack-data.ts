export interface CourseModule {
  title: string;
  duration: string;
  topics: string[];
}

export interface Instructor {
  name: string;
  role: string;
  experience: string;
  company: string;
  image: string;
  specialties: string[];
  rating: number;
  students: number;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  company: string;
  salary: string;
}

export interface CourseFeature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface CourseData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  duration: string;
  batchSize: string;
  mode: string;
  fee: string;
  originalFee?: string;
  discount?: string;
  features: CourseFeature[];
  modules: CourseModule[];
  instructors: Instructor[];
  testimonials: Testimonial[];
  stats: {
    studentsPlaced: number;
    placementRate: number;
    averagePackage: string;
    hiringPartners: number;
  };
  whyChoose: string[];
  contactInfo: {
    address: string;
    phones: string[];
    emails: string[];
    officeHours: string[];
  };
}

export const fullStackCourseData: CourseData[] = [
  {
    slug: "FullStack",
    title: "Full Stack Development",
    subtitle: "Master MERN Stack & Modern Web Technologies",
    description: "Transform your career with our comprehensive Full Stack Developer course. Learn MERN Stack, React, Node.js from industry experts. 95% placement rate.",
    heroImage: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    duration: "6 Months",
    batchSize: "15-20 Students",
    mode: "Online & Offline",
    fee: "₹45,000",
    originalFee: "₹50,000",
    discount: "Save ₹5,000 if you enroll this month!",
    features: [
      {
        icon: "Code2",
        title: "Frontend Development",
        description: "Master React, Next.js, HTML5, CSS3, JavaScript ES6+, and modern UI frameworks",
        color: "from-blue-500 to-cyan-500"
      },
      {
        icon: "Server",
        title: "Backend Development", 
        description: "Learn Node.js, Express.js, REST APIs, GraphQL, and server-side architecture",
        color: "from-green-500 to-teal-500"
      },
      {
        icon: "Database",
        title: "Database Management",
        description: "Work with MongoDB, MySQL, PostgreSQL, and database design principles",
        color: "from-purple-500 to-pink-500"
      },
      {
        icon: "Globe",
        title: "Web Technologies",
        description: "Build responsive websites with modern web standards and best practices",
        color: "from-orange-500 to-red-500"
      },
      {
        icon: "Smartphone",
        title: "Mobile Development",
        description: "Create mobile apps with React Native and Progressive Web Apps (PWA)",
        color: "from-indigo-500 to-purple-500"
      },
      {
        icon: "Zap",
        title: "DevOps & Deployment",
        description: "Deploy applications using AWS, Docker, CI/CD pipelines, and cloud services",
        color: "from-yellow-500 to-orange-500"
      }
    ],
    modules: [
      {
        title: "Frontend Fundamentals",
        duration: "4 weeks",
        topics: [
          "HTML5 & Semantic Markup",
          "CSS3 & Advanced Styling",
          "JavaScript ES6+ Fundamentals",
          "DOM Manipulation",
          "Responsive Web Design",
          "CSS Frameworks (Bootstrap, Tailwind)"
        ]
      },
      {
        title: "React.js Development",
        duration: "6 weeks",
        topics: [
          "React Components & JSX",
          "State Management & Hooks",
          "React Router & Navigation",
          "Context API & Redux",
          "Testing React Applications",
          "Performance Optimization"
        ]
      },
      {
        title: "Backend Development",
        duration: "5 weeks",
        topics: [
          "Node.js & NPM",
          "Express.js Framework",
          "RESTful API Development",
          "Authentication & Authorization",
          "Middleware & Error Handling",
          "File Upload & Processing"
        ]
      },
      {
        title: "Database Management",
        duration: "3 weeks",
        topics: [
          "MongoDB & Mongoose",
          "Database Design Principles",
          "CRUD Operations",
          "Aggregation Pipeline",
          "Database Relationships",
          "Performance & Indexing"
        ]
      },
      {
        title: "Advanced Topics",
        duration: "4 weeks",
        topics: [
          "Next.js & Server-Side Rendering",
          "GraphQL & Apollo",
          "WebSocket & Real-time Apps",
          "Progressive Web Apps (PWA)",
          "Microservices Architecture",
          "API Integration & Third-party Services"
        ]
      },
      {
        title: "DevOps & Deployment",
        duration: "2 weeks",
        topics: [
          "Git & Version Control",
          "Docker Containerization",
          "AWS Cloud Services",
          "CI/CD Pipelines",
          "Production Deployment",
          "Monitoring & Analytics"
        ]
      }
    ],
    instructors: [
      {
        name: "Rajesh Kumar",
        role: "Senior Full Stack Developer",
        experience: "8+ Years",
        company: "Ex-Google, Microsoft",
        image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
        specialties: ["React.js", "Node.js", "AWS", "System Design"],
        rating: 4.9,
        students: 150
      },
      {
        name: "Priya Sharma",
        role: "Frontend Specialist",
        experience: "6+ Years",
        company: "Ex-Amazon, Flipkart",
        image: "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg",
        specialties: ["React.js", "Next.js", "TypeScript", "UI/UX"],
        rating: 4.8,
        students: 120
      },
      {
        name: "Arjun Reddy",
        role: "Backend Expert",
        experience: "7+ Years",
        company: "Ex-Uber, PayTM",
        image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg",
        specialties: ["Node.js", "MongoDB", "Microservices", "DevOps"],
        rating: 4.9,
        students: 130
      }
    ],
    testimonials: [
      {
        name: "Arun Krishnan",
        role: "Full Stack Developer at TCS",
        image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        content: "The course completely transformed my career. The instructors were exceptional, and the hands-on projects gave me the confidence to land my dream job. Highly recommended!",
        rating: 5,
        company: "TCS",
        salary: "₹8 LPA"
      },
      {
        name: "Sneha Patel",
        role: "React Developer at Infosys",
        image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
        content: "Best investment I made for my career. The curriculum is up-to-date with industry standards, and the placement support helped me secure a great position.",
        rating: 5,
        company: "Infosys",
        salary: "₹7.5 LPA"
      },
      {
        name: "Vikram Singh",
        role: "MERN Stack Developer at Wipro",
        image: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg",
        content: "From zero coding knowledge to landing a job in 6 months! The structured approach and mentor support made all the difference. Thank you HejexTechnology!",
        rating: 5,
        company: "Wipro",
        salary: "₹6.5 LPA"
      },
      {
        name: "Divya Raj",
        role: "Frontend Developer at Cognizant",
        image: "https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg",
        content: "Excellent course structure and amazing instructors. The projects helped me build a strong portfolio. Got placed within 2 months of completion!",
        rating: 5,
        company: "Cognizant",
        salary: "₹7 LPA"
      },
      {
        name: "Rahul Sharma",
        role: "Node.js Developer at HCL",
        image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg",
        content: "The practical approach to learning and real-world projects prepared me well for the industry. Great community and lifetime support!",
        rating: 5,
        company: "HCL",
        salary: "₹6.8 LPA"
      },
      {
        name: "Meera Nair",
        role: "Full Stack Developer at Accenture",
        image: "https://images.pexels.com/photos/3760809/pexels-photo-3760809.jpeg",
        content: "Outstanding course! The personalized attention and career guidance helped me transition from a non-tech background to a successful developer role.",
        rating: 5,
        company: "Accenture",
        salary: "₹8.2 LPA"
      }
    ],
    stats: {
      studentsPlaced: 500,
      placementRate: 95,
      averagePackage: "₹8.5L",
      hiringPartners: 15
    },
    whyChoose: [
      "Industry-relevant curriculum updated every 6 months",
      "Hands-on projects with real-world applications",
      "Dedicated placement assistance and career guidance",
      "Small batch sizes for personalized attention",
      "Lifetime access to course materials and updates"
    ],
    contactInfo: {
      address: "123 Tech Park, Anna Salai, Chennai, Tamil Nadu 600002",
      phones: ["+91 98765 43210", "+91 87654 32109"],
      emails: ["info@hejextech.com", "admissions@hejextech.com"],
      officeHours: ["Mon - Fri: 9:00 AM - 8:00 PM", "Sat - Sun: 10:00 AM - 6:00 PM"]
    }
  },
];