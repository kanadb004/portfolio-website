import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // For now, we'll use static data. Later you can uncomment the API call
    // fetchPortfolioData();
    
    // Static data for development
    const staticData = {
      personal: {
        name: "Kanad Bhattacharya",
        title: "Computer Science & Engineering Student",
        phone: "+91 79801 52963",
        email: "kanadb004@gmail.com",
        linkedin: "https://linkedin.com/in/kanadb004",
        github: "https://github.com/kanadb004"
      },
      education: {
        institution: "Vellore Institute of Technology",
        campus: "Chennai Campus",
        degree: "B.Tech in Computer Science and Engineering",
        duration: "Aug 2023 -- 2027",
        cgpa: "9.06 / 10",
        coursework: [
          "Data Structures",
          "Algorithms", 
          "Structured & OOP",
          "Operating Systems",
          "Computer Networks",
          "Cloud Computing",
          "Probability & Statistics"
        ],
        extracurricular: ["The Comedy Club"]
      },
      experience: [
        {
          title: "Research Intern",
          company: "Indian Institute of Technology, Kharagpur",
          location: "Kharagpur, WB, India",
          duration: "May 2025 -- July 2025",
          website: "https://www.iitkgp.ac.in",
          certificate: "https://drive.google.com/file/d/1P5HFz8eC7mDo9QDtAc8E9BW9-xd0i46A/view?usp=sharing",
          description: "Conducting research on a deep learning approach to unravel the initiation and progression of breast cancer, with a focus on identifying evolutionary trajectories using multi-omics data. Contributing to model development, data preprocessing, and an extensive literature review. A research paper based on ongoing findings is currently in preparation and is expected to result in a journal publication."
        },
        {
          title: "Data Science Member",
          company: "IEEE Robotics And Automation Society VIT Chennai Student Chapter",
          location: "Chennai, TN, India",
          duration: "Feb 2024 -- Present",
          linkedin: "https://www.linkedin.com/company/ieeerasvitc",
          description: "Contributed to collaborative robotics projects within the chapter, including a machine learning-based nutrition analysis project and other initiatives. Assisted in organizing technical sessions and actively participated in team discussions on robotics and automation."
        },
        {
          title: "Competitive Programmer",
          company: "Newton School Coding Club, VIT Chennai",
          location: "Chennai, TN, India",
          duration: "Feb 2024 -- Present",
          linkedin: "https://www.linkedin.com/company/newton-school-coding-club-vitc",
          description: "Actively participate in regular coding contests, problem-solving sessions, and peer learning discussions focused on data structures, algorithms, and competitive programming platforms."
        },
        {
          title: "President",
          company: "The Comedy Club, VIT Chennai",
          location: "Chennai, TN, India",
          duration: "Apr 2024 -- Present",
          linkedin: "https://www.linkedin.com/company/the-comedy-club-vitc",
          description: "Leading club operations, organizing and performing at campus-wide comedy events, open mics, and workshops to promote stand-up comedy and performance culture among students."
        }
      ],
      projects: [
        {
          title: "InfraSafe: Infrastructure Risk Detection System",
          subtitle: "YOLOv-based Crack Detection and Risk Assessment Platform",
          duration: "Feb 2025 -- Mar 2025",
          github: "https://github.com/kanadb004/InfraSafe",
          description: "Developed a YOLOv-based deep learning pipeline for detecting structural cracks and assessing severity. Implemented a rule-based risk classifier and built a surveillance car prototype using an ESP32 camera for real-time monitoring. ML model and frontend were developed separately due to time constraints."
        },
        {
          title: "Women Safety and Crime Prevention Platform",
          subtitle: "Smart India Hackathon 2024 (2nd Level Qualified)",
          duration: "Sep 2024 -- Oct 2024",
          github: "https://github.com/kanadb004/SafeStreets-ViolenceDetection",
          description: "Built a Convolutional Neural Network integrated with LSTM to detect violence against women from CCTV footage. Implemented a fully functional frontend for user alerts, emergency contact triggers, and location-based reporting to aid real-time intervention and response."
        }
      ],
      skills: {
        "Languages & Platforms": [
          "Python", "C", "C++", "Java", "R", "GitHub", "Linux", "macOS", "Windows"
        ],
        "ML & Data Science": [
          "TensorFlow", "PyTorch", "NumPy", "Pandas", "Scikit-learn", 
          "Regression & Classification", "Data Structures & Algorithms"
        ],
        "Other Skills": [
          "Problem Solving", "Continuous Learning", "Creative Writing"
        ]
      }
    };
    
    setPortfolioData(staticData);
    setLoading(false);
  }, []);

  const fetchPortfolioData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/portfolio');
      const data = await response.json();
      setPortfolioData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching portfolio data:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!portfolioData) {
    return (
      <div className="error">
        <p>Error loading portfolio data. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <Hero data={portfolioData.personal} />
      <About data={portfolioData.education} />
      <Experience data={portfolioData.experience} />
      <Projects data={portfolioData.projects} />
      <Skills data={portfolioData.skills} />
      <Contact data={portfolioData.personal} />
      <Footer />
    </div>
  );
}

export default App;