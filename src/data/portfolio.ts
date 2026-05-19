import { Code2, Database, LineChart, Cpu, Bot, Megaphone, Server, Layers } from 'lucide-react';

export const personalInfo = {
  name: "Amar",
  tagline: "Data Scientist & AI Engineer",
  title: "Machine Learning & AI Practitioner",
  email: "amarpandey4646@gmail.com",
  instagram: "@amar_eternal",
  linkedIn: "https://www.linkedin.com/in/amarpandey01/",
  github: "https://github.com/Amar03ete",
  location: "Available for worldwide opportunities",
  status: "Available for worldwide opportunities",
  heroDescription: "A data-driven professional focused on building scalable machine learning models and extracting actionable business insights. Bridging the gap between raw data and strategic execution, I specialize in predictive analytics, AI solutions, and full-stack development to solve complex business challenges.",
  aboutMe: `HEY, THERE 👋\nI'm Amar, a data-driven professional focused on AI-powered analytics, predictive modeling, and intelligent data systems. I emphasize robust logic, actionable insights, and high-quality solutions using modern machine learning and development tooling.`,
  careerObjectives: "Actively seeking opportunities in Data Science, Data Analytics, AI/ML Engineering, and Python Development. I am driven to collaborate with forward-thinking teams to harness data, optimize strategic workflows, and deploy intelligent, real-world solutions that reshape how businesses operate in a data-driven world.",
  funFact: "I view data not just as numbers, but as a compelling language that reveals hidden narratives and answers critical business questions.",
  freelance: "AVAILABLE",
  languages: "EN, HI, JP (Basic)",
  skillsText: "Python\nSQL\nTypeScript\nJavaScript\nHTML/CSS\nReact\nPower BI\nMachine Learning"
};

export const specialties = [
  {
    title: "01. Data Science",
    description: "Applying predictive modeling and data analysis to uncover insights from structured datasets.",
    icon: Database
  },
  {
    title: "02. AI Agents",
    description: "Building customized RAG pipelines and assistant interfaces using LangChain and LLMs.",
    icon: Bot
  },
  {
    title: "03. Full-Stack Dev",
    description: "Developing responsive web applications using modern Javascript frameworks like React and Next.js.",
    icon: Code2
  },
  {
    title: "04. Machine Learning",
    description: "Training and deploying machine learning models for classification, regression, and forecasting.",
    icon: Cpu
  }
];

export const skills = {
  technical: [
    { name: "Data Analytics", icon: "📊" },
    { name: "Python Programming", icon: "🐍" },
    { name: "Business Analysis", icon: "📈" },
    { name: "Web Development", icon: "🌐" },
    { name: "MySQL", icon: "🗄️" },
    { name: "Microsoft Power BI", icon: "📊" },
    { name: "Data Visualization", icon: "📉" },
    { name: "Generative AI", icon: "🤖" },
    { name: "Digital Marketing", icon: "📱" },
    { name: "Data Science", icon: "🔬" },
    { name: "AWS", icon: "☁️" },
    { name: "Machine Learning", icon: "🧠" },
    { name: "Business Intelligence", icon: "💼" },
    { name: "SEO", icon: "🔍" }
  ],
  soft: [
    "Analytical Skills",
    "Presentation Skills",
    "Critical Thinking",
    "Communication",
    "Teamwork",
    "Organization Skills",
    "Data Interpretation",
    "Business Insight",
    "Problem Solving",
    "Strategic Thinking"
  ],
  tools: [
    { name: "VS Code", icon: "💻" },
    { name: "Power BI", icon: "📊" },
    { name: "GitHub", icon: "🐙" },
    { name: "n8n", icon: "🔗" },
    { name: "Jupyter", icon: "📓" },
    { name: "Tableau", icon: "📈" },
    { name: "Docker", icon: "🐳" },
    { name: "Google Colab", icon: "🔬" },
    { name: "Excel", icon: "📋" },
    { name: "Pandas", icon: "🐼" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "Scikit-learn", icon: "🤖" },
    { name: "Matplotlib", icon: "📊" },
    { name: "Seaborn", icon: "🌊" },
    { name: "MySQL Workbench", icon: "🗄️" },
    { name: "Adobe Creative Suite", icon: "🎨" }
  ],
  languages: [
    { name: "English", level: "Fluent Professional", stars: 5 },
    { name: "Hindi", level: "Native Speaker", stars: 5 },
    { name: "Japanese", level: "Basic", stars: 2 }
  ]
};

export const achievements = [
  {
    title: "Certified Scrum Master",
    issuer: "Scrum Alliance",
    description: "Formal training and certification in Agile methodologies and Scrum framework."
  },
  {
    title: "Sunhacks 2026 (Top 10)",
    issuer: "Sandip University & ESDS",
    description: "Developed a real-time compliance dashboard tracking regulatory updates from NSE, BSE, MCX, and RBI."
  },
  {
    title: "Sunhacks 2024 (Top 10)",
    issuer: "Sandip University & ESDS",
    description: "Designed a predictive model for HVAC energy optimization and smart climate control."
  }
];

