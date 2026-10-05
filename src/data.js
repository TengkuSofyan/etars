import user1 from "/img/user1.jpeg"
import user2 from "/img/userA.jpeg"
import user3 from "/img/user3.jpg"

const teamMembers = [
  {
    name: "Tengku Sofyan",
    job: "Ph.D Candidate in Petroleum Engineering Department at KFUPM",
    image:
      user2,
    email: "sarah.j@example.com",
    linkedin: "https://www.linkedin.com/in/t-mhd-sofyan/ ",
    github: "https://github.com",
    class: "object-cover",
  },
  {
    name: "Muhammad Habiburrahman",
    job: "Reservoir Engineer at EMP",
    image:
      user1,
    email: "michael.c@example.com",
    linkedin: "https://www.linkedin.com/in/aufahabib/",
    github: "https://github.com",
    class: "row-start-2",
  },
  {
    name: "Fajar Ariesta",
    job: "15+ years experience as Reservoir Engineer at Medco E&P Indonesia",
    image:
      user3,
    email: "michael.c@example.com",
    linkedin: "https://www.linkedin.com/in/fajar-ariessita-130a98321/ ",
    github: "https://github.com",
    class: "row-start-2",
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
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "Production Forecasting and Reserve Evaluation of the Nini Field Using Arps Decline Curve Analysis",
    short_description:
      "In this study, Arps decline curve analysis (DCA) is used to separate and forecast the oil production of Nini West and Nini East in the Danish North Sea",
    category: ["Machine Learning", "Data Science"],
    tags: ["ARP", "DCA"],
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Uncertainty Quantification in Reservoir Simulation with Monte Carlo Simulation",
    short_description:
      "In this study, Monte Carlo simulation is used to quantify the uncertainty in cumulative oil production of the PUNQ-S3 reservoir model, an open-source benchmark built from a real Elf field with a gas cap and an active aquifer.",
    category: ["Web Development", "Corporate"],
    tags: ["Monte Carlo", "Reservoir Simulation"],
  },

];

export default { teamMembers, journals, task };
