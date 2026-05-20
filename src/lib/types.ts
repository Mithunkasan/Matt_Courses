// export interface Course {
//   id: number
//   title: string
//   image: string
//   categories: string[]
//   lessons: number
//   duration: string
//   enrollments: number
//   price: string
//   path?: string
//   instructor: {
//     name: string
//     avatar: string
//   }
// }

// import path from "path";

// export const categoryOptions = [
//   "Software Courses",
//   "Hardware Courses",
//   "Technology Courses",
//   "Creative, Digital Courses",
  
// ]

// export const tagOptions = [
//   "Visual Studio Code",
//   "Adobe Photoshop",
//   "Adobe 3D",
//   "App Development",
//   "Graphic Design",
 
//   "Illustrations",
//   "JavaScript",
//   "PDF",
//   "UI Design",
//   "UX Design",
// ]

// export const levelOptions = ["All Levels", "Beginner", "Intermediate", "Expert"]
// export const priceOptions = ["Free", "Paid"]

// export const courses: Course[] = [
//   {
//     id: 1,
//     title: "Full Stack Development (MERN, MEAN, LAMP)",
//     image: "/image/f2.jpg",
//     categories: ["Software Courses","Visual Studio Code"],
//     lessons: 15,
//     duration: "1h 20m",
//     enrollments: 3,
//     price: "Free",
//     instructor: {
//       name: "Jane Doe",
//       avatar: "\logo.png",
//     },
//   path: "/courses/full-stack-development",
//   },


//    {
//     id: 2,
//     title: "Front-End Development",
//     image: "/image/f1.jpg",
//     categories: ["Software Courses","Visual Studio Code"],
//     lessons: 15,
//     duration: "1h 20m",
//     enrollments: 3,
//     price: "Free",
//     instructor: {
//       name: "Jane Doe",
//       avatar: "\logo.png",
//     },
//     path: "/courses/front-end-development",
//   },


//    {
//     id: 3,
//     title: "Back-End Development",
//     image: "/image/f4.jpg",
//     categories: ["Software Courses","Visual Studio Code"],
//     lessons: 15,
//     duration: "1h 20m",
//     enrollments: 3,
//     price: "Free",
//     instructor: {
//       name: "Jane Doe",
//       avatar: "\logo.png",
//     },
//     path: "/courses/python",
//   },

//   {
//     id: 4,
//     title: "Mobile App Development (Android, iOS)",
//     image: "/image/f5.jpg",
//     categories: ["Software Courses","Visual Studio Code"],
//     lessons: 15,
//     duration: "1h 20m",
//     enrollments: 3,
//     price: "Free",
//     instructor: {
//       name: "Jane Doe",
//       avatar: "\logo.png",
//     },
//     path: "/courses/mobile-app-development",
//   },

//   {
//     id: 5,
//     title: "UI/UX Design",
//     image: "/image/f1.jpg",
//     categories: ["Software Courses","Visual Studio Code","UI Design","UX Design"],
//     lessons: 15,
//     duration: "1h 20m",
//     enrollments: 3,
//     price: "Free",
//     instructor: {
//       name: "Jane Doe",
//       avatar: "\logo.png",
//     },
//     path: "/courses/uiux design",
//   },
  

//   {
//     id: 6,
//     title: "Manual Testing and Automation Testing",
//     image: "/image/f4.jpg",
//     categories: ["Software Courses","Visual Studio Code"],
//     lessons: 15,
//     duration: "1h 20m",
//     enrollments: 3,
//     price: "Free",
//     instructor: {
//       name: "Jane Doe",
//       avatar: "\logo.png",
//     },
//     path: "/courses/manual-automation-testing",
//   },



//   {
//     id: 7,
//     title: "Database Management",
//     image: "/image/f1.jpg",
//     categories: ["Software Courses","Visual Studio Code"],
//     lessons: 15,
//     duration: "1h 20m",
//     enrollments: 3,
//     price: "Free",
//     instructor: {
//       name: "Jane Doe",
//       avatar: "\logo.png",
//     },
//     path: "/courses/database-management",
//   },


//   {
//     id: 8,
//     title: "Data Structures and Algorithms",
//     image: "/image/f2.jpg",
//     categories: ["Software Courses","Visual Studio Code"],
//     lessons: 15,
//     duration: "1h 20m",
//     enrollments: 3,
//     price: "Free",
//     instructor: {
//       name: "Jane Doe",
//       avatar: "\logo.png",
//     },
//     path: "/courses/data-structures-algorithms",
//   },