export const projects = [
  {
    title: "Autonomous Organizational Memory",
    category: "AI/Enterprise",
    status: "Completed",
    description: "Built a knowledge base prototype utilizing ChromaDB and RAG pipelines for semantic question-answering.",
    techStack: ["Python", "ChromaDB", "RAG", "AI"],
    keyFeatures: ["Semantic Search", "Question-Answering", "Knowledge Base"],
    keyAchievements: ["High retrieval accuracy", "Optimized RAG pipeline"],
    githubUrl: "https://github.com/Amar03ete/autonomous-org-memory",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80"
  },
  {
    title: "ThirdEYE",
    category: "AI/Enterprise",
    status: "Completed",
    description: "Enterprise Knowledge Intelligence Assistant. Third Eye Engine is an AI-powered organizational memory system that captures not only what was decided, but why decisions were made.",
    techStack: ["Python", "AI Agents", "Knowledge Graph", "NLP"],
    keyFeatures: ["Organizational Memory", "Decision Tracking", "Context Extraction", "Enterprise Intelligence"],
    keyAchievements: ["Robust knowledge retrieval", "Automated context linking", "Enhanced decision analysis"],
    githubUrl: "https://github.com/Amar03ete/ThirdEYE",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
  },
  {
    title: "Launchsim",
    category: "Swarm Intelligence",
    status: "Completed",
    description: "A multi-agent swarm intelligence engine specialized for predicting market reactions before product launches. Entirely on your hardware.",
    techStack: ["Python", "Swarm Intelligence", "AI Agents", "Simulation"],
    keyFeatures: ["Market Reaction Prediction", "Multi-Agent Swarm", "On-Premises Execution", "Simulation Engine"],
    keyAchievements: ["Accurate pre-launch insights", "Scalable agent architecture", "Data privacy via local execution"],
    githubUrl: "https://github.com/Amar03ete/Launchsim",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    title: "Metadata-Extractor (MetaForensic)",
    category: "Forensic/Security",
    status: "Completed",
    description: "Advanced Metadata Analysis & Forensic Intelligence. Professional-grade forensic metadata extraction tool with sophisticated black and grey design for tampering detection.",
    techStack: ["Python", "Forensics", "Data Extraction", "Security"],
    keyFeatures: ["Metadata Extraction", "Tampering Detection", "Forensic Analysis", "Professional UI"],
    keyAchievements: ["Comprehensive metadata parsing", "High-accuracy tampering alerts", "Secure forensic pipeline"],
    githubUrl: "https://github.com/Amar03ete/MetaForensic",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80"
  },
  {
    title: "Smart HVAC Predictive Model",
    category: "Machine Learning",
    status: "Completed",
    description: "An HVAC prediction and analysis machine learning project leveraging data and algorithms to optimize the performance of HVAC systems, focusing on energy optimization and consumption prediction.",
    techStack: ["Jupyter Notebook", "Python", "Machine Learning", "Optimization"],
    keyFeatures: ["Energy Optimization", "Consumption Prediction", "System Monitoring", "Thermal Analysis"],
    keyAchievements: ["Optimized energy efficiency", "Reduced operational costs", "Integrated sensor data logging"],
    githubUrl: "https://github.com/Amar03ete/Smart-HVAC",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
  },
  {
    title: "DietGPT",
    category: "AI/Healthcare",
    status: "Completed",
    description: "Homemade, low-impact nutrition & training insights. An AI-powered personalized meal planning and nutrition assistant. Generates tailored meal plans, macros, and shopping lists.",
    techStack: ["Python", "LLMs", "Healthcare AI", "Nutrition APIs"],
    keyFeatures: ["Personalized Meal Plans", "Macro Generation", "Shopping List Automation", "Training Insights"],
    keyAchievements: ["Highly accurate dietary suggestions", "User-friendly AI assistant", "Integrated nutritional data"],
    githubUrl: "https://github.com/Amar03ete/DietGPT",
    imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80"
  }
];

export const processApproach = [
  { step: "Data Discovery", description: "Understanding business requirements and identifying key data sources" },
  { step: "Analysis & Modeling", description: "Applying statistical methods and machine learning techniques" },
  { step: "AI Integration", description: "Leveraging artificial intelligence for intelligent automation" },
  { step: "Implementation", description: "Deploying scalable solutions with measurable business impact" }
];

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    major: "Computer Science & Engineering",
    institution: "Sandip University",
    location: "Nashik, Maharashtra",
    period: "2022 - 2026",
    status: "Currently Pursuing",
    description: "Focused on data science, machine learning, algorithms, and business analytics. Completing projects in predictive modeling, AI applications, and data-driven solutions.",
    coursework: ["Data Structures & Algorithms", "Database Management Systems", "Machine Learning", "Data Science & Analytics", "Business Intelligence", "Artificial Intelligence", "Statistical Methods", "Python Programming"],
    achievements: ["Active member of Data Science Society", "Best Project Award for Smart HVAC Predictive Model", "Organized university AI/ML workshop events", "Completed multiple data science projects"]
  },
  {
    degree: "Higher Secondary Education",
    major: "Science (PCM)",
    institution: "H.S School",
    location: "City, State",
    period: "2020 - 2022",
    status: "Completed",
    description: "Studied in Physics, Chemistry, and Mathematics as my major feild during my senior secondary school.",
    coursework: ["Advanced Mathematics", "Physics", "Chemistry"],
    achievements: ["Library incharge", "Chemistry lab Assistant", "Vice-House Captain (Tagore)"]
  }
];

