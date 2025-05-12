import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface Semester {
  id: number;
  title: string;
  description: string;
  achievements: string[];
  techStack: string[];
  image: string;
}

const semesters: Semester[] = [
  {
    id: 1,
    title: "Project Inception",
    description: "Initial research and conceptualization of the Tatu social network and autonomous tattooing machine.",
    achievements: [
      "Market research and opportunity identification",
      "Initial concept design for Tatu application",
      "Preliminary sketches for tattooing machine",
      "Project scope definition and planning",
    ],
    techStack: ["Research Methods", "Design Thinking", "Project Management"],
    image: "https://images.pexels.com/photos/7319294/pexels-photo-7319294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    title: "UI/UX Development",
    description: "Designing the user interface and experience for the Tatu social platform.",
    achievements: [
      "Wireframes and mockups for Tatu application",
      "User journey mapping and experience design",
      "Interactive prototypes and usability testing",
      "Brand identity development",
    ],
    techStack: ["Figma", "Adobe XD", "Usability Testing", "UI/UX Design Principles"],
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "Backend Architecture",
    description: "Building the core backend systems for user management, data storage, and API development.",
    achievements: [
      "Database schema design and implementation",
      "User authentication and authorization system",
      "RESTful API development for mobile application",
      "Cloud infrastructure setup",
    ],
    techStack: ["Node.js", "MongoDB", "Express", "AWS", "Firebase Auth"],
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    title: "Mobile App Development",
    description: "Creating the mobile application frontend and integrating with backend services.",
    achievements: [
      "Cross-platform mobile application development",
      "Social features implementation (profiles, posts, following)",
      "Appointment scheduling system",
      "Real-time notifications",
    ],
    techStack: ["React Native", "Redux", "Firebase", "Jest", "Expo"],
    image: "https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    title: "Machine Prototyping",
    description: "Initial hardware design and prototyping for the autonomous tattooing machine.",
    achievements: [
      "Mechanical design and component selection",
      "Initial prototype fabrication",
      "Control system architecture",
      "Safety measures implementation",
    ],
    techStack: ["CAD", "Arduino", "Embedded Systems", "3D Printing", "Electronics"],
    image: "https://images.pexels.com/photos/2086621/pexels-photo-2086621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 6,
    title: "Integration & AI",
    description: "Integrating AI features and connecting the application with the machine.",
    achievements: [
      "AI-powered tattoo visualization module",
      "Machine-app communication protocol",
      "End-to-end testing and validation",
      "Preparation for beta testing with users",
    ],
    techStack: ["TensorFlow", "Computer Vision", "IoT", "WebSockets", "Protocol Buffers"],
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const AcademicProgress: React.FC = () => {
  const [activeSemester, setActiveSemester] = useState<number>(6);
  
  const semester = semesters.find(s => s.id === activeSemester) || semesters[0];

  return (
    <section id="academic" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Academic <span className="text-purple-700">Progress</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Follow the development journey of our project through each academic semester
            at Universidad de San Buenaventura Bogotá.
          </p>
        </div>

        {/* Timeline navigation */}
        <div className="mb-16">
          <div className="relative">
            <div className="absolute left-0 right-0 h-1 bg-gray-200 top-1/2 transform -translate-y-1/2"></div>
            <div className="flex justify-between relative">
              {semesters.map((sem) => (
                <button
                  key={sem.id}
                  onClick={() => setActiveSemester(sem.id)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center relative z-10 transition-all duration-300 ${
                    activeSemester === sem.id
                      ? 'bg-purple-700 text-white scale-125'
                      : sem.id < activeSemester
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {sem.id}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Semester content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-navy-900 mb-2">
                Semester {semester.id}: {semester.title}
              </h3>
              <p className="text-gray-600 mb-6">{semester.description}</p>
              
              <h4 className="font-semibold text-navy-700 mb-3">Key Achievements:</h4>
              <ul className="mb-6">
                {semester.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start mb-2">
                    <ChevronRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
              
              <h4 className="font-semibold text-navy-700 mb-3">Technology Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {semester.techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 text-navy-700 py-1 px-3 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
              <img 
                src={semester.image} 
                alt={`Semester ${semester.id}: ${semester.title}`}
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicProgress;