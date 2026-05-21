import type { Course } from "@/types/course"

const courses: Course[] = [
  {
    id: "1",
    slug: "python-fullstack-development",
    title: "Python Fullstack Development",
    description:
      "Master data analytics with Python and create stunning visualizations with Power BI. Transform raw data into actionable business insights.",
    duration: "4 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 1500,
    admissionFee: "1000",
    learningOutcome:
      "Our comprehensive Python Data Analytics with Power BI program equips you with in-demand skills through hands-on training. From Python fundamentals and SQL to advanced data analysis techniques and Power BI dashboarding, our 4-month curriculum is designed by industry experts to fast-track your career in data analytics. With NACTET and IAO certifications plus our 100% job placement assistance, you'll be ready to excel in today's data-driven job market.",
    keySkills: [
      "Python Programming Fundamentals",
      "Data Analysis with Pandas & NumPy",
      "SQL Database Management",
      "Power BI Dashboard Creation",
      "Data Visualization Techniques",
      "Statistical Analysis",
      "Machine Learning Basics",
      "Business Intelligence Reporting",
    ],
    modules: [
      {
        title: "Python Fundamentals",
        description: "Learn Python basics, data types, control structures, and functions",
        duration: "3 weeks",
      },
      {
        title: "Data Analysis with Python",
        description: "Master Pandas, NumPy, and data manipulation techniques",
        duration: "4 weeks",
      },
      {
        title: "SQL and Database Management",
        description: "Database design, queries, and data extraction techniques",
        duration: "3 weeks",
      },
      {
        title: "Power BI Mastery",
        description: "Create interactive dashboards and business intelligence reports",
        duration: "4 weeks",
      },
      {
        title: "Advanced Analytics",
        description: "Statistical analysis, machine learning, and predictive modeling",
        duration: "2 weeks",
      },
    ],
    features: [
      {
        title: "Industry Expert Trainers",
        description: "Learn from professionals with 10+ years of experience",
      },
      {
        title: "Hands-on Projects",
        description: "Work on real-world projects to build your portfolio",
      },
      {
        title: "Doubt Clarification",
        description: "Dedicated doubt clarification sessions",
      },
      {
        title: "Certification",
        description: "Get NACTET and IAO certified upon course completion",
      },
      {
        title: "Career Support",
        description: "Resume building, interview preparation, and career guidance",
      },
    ],
    trainers: [
      {
        name: "Azharuddin",
        designation: "Project Manager",
        experience: "10+ years in python development and Power BI",
      },
      {
        name: "Surya Sarath",
        designation: "Python Developer",
        experience: "10+ years in Data Analytics and Business Intelligence",
      },
      {
        name: "Chandru",
        designation: "Fullstack Developer",
        experience: "8+ Years in Web Development",
      },
    ],
    reviews: [
      {
        name: "Arjun",
        rating: 5,
        comment:
          "Excellent course structure and practical approach. Got placed in a top MNC within 2 months of completion. The trainers are amazing!",
      },
      {
        name: "Sneha",
        rating: 5,
        comment:
          "The hands-on projects really helped me understand the concepts better. The Power BI training was exceptional and very industry-relevant.",
      },
      {
        name: "Karthik",
        rating: 5,
        comment:
          "Great learning experience with excellent placement support. The certification from NACTET really helped me stand out in interviews.",
      },
    ],
  },
  {
    id: "2",
    slug: "Mern-stack",
    title: "MERN Stack Development",
    description:
      "Build dynamic, high-performance web applications using MongoDB, Express.js, React.js, and Node.js. Master fullstack javascript development.",
    duration: "7 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 1800,
    admissionFee: "1000",
    learningOutcome:
      "Master modern web development using the highly popular MERN (MongoDB, Express.js, React, Node.js) stack. Build highly responsive user interfaces with React, develop robust APIs with Express and Node, and manage highly scalable databases with MongoDB. Walk away with live projects, certification, and 100% placement support.",
    keySkills: [
      "ReactJS UI Development",
      "NodeJS & Express Backend APIs",
      "MongoDB & Mongoose Database",
      "State Management with Redux Toolkit",
      "RESTful API Integration",
      "Tailwind CSS & Styling",
      "Git & Production Deployment",
    ],
    modules: [
      {
        title: "Frontend Fundamentals",
        description: "HTML5, CSS3, Tailwind CSS, JavaScript ES6+, DOM manipulation",
        duration: "4 weeks",
      },
      {
        title: "React.js Mastery",
        description: "React JSX, Components, Hooks, State management, Redux Toolkit, Routing",
        duration: "8 weeks",
      },
      {
        title: "Node.js & Express.js APIs",
        description: "Backend architecture, RESTful API design, Middleware, Routing, JWT authentication",
        duration: "6 weeks",
      },
      {
        title: "MongoDB & Databases",
        description: "Document models, CRUD operations, aggregation pipelines, relationships, indexes",
        duration: "4 weeks",
      },
      {
        title: "Deployment & Best Practices",
        description: "Production builds, Git, Vercel/Netlify, Render deployment, security headers",
        duration: "2 weeks",
      },
    ],
    features: [
      {
        title: "100% Placement Support",
        description: "Comprehensive assistance including mock interviews, profile reviews, and hiring drives",
      },
      {
        title: "Live Project Experience",
        description: "Build 5+ fully operational web applications to show off in your portfolio",
      },
      {
        title: "NACTET & IAO Certified",
        description: "Earn valuable industry-recognized credentials upon successful completion",
      },
    ],
    trainers: [
      {
        name: "Chandru",
        designation: "Senior MERN Stack Developer",
        experience: "8+ Years in Fullstack Web Development",
      },
      {
        name: "Azharuddin",
        designation: "Fullstack Technical Lead",
        experience: "10+ Years in Enterprise Web Solutions",
      },
    ],
    reviews: [
      {
        name: "Roshan",
        rating: 5,
        comment: "The best MERN stack training in the region! The focus on Javascript logic and React state management helped me crack my developer interview easily.",
      },
      {
        name: "Priya",
        rating: 5,
        comment: "Excellent practical sessions. Building real ecommerce and social media apps gave me real-world confidence.",
      },
    ],
  },
  {
    id: "3",
    slug: "basic-electronics",
    title: "Basic Electronics",
    description:
      "The foundation of all electronics. Master circuit theory, passive components, power supplies, and essential measuring instruments.",
    duration: "3 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 820,
    admissionFee: "1000",
    learningOutcome:
      "Gain an exhaustive understanding of basic electronic components, circuit theories, and laboratory instruments. Learn to read schematics, design basic circuits, measure signals with digital oscilloscopes, and assemble functional power supply units from scratch. This course provides an outstanding foundation for embedded hardware engineering.",
    keySkills: [
      "Ohm's & Kirchhoff's Laws",
      "Resistor & Capacitor Network Design",
      "Power Supply Rectification",
      "Multimeter & Oscilloscope (DSO) Operation",
      "Active Component Biasing (Diodes, Transistors)",
      "Circuit Simulation (LTspice/Proteus)",
    ],
    modules: [
      {
        title: "Circuit Theory & Network Analysis",
        description: "Voltage, current, resistance, Ohm's law, series/parallel networks, KVL, KCL",
        duration: "3 weeks",
      },
      {
        title: "Resistors & Capacitors (Passive Components)",
        description: "Characteristics, color coding, capacitors, inductors, reactance, filters",
        duration: "3 weeks",
      },
      {
        title: "Semiconductors & Diodes",
        description: "P-N junctions, diodes, rectifiers, Zener regulators, BJT transistor switches",
        duration: "3 weeks",
      },
      {
        title: "Power Supplies & Regulators",
        description: "Transformer theory, AC-to-DC conversion, filtering, linear IC regulators (78XX, LM317)",
        duration: "2 weeks",
      },
      {
        title: "Measuring Instruments & Bench Testing",
        description: "Digital Multimeters, Function Generators, Digital Storage Oscilloscopes (DSO), troubleshooting",
        duration: "1 week",
      },
    ],
    features: [
      {
        title: "Hands-on Hardware Lab",
        description: "Every student gets a dedicated breadboard, components kit, and bench instruments",
      },
      {
        title: "Practical PCB Assembly",
        description: "Assemble and solder your own working 5V DC power supply board",
      },
      {
        title: "Internship Certificate",
        description: "Includes a 3-month Internship Certificate from MATT Engineering Solutions",
      },
    ],
    trainers: [
      {
        name: "Abhilash Nair",
        designation: "Senior Hardware Engineer",
        experience: "9+ Years in Analog Circuit Design",
      },
      {
        name: "Suresh Babu",
        designation: "Electronics Lab Instructor",
        experience: "12+ Years in Hardware Troubleshooting",
      },
    ],
    reviews: [
      {
        name: "Vinesh",
        rating: 5,
        comment: "This course took away my fear of electronics. The hands-on DSO measurements and soldering practice were extremely helpful.",
      },
      {
        name: "Anjali",
        rating: 4.8,
        comment: "Highly recommended for engineering graduates who want real practical knowledge instead of just textbook formulas.",
      },
    ],
  },
  {
    id: "4",
    slug: "pcb-designing",
    title: "PCB Designing",
    description:
      "Design professional-grade multi-layer, HDI, and RF circuit boards with industry-standard EDA tools. Ready for manufacturing.",
    duration: "3 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 740,
    admissionFee: "1000",
    learningOutcome:
      "Master schema capture, board layout, signal integrity routing, and fabrication output generation using tools like Altium Designer or KiCad. Learn specialized design practices for high-speed, RF, and aerospace-grade PCBs, preparing you for a career as a PCB layout engineer.",
    keySkills: [
      "Schematic Capture & Symbology",
      "Footprint Creation & IPC Standards",
      "High-speed Signal Integrity Routing",
      "Multi-layer Stackup Planning",
      "Aerospace & High-Density Interconnect (HDI)",
      "Gerber & ODB++ Fabrication Outputs",
    ],
    modules: [
      {
        title: "Introduction to EDA & Schematic Capture",
        description: "Component symbols, ERC, netlists, hierarchy schematics, library management",
        duration: "2 weeks",
      },
      {
        title: "PCB Board Layout & Component Placement",
        description: "Board outlines, mounting holes, keep-out zones, footprint creation, layout strategies",
        duration: "3 weeks",
      },
      {
        title: "Routing & Signal Integrity",
        description: "Trace width/spacing calculators, differential pairs, impedance matching, crosstalk mitigation",
        duration: "3 weeks",
      },
      {
        title: "Multi-layer Design & HDI Techniques",
        description: "4/6 layer stackups, ground planes, power distribution, blind/buried vias, microvias",
        duration: "2 weeks",
      },
      {
        title: "RF & Aerospace Grade PCBs",
        description: "Coaxial layouts, shield loops, thermal relief, IPC-2221 compliance, aerospace constraints",
        duration: "2 weeks",
      },
    ],
    features: [
      {
        title: "Manufacturing-ready Outputs",
        description: "Learn to prepare Gerber, drill files, BOM, pick-and-place files for PCB fab houses",
      },
      {
        title: "Your Design Fabricated",
        description: "We physically fabricate your top PCB layout design and deliver the raw board to you",
      },
      {
        title: "Industry Standard Tooling",
        description: "Extensive exposure to industrial EDA packages used by top engineering companies",
      },
    ],
    trainers: [
      {
        name: "Ranjan Sen",
        designation: "PCB Architect",
        experience: "11+ Years in High-Speed Aerospace Design",
      },
      {
        name: "Abhilash Nair",
        designation: "Senior Hardware Engineer",
        experience: "9+ Years in Analog Circuit Design",
      },
    ],
    reviews: [
      {
        name: "Manish",
        rating: 5,
        comment: "Fascinating course! I learned professional-grade multi-layer stackups and differential routing. The instructor solved real routing challenges.",
      },
    ],
    programStructure: [
      "Designed specifically for electronics, hardware, and instrumentation graduates",
      "90+ hours of intensive lab training on industrial EDA tools (Altium/KiCad)",
      "Master standard footprint creation according to IPC-7351 guidelines",
      "Hands-on project work covering schematic capture, routing, and stackup planning",
      "Dedicated hardware review and DRC verification feedback",
      "Prepare manufacturing-ready deliverables (Gerbers, Drill, BOM, Pick-and-Place)",
      "Access to electronic manufacturing network and hardware engineering community"
    ],
    careerSupport: [
      "1:1 mock interviews focused on PCB layout design and signal integrity principles",
      "Resume, portfolio, and design gallery curation review by expert layout architects",
      "Weekly core electronics and PCB designer job listings",
      "Curation of a professional hardware portfolio showcasing multi-layer designs",
      "Assistance with component library management and supplier selection (Mouser, Digikey)",
      "Direct technical preparation for hardware validation and layout engineer roles",
      "Referrals to top embedded product and hardware manufacturing companies"
    ],
  },
  {
    id: "5",
    slug: "robotics",
    title: "Robotics",
    description:
      "Build intelligent mechanical systems. Integrate forward/inverse kinematics, sensor arrays, control boards, and computer vision algorithms.",
    duration: "6 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 950,
    admissionFee: "1000",
    learningOutcome:
      "Design, build, and program autonomous robots. Master robotic kinematics, PID control feedback loops, sensor integration, ROS (Robot Operating System), and OpenCV-based computer vision. Students gain a 6-month industry experience certificate upon building a fully autonomous robotic platform.",
    keySkills: [
      "Forward & Inverse Kinematics",
      "Motor Controller Biasing & PID",
      "Sensor Integration (LiDAR, IMU, Sonar)",
      "ROS (Robot Operating System) Node Setup",
      "Robot OpenCV Computer Vision",
      "Path Planning Algorithms (A*, Dijkstra)",
    ],
    modules: [
      {
        title: "Robotic Kinematics & Mechanics",
        description: "Degrees of freedom, DH parameters, coordinate transformations, mechanical actuators",
        duration: "4 weeks",
      },
      {
        title: "Sensors, Actuators & Control",
        description: "DC geared motors, servos, encoders, ultrasonic/infrared sensors, PID feedback loops",
        duration: "5 weeks",
      },
      {
        title: "Robot Vision & Image Processing",
        description: "OpenCV integration, camera calibration, object detection, line tracking, spatial filters",
        duration: "6 weeks",
      },
      {
        title: "ROS (Robot Operating System)",
        description: "ROS nodes, topics, services, URDF models, Gazebo simulation environments",
        duration: "5 weeks",
      },
      {
        title: "Motion Planning & SLAM",
        description: "Lidar interface, gmapping, autonomous navigation, obstacle avoidance",
        duration: "4 weeks",
      },
    ],
    features: [
      {
        title: "Robotics Kit Included",
        description: "Includes a full 4WD mobile robot platform kit with chassis, motors, Arduino, and sensors",
      },
      {
        title: "DMI Incubation Support",
        description: "Access college incubation facilities at DMI college branch for prototyping",
      },
      {
        title: "6-Month Dual Certification",
        description: "Provides both Course Completion and a 1-Year Industry Experience Certificate",
      },
    ],
    trainers: [
      {
        name: "Dr. Prem Kumar",
        designation: "Robotics Researcher",
        experience: "15+ Years in Autonomous Systems",
      },
      {
        name: "Jinu Jose",
        designation: "Embedded Firmware Dev",
        experience: "7+ Years in Actuator Control Systems",
      },
    ],
    reviews: [
      {
        name: "Hari",
        rating: 5,
        comment: "Excellent experience. Creating our own autonomous robot from scratch and programming it with ROS was extremely rewarding.",
      },
    ],
  },
  {
    id: "6",
    slug: "iot",
    title: "Internet of Things (IoT)",
    description:
      "Connect physical devices to the cloud. Master sensor logging, microcontrollers (Arduino, NodeMCU), Raspberry Pi, and IoT platforms.",
    duration: "3 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 1100,
    admissionFee: "1000",
    learningOutcome:
      "Develop complete, secure end-to-end IoT frameworks. Learn to wire sensor arrays to NodeMCU/ESP8266 and Raspberry Pi modules, transmit data via lightweight protocols (MQTT, HTTP), build dashboards on Blynk and Ubidots, and write server-side cloud triggers. This equips you for the rapidly-growing smart home and industrial automation fields.",
    keySkills: [
      "Arduino & ESP8266 C++ Scripting",
      "Raspberry Pi OS & Python Automation",
      "Sensor Bus Interfaces (I2C, SPI, UART)",
      "MQTT, HTTP, WebSockets Protocols",
      "IoT Cloud Platform Integration",
      "Dashboard Configuration (Blynk/Ubidots)",
    ],
    modules: [
      {
        title: "Microcontroller Boards (Arduino & NodeMCU)",
        description: "GPIO programming, analog inputs, PWM output, NodeMCU Wi-Fi configuration",
        duration: "3 weeks",
      },
      {
        title: "Raspberry Pi & Single Board Computing",
        description: "Raspberry Pi setup, Linux terminal fundamentals, Python-based hardware controls",
        duration: "3 weeks",
      },
      {
        title: "Sensors & Signal Acquisition",
        description: "Interfacing temperature (DHT11), light, motion, and gas sensors. Noise filtering",
        duration: "2 weeks",
      },
      {
        title: "IoT Communication Protocols",
        description: "Client-Server models, HTTP REST APIs, publish-subscribe MQTT brokers, payload formatting",
        duration: "2 weeks",
      },
      {
        title: "Cloud & Dashboard Platforms",
        description: "Integrating Ubidots, Blynk, AWS IoT Core, database logging, alerts, and remote controls",
        duration: "2 weeks",
      },
    ],
    features: [
      {
        title: "Dedicated IoT Hardware Kit",
        description: "Receive a NodeMCU, Raspberry Pi Pico, and 12-sensor starter package for practical learning",
      },
      {
        title: "Industrial Case Studies",
        description: "Implement real industrial telemetry prototypes mimicking Smart Agriculture and Smart City grids",
      },
      {
        title: "Internship Certificate",
        description: "Earn an internship credential verifying your active prototype development experience",
      },
    ],
    trainers: [
      {
        name: "Surya Sarath",
        designation: "IoT Solutions Lead",
        experience: "10+ Years in Smart Grid Automation",
      },
      {
        name: "Abhilash Nair",
        designation: "Senior Hardware Engineer",
        experience: "9+ Years in Analog Circuit Design",
      },
    ],
    reviews: [
      {
        name: "Jerome",
        rating: 4.9,
        comment: "Loved this course! Interfacing the NodeMCU with Ubidots and setting up auto-alert emails was super cool and fully practical.",
      },
    ],
  },
  {
    id: "7",
    slug: "drone-technology",
    title: "Drone Technology",
    description:
      "Master UAV flight mechanics, autonomous navigation, flight controllers, assembly, and piloting skills with hands-on drone flying.",
    duration: "3 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 690,
    admissionFee: "1000",
    learningOutcome:
      "Understand UAV aerodynamics, electronics, assembly, calibration, autonomous flight mission planning, and piloting. Students assemble a functional quadcopter, configure flight controllers (APM/Pixhawk), configure flight paths via Mission Planner, and practice drone piloting safely under expert guidance.",
    keySkills: [
      "UAV Aerodynamics & Mechanics",
      "Quadcopter Assembly & Wiring",
      "Flight Controller Tuning (PID)",
      "Mission Planner Autonomous Navigation",
      "Telemetry & Remote Radio Calibration",
      "Practical RC Piloting & Safety",
    ],
    modules: [
      {
        title: "Flight Mechanics & Aerodynamics",
        description: "Physics of flight, lift, drag, thrust, quadcopter dynamics, propeller/motor selection",
        duration: "2 weeks",
      },
      {
        title: "Drone Assembly & Hardware Wiring",
        description: "Frame setup, brushless motors (BLDC), ESCs, flight controllers, power boards, receiver wiring",
        duration: "3 weeks",
      },
      {
        title: "Flight Controller Calibration & PID",
        description: "APM/Pixhawk calibration, accelerometer, compass, radio setup, PID loop stabilization tuning",
        duration: "3 weeks",
      },
      {
        title: "Autonomous Navigation & Telemetry",
        description: "Mission Planner GPS waypoint planning, auto takeoff/landing, fail-safe parameters, telemetry link",
        duration: "2 weeks",
      },
      {
        title: "Practical Piloting & Flight Safety",
        description: "Simulator practice, safety regulations, manual RC piloting, outdoor flight maneuvers",
        duration: "2 weeks",
      },
    ],
    features: [
      {
        title: "Quadcopter DIY Build Lab",
        description: "Work in teams to completely assemble and solder a 450mm drone package",
      },
      {
        title: "Sim & Field Flying Practice",
        description: "Practice safe piloting on high-fidelity flight simulators before outdoor field training",
      },
      {
        title: "UAV Tech Internship",
        description: "Get a verified drone hardware assembly and configuration internship certificate",
      },
    ],
    trainers: [
      {
        name: "Capt. Anand",
        designation: "UAV Pilot & Consultant",
        experience: "14+ Years in Drone Operations & Flight Safety",
      },
      {
        name: "Abhilash Nair",
        designation: "Senior Hardware Engineer",
        experience: "9+ Years in Analog Circuit Design",
      },
    ],
    reviews: [
      {
        name: "Rahul",
        rating: 5,
        comment: "Outstanding! Flying the drone we built from scratch and configuring GPS waypoints was a dream experience.",
      },
    ],
  },
  {
    id: "8",
    slug: "embedded-systems",
    title: "Embedded Systems",
    description:
      "Program microcontrollers (AVR, PIC, ARM7) and write reliable custom firmware for real-time hardware applications.",
    duration: "6 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 1050,
    admissionFee: "1000",
    learningOutcome:
      "Write highly-efficient register-level C firmware for popular microcontroller architectures. Learn to configure peripheral timers, interrupts, ADC, DAC, and implement low-level communication protocols (I2C, SPI, UART). Walk away with double certifications and solid firmware debugging skills using logic analyzers.",
    keySkills: [
      "Embedded C Register-level Coding",
      "AVR (ATmega) & ARM7 Architectures",
      "GPIO, Timers, Interrupts Configuration",
      "Bus Protocols (SPI, I2C, UART)",
      "Sensor & Actuator Driver Design",
      "Firmware Debugging (JTAG, Oscilloscopes)",
    ],
    modules: [
      {
        title: "C and Register-level Programming",
        description: "Bit manipulation, memory maps, register definitions, writing clean hardware-oriented C code",
        duration: "4 weeks",
      },
      {
        title: "AVR (8-bit) Microcontrollers",
        description: "AVR internal architecture, I/O ports, hardware interrupts, timers, ADC modules",
        duration: "6 weeks",
      },
      {
        title: "Communication Protocols & Interfaces",
        description: "Character LCDs, keypad matrices, UART serial, SPI, I2C temperature sensors, EEPROM",
        duration: "5 weeks",
      },
      {
        title: "ARM7 (32-bit) Architectures",
        description: "LPC2148 architecture, PLL setup, multi-tasking basics, hardware configuration",
        duration: "5 weeks",
      },
      {
        title: "Real-Time Embedded Design Project",
        description: "Building an enterprise application (e.g. smart lock, security system) with low-power sleep modes",
        duration: "4 weeks",
      },
    ],
    features: [
      {
        title: "Development Board Kit",
        description: "Receive a custom ATmega development board, programmer, and rich component assortment",
      },
      {
        title: "Logic Analyzer Practice",
        description: "Learn to visually probe and analyze SPI/I2C signals using logic analyzers",
      },
      {
        title: "1-Year Experience Certificate",
        description: "Earn course completion + 1-Year Experience Certificate from MATT Engineering Solutions",
      },
    ],
    trainers: [
      {
        name: "Jinu Jose",
        designation: "Embedded Systems Lead",
        experience: "7+ Years in Medical Device Firmware",
      },
      {
        name: "Abhilash Nair",
        designation: "Senior Hardware Engineer",
        experience: "9+ Years in Analog Circuit Design",
      },
    ],
    reviews: [
      {
        name: "Justin",
        rating: 5,
        comment: "Deep technical insight. Register-level coding really opened up my eyes to how microcontrollers work under the hood.",
      },
    ],
  },
  {
    id: "9",
    slug: "c-programming",
    title: "C Programming",
    description:
      "The language that powers hardware. Master C syntax, loops, structures, advanced pointers, memory management, and debugging.",
    duration: "2 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 1400,
    admissionFee: "1000",
    learningOutcome:
      "Build a rock-solid programming foundation with C. Learn variable scopes, loops, arrays, structures, file operations, dynamic memory allocation, and debugging. This course focuses on writing high-performance, robust, and clean code critical for systems engineering.",
    keySkills: [
      "C Logic & Algorithm Design",
      "Advanced Pointers & Address Arithmetic",
      "Dynamic Memory (malloc, calloc, free)",
      "File I/O Streams Management",
      "Data Structures (Linked Lists, Stacks)",
      "Compiler Toolchains (GCC, Makefiles)",
    ],
    modules: [
      {
        title: "Syntax, Basics & Control Flows",
        description: "Data types, operators, format specifiers, if-else logic, switch statements, for/while loops",
        duration: "2 weeks",
      },
      {
        title: "Arrays, Strings & Functions",
        description: "1D/2D arrays, string manipulation functions, scope, call-by-value vs call-by-reference",
        duration: "2 weeks",
      },
      {
        title: "Pointers & Address Arithmetic",
        description: "Pointer declaration, void pointers, pointers to arrays, double pointers, function pointers",
        duration: "2 weeks",
      },
      {
        title: "Structures & Unions",
        description: "User-defined data types, nested structures, bit fields, memory alignment, union structures",
        duration: "1 week",
      },
      {
        title: "Memory Management & File I/O",
        description: "Dynamic memory allocation, heap vs stack, file opening modes, binary files, macro preprocessors",
        duration: "1 week",
      },
    ],
    features: [
      {
        title: "Compiling in GCC Linux",
        description: "Perform your coursework inside clean, raw terminal environments using modern compiler flags",
      },
      {
        title: "150+ Code Challenges",
        description: "Solve micro-problems to master loop optimizations, search/sorting algorithms, and recursion",
      },
      {
        title: "Fast-track Certification",
        description: "Receive a professional programming credential upon clearing our final assessment",
      },
    ],
    trainers: [
      {
        name: "Surya Sarath",
        designation: "Systems Programmer",
        experience: "10+ Years in C/Firmware Architecture",
      },
      {
        name: "Chandru",
        designation: "Fullstack Developer",
        experience: "8+ Years in Web Development",
      },
    ],
    reviews: [
      {
        name: "Abhijit",
        rating: 5,
        comment: "Excellent pointers coverage. The memory allocation diagrams drawn by the instructor made complex pointer logic extremely clear.",
      },
    ],
  },
  {
    id: "10",
    slug: "cpp-programming",
    title: "C++ Programming",
    description:
      "Master Object-Oriented Programming (OOP) in C++. Learn templates, inheritance, polymorphism, exceptions, and the Standard Template Library (STL).",
    duration: "2 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 1200,
    admissionFee: "1000",
    learningOutcome:
      "Transition from procedural coding to advanced Object-Oriented design. Master standard class patterns, virtual functions, dynamic inheritance structures, operator overloading, and exception safety. Gain proficiency in using C++ Standard Template Library (STL) containers and iterators for high-performance software projects.",
    keySkills: [
      "Object-Oriented Design (OOP)",
      "Inheritance & Polymorphic Architectures",
      "Operator Overloading & Custom Types",
      "STL Containers, Iterators, Algorithms",
      "Exception Safety & RAII Patterns",
      "Template & Generic Programming",
    ],
    modules: [
      {
        title: "Classes, Objects & Encapsulation",
        description: "Class syntax, private/public scopes, constructors/destructors, copy constructors, static members",
        duration: "2 weeks",
      },
      {
        title: "Inheritance & Polymorphism",
        description: "Base/derived classes, virtual functions, abstract classes, multiple inheritance, method overriding",
        duration: "2 weeks",
      },
      {
        title: "Operator Overloading & Type Casts",
        description: "Binary/unary operators, friend functions, stream insertion, static/dynamic casting",
        duration: "2 weeks",
      },
      {
        title: "Standard Template Library (STL)",
        description: "Vectors, Lists, Maps, Sets, STL algorithms (sort, search), lambda functions",
        duration: "1 week",
      },
      {
        title: "Exception Handling & Templates",
        description: "Try-catch-throw mechanisms, stack unwinding, generic classes, file streams",
        duration: "1 week",
      },
    ],
    features: [
      {
        title: "System Performance Focus",
        description: "Learn high-performance patterns like move semantics and memory optimizations",
      },
      {
        title: "Real-world Project Work",
        description: "Build an object-oriented desktop application (e.g. library database, student registry)",
      },
      {
        title: "Internship Certificate",
        description: "Earn a certificate outlining your structural design projects",
      },
    ],
    trainers: [
      {
        name: "Surya Sarath",
        designation: "Senior Systems Engineer",
        experience: "10+ Years in C++ / Game Engine R&D",
      },
      {
        name: "Chandru",
        designation: "Fullstack Developer",
        experience: "8+ Years in Web Development",
      },
    ],
    reviews: [
      {
        name: "Siddharth",
        rating: 4.8,
        comment: "The STL and OOP sections were brilliant. It completely shifted how I think about modular code design.",
      },
    ],
  },
  {
    id: "11",
    slug: "java-programming",
    title: "Java Programming",
    description:
      "Build robust, cross-platform enterprise software and mobile applications. Master Java OOP, GUI, File I/O, and JDBC databases.",
    duration: "3 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 1350,
    admissionFee: "1000",
    learningOutcome:
      "Become proficient in Java enterprise software. Master Java Class hierarchies, Multi-threading, Collections framework, GUI layout design (Swing), File I/O streams, and JDBC databases. Walk away ready to develop professional enterprise applications with secure database storage.",
    keySkills: [
      "Java Class Hierarchies & Interfaces",
      "Multithreading & Thread Sync",
      "Java Collections (List, Set, Map)",
      "JDBC Database Integration",
      "GUI Development (Swing/JavaFX)",
      "Exception & File I/O Streams",
    ],
    modules: [
      {
        title: "Java Syntax & Core OOP",
        description: "JVM/JRE, classes, objects, interfaces, inheritance, packages, encapsulation",
        duration: "3 weeks",
      },
      {
        title: "Exception Handling & Collections",
        description: "Try-catch hierarchies, custom exceptions, Lists, Sets, Maps, generics",
        duration: "3 weeks",
      },
      {
        title: "Multithreading & Concurrency",
        description: "Thread lifecycle, Runnable interface, synchronization, thread communication",
        duration: "2 weeks",
      },
      {
        title: "Java GUI & Desktop Apps",
        description: "Swing components, Event handling, Layout managers, building active panels",
        duration: "2 weeks",
      },
      {
        title: "File I/O & JDBC Database Connect",
        description: "Stream classes, serialization, JDBC drivers, SQL query execution, result sets",
        duration: "2 weeks",
      },
    ],
    features: [
      {
        title: "Enterprise JDBC Design",
        description: "Write transactional database drivers to interact securely with PostgreSQL and MySQL",
      },
      {
        title: "OOP Architectural Patterns",
        description: "Learn essential design patterns like Singleton, Factory, and MVC",
      },
      {
        title: "Internship Certificate",
        description: "Receive a professional internship certificate representing your application build work",
      },
    ],
    trainers: [
      {
        name: "Chandru",
        designation: "Lead Java Developer",
        experience: "8+ Years in Enterprise Java Platforms",
      },
      {
        name: "Azharuddin",
        designation: "Technical Solutions Architect",
        experience: "10+ Years in Java EE Systems",
      },
    ],
    reviews: [
      {
        name: "Lekshmi",
        rating: 5,
        comment: "Very comprehensive. The collections and multithreading exercises prepared me well for technical interview rounds.",
      },
    ],
  },
  {
    id: "12",
    slug: "python-programming",
    title: "Python Programming",
    description:
      "The most versatile language today. Master Python data structures, OOP, web scrapers, data analysis, and script automation.",
    duration: "2 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 1600,
    admissionFee: "1000",
    learningOutcome:
      "Master Python programming from the basics to advanced structures. Learn object-oriented design, write custom scripts to automate tasks, scrape data from websites using Beautiful Soup, interface with databases, and handle basic data frames. This prepares you for software, web, and data roles.",
    keySkills: [
      "Python Data Structures (Lists, Dicts, Tuples)",
      "Object-Oriented Python Programming",
      "File Processing & Web Scrapers",
      "Automation & Shell Scripting",
      "Interfacing SQL and NoSQL Databases",
      "Code Profiling & Unit Testing",
    ],
    modules: [
      {
        title: "Python Basics & Core Flow",
        description: "Variables, primitive data types, lists, dictionaries, tuples, loops, list comprehensions",
        duration: "2 weeks",
      },
      {
        title: "Functions & Modular Code",
        description: "Argument passing, lambda functions, generator expressions, writing custom modules",
        duration: "2 weeks",
      },
      {
        title: "Object-Oriented Python",
        description: "Classes, instances, inheritance, properties, magic methods, exception handling",
        duration: "2 weeks",
      },
      {
        title: "Web Scraping & APIs",
        description: "Beautiful Soup, Requests library, JSON parsing, logging, writing dynamic scraping scripts",
        duration: "1 week",
      },
      {
        title: "Database Drivers & Automation",
        description: "SQLite3 driver, OS modules, scheduling scripts, basic Pandas data frame handling",
        duration: "1 week",
      },
    ],
    features: [
      {
        title: "100+ Hands-on Scripts",
        description: "Write automated scripts to clean spreadsheets, rename system files, and alert you by email",
      },
      {
        title: "Interactive Notebooks",
        description: "Work natively in Jupyter Notebooks and VS Code to accelerate your coding logic",
      },
      {
        title: "Flexible Scheduling",
        description: "Easily choose between weekday morning or evening sessions to match your schedule",
      },
    ],
    trainers: [
      {
        name: "Surya Sarath",
        designation: "Python R&D Lead",
        experience: "10+ Years in Python Scripting & Analytics",
      },
      {
        name: "Azharuddin",
        designation: "Project Manager",
        experience: "10+ Years in Enterprise Engineering",
      },
    ],
    reviews: [
      {
        name: "Pranav",
        rating: 5,
        comment: "Excellent Python starter! Automated my first web-scrapper in the second week itself. Best lab practice ever.",
      },
    ],
  },
  {
    id: "13",
    slug: "data-analysis",
    title: "Data Analysis",
    description:
      "Transform raw data into business insights. Master SQL data extraction, exploratory data analysis (EDA) with Python, and interactive Power BI dashboards.",
    duration: "3 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 980,
    admissionFee: "1000",
    learningOutcome:
      "Become a data analyst. Write complex SQL statements to extract business metrics, clean and transform messy datasets using Python (Pandas/NumPy), perform hypothesis testing, and present reports using Power BI. This course matches current industry expectations.",
    keySkills: [
      "SQL Data Extraction & Joins",
      "Exploratory Data Analysis (EDA)",
      "Python Data Wrangling (Pandas)",
      "Hypothesis Testing & A/B Tests",
      "Data Visualization (Matplotlib, Seaborn)",
      "Power BI Dashboards & Modeling",
    ],
    modules: [
      {
        title: "Advanced SQL for Data Analysts",
        description: "Window functions, aggregate groupings, multi-table joins, subqueries, view optimization",
        duration: "3 weeks",
      },
      {
        title: "Python Data Wrangling (Pandas & NumPy)",
        description: "Handling missing variables, joining data frames, applying row/column transforms, indexing",
        duration: "3 weeks",
      },
      {
        title: "Exploratory Data Analysis & Viz",
        description: "Distributions, correlations, outliers, matplotlib, seaborn, creating clean story visuals",
        duration: "2 weeks",
      },
      {
        title: "Practical Statistics & Hypothesis Testing",
        description: "Normal distribution, p-values, t-tests, chi-square tests, setting up A/B testing models",
        duration: "2 weeks",
      },
      {
        title: "Power BI Data Portals",
        description: "Importing data, modeling schema relationships, DAX formulas, interactive dashboard publishing",
        duration: "2 weeks",
      },
    ],
    features: [
      {
        title: "Real Business Datasets",
        description: "Work on actual telemetry from e-commerce, banking, and clinical operations log files",
      },
      {
        title: "Tableau Fundamentals Integration",
        description: "Includes bonus modules comparing data presentation strategies between Power BI and Tableau",
      },
      {
        title: "3-Month Internship Credentials",
        description: "Get a certificate outlining your analytics, query designs, and interactive dashboards",
      },
    ],
    trainers: [
      {
        name: "Surya Sarath",
        designation: "Analytics Lead Specialist",
        experience: "10+ Years in Business Intelligence",
      },
      {
        name: "Azharuddin",
        designation: "Project Manager",
        experience: "10+ Years in Enterprise Operations",
      },
    ],
    reviews: [
      {
        name: "Anupama",
        rating: 5,
        comment: "Excellent SQL and Pandas training. The final dashboard project got me placed as a data analyst within 3 weeks!",
      },
    ],
  },
  {
    id: "14",
    slug: "data-science",
    title: "Data Science",
    description:
      "Master the complete data science pipeline. Learn data collection, wrangling, machine learning, model optimization, and deployment.",
    duration: "6 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 1150,
    admissionFee: "1000",
    learningOutcome:
      "Design and deploy end-to-end data science projects. Master exploratory analysis, advanced data wrangling, model evaluation, supervised/unsupervised machine learning, and data ethics. Learn how to wrap models into APIs and deploy them to production cloud environments.",
    keySkills: [
      "Advanced Data Wrangling & Pipelines",
      "Exploratory Analysis (EDA)",
      "Supervised & Unsupervised ML",
      "Model Tuning & Regularization",
      "API Model Wrapping & Deployment",
      "Data Ethics & Fair AI Principles",
    ],
    modules: [
      {
        title: "Advanced Data Wrangling & ETL",
        description: "Data extraction pipelines, API calls, cleaning large arrays, scaling, custom data loaders",
        duration: "4 weeks",
      },
      {
        title: "Statistical Inference & Analysis",
        description: "Probability models, parametric tests, ANOVA, regression techniques, exploratory correlations",
        duration: "5 weeks",
      },
      {
        title: "Supervised Learning Techniques",
        description: "Linear/logistic regression, decision trees, random forests, XGBoost, hyperparameter tuning",
        duration: "6 weeks",
      },
      {
        title: "Unsupervised & Advanced Models",
        description: "K-means, DBSCAN, Principal Component Analysis (PCA) for dimension reduction, recommender grids",
        duration: "5 weeks",
      },
      {
        title: "Model Wrapping & Deployment",
        description: "Flask API wrappers, Docker containerization, AWS/GCP app engine deployment, model monitoring",
        duration: "4 weeks",
      },
    ],
    features: [
      {
        title: "Comprehensive Portfolios",
        description: "Build 3 end-to-end deployed projects that solve real business problems",
      },
      {
        title: "1-Year Experience Certificate",
        description: "Provides both Course Completion and a 1-Year Industry Experience Certificate",
      },
      {
        title: "NACTET & IAO Certified",
        description: "Earn credentials that are recognized both in India and internationally",
      },
    ],
    trainers: [
      {
        name: "Dr. Prem Kumar",
        designation: "Data Scientist Specialist",
        experience: "15+ Years in Machine Learning and R&D",
      },
      {
        name: "Surya Sarath",
        designation: "Analytics Lead Specialist",
        experience: "10+ Years in Business Intelligence",
      },
    ],
    reviews: [
      {
        name: "Akhil",
        rating: 5,
        comment: "Outstanding! Transitioning from a non-programming background to a data science role in 6 months felt like a miracle.",
      },
    ],
  },
  {
    id: "15",
    slug: "machine-learning",
    title: "Machine Learning",
    description:
      "Master ML algorithms, deep learning neural networks, and NLP to teach machines to learn from complex data.",
    duration: "6 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 890,
    admissionFee: "1000",
    learningOutcome:
      "Acquire deep expertise in machine learning and deep learning architectures. Design, train, and optimize supervised/unsupervised algorithms, multi-layer artificial neural networks, convolutional neural networks (CNN) for computer vision, recurrent neural networks (RNN/LSTM) for sequence prediction, and NLP pipelines.",
    keySkills: [
      "Machine Learning Algorithms (Sklearn)",
      "Deep Learning (TensorFlow/PyTorch)",
      "Neural Networks & Optimization",
      "Natural Language Processing (NLP)",
      "Computer Vision CNN Architectures",
      "Model Evaluation Metrics (ROC/AUC)",
    ],
    modules: [
      {
        title: "Core Machine Learning Algorithms",
        description: "Linear models, support vector machines, k-nearest neighbors, ensemble trees, loss functions",
        duration: "5 weeks",
      },
      {
        title: "Deep Learning & Neural Networks",
        description: "Perceptrons, backpropagation, activation layers, gradient descent, PyTorch configurations",
        duration: "5 weeks",
      },
      {
        title: "Computer Vision & CNNs",
        description: "Convolutional layers, pooling, spatial filters, image classification with PyTorch/TensorFlow",
        duration: "5 weeks",
      },
      {
        title: "NLP & Sequence Models",
        description: "Tokenization, TF-IDF, word embeddings, Recurrent Neural Networks (RNN), LSTM networks",
        duration: "5 weeks",
      },
      {
        title: "Advanced Optimization & Pipelines",
        description: "Transfer learning, model optimization, handling class imbalances, model validation workflows",
        duration: "4 weeks",
      },
    ],
    features: [
      {
        title: "GPU Cloud Lab Access",
        description: "Train complex deep learning models on our high-performance GPU cloud servers",
      },
      {
        title: "Dual Professional Certification",
        description: "Get Course Completion and a 1-Year Industry Experience Certificate upon project sign-off",
      },
      {
        title: "Guaranteed Placement Support",
        description: "Dedicated resume building, mock interviews, and direct referrals to top tech companies",
      },
    ],
    trainers: [
      {
        name: "Dr. Prem Kumar",
        designation: "Machine Learning Researcher",
        experience: "15+ Years in Neural Networks & AI",
      },
      {
        name: "Surya Sarath",
        designation: "AI Lead Architect",
        experience: "10+ Years in Computational Logic",
      },
    ],
    reviews: [
      {
        name: "Vinod",
        rating: 5,
        comment: "The deep learning modules are top-notch. Writing custom neural networks from scratch in PyTorch was amazing.",
      },
    ],
  },
  {
    id: "16",
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    description:
      "Explore the frontier of AI. Master smart agent architectures, generative AI models, prompt engineering, and ethical AI development.",
    duration: "6 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 820,
    admissionFee: "1000",
    learningOutcome:
      "Gain a deep understanding of AI frameworks. Learn smart agent search algorithms, knowledge representation, prompt engineering, generative models, fine-tuning large language models (LLMs), and implementing robust, ethically aligned AI systems in the real world.",
    keySkills: [
      "State-Space Search & Heuristics",
      "Generative AI & LLM Fine-Tuning",
      "Prompt Engineering & Vector DBs",
      "Ethical AI & Bias Mitigation",
      "Reinforcement Learning Basics",
      "AI System Architecture & APIs",
    ],
    modules: [
      {
        title: "Classical AI & Search Algorithms",
        description: "State-space representation, blind search, heuristics (A*, Minimax), adversarial search",
        duration: "5 weeks",
      },
      {
        title: "Knowledge Representation & Logic",
        description: "Propositional logic, first-order logic, reasoning systems, expert system frameworks",
        duration: "5 weeks",
      },
      {
        title: "Generative AI & LLM Systems",
        description: "Transformer architectures, GPT models, LangChain workflows, vector database storage",
        duration: "5 weeks",
      },
      {
        title: "Fine-tuning & Prompt Engineering",
        description: "Prompt strategies, structured outputs, fine-tuning models on custom business datasets",
        duration: "5 weeks",
      },
      {
        title: "AI Ethics & Future Frameworks",
        description: "Algorithmic bias, data privacy, safety alignment, carbon footprint, compliance strategies",
        duration: "4 weeks",
      },
    ],
    features: [
      {
        title: "Incubation Facility",
        description: "Design your custom AI applications in collaboration with DMI Engineering College Incubation Center",
      },
      {
        title: "Build Generative Bots",
        description: "Create fully production-ready custom AI chatbots using OpenAI APIs and LangChain",
      },
      {
        title: "1-Year Experience Certificate",
        description: "Earn valuable experience credentials showing your active AI solution design work",
      },
    ],
    trainers: [
      {
        name: "Dr. Prem Kumar",
        designation: "AI Research Consultant",
        experience: "15+ Years in Autonomous Agents & AI Ethics",
      },
      {
        name: "Surya Sarath",
        designation: "AI Tech Lead",
        experience: "10+ Years in Applied AI Solutions",
      },
    ],
    reviews: [
      {
        name: "Rishi",
        rating: 5,
        comment: "Fascinating course! Building smart bots using LangChain and vector databases was incredibly fun and practical.",
      },
    ],
  },
  {
    id: "17",
    slug: "power-bi",
    title: "Power BI",
    description:
      "Become a business intelligence expert. Master data modeling, advanced DAX queries, ETL processes, and interactive dashboarding.",
    duration: "3 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 710,
    admissionFee: "1000",
    learningOutcome:
      "Design advanced business intelligence pipelines. Learn to connect to disparate data sources, write custom ETL rules in Power Query, design schema relationships, write complex DAX expressions, and build interactive dashboards that drive decision-making.",
    keySkills: [
      "Power Query ETL Pipelines",
      "Advanced DAX Queries & Formulas",
      "Star Schema Data Modeling",
      "Interactive Dashboard Layouts",
      "Gateway & Row-Level Security",
      "Power BI Service & Workspace",
    ],
    modules: [
      {
        title: "Power Query (ETL & Data Import)",
        description: "Connecting to databases/APIs, column transforms, merges, parameter queries, M code basics",
        duration: "3 weeks",
      },
      {
        title: "Data Modeling & Schemas",
        description: "Star/Snowflake schemas, relationship cardinality, cross-filtering directions, dimension tables",
        duration: "2 weeks",
      },
      {
        title: "Advanced DAX Mastery",
        description: "Calculated columns/measures, CALCULATE function, time intelligence, variables, performance optimization",
        duration: "3 weeks",
      },
      {
        title: "Visualizations & Storytelling",
        description: "Choosing the right visuals, custom themes, drill-throughs, bookmarks, tooltip pages",
        duration: "2 weeks",
      },
      {
        title: "Power BI Service & Sharing",
        description: "Workspace setup, gateway schedules, row-level security (RLS), reports distribution",
        duration: "2 weeks",
      },
    ],
    features: [
      {
        title: "Enterprise BI Scenarios",
        description: "Build 5+ operational enterprise dashboards mapping finance, sales, and logistics",
      },
      {
        title: "PL-300 Exam Prep",
        description: "Receive full mock tests and exam guidance for the Microsoft Power BI Analyst Certification",
      },
      {
        title: "3-Month Internship",
        description: "Get a verified internship certificate showing your business intelligence reporting skills",
      },
    ],
    trainers: [
      {
        name: "Surya Sarath",
        designation: "BI Solutions Architect",
        experience: "10+ Years in Corporate Telemetry",
      },
      {
        name: "Azharuddin",
        designation: "Project Manager",
        experience: "10+ Years in Enterprise Operations",
      },
    ],
    reviews: [
      {
        name: "Kiran",
        rating: 5,
        comment: "Outstanding! The DAX and time intelligence formulas are explained beautifully with real-world business scenarios.",
      },
    ],
  },
  {
    id: "18",
    slug: "matlab",
    title: "MATLAB",
    description:
      "The engineering standard. Master numerical computations, signal processing pipelines, Simulink models, and clean data visualizations.",
    duration: "3 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 620,
    admissionFee: "1000",
    learningOutcome:
      "Become proficient in engineering computation and simulation. Master MATLAB syntax, matrix calculations, plotting algorithms, signal processing functions, Simulink model construction, and data visualization strategies for industrial prototyping.",
    keySkills: [
      "Matrix Algebra & Computation",
      "Signal Processing Pipelines",
      "Simulink Control Modeling",
      "Plotting & Data Visualization",
      "Scripting & Custom Toolboxes",
      "Algorithm Prototyping",
    ],
    modules: [
      {
        title: "MATLAB Basics & Calculations",
        description: "Environment setup, variable structures, matrix algebra, operations, vectorization techniques",
        duration: "3 weeks",
      },
      {
        title: "Programming & Plotting",
        description: "Flow controls, scripting functions, custom plotting, subplots, interactive figures",
        duration: "2 weeks",
      },
      {
        title: "Signal Processing Fundamentals",
        description: "Fourier transforms, filter design, noise reduction, signal transformations",
        duration: "3 weeks",
      },
      {
        title: "Simulink System Modeling",
        description: "Block-diagram modeling, dynamic systems representation, parameter tuning, PID control designs",
        duration: "2 weeks",
      },
      {
        title: "Data Visualization & GUI Builder",
        description: "Creating responsive engineering dashboards, App Designer, exporting publication-grade reports",
        duration: "2 weeks",
      },
    ],
    features: [
      {
        title: "Engineering Prototypes",
        description: "Model and test real-world systems, such as feedback controllers and filter networks",
      },
      {
        title: "Simulink Simulation Labs",
        description: "Build Simulink block designs and run hardware-in-the-loop dynamic simulations",
      },
      {
        title: "Internship Certificate",
        description: "Earn a verified internship credential representing your modeling and simulations work",
      },
    ],
    trainers: [
      {
        name: "Dr. Prem Kumar",
        designation: "Systems & Control Specialist",
        experience: "15+ Years in Engineering Simulation & R&D",
      },
      {
        name: "Abhilash Nair",
        designation: "Senior Hardware Engineer",
        experience: "9+ Years in Analog Circuit Design",
      },
    ],
    reviews: [
      {
        name: "Deepak",
        rating: 4.8,
        comment: "Excellent Simulink and filter design sessions. Extremely helpful for my research and academic projects.",
      },
    ],
  },
  {
    id: "19",
    slug: "full-stack-development",
    title: "Full Stack Development",
    description:
      "Become a versatile web developer. Master HTML5/CSS3, JavaScript, React.js, Node.js / Django, and robust SQL & NoSQL databases.",
    duration: "6 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 1450,
    admissionFee: "1000",
    learningOutcome:
      "Learn to build and deploy complex, high-performance web applications. Master responsive frontend structures with HTML, CSS, JavaScript, and React, write solid backend APIs with Node.js or Django, and design scalable schemas with SQL and MongoDB databases.",
    keySkills: [
      "HTML5, CSS3, ES6+ Javascript",
      "ReactJS Frontend Interfaces",
      "Node.js & Django Frameworks",
      "SQL & NoSQL (MongoDB, MySQL)",
      "RESTful APIs & Secure Design",
      "Git & Cloud Server Deployment",
    ],
    modules: [
      {
        title: "Web Fundamentals (HTML, CSS, JS)",
        description: "Semantic layouts, responsive styles, flexbox, CSS Grid, DOM manipulation, asynchronous calls",
        duration: "4 weeks",
      },
      {
        title: "ReactJS Frontend Development",
        description: "Component layout, hooks, state patterns, context, routing, custom styling",
        duration: "6 weeks",
      },
      {
        title: "Backend Frameworks (Node & Django)",
        description: "API routing, server controllers, authentication models, template engines",
        duration: "6 weeks",
      },
      {
        title: "Database Modeling (SQL & NoSQL)",
        description: "Relational queries, document collections, joins, aggregation logic, data security",
        duration: "4 weeks",
      },
      {
        title: "Git, Security & Production Setup",
        description: "Version controls, CORS configurations, security headers, Vercel & AWS deployments",
        duration: "4 weeks",
      },
    ],
    features: [
      {
        title: "5+ Multi-stack Projects",
        description: "Deploy 5+ live applications using React with Node.js and Django backends",
      },
      {
        title: "1-Year Experience Certificate",
        description: "Provides both Course Completion and a 1-Year Industry Experience Certificate",
      },
      {
        title: "100% Placement Assistance",
        description: "Get direct access to mock interviews, resume reviews, and top tech companies",
      },
    ],
    trainers: [
      {
        name: "Chandru",
        designation: "Senior Full Stack Specialist",
        experience: "8+ Years in Enterprise Web Architectures",
      },
      {
        name: "Azharuddin",
        designation: "Technical Solutions Architect",
        experience: "10+ Years in Java and Web Platforms",
      },
    ],
    reviews: [
      {
        name: "Gautham",
        rating: 5,
        comment: "Amazing course! Having React and Django together in one program prepared me exceptionally well for my interviews.",
      },
    ],
  },
  {
    id: "20",
    slug: "cyber-security",
    title: "Cyber Security",
    description:
      "Protect digital infrastructures. Learn ethical hacking, network defenses, cryptography protocols, and digital forensic investigations.",
    duration: "6 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 980,
    admissionFee: "1000",
    learningOutcome:
      "Equip yourself to defend digital assets. Learn to analyze network security vulnerabilities, implement cryptography solutions, perform moral penetration tests, respond to incidents, and conduct digital forensic investigations.",
    keySkills: [
      "Network Defenses & Firewalls",
      "Vulnerability Scanning & Hacking",
      "Cryptography & Secure Protocols",
      "Digital Forensics & Evidence",
      "Incident Response Frameworks",
      "Security Audits & Compliance",
    ],
    modules: [
      {
        title: "Network Security & Defenses",
        description: "TCP/IP security, firewall setups, IDS/IPS configuration, VPNs, routing defenses",
        duration: "5 weeks",
      },
      {
        title: "Ethical Hacking & Scanning",
        description: "Kali Linux setup, Nmap scans, Metasploit exploits, privilege escalation, web application hacking",
        duration: "5 weeks",
      },
      {
        title: "Cryptography & Encryption Protocols",
        description: "Symmetric/asymmetric algorithms, hashing, TLS/SSL handshakes, public key infrastructure",
        duration: "4 weeks",
      },
      {
        title: "Incident Response & Mitigations",
        description: "Intrusion alerts analysis, threat hunting patterns, server log audits, containment strategies",
        duration: "5 weeks",
      },
      {
        title: "Digital Forensics & Inspections",
        description: "Disk imaging, file carving, memory dumps, registry analysis, maintaining chain of custody",
        duration: "5 weeks",
      },
    ],
    features: [
      {
        title: "Vulnerability Scanning Lab",
        description: "Practice ethical hacking on safely isolated targets in our virtual scanning lab",
      },
      {
        title: "1-Year Experience Certificate",
        description: "Earn course completion + 1-Year Experience Certificate from MATT Engineering Solutions",
      },
      {
        title: "Industry Standard Tooling",
        description: "Extensive exposure to top security tools, including Wireshark, Metasploit, Autopsy, and Kali Linux",
      },
    ],
    trainers: [
      {
        name: "Azharuddin",
        designation: "Information Security Lead",
        experience: "10+ Years in Penetration Testing & Defenses",
      },
      {
        name: "Abhilash Nair",
        designation: "Senior Hardware Engineer",
        experience: "9+ Years in Systems Design",
      },
    ],
    reviews: [
      {
        name: "Jithin",
        rating: 5,
        comment: "Excellent lab sessions. Scanning system ports, exploiting vulnerabilities, and analyzing TLS traffic was incredibly exciting.",
      },
    ],
  },
  {
    id: "21",
    slug: "linux",
    title: "Linux",
    description:
      "Master the OS that powers servers. Learn command-line administration, advanced shell scripting, system monitoring, and networking.",
    duration: "3 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 1120,
    admissionFee: "1000",
    learningOutcome:
      "Become a competent Linux systems administrator. Master the command-line interface, write shell automation scripts, configure system services, manage users and permissions, monitor server performance, and audit networks.",
    keySkills: [
      "Command Line Interface (CLI)",
      "Shell Automation (Bash)",
      "User & File Permissions (chmod)",
      "System Monitoring (top, systemctl)",
      "Network Configurations & SSH",
      "Server Administration (Nginx)",
    ],
    modules: [
      {
        title: "Command-Line Fundamentals",
        description: "Navigating folders, manipulating files, text processing (grep, awk, sed), piping inputs",
        duration: "3 weeks",
      },
      {
        title: "User Permissions & Security",
        description: "User/group management, chmod/chown configurations, SSH access, setting up firewalls",
        duration: "2 weeks",
      },
      {
        title: "Advanced Shell Scripting",
        description: "Writing Bash scripts, variables, control flows, loop constructs, job schedules (cron)",
        duration: "3 weeks",
      },
      {
        title: "System Monitoring & Services",
        description: "Managing services (systemctl), analyzing logs, disk partition mounts, profiling resource usage",
        duration: "2 weeks",
      },
      {
        title: "Linux Server Administration",
        description: "Deploying web servers (Nginx/Apache), configuring reverse proxies, setting up simple databases",
        duration: "2 weeks",
      },
    ],
    features: [
      {
        title: "Your Own Cloud Instance",
        description: "Receive a dedicated Ubuntu cloud instance to practice command-line administration",
      },
      {
        title: "Shell Automation Focus",
        description: "Write Bash scripts to automate server backups and log rotations",
      },
      {
        title: "3-Month Internship Credentials",
        description: "Get a certificate outlining your administration, scripting, and server configurations",
      },
    ],
    trainers: [
      {
        name: "Azharuddin",
        designation: "Systems & Cloud Administrator",
        experience: "10+ Years in Infrastructure Operations",
      },
      {
        name: "Chandru",
        designation: "Technical Lead Specialist",
        experience: "8+ Years in Deployment Pipelines",
      },
    ],
    reviews: [
      {
        name: "Abhinav",
        rating: 5,
        comment: "Brilliant! The Linux terminal exercises and shell scripting tasks prepared me exceptionally well for my sysadmin interview.",
      },
    ],
  },
  {
    id: "22",
    slug: "rpa",
    title: "Robotic Process Automation (RPA)",
    description:
      "Automate repetitive business processes. Master UiPath workflow design, bot deployments, database inputs, and API integrations.",
    duration: "3 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 670,
    admissionFee: "1000",
    learningOutcome:
      "Build and deploy software robots. Master UiPath Studio workflow design, web/Excel data extraction automation, orchestrator bot deployments, database inputs, API integrations, and exception handling strategies to automate repetitive office tasks.",
    keySkills: [
      "UiPath Studio Workflow Design",
      "Web & Excel Automation",
      "Orchestrator Bot Deployment",
      "Database Inputs & API Connections",
      "Exception Handling & Debugging",
      "Cognitive Document Scrapes",
    ],
    modules: [
      {
        title: "UiPath Studio & Basic Workflows",
        description: "Variables, arguments, control flows, loops, scraping data, building simple task automations",
        duration: "3 weeks",
      },
      {
        title: "Web & Excel Automation",
        description: "Reading spreadsheets, writing data, navigating browser elements, dynamic selectors",
        duration: "3 weeks",
      },
      {
        title: "Orchestrator & Bot Deployment",
        description: "Scheduling robot runs, managing assets, queue models, deploying attended/unattended bots",
        duration: "2 weeks",
      },
      {
        title: "Database Inputs & API Integrations",
        description: "Running SQL statements, executing HTTP API requests, formatting JSON payloads",
        duration: "2 weeks",
      },
      {
        title: "Advanced Projects & REFrame Work",
        description: "Designing transaction processing flows, using the Robotic Enterprise Framework, debugging bots",
        duration: "2 weeks",
      },
    ],
    features: [
      {
        title: "Build Attended Bots",
        description: "Deploy bots that assist team members with manual e-commerce and banking operations",
      },
      {
        title: "UiPath Academy Alignment",
        description: "Prepare fully for the UiPath Certified Professional (RPA Associate) exam",
      },
      {
        title: "3-Month Internship",
        description: "Get a verified internship certificate showing your process automation and workflow designs",
      },
    ],
    trainers: [
      {
        name: "Surya Sarath",
        designation: "RPA Tech Lead Architect",
        experience: "10+ Years in Corporate System Integrations",
      },
      {
        name: "Azharuddin",
        designation: "Project Manager",
        experience: "10+ Years in Enterprise Operations",
      },
    ],
    reviews: [
      {
        name: "Midhun",
        rating: 4.8,
        comment: "Excellent training. Automating Excel data entry processes and setting up email trigger responses felt incredibly powerful.",
      },
    ],
  },
  {
    id: "23",
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Learn online marketing strategies to grow businesses. Master SEO/SEM optimization, social media marketing, email campaigns, and web analytics.",
    duration: "3 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 1250,
    admissionFee: "1000",
    learningOutcome:
      "Plan and execute data-driven digital marketing campaigns. Master SEO keyword rankings, Google Ads campaigns (SEM), social media marketing (SMM), email newsletters, conversion rate optimization, and Google Analytics reports.",
    keySkills: [
      "Search Engine Optimization (SEO)",
      "Google Ads (SEM Campaigns)",
      "Social Media Marketing (SMM)",
      "Email Newsletters & Funnels",
      "Google Analytics & Data Audits",
      "Conversion Rate Optimization",
    ],
    modules: [
      {
        title: "Search Engine Optimization (SEO)",
        description: "Keyword research, on-page optimization, backlink strategies, technical audits, Google Search Console",
        duration: "3 weeks",
      },
      {
        title: "Google Ads & Search Engine Marketing",
        description: "Campaign setup, bidding strategies, ad copy writing, quality score optimization, conversion tracking",
        duration: "3 weeks",
      },
      {
        title: "Social Media Marketing (SMM)",
        description: "Meta Ads (Facebook/Instagram), LinkedIn campaign strategies, content calendars, organic growth hacks",
        duration: "2 weeks",
      },
      {
        title: "Email Marketing & Automation",
        description: "Mailchimp campaign setups, list building, newsletters, sales funnel triggers, A/B campaign audits",
        duration: "2 weeks",
      },
      {
        title: "Google Analytics & Web Audits",
        description: "GA4 reporting panels, setting up conversion events, custom dashboards, mapping customer acquisition",
        duration: "2 weeks",
      },
    ],
    features: [
      {
        title: "Live Budget Campaigns",
        description: "Setup and manage actual marketing campaigns with live advertising budgets",
      },
      {
        title: "Google Certifications Prep",
        description: "Earn credentials in Google Search Ads, Display Ads, and Google Analytics",
      },
      {
        title: "3-Month Internship",
        description: "Get a verified digital marketing internship certificate showing your campaign setups and audits",
      },
    ],
    trainers: [
      {
        name: "Mary Jacob",
        designation: "Digital Marketing Consultant",
        experience: "12+ Years in E-Commerce Growth & Branding",
      },
      {
        name: "Azharuddin",
        designation: "Project Manager",
        experience: "10+ Years in Enterprise Operations",
      },
    ],
    reviews: [
      {
        name: "Alen",
        rating: 5,
        comment: "Superb! Running live advertising campaigns and analyzing traffic data on GA4 gave me actual hands-on confidence.",
      },
    ],
  },
]

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug)
}

export function getAllCourses(): Course[] {
  return courses
}