export const certifications = [
  { title: "Career Essentials in Business Analytics", issuer: "Microsoft/LinkedIn Learning", year: "2024", description: "Comprehensive certification covering business analytics fundamentals, data interpretation, and strategic decision-making." },
  { title: "Python for Data Science", issuer: "IBM/Coursera", year: "2024", description: "Advanced Python programming for data analysis, machine learning, and statistical computing." },
  { title: "Machine Learning Specialization", issuer: "Stanford University/Coursera", year: "2023", description: "Comprehensive machine learning course covering supervised and unsupervised learning algorithms." },
  { title: "Power BI Data Analyst", issuer: "Microsoft", year: "2023", description: "Professional certification in Power BI for data visualization and business intelligence." }
];

export const experience = [
  {
    role: "Freelance Data Analyst & Python Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "Jan 2023 - Present",
    type: "Freelance",
    description: "Providing comprehensive data science and analytics services to businesses across various industries. Specialized in Python development, data visualization, business intelligence, and AI-driven solutions.",
    responsibilities: ["Developed custom data analytics solutions using Python and SQL", "Created interactive dashboards and reports using Power BI and Tableau", "Implemented machine learning models for predictive analytics", "Provided business intelligence consulting and strategic insights", "Automated data processing workflows and ETL pipelines"],
    technologies: ["Python", "Power BI", "SQL", "Pandas", "Scikit-learn", "Tableau"],
    achievements: ["Successfully completed 25+ data science projects", "Improved client decision-making efficiency by 45%", "Built predictive models with 85%+ accuracy rates", "Automated reporting processes saving 20+ hours weekly"]
  },
  {
    role: "Digital Marketing Specialist",
    company: "Various Clients",
    location: "Remote",
    period: "Jun 2022 - Present",
    type: "Freelance",
    description: "Comprehensive digital marketing services including SEO optimization, social media management, content strategy, and performance analytics for small to medium businesses.",
    responsibilities: ["Developed and executed digital marketing strategies", "Managed social media accounts and content calendars", "Performed SEO audits and optimization campaigns", "Created engaging visual content and graphics", "Analyzed marketing performance using data analytics"],
    technologies: ["Google Analytics", "SEO Tools", "Adobe Creative Suite", "Social Media Platforms", "WordPress"],
    achievements: ["Increased client website traffic by average of 60%", "Improved social media engagement by 80%", "Generated 40% increase in lead conversion rates", "Managed marketing budgets totaling $50K+"]
  },
  {
    role: "Web Developer & Video Editor",
    company: "Freelance Projects",
    location: "Remote",
    period: "Mar 2022 - Dec 2023",
    type: "Freelance",
    description: "Full-stack web development and professional video editing services for businesses and content creators. Focus on responsive design, user experience, and engaging multimedia content.",
    responsibilities: ["Developed responsive websites using modern web technologies", "Created and edited promotional videos and content", "Designed user interfaces and user experience flows", "Implemented e-commerce solutions and payment systems", "Provided ongoing website maintenance and support"],
    technologies: ["HTML/CSS", "JavaScript", "React", "WordPress", "Adobe Premiere Pro", "After Effects"],
    achievements: ["Delivered 15+ complete website projects", "Produced 50+ professional video content pieces", "Achieved 95% client satisfaction rate", "Reduced client content production time by 50%"]
  }
];

export const reviews = [
  {
    name: "Geeta Mishra",
    title: "Psychologist/Therapist",
    company: "Relationship Compass",
    date: "06/11/2024",
    content: "He delivered a very elegant website and was fast. Fantastic support from his side, and he also gave me tips to save costs and easily manage it going forward."
  },
  {
    name: "Akshat",
    title: "Financial Analyst",
    company: "Motilal Oswal",
    date: "28/01/2025",
    content: "I asked him to create a website, graphic design my business card, and handle a few other digital materials. Superb work from his side—fast, within the deadline, affordable charges, and he is a great listener."
  },
  {
    name: "Mystic Science",
    title: "Numerologist & Counselor",
    company: "Real-Life Solutions",
    date: "28/05/2025",
    content: "He has been managing my social media presence. I deal with clients offline mostly, so I needed an online presence to support that. He is very supportive, hardworking, and gets the job done."
  }
];
