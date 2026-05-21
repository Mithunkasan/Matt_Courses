import type { Course } from "@/types/course"

export const internships: Course[] = [
  {
    id: "int-1",
    slug: "firmware-engineer",
    title: "Firmware Engineer",
    description: "Develop low-level software that controls hardware devices. Master embedded C, microcontroller architectures, and real-time operating systems.",
    duration: "3-6 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 820,
    admissionFee: "1000",
    learningOutcome: "Our Firmware Engineering internship equips you with practical capabilities to write low-level code directly interfacing with microcontrollers. Learn to configure register level operations, write custom device drivers, and orchestrate Real-Time Operating Systems (RTOS) tasks. You will gain industry-grade experience in hardware debugging using Logic Analyzers and Oscilloscopes.",
    keySkills: [
      "Embedded C Programming",
      "AVR, PIC, and ARM Architectures",
      "Bare-Metal Driver Development",
      "Real-Time Operating Systems (RTOS)",
      "Communication Protocols (I2C, SPI, UART)",
      "Hardware Debugging & Logic Analyzers",
      "Low-Power Optimization",
      "Version Control (Git)"
    ],
    modules: [
      {
        title: "C & Microcontroller Architecture",
        description: "Deep dive into pointers, bitwise operations, register configuration, and memory mappings for embedded targets.",
        duration: "4 weeks"
      },
      {
        title: "Peripheral Interfacing",
        description: "Implement direct register control for GPIO, Timers, ADC, PWM, and DMA controllers.",
        duration: "4 weeks"
      },
      {
        title: "Serial Communication Protocols",
        description: "Write drivers from scratch for I2C, SPI, and UART interfaces to communicate with sensors and displays.",
        duration: "4 weeks"
      },
      {
        title: "RTOS Concepts & Multitasking",
        description: "Configure FreeRTOS tasks, queues, semaphores, and mutexes for reliable multitasking systems.",
        duration: "4 weeks"
      },
      {
        title: "Capstone: Custom Device Driver Framework",
        description: "Architect and implement an end-to-end modular firmware module for an ARM Cortex-M controller.",
        duration: "4 weeks"
      }
    ],
    features: [
      {
        title: "Expert Mentorship",
        description: "Direct guidance from senior firmware architects with a decades of combined experience."
      },
      {
        title: "Hands-on Development Board",
        description: "Work on professional developmental hardware (e.g. STM32 or ESP32 boards)."
      },
      {
        title: "100% Placement Support",
        description: "Resume crafting, mock technical interviews, and partner firm referrals."
      },
      {
        title: "NACTET & IAO Certification",
        description: "Earn globally recognized double certifications upon successful project completion."
      }
    ],
    trainers: [
      {
        name: "Saurabh Sharma",
        designation: "Embedded Systems Lead",
        experience: "12+ Years in Aerospace and Automotive Firmware"
      },
      {
        name: "Abhijit Roy",
        designation: "Senior Microcontroller Specialist",
        experience: "9+ Years in IoT Device Development"
      }
    ],
    reviews: [
      {
        name: "Nikhil K.",
        rating: 5,
        comment: "Excellent experience. The bare-metal driver development module gave me clear depth of microcontroller systems. Highly recommended!"
      },
      {
        name: "Pooja Hegde",
        rating: 5,
        comment: "Practical sessions with FreeRTOS helped me clear firmware engineering interviews with top product companies."
      }
    ],
    programStructure: [
      "Rigorous, industry-mapped outline for aspiring embedded software professionals",
      "Hands-on bare-metal C programming and device driver architecture training",
      "Learn microcontroller registers, timers, interrupts, and DMA controllers",
      "Build real-time multitasking systems with FreeRTOS",
      "Debugging with logical analyzers, oscilloscopes, and custom target hardware",
      "Design, test, and write peripheral driver libraries from scratch",
      "Interact with a global embedded community and experienced system engineers"
    ],
    careerSupport: [
      "1:1 mock interviews focused on Embedded C, architecture, and RTOS concepts",
      "Embedded-specialized resume, GitHub, and hardware portfolio review by experts",
      "Access to 100+ exclusive Embedded Systems and Firmware job listings monthly",
      "Assistance hosting modular firmware libraries and project documentation on GitHub",
      "Expert preparation for bare-metal driver development and hardware-software interface questions",
      "Preparation for firmware architecture and validation roles at top tier core firms",
      "Guaranteed referrals and connections with partner semiconductor and product design firms"
    ]
  },
  {
    id: "int-2",
    slug: "iot-solutions-engineer",
    title: "IoT Solutions Engineer",
    description: "Design and implement smart connected systems. Bridge the gap between physical hardware sensors, local gateway computing, and enterprise cloud dashboards.",
    duration: "3-6 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 740,
    admissionFee: "1000",
    learningOutcome: "Become an expert in connecting physical devices to the cloud. You will build and deploy smart environments using Arduino and Raspberry Pi. Acquire extensive knowledge on IoT protocols like MQTT and HTTP, cloud platform integrations, edge processing data pipelines, and responsive command-center dashboards.",
    keySkills: [
      "Arduino & Raspberry Pi Prototyping",
      "MQTT, HTTP, CoAP Communication Protocols",
      "Cloud Platform Integration (AWS IoT, Azure)",
      "Sensor Integration & Signal Conditioning",
      "Edge Computing & Local Data Analytics",
      "ESP32 Wi-Fi / Bluetooth Connectivity",
      "IoT Security & Encrypted Handshakes",
      "Dashboard Visualization (Node-RED, Grafana)"
    ],
    modules: [
      {
        title: "IoT Architecture & Node Fundamentals",
        description: "Learn sensor concepts, analog-to-digital conversions, and microcontroller nodes like ESP32 and Arduino.",
        duration: "4 weeks"
      },
      {
        title: "Single Board Computers & Gateways",
        description: "Setup and configure Raspberry Pi, OS installation, Python script scheduling, and local data routing.",
        duration: "4 weeks"
      },
      {
        title: "Network Communications & Protocols",
        description: "Master TCP/IP, UDP, MQTT broker installation, HTTP API payloads, and WebSockets.",
        duration: "4 weeks"
      },
      {
        title: "Cloud IoT Gateways & Databases",
        description: "Integrate edge devices with AWS IoT Core or Microsoft Azure IoT Hub. Store time-series data on databases.",
        duration: "4 weeks"
      },
      {
        title: "Capstone: Smart Building Control System",
        description: "Develop a multi-sensor control system with a live web/mobile dashboard and push alerts.",
        duration: "4 weeks"
      }
    ],
    features: [
      {
        title: "Complete Hardware Kit",
        description: "Includes ESP32, Raspberry Pi Zero (optional), sensor pack, and actuator relays."
      },
      {
        title: "Enterprise Cloud Access",
        description: "Hands-on experience with live AWS IoT resources in sandbox environments."
      },
      {
        title: "Industrial Case Studies",
        description: "Learn real-world architectures used in Smart Agriculture and Connected Factories."
      }
    ],
    trainers: [
      {
        name: "Abhijit Roy",
        designation: "Senior Microcontroller Specialist",
        experience: "9+ Years in IoT Device Development"
      },
      {
        name: "Vikram Sen",
        designation: "Cloud IoT Architect",
        experience: "11+ Years in Enterprise Distributed Systems"
      }
    ],
    reviews: [
      {
        name: "Sameer Joshi",
        rating: 5,
        comment: "Connecting my Raspberry Pi server and custom ESP32 nodes to AWS IoT was absolute magic! Fantastic syllabus."
      }
    ]
  },
  {
    id: "int-3",
    slug: "autonomous-systems-engineer",
    title: "Autonomous Systems Engineer",
    description: "Design mechanical robotics, drones, and smart moving vehicles. Program sensors, kinematics control loops, and self-navigating paths.",
    duration: "3-6 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 690,
    admissionFee: "1000",
    learningOutcome: "Step into the cutting-edge domain of robotics and autonomous navigation. Master robot kinematics, sensor data processing (LiDAR, ultrasonic, IMU), SLAM algorithms, and the industrial Robot Operating System (ROS) standard to engineer state-of-the-art autonomous machinery.",
    keySkills: [
      "Robot Kinematics & Mechanics",
      "ROS (Robot Operating System) Integration",
      "Sensor Fusion (IMU, LiDAR, Sonar)",
      "SLAM (Simultaneous Localization & Mapping)",
      "PID & Motion Control Loops",
      "Autonomous Path Planning Algorithms",
      "C++ & Python for Robotics",
      "Drone Flight Controller Programming"
    ],
    modules: [
      {
        title: "Robotic Kinematics & Control Theory",
        description: "Understand coordinate frames, forward/inverse kinematics, and PID loops for actuator motors.",
        duration: "4 weeks"
      },
      {
        title: "Sensors & Perception",
        description: "Calibrate and extract signals from IMUs, encoders, LiDAR scanners, and stereoscopic camera systems.",
        duration: "4 weeks"
      },
      {
        title: "ROS (Robot Operating System) Core",
        description: "Create nodes, topics, services, custom messages, and orchestrate package architectures in Linux.",
        duration: "4 weeks"
      },
      {
        title: "SLAM & Navigation Stack",
        description: "Build 2D/3D maps using laser scans and deploy paths using the standard ROS Navigation stack.",
        duration: "4 weeks"
      },
      {
        title: "Capstone: Autonomous Vehicle Simulation",
        description: "Design and program a self-navigating mobile robot in Gazebo and RViz from point A to point B.",
        duration: "4 weeks"
      }
    ],
    features: [
      {
        title: "Simulation & Real Lab",
        description: "Engage with both high-fidelity Gazebo simulator environments and physical ground robots."
      },
      {
        title: "Advanced Math Guidance",
        description: "Simplified breakdowns of complex linear algebra, kinematics matrices, and path vectors."
      }
    ],
    trainers: [
      {
        name: "Saurabh Sharma",
        designation: "Embedded Systems Lead",
        experience: "12+ Years in Aerospace and Automotive Firmware"
      },
      {
        name: "Dr. Ramesh Nair",
        designation: "Robotics Research Director",
        experience: "15+ Years in Robotic Motion & Perception"
      }
    ],
    reviews: [
      {
        name: "Tanya M.",
        rating: 5,
        comment: "Fascinating course modules. The ROS navigation stack projects were highly engaging and extremely comprehensive."
      }
    ]
  },
  {
    id: "int-4",
    slug: "hardware-design-engineer",
    title: "Hardware Design Engineer",
    description: "Design multi-layer PCBs and robust electronic circuits. Master schematic capture, routing constraints, power analysis, and manufacturing workflows.",
    duration: "3-6 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 610,
    admissionFee: "1000",
    learningOutcome: "Acquire the complete skillset required to design and build highly reliable hardware circuits. You will go from schematic concepts to complex multi-layer PCB layout implementations, handling high-speed trace routing constraints, thermal dissipations, signal integrity, and production-ready manufacturing packages.",
    keySkills: [
      "Altium Designer / KiCad Schematic Capture",
      "Multi-Layer Board Layout Techniques",
      "High-Speed Signal Integrity & Guarding",
      "Power Distribution Network (PDN) Design",
      "Component Footprint Custom Creation",
      "DFM & DFA (Design for Manufacturing/Assembly)",
      "BOM & Gerber Package Generation",
      "Oscilloscope bench verification"
    ],
    modules: [
      {
        title: "Circuit Schematics & Component Selection",
        description: "Learn to read datasheets, construct symbols, capture circuits, and implement passive filter architectures.",
        duration: "4 weeks"
      },
      {
        title: "PCB Layer Stackup & Placements",
        description: "Learn mechanical constraints, board boundaries, trace calculations, and decoupling capacitor placements.",
        duration: "4 weeks"
      },
      {
        title: "Trace Routing & Signal Isolation",
        description: "Implement differential pair routing, ground planes, vias management, and cross-talk shielding.",
        duration: "4 weeks"
      },
      {
        title: "Power Electronics & Thermal Analysis",
        description: "Design high-current traces, thermal vias, heat-sink mounting, and linear / switching regulators.",
        duration: "4 weeks"
      },
      {
        title: "Capstone: Advanced High-Speed Embedded Board",
        description: "Design and verify a complete microcontroller board with USB, crystals, and sensor interfaces.",
        duration: "4 weeks"
      }
    ],
    features: [
      {
        title: "Altium Designer Licensing",
        description: "Educational licenses and practical tutorials using professional Altium environments."
      },
      {
        title: "Hardware Fabrication Support",
        description: "We fabricate your capstone multi-layer design in our industrial lab for physically testing it."
      }
    ],
    trainers: [
      {
        name: "Saurabh Sharma",
        designation: "Embedded Systems Lead",
        experience: "12+ Years in Aerospace and Automotive Firmware"
      },
      {
        name: "Amit Deshmukh",
        designation: "Senior Hardware Engineer",
        experience: "10+ Years in Aerospace Signal & Power PCBs"
      }
    ],
    reviews: [
      {
        name: "Rohan P.",
        rating: 5,
        comment: "Excellent lab infrastructure. Assembling my custom 4-layer designed PCB in the workshop was incredibly satisfying!"
      }
    ]
  },
  {
    id: "int-5",
    slug: "software-engineer",
    title: "Software Engineer",
    description: "Build robust, scalable, high-performance systems. Master Systems Programming in C/C++, advanced OOP in Java, and algorithmic problem solving.",
    duration: "3-6 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 1100,
    admissionFee: "1000",
    learningOutcome: "Elevate your computer science fundamentals to an industry-ready engineering level. Master complex data structures, algorithmic optimizations, concurrency primitives, design patterns, object-oriented paradigms, and system-level architectures for enterprise-grade execution.",
    keySkills: [
      "C & C++ Systems Programming",
      "Advanced Java & Spring Core",
      "Data Structures & Algorithms (DSA)",
      "Object-Oriented Design Patterns",
      "Database Systems & Complex Queries",
      "Memory Management & Pointers",
      "Unit Testing & Integration Suites",
      "Clean Code Practices & Refactoring"
    ],
    modules: [
      {
        title: "C & C++ Programming Deep Dive",
        description: "Master memory allocation, pointers, virtual functions, templates, and STL container optimizations.",
        duration: "4 weeks"
      },
      {
        title: "Advanced Java Programming & OOP",
        description: "Explore inheritance hierarchy, collections, multi-threading, concurrency utilities, and generic types.",
        duration: "4 weeks"
      },
      {
        title: "Data Structures & Performance Analysis",
        description: "Implement custom trees, heaps, graphs, hashing, sorting, and evaluate time and space complexites (O-notation).",
        duration: "4 weeks"
      },
      {
        title: "Design Patterns & Code Architecture",
        description: "Master Singleton, Factory, Observer, Strategy, MVC, and SOLID clean software engineering principles.",
        duration: "4 weeks"
      },
      {
        title: "Capstone: High-Throughput Service Engine",
        description: "Build a multithreaded server engine processing parallel network operations with custom queues.",
        duration: "4 weeks"
      }
    ],
    features: [
      {
        title: "LeetCode Prep Seminars",
        description: "Weekly interactive solving sessions focusing on technical coding whiteboard interviews."
      },
      {
        title: "Code Review Culture",
        description: "Get detailed pull-request reviews on your assignments from real-world software leads."
      }
    ],
    trainers: [
      {
        name: "Chandru",
        designation: "Fullstack Developer",
        experience: "8+ Years in Web Development"
      },
      {
        name: "Meera Nair",
        designation: "Principal Engineer",
        experience: "14+ Years in Backend Architectures"
      }
    ],
    reviews: [
      {
        name: "Abhinav S.",
        rating: 5,
        comment: "The rigorous focus on clean code and design patterns transformed the way I write code. Extremely valuable!"
      }
    ]
  },
  {
    id: "int-6",
    slug: "python-developer",
    title: "Python Developer",
    description: "Write highly efficient scripts, automations, and backend APIs. Master Python scripting, data structures, automation scrapers, and dynamic web frameworks.",
    duration: "3-6 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 980,
    admissionFee: "1000",
    learningOutcome: "Harness the extreme versatility of Python to write scalable, production-grade tools. Go from basic scripts to robust automation frameworks, database integrations, modern REST APIs using Django/FastAPI, and automated test runners.",
    keySkills: [
      "Python Scripting & Object Orientation",
      "Automation & Web Scrapers (Selenium, BS4)",
      "RESTful API Development (FastAPI, Django)",
      "Database ORMs & Query Customization",
      "Unit Testing & Integration Suites (PyTest)",
      "Task Scheduling (Celery, Redis)",
      "API Security & JWT Authorizations",
      "Dockerization & Cloud Deployments"
    ],
    modules: [
      {
        title: "Python Advanced & Functional Scripting",
        description: "Understand decorators, generators, list comprehensions, exceptions, file I/O, and custom libraries.",
        duration: "4 weeks"
      },
      {
        title: "Web Scraping & Workflow Automation",
        description: "Automate browser interactions, parse dynamic layouts, download bulk media, and clean JSON payloads.",
        duration: "4 weeks"
      },
      {
        title: "API Development & Routing",
        description: "Design endpoints with FastAPI, validate inputs with Pydantic models, and construct REST controllers.",
        duration: "4 weeks"
      },
      {
        title: "Database Integration & Caching",
        description: "Integrate PostgreSQL with SQLAlchemy ORM. Implement fast caching layers using Redis.",
        duration: "4 weeks"
      },
      {
        title: "Capstone: Automation & API Engine",
        description: "Build an automated task scraper that stores records and serves a secure API, complete with a Redis queue.",
        duration: "4 weeks"
      }
    ],
    features: [
      {
        title: "Modern Framework Toolkit",
        description: "Learn FastAPI, Pydantic, Celery, and PyTest - the absolute gold standard for modern startups."
      },
      {
        title: "Open Source Contributions",
        description: "Guidance on reviewing and contributing to popular Python repositories."
      }
    ],
    trainers: [
      {
        name: "Surya Sarath",
        designation: "Python Developer",
        experience: "10+ years in Data Analytics and Business Intelligence"
      },
      {
        name: "Azharuddin",
        designation: "Project Manager",
        experience: "10+ years in Python Development"
      }
    ],
    reviews: [
      {
        name: "Karan G.",
        rating: 5,
        comment: "Excellent FastAPI tutorials. Developing asynchronous background workers was explained very simply and effectively."
      }
    ]
  },
  {
    id: "int-7",
    slug: "ml-ai-engineer",
    title: "ML / AI Engineer",
    description: "Engineer modern intelligent systems. Master supervised learning, deep neural networks, computer vision, and deploying scalable AI pipelines.",
    duration: "3-6 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 1250,
    admissionFee: "1000",
    learningOutcome: "Step into the future of data-driven intelligence. You will learn to construct, train, optimize, and deploy artificial intelligence models. Master modern frameworks like TensorFlow and PyTorch, natural language processing, computer vision algorithms, and industry-grade MLOps deployment cycles.",
    keySkills: [
      "Machine Learning Algorithms (SciKit-Learn)",
      "Deep Learning Models (TensorFlow, PyTorch)",
      "Computer Vision & Image Processing",
      "Natural Language Processing (NLP)",
      "Model Optimization & Quantization",
      "Neural Network Architectures (CNN, RNN)",
      "Vector Embeddings & Vector Databases",
      "MLOps & Model Deployment (Docker, AWS)"
    ],
    modules: [
      {
        title: "Statistical Foundations & Classical ML",
        description: "Implement regression, trees, SVMs, clustering, and master cross-validation and feature scaling.",
        duration: "4 weeks"
      },
      {
        title: "Deep Learning Foundations",
        description: "Build dense feedforward networks, optimize backpropagation, and evaluate loss curves with PyTorch.",
        duration: "4 weeks"
      },
      {
        title: "Computer Vision & Advanced Networks",
        description: "Create Convolutional Neural Networks (CNNs) for object detection, segmentation, and classification.",
        duration: "4 weeks"
      },
      {
        title: "NLP & LLM Integrations",
        description: "Understand transformers, tokenization, text embeddings, semantic search, and fine-tuning smaller LLMs.",
        duration: "4 weeks"
      },
      {
        title: "Capstone: Production Ready ML App",
        description: "Build an AI inference server that detects objects or classifies sentiments in real-time, packaged with Docker.",
        duration: "4 weeks"
      }
    ],
    features: [
      {
        title: "GPU Cloud Computing Sandbox",
        description: "Access high-performance GPU instances to train heavy neural networks without local hardware bottlenecks."
      },
      {
        title: "Kaggle Mentorship",
        description: "Tips and strategies to participate in and win global data science competitions."
      }
    ],
    trainers: [
      {
        name: "Dr. Ramesh Nair",
        designation: "Robotics Research Director",
        experience: "15+ Years in Robotic Motion & Perception"
      },
      {
        name: "Nandini Sen",
        designation: "AI Research Scientist",
        experience: "8+ Years in Deep Learning and Computer Vision"
      }
    ],
    reviews: [
      {
        name: "Priya Das",
        rating: 5,
        comment: "Brilliant internship! Training CNN models on active cloud GPUs and packaging the model into a Docker endpoint was amazing."
      }
    ]
  },
  {
    id: "int-8",
    slug: "data-scientist",
    title: "Data Scientist",
    description: "Extract actionable insights from enterprise datasets. Master exploratory analysis, SQL, statistical modeling, and data-driven business storytelling.",
    duration: "3-6 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 890,
    admissionFee: "1000",
    learningOutcome: "Develop the ability to solve complex business problems using rigorous data. Master the complete pipeline: data extraction with SQL, cleaning and preprocessing, statistical hypothesis testing, model building, and dynamic, interactive data visualization.",
    keySkills: [
      "Exploratory Data Analysis (Pandas, NumPy)",
      "Statistical Hypothesis Testing & A/B Tests",
      "Advanced SQL Queries & Window Functions",
      "Data Visualization (Matplotlib, Seaborn)",
      "Predictive Machine Learning Modeling",
      "Data Wrangling & Feature Engineering",
      "Jupyter Notebook Storytelling",
      "ETL Pipeline Fundamentals"
    ],
    modules: [
      {
        title: "Advanced Data Manipulation",
        description: "Master Pandas operations, handling missing values, merging massive datasets, and optimizing data frame memory.",
        duration: "4 weeks"
      },
      {
        title: "Enterprise SQL & Warehousing",
        description: "Write complex subqueries, CTEs, window functions, and optimize queries on massive databases.",
        duration: "4 weeks"
      },
      {
        title: "Statistical Data Modeling",
        description: "Implement probability distributions, confidence intervals, A/B testing methods, and regression models.",
        duration: "4 weeks"
      },
      {
        title: "Data Visualization & Storytelling",
        description: "Design clean, beautiful visual charts. Present technical analytical findings clearly to non-technical stakeholders.",
        duration: "4 weeks"
      },
      {
        title: "Capstone: Business Optimization Model",
        description: "Analyze an active retail/fintech dataset, test hypotheses, build a predictive retention model, and present findings.",
        duration: "4 weeks"
      }
    ],
    features: [
      {
        title: "Massive Real-World Datasets",
        description: "Work with multi-gigabyte real-world datasets rather than simple clean toy data."
      },
      {
        title: "Presentation Skills Training",
        description: "Dedicated workshops to learn how to present reports to enterprise executives."
      }
    ],
    trainers: [
      {
        name: "Surya Sarath",
        designation: "Python Developer",
        experience: "10+ years in Data Analytics and Business Intelligence"
      },
      {
        name: "Meera Nair",
        designation: "Principal Engineer",
        experience: "14+ Years in Backend Architectures"
      }
    ],
    reviews: [
      {
        name: "Devendra B.",
        rating: 5,
        comment: "Excellent SQL modules! Window functions and recursive queries were explained extremely clearly with hands-on practice."
      }
    ]
  },
  {
    id: "int-9",
    slug: "business-intelligence-analyst",
    title: "Business Intelligence Analyst",
    description: "Transform raw transactional data into beautiful executive dashboards. Master SQL, advanced ETL, Power BI models, and complex DAX scripting.",
    duration: "3-6 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 810,
    admissionFee: "1000",
    learningOutcome: "Become an expert in business data visualization and business logic. Master schema modelling (star/snowflake schemas), design interactive dashboards in Power BI Desktop, write complex DAX metrics, and configure robust ETL processing pipelines.",
    keySkills: [
      "Power BI Desktop & Service Configuration",
      "Advanced DAX (Data Analysis Expressions)",
      "Power Query ETL & M Scripting",
      "Data Warehousing Schema Designs",
      "Interactive Dashboard & KPI Design",
      "SQL Querying & DB Integrations",
      "Row-Level Security (RLS) Controls",
      "Gateway Refresh Scheduling"
    ],
    modules: [
      {
        title: "Data Sourcing & ETL Pipelines",
        description: "Connect to database endpoints, APIs, and CSVs. Clean and transform structures in Power Query.",
        duration: "4 weeks"
      },
      {
        title: "Data Modeling & Star Schemas",
        description: "Design relational models, manage active/inactive relationships, and configure dimensional tables.",
        duration: "4 weeks"
      },
      {
        title: "DAX Foundations & Metrics",
        description: "Write basic measures, calculate columns, and master row and filter context operations.",
        duration: "4 weeks"
      },
      {
        title: "Advanced DAX & Time Intelligence",
        description: "Implement dynamic period-over-period metrics, rolling averages, and custom security filters.",
        duration: "4 weeks"
      },
      {
        title: "Capstone: Enterprise Executive Performance Dashboard",
        description: "Build an end-to-end interactive dashboard displaying global sales, product KPIs, and margins.",
        duration: "4 weeks"
      }
    ],
    features: [
      {
        title: "Design System Templates",
        description: "Learn to build dashboard layouts matching top modern corporate design systems."
      },
      {
        title: "Official PL-300 Exam Support",
        description: "Full study guides and practice quizzes for the Microsoft Certified Power BI Analyst exam."
      }
    ],
    trainers: [
      {
        name: "Surya Sarath",
        designation: "Python Developer",
        experience: "10+ years in Data Analytics and Business Intelligence"
      },
      {
        name: "Rajesh K.",
        designation: "Principal BI Architect",
        experience: "12+ Years in Corporate BI Reporting"
      }
    ],
    reviews: [
      {
        name: "Gaurav S.",
        rating: 5,
        comment: "Excellent coverage of DAX context. It made dynamic time intelligence calculations so much simpler to write."
      }
    ]
  },
  {
    id: "int-10",
    slug: "simulation-modelling-engineer",
    title: "Simulation & Modelling Engineer",
    description: "Design, model, and simulate complex physical systems. Master MATLAB programming, Simulink models, control design, and signal processing.",
    duration: "3-6 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 540,
    admissionFee: "1000",
    learningOutcome: "Step into advanced engineering modeling. You will learn how to simulate mechanical, control, and signal processing systems using MATLAB and Simulink. Implement feedback control loops, design dynamic models, and run high-fidelity simulations for verification.",
    keySkills: [
      "MATLAB Core Scripting & Plotting",
      "Simulink Dynamic Block Modelling",
      "Feedback System Control Design",
      "Signal Processing & Filter Design",
      "Stateflow Event-driven Modelling",
      "Mathematical Equation Solvers",
      "Model-in-the-Loop (MIL) Verification",
      "Data Analytics & Custom Toolboxes"
    ],
    modules: [
      {
        title: "MATLAB Programming Core",
        description: "Learn syntax, vectorization, matrix mathematics, custom script logic, and data plot formatting.",
        duration: "4 weeks"
      },
      {
        title: "Simulink Foundations",
        description: "Construct dynamic system models, configure solver settings, and evaluate transfer functions.",
        duration: "4 weeks"
      },
      {
        title: "Control System Design",
        description: "Implement PID tuning, root-locus, Bode plots, and evaluate feedback loop stability.",
        duration: "4 weeks"
      },
      {
        title: "Signal Processing & Analysis",
        description: "Design Butterworth/Chebyshev filters, execute FFTs, and evaluate signal noise profiles.",
        duration: "4 weeks"
      },
      {
        title: "Capstone: Dynamic Closed-Loop Motor Controller",
        description: "Design, model, tune, and simulate a high-speed brushed motor speed controller under dynamic loads.",
        duration: "4 weeks"
      }
    ],
    features: [
      {
        title: "Industrial Case Studies",
        description: "Simulations modeled after automotive suspension systems and satellite control loops."
      },
      {
        title: "Toolbox Deep Dives",
        description: "Extensive practice with Control Systems, Signal Processing, and Optimization toolboxes."
      }
    ],
    trainers: [
      {
        name: "Saurabh Sharma",
        designation: "Embedded Systems Lead",
        experience: "12+ Years in Aerospace and Automotive Firmware"
      },
      {
        name: "Dr. Ramesh Nair",
        designation: "Robotics Research Director",
        experience: "15+ Years in Robotic Motion & Perception"
      }
    ],
    reviews: [
      {
        name: "Rahul S.",
        rating: 5,
        comment: "Excellent MATLAB control lectures. The PID tuner simulation assignments perfectly matched the theory from my college curriculum."
      }
    ]
  },
  {
    id: "int-11",
    slug: "full-stack-developer",
    title: "Full Stack Developer",
    description: "Build robust modern web applications. Master React.js, Node.js API services, relational databases, and enterprise REST/GraphQL architectures.",
    duration: "3-6 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 1450,
    admissionFee: "1000",
    learningOutcome: "Gain end-to-end web engineering capabilities. Learn to build modern, fluid user interfaces in React.js, write scalable REST APIs with Node.js and Express, integrate database schemas, manage authentications, and deploy applications to production servers.",
    keySkills: [
      "React.js & State Management (Redux/Zustand)",
      "Node.js & Express API Development",
      "Relational Databases & SQL Queries",
      "RESTful API & Endpoint Engineering",
      "Modern HTML5 & CSS3 Flexbox/Grid",
      "Webpack/Vite Build Optimization",
      "Authentication Protocols (JWT, OAuth)",
      "Cloud Deployment & Server Configurations"
    ],
    modules: [
      {
        title: "Frontend Engineering & Layouts",
        description: "Write semantic HTML5, fluid responsive CSS3 layouts, flexbox, grid, and learn modern JavaScript ES6+ specifications.",
        duration: "4 weeks"
      },
      {
        title: "React.js User Interfaces",
        description: "Understand state, props, hooks, router configurations, global state management, and optimized render patterns.",
        duration: "4 weeks"
      },
      {
        title: "Node.js Backend & APIs",
        description: "Build server runtimes using Express, structure modular router paths, and implement logging utilities.",
        duration: "4 weeks"
      },
      {
        title: "Database Integration & Security",
        description: "Integrate database tables. Write schema scripts. Secure routes with JWT tokens and hash passwords.",
        duration: "4 weeks"
      },
      {
        title: "Capstone: Dynamic Enterprise E-Commerce Platform",
        description: "Develop a complete e-commerce application with product catalogs, shopping carts, checkout, and dashboard portals.",
        duration: "4 weeks"
      }
    ],
    features: [
      {
        title: "Production Infrastructure Sandbox",
        description: "Deploy and host your operational websites on active cloud infrastructure (AWS/Vercel/Render)."
      },
      {
        title: "Interactive Git Workshops",
        description: "Learn git branching, resolving merge conflicts, and agile pull-request reviews."
      }
    ],
    trainers: [
      {
        name: "Chandru",
        designation: "Fullstack Developer",
        experience: "8+ Years in Web Development"
      },
      {
        name: "Azharuddin",
        designation: "Project Manager",
        experience: "10+ years in Python Development"
      }
    ],
    reviews: [
      {
        name: "Deepika R.",
        rating: 5,
        comment: "Highly practical. The step-by-step instructions on JWT authentication and hosting our React apps made everything extremely clear."
      }
    ]
  },
  {
    id: "int-12",
    slug: "cyber-security-analyst",
    title: "Cyber Security Analyst",
    description: "Protect systems and networks against digital security threats. Master network security, cryptography, ethical hacking, and digital forensics.",
    duration: "3-6 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 840,
    admissionFee: "1000",
    learningOutcome: "Step into the crucial field of cybersecurity. Master security configurations, perform penetration tests to find vulnerabilities, implement secure cryptographic handshakes, perform forensics investigations, and design security policies.",
    keySkills: [
      "Penetration Testing & Hacking Frameworks",
      "Network Protocols & Firewall Audits",
      "Symmetric & Asymmetric Cryptography",
      "Vulnerability Assessment Tools (Nessus)",
      "OWASP Top 10 Web Vulnerability Audits",
      "Digital Forensics & Malware Triage",
      "Security Audits & Regulatory Standards",
      "Intrusion Detection Systems (IDS/IPS)"
    ],
    modules: [
      {
        title: "Networking & Security Core",
        description: "Deep dive into TCP/IP headers, routing table rules, packet capture analysis with Wireshark, and port audits.",
        duration: "4 weeks"
      },
      {
        title: "Vulnerability Auditing & Web Security",
        description: "Detect SQL injection, XSS, CSRF, insecure headers, and run scanner suites.",
        duration: "4 weeks"
      },
      {
        title: "Penetration Testing & Exploitations",
        description: "Learn custom exploitation techniques, network attacks, and pivot rules inside isolated environments.",
        duration: "4 weeks"
      },
      {
        title: "Digital Forensics & Incident Response",
        description: "Analyze RAM snapshots, extract file signatures, trace event log records, and document triages.",
        duration: "4 weeks"
      },
      {
        title: "Capstone: Enterprise Network Security Audit",
        description: "Conduct a full security audit of a sandbox enterprise system, fix vulnerabilities, and write a professional audit report.",
        duration: "4 weeks"
      }
    ],
    features: [
      {
        title: "Simulated Cyber Lab Sandbox",
        description: "Practice your ethical hacking skills in completely isolated target networks without security risks."
      },
      {
        title: "CEH Exam Syllabus Mapping",
        description: "Syllabus aligned with Certified Ethical Hacker (CEH) certification modules."
      }
    ],
    trainers: [
      {
        name: "Abhijit Roy",
        designation: "Senior Microcontroller Specialist",
        experience: "9+ Years in IoT Device Development"
      },
      {
        name: "Vikram Sen",
        designation: "Cloud IoT Architect",
        experience: "11+ Years in Enterprise Distributed Systems"
      }
    ],
    reviews: [
      {
        name: "Vikas T.",
        rating: 5,
        comment: "The practical exercises with Wireshark and OWASP vulnerabilities were amazing. The lab environments are incredibly well-configured."
      }
    ]
  },
  {
    id: "int-13",
    slug: "rpa-developer",
    title: "RPA Developer",
    description: "Automate repetitive, high-volume business workflows. Master robotic process automation, UiPath Studio workflows, bot scheduling, and custom API interfaces.",
    duration: "3-6 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 520,
    admissionFee: "1000",
    learningOutcome: "Harness the power of Robotic Process Automation (RPA) to transform operational workflows. Learn to design, configure, debug, and monitor software robots in UiPath Studio, automate data entry and systems tasks, integrate API services, and orchestrate bot deployments.",
    keySkills: [
      "UiPath Studio Core Workflow Automation",
      "Selector Fine-Tuning & Dynamic RegEx",
      "REFramework (Robotic Enterprise Framework)",
      "Database Automations & Dynamic Excel Parsers",
      "Orchestrator Setup & Bot Monitoring",
      "Exception Handling & Recovery Flows",
      "API Integrations & Custom JSON Payloads",
      "Cognitive Bot Automations & OCR Toolkits"
    ],
    modules: [
      {
        title: "RPA & UI Automation Core",
        description: "Understand variables, selector rules, recording clicks, typing actions, and dynamic variables.",
        duration: "4 weeks"
      },
      {
        title: "Structured Data Extraction & Excels",
        description: "Automate data tables, dynamic excel formulas, web scraping, and directory sorting.",
        duration: "4 weeks"
      },
      {
        title: "Advanced Robotic Enterprise Framework (REF)",
        description: "Build robust transactional bots using state-machine templates, queues, and configuration sheets.",
        duration: "4 weeks"
      },
      {
        title: "Orchestrator & Integration Gateway",
        description: "Connect bots to Orchestrator, schedule jobs, configure assets, and trigger bots using API requests.",
        duration: "4 weeks"
      },
      {
        title: "Capstone: Automation Bot Ecosystem",
        description: "Develop an automated invoice parser that extracts data, enters records into a database, and emails PDF receipts.",
        duration: "4 weeks"
      }
    ],
    features: [
      {
        title: "Official UiPath Partner Resources",
        description: "Practice automation assignments using official licensing, materials, and template guidelines."
      },
      {
        title: "Enterprise Automation Demos",
        description: "Case studies exploring automation systems deployed in banking, human resources, and supply chains."
      }
    ],
    trainers: [
      {
        name: "Chandru",
        designation: "Fullstack Developer",
        experience: "8+ Years in Web Development"
      },
      {
        name: "Sudhir Kumar",
        designation: "RPA Solution Lead",
        experience: "9+ Years in Enterprise Operations Automation"
      }
    ],
    reviews: [
      {
        name: "Anjali K.",
        rating: 5,
        comment: "Excellent REFramework training. The state-machine model explanation cleared all my doubts about building stable enterprise bots."
      }
    ]
  },
  {
    id: "int-14",
    slug: "digital-marketing-analyst",
    title: "Digital Marketing Analyst",
    description: "Accelerate digital growth and drive high-impact traffic. Master search optimization, paid search, social campaigns, dynamic web analytics, and marketing metrics.",
    duration: "3-6 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 760,
    admissionFee: "1000",
    learningOutcome: "Master the analytical and strategic capabilities of modern digital marketing. Learn to optimize organic search visibility, manage high-return advertising budgets on Meta and Google, set up web tracking metrics, analyze campaigns, and generate executive growth reports.",
    keySkills: [
      "Search Engine Optimization (SEO/SEM)",
      "Google Ads Campaign Optimization",
      "Meta Ads Manager & Audience Funnels",
      "Web Analytics & Google Analytics 4 (GA4)",
      "Google Tag Manager Event Configurations",
      "A/B Landing Page Copy Optimizations",
      "Content Strategy & Funnel Marketing",
      "Data Analytics & Reporting Tools"
    ],
    modules: [
      {
        title: "Search Engine Optimization (SEO)",
        description: "Perform keyword research, optimize on-page headers, build quality backlink profiles, and solve technical indexing errors.",
        duration: "4 weeks"
      },
      {
        title: "Paid Search Campaigns (Google Ads)",
        description: "Configure search networks, fine-tune keyword match types, design ad copy, and optimize conversion bids.",
        duration: "4 weeks"
      },
      {
        title: "Social Media Advertising (Meta)",
        description: "Build custom pixel conversions, segment lookalike audiences, and manage campaign budgets.",
        duration: "4 weeks"
      },
      {
        title: "Analytics, GTM, & Data Reporting",
        description: "Configure Google Tag Manager triggers, GA4 custom event tracking, and build visual summaries in Looker Studio.",
        duration: "4 weeks"
      },
      {
        title: "Capstone: Growth Optimization Campaign",
        description: "Construct a digital growth strategy: perform audit reviews, configure tags, and present a complete optimization plan.",
        duration: "4 weeks"
      }
    ],
    features: [
      {
        title: "Live Budget Sandbox",
        description: "Run live mini-campaigns with real budgets under the guidance of performance marketing experts."
      },
      {
        title: "Industry Standard Tools",
        description: "Extensive hands-on practice with Semrush, Ahrefs, Screaming Frog, and Hotjar."
      }
    ],
    trainers: [
      {
        name: "Surya Sarath",
        designation: "Python Developer",
        experience: "10+ years in Data Analytics and Business Intelligence"
      },
      {
        name: "Nikhil Verma",
        designation: "Performance Marketing Lead",
        experience: "10+ Years in Strategic Digital Growth"
      }
    ],
    reviews: [
      {
        name: "Sneha P.",
        rating: 5,
        comment: "Extremely informative! Setting up custom conversions in Google Tag Manager and tracking them in GA4 was incredibly helpful."
      }
    ]
  },
  {
    id: "int-15",
    slug: "linux-systems-administrator",
    title: "Linux Systems Administrator",
    description: "Manage, optimize, and secure enterprise server systems. Master Linux CLI navigation, advanced bash scripting, network security, and infrastructure automation tools.",
    duration: "3-6 Months",
    sessionDuration: "2 Hours Daily",
    schedule: "Monday to Friday",
    mode: "Offline / Online Classroom",
    enrolled: 680,
    admissionFee: "1000",
    learningOutcome: "Become an expert in managing enterprise server infrastructure. Master command-line operations, write advanced bash shell automation scripts, configure network firewalls, deploy secure web servers, and automate systems configuration using Ansible.",
    keySkills: [
      "Linux Command Line (Bash/CLI)",
      "Advanced Shell Scripting (Bash)",
      "System Administration & User Management",
      "Network Configurations & SSH Keys",
      "Web Server Hosting (Nginx, Apache)",
      "Firewalls & System Hardening (UFW/IPTables)",
      "Infrastructure Automation (Ansible)",
      "Server Monitoring & Performance Audits"
    ],
    modules: [
      {
        title: "Linux CLI Navigation & Commands",
        description: "Master filesystems, directory navigation, file permissions (chmod/chown), processes, and text streams.",
        duration: "4 weeks"
      },
      {
        title: "Advanced Bash Shell Scripting",
        description: "Write variables, loops, conditional filters, error checkers, and schedule system cron jobs.",
        duration: "4 weeks"
      },
      {
        title: "Services & Network Audits",
        description: "Deploy secure web servers (Nginx), bind DNS records, and configure SSH security.",
        duration: "4 weeks"
      },
      {
        title: "Infrastructure Automation & Monitoring",
        description: "Write Ansible Playbooks to configure remote targets. Configure system logs and alerts.",
        duration: "4 weeks"
      },
      {
        title: "Capstone: High-Availability Secure Server Suite",
        description: "Build and deploy a secure cluster of Nginx servers hosting dynamic APIs, complete with firewall auditing and logging.",
        duration: "4 weeks"
      }
    ],
    features: [
      {
        title: "Sandbox Virtual Infrastructure",
        description: "Access dedicated remote cloud VPS nodes to practice configurations without risk to local setups."
      },
      {
        title: "LFCS Certification Alignment",
        description: "Syllabus aligned with the Linux Foundation Certified System Administrator (LFCS) examination."
      }
    ],
    trainers: [
      {
        name: "Abhijit Roy",
        designation: "Senior Microcontroller Specialist",
        experience: "9+ Years in IoT Device Development"
      },
      {
        name: "Vikram Sen",
        designation: "Cloud IoT Architect",
        experience: "11+ Years in Enterprise Distributed Systems"
      }
    ],
    reviews: [
      {
        name: "Manoj D.",
        rating: 5,
        comment: "Outstanding CLI lectures. The Bash scripting module alone has automated several tedious backup tasks at my current job!"
      }
    ]
  }
]

export function getInternshipBySlug(slug: string): Course | undefined {
  return internships.find((internship) => internship.slug === slug)
}

export function getAllInternships(): Course[] {
  return internships
}