//   {
//     id: 9,
//     title: "Blockchain Development",
//     image: "/image/f4.jpg",
//     categories: ["Software Courses","Visual Studio Code"],
//     lessons: 15,
//     duration: "1h 20m",
//     enrollments: 3,
//     price: "Free",
//     instructor: {
//       name: "Jane Doe",
//       avatar: "\logo.png",
//     },
//     path: "/courses/blockchain-development",
//   },


//   {
//     id: 10,
//     title: "IT Project Management",
//     image: "/image/f3.jpg",
//     categories: ["Software Courses","Visual Studio Code"],
//     lessons: 15,
//     duration: "1h 20m",
//     enrollments: 3,
//     price: "Free",
//     instructor: {
//       name: "Jane Doe",
//       avatar: "\logo.png",
//     },
//     path: "/courses/it-project-management",
//   },
//   {
//     id: 11,
//     title: "Embedded Systems Programming",
//     image: "/image/f2.jpg",
//     categories: ["Hardware Courses"],
//     lessons: 15,
//     duration: "1h 20m",
//     enrollments: 3,
//     price: "Free",
//     instructor: {
//       name: "Jane Doe",
//       avatar: "\logo.png",
//     },
//     path: "/courses/embedded-systems-programming",
//   },
//   {
//     id: 12,
//     title: "VLSI (Very-Large-Scale Integration)",
//     image: "/image/f1.jpg",
//     categories: ["Hardware Courses"],
//     lessons: 15,
//     duration: "1h 20m",
//     enrollments: 3,
//     price: "Free",
//     instructor: {
//       name: "Jane Doe",
//       avatar: "\logo.png",
//     },
//     path: "/courses/vlsi",
//   },
//   {
//     id: 13,
//     title: "Electronics and Communication",
//     image: "/image/f2.jpg",
//     categories: ["Hardware Courses"],
//     lessons: 15,
//     duration: "1h 20m",
//     enrollments: 3,
//     price: "Free",
//     instructor: {
//       name: "Jane Doe",
//       avatar: "\logo.png",
//     },
//     path: "/courses/electronics-communication",
//   },
//   {
//     id: 14,
//     title: "IoT Hardware Development",
//     image: "/image/f3.jpg",
//     categories: ["Hardware Courses"],
//     lessons: 15,
//     duration: "1h 20m",
//     enrollments: 3,
//     price: "Free",
//     instructor: {
//       name: "Jane Doe",
//       avatar: "\logo.png",
//     },
//     path: "/courses/iot-hardware-development",
//   },
//   {
//     id: 15,
//     title: "Network Engineering with Hardware",
//     image: "/image/f4.jpg",
//     categories: ["Hardware Courses"],
//     lessons: 15,
//     duration: "1h 20m",
//     enrollments: 3,
//     price: "Free",
//     instructor: {
//       name: "Jane Doe",
//       avatar: "\logo.png",
//     },
//     path: "/courses/network-engineering-hardware",
//   },
//   {
//     id: 16,
//     title: "Hardware and Network Security",
//     image: "/image/f5.jpg",
//     categories: ["Hardware Courses"],
//     lessons: 15,
//     duration: "1h 20m",
//     enrollments: 3,
//     price: "Free",
//     instructor: {
//       name: "Jane Doe",
//       avatar: "\logo.png",
//     },
//     path: "/courses/hardware-network-security",
//   },
//   {
//     id: 17,
//     title: "Robotics (Core & Advanced)",
//     image: "/image/f1.jpg",
//     categories: ["Technology Courses"],
//     lessons: 15,
//     duration: "1h 20m",
//     enrollments: 3,
//     price: "Free",
//     instructor: {
//       name: "Jane Doe",
//       avatar: "\logo.png",
//     },
//     path: "/courses/robotics-core-advanced",
//   },
//   {
//     id: 18,
//     title: "Augmented Reality (AR)",
//     image: "/image/f2.jpg",
//     categories: ["Technology Courses"],
//     lessons: 15,
//     duration: "1h 20m",
//     enrollments: 3,
//     price: "Free",
//     instructor: {
//       name: "Jane Doe",
//       avatar: "\logo.png",
//     },
//     path: "/courses/augmented-reality",
//   },
//   {
//     id: 19,
//     title: "Virtual Reality (VR)",
//     image: "/image/f3.jpg",
//     categories: ["Technology Courses"],
//     lessons: 15,
//     duration: "1h 20m",
//     enrollments: 3,
//     price: "Free",
//     instructor: {
//       name: "Jane Doe",
//       avatar: "\logo.png",
//     },
//     path: "/courses/virtual-reality",
//   },
//   {
//     id: 20,
//     title: "Automation Engineering",
//     image: "/image/f4.jpg",
//     categories: ["Technology Courses"],
//     lessons: 15,
//     duration: "1h 20m",
//     enrollments: 3,
//     price: "Free",
//     instructor: {
//       name: "Jane Doe",
//       avatar: "\logo.png",
//     },
//     path: "/courses/automation-engineering",
//   },
//   {
//     id: 21,
//     title: "Artificial Intelligence (Full Spectrum)",
//     image: "/image/f5.jpg",
//     categories: ["Technology Courses"],
//     lessons: 15,
//     duration: "1h 20m",
//     enrollments: 3,
//     price: "Free",
//     instructor: {
//       name: "Jane Doe",
//       avatar: "\logo.png",
//     },
//     path: "/courses/artificial-intelligence",
//   },
//   {
//     id: 22,
//     title: "Video Editing",
//     image: "/image/f1.jpg",
//     categories: ["Creative, Digital Courses"],
//     lessons: 15,
//     duration: "1h 20m",
//     enrollments: 3,
//     price: "Free",
//     instructor: {
//       name: "Jane Doe",
//       avatar: "\logo.png",
//     },
//     path: "/courses/video-editing",
//   },
//   {
//     id: 23,
//     title: "Content Creation",
//     image: "/image/f2.jpg",
//     categories: ["Creative, Digital Courses"],
//     lessons: 15,
//     duration: "1h 20m",
//     enrollments: 3,
//     price: "Free",
//     instructor: {
//       name: "Jane Doe",
//       avatar: "\logo.png",
//     },
//     path: "/courses/content-creation",
//   },
//   {
//     id: 24,
//     title: "Data Analysis",
//     image: "/image/f3.jpg",
//     categories: ["Creative, Digital Courses"],
//     lessons: 15,
//     duration: "1h 20m",
//     enrollments: 3,
//     price: "Free",
//     instructor: {
//       name: "Jane Doe",
//       avatar: "\logo.png",
//     },
//     path: "/courses/data-analysis",
//   },
//   {
//     id: 25,
//     title: "Research Analyst Training",
//     image: "/image/f4.jpg",
//     categories: ["Creative, Digital Courses"],
//     lessons: 15,
//     duration: "1h 20m",
//     enrollments: 3,
//     price: "Free",
//     instructor: {
//       name: "Jane Doe",
//       avatar: "\logo.png",
//     },
//     path: "/courses/research-analyst-training",
//   },
//   {
//     id: 26,
//     title: "Digital Marketing",
//     image: "/image/f5.jpg",
//     categories: ["Creative, Digital Courses"],
//     lessons: 15,
//     duration: "1h 20m",
//     enrollments: 3,
//     price: "Free",
//     instructor: {
//       name: "Jane Doe",
//       avatar: "\logo.png",
//     },
//     path: "/courses/digital-marketing",
//   },

//   // ... rest of the courses data
// ]


export const courses = [
  { id: 1, title: "Python Fullstack Development", categories: ["Software Courses"], image: "/image/python.png" , path: "/courses/python-fullstack-development" }, ,
  { id: 2, title: "Java Fullstack Development", categories: ["Software Courses"], image: "/image/java.png", path: "/courses/java-fullstack-development" },
  {
    id: 3,
    title: "Mobile App Development",
    categories: ["Software Courses"],
    image: "/placeholder.svg?height=40&width=40",
  },
  { id: 4, title: "Cloud Computing", categories: ["Technology Courses"], image: "/placeholder.svg?height=40&width=40" },
  { id: 5, title: "Cybersecurity", categories: ["Security"], image: "/placeholder.svg?height=40&width=40" },
  {
    id: 6,
    title: "Machine Learning",
    categories: ["Data & machine learning"],
    image: "/placeholder.svg?height=40&width=40",
  },
  { id: 7, title: "DevOps", categories: ["IT Ops"], image: "/placeholder.svg?height=40&width=40" },
  {
    id: 8,
    title: "Artificial Intelligence",
    categories: ["Artificial Intelligence"],
    image: "/placeholder.svg?height=40&width=40",
  },
]


