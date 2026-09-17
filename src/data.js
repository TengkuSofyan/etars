const teamMembers = [
  {
    name: "Sarah Johnson",
    job: "Senior Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    email: "sarah.j@example.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Michael Chen",
    job: "UX/UI Designer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    email: "michael.c@example.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
];

const journals = [
  {
    id: 1,
    year: 2024,
    title:
      "Machine Learning Approaches for Climate Change Prediction: A Comprehensive Review",
    authors: ["Dr. Sarah Johnson", "Dr. Michael Chen", "Dr. Emily Rodriguez"],
    journal: "Nature Climate Change",
    doi: "10.1038/s41558-024-01234-5",
    abstract:
      "This study reviews recent advances in machine learning techniques for predicting climate patterns and their implications for future environmental policies.",
  },
  {
    id: 2,
    year: 2024,
    title: "CRISPR-Cas9 Gene Editing in Neurodegenerative Disease Treatment",
    authors: ["Dr. James Anderson", "Dr. Lisa Park"],
    journal: "Cell",
    doi: "10.1016/j.cell.2024.02.015",
    abstract:
      "We present novel applications of CRISPR technology in treating Alzheimer's and Parkinson's disease through targeted gene therapy.",
  },
  {
    id: 3,
    year: 2024,
    title: "Quantum Computing Applications in Drug Discovery",
    authors: [
      "Dr. Robert Williams",
      "Dr. Anna Kowalski",
      "Dr. David Lee",
      "Dr. Maria Santos",
    ],
    journal: "Science",
    doi: "10.1126/science.abc1234",
    abstract:
      "This paper explores how quantum algorithms can accelerate the drug discovery process by simulating molecular interactions.",
  },
  {
    id: 4,
    year: 2023,
    title: "Microplastic Pollution in Deep Ocean Ecosystems",
    authors: ["Dr. Jennifer Martinez", "Dr. Thomas Brown"],
    journal: "Nature",
    doi: "10.1038/s41586-023-12345-6",
    abstract:
      "Our research reveals unprecedented levels of microplastic contamination in deep-sea environments and its impact on marine biodiversity.",
  },
  {
    id: 5,
    year: 2023,
    title: "Neural Networks for Early Cancer Detection Using Blood Biomarkers",
    authors: ["Dr. Kevin Zhang", "Dr. Patricia O'Connor", "Dr. Ahmed Hassan"],
    journal: "The Lancet Oncology",
    doi: "10.1016/S1470-2045(23)00123-4",
    abstract:
      "We developed a deep learning model capable of detecting multiple cancer types from routine blood tests with 94% accuracy.",
  },
  {
    id: 6,
    year: 2023,
    title: "Renewable Energy Integration in Smart Grid Systems",
    authors: ["Dr. Michelle Taylor", "Dr. Carlos Rodriguez"],
    journal: "Nature Energy",
    doi: "10.1038/s41560-023-01234-5",
    abstract:
      "This study presents innovative approaches to integrating renewable energy sources into existing power grid infrastructure.",
  },
];

const task = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1526378722484-cc5c5102fd0c",
    title: "AI-Based Document Classification",
    short_description:
      "A system that automatically classifies documents using machine learning models for enterprise workflows.",
    category: ["Artificial Intelligence", "Enterprise"],
    stack: ["python", "tensorflow", "scikit-learn"],
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "Smart Recommendation Engine",
    short_description:
      "Personalized recommendation engine based on user behavior and historical data.",
    category: ["Machine Learning", "Data Science"],
    stack: ["python", "pandas", "numpy"],
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Company Profile Website",
    short_description:
      "Responsive and modern company profile website with clean UI and smooth animations.",
    category: ["Web Development", "Corporate"],
    stack: ["javascript", "react", "tailwind"],
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    title: "Real-Time Data Dashboard",
    short_description:
      "Interactive dashboard for monitoring real-time metrics and KPIs.",
    category: ["Data Visualization", "Web App"],
    stack: ["javascript", "react", "chartjs"],
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
    title: "Chatbot Customer Support",
    short_description:
      "AI-powered chatbot to automate customer support interactions.",
    category: ["Artificial Intelligence", "Customer Service"],
    stack: ["python", "nlp", "transformers"],
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1522252234503-e356532cafd5",
    title: "E-Commerce Platform",
    short_description:
      "Full-featured e-commerce platform with product management and payment integration.",
    category: ["E-Commerce", "Web Development"],
    stack: ["javascript", "nodejs", "mongodb"],
  },
  {
    id: 7,
    imageUrl: "https://images.unsplash.com/photo-1527430253228-e93688616381",
    title: "Mobile Fitness Application",
    short_description:
      "Mobile application for tracking workouts, nutrition, and personal fitness goals.",
    category: ["Mobile App", "Health Tech"],
    stack: ["javascript", "react-native", "firebase"],
  },
  {
    id: 8,
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    title: "Predictive Maintenance System",
    short_description:
      "Predictive analytics system to reduce equipment downtime in industrial environments.",
    category: ["Industrial", "Data Analytics"],
    stack: ["python", "xgboost", "pandas"],
  },
  {
    id: 9,
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    title: "Cloud-Based API Service",
    short_description:
      "Scalable REST API service hosted on cloud infrastructure.",
    category: ["Cloud Computing", "Backend"],
    stack: ["nodejs", "express", "docker"],
  },
  {
    id: 10,
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    title: "Data Processing Pipeline",
    short_description:
      "Automated data ingestion and processing pipeline for large-scale datasets.",
    category: ["Data Engineering", "Big Data"],
    stack: ["python", "apache-spark", "airflow"],
  },
];

export default { teamMembers, journals, task };
