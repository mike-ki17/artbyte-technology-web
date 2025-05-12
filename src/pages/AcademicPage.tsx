import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, BookOpen, Code, Database, Palette, Cpu, Zap } from 'lucide-react';
import { Link } from '../components/Link';

const semesters = [
  {
    id: 1,
    title: "Project Inception",
    subtitle: "Foundation and Planning",
    icon: <BookOpen className="h-6 w-6 text-purple-700" />,
    description: "Initial research and conceptualization of the Tatu social network and autonomous tattooing machine. This semester focused on market analysis, opportunity identification, and establishing the project scope.",
    achievements: [
      "Conducted comprehensive market research on the tattoo industry",
      "Identified key pain points for both artists and clients",
      "Developed initial concept designs for both software and hardware components",
      "Created project roadmap and semester-by-semester development plan",
      "Established technical feasibility through preliminary research"
    ],
    technologies: ["Research Methods", "Design Thinking", "Project Management", "Market Analysis"],
    image: "https://images.pexels.com/photos/7319294/pexels-photo-7319294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    title: "UI/UX Development",
    subtitle: "Visual and Experience Design",
    icon: <Palette className="h-6 w-6 text-purple-700" />,
    description: "Focused on creating the user interface and experience design for the Tatu social platform. This semester established the visual identity and interaction patterns that would define the application.",
    achievements: [
      "Created comprehensive user personas and journey maps",
      "Developed wireframes and interactive prototypes for mobile application",
      "Established brand identity, color palette, and design system",
      "Conducted usability testing with target user groups",
      "Refined UI based on user feedback and heuristic evaluation"
    ],
    technologies: ["Figma", "Adobe XD", "User Research", "Prototyping", "Usability Testing", "Design Systems"],
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "Backend Architecture",
    subtitle: "Core Systems Development",
    icon: <Database className="h-6 w-6 text-purple-700" />,
    description: "Building the foundational backend systems for the Tatu platform, including database design, API development, and authentication mechanisms to support the social network functionality.",
    achievements: [
      "Designed and implemented database schema for user profiles, tattoo portfolios, and appointments",
      "Developed secure authentication and authorization systems",
      "Created RESTful API endpoints for mobile application",
      "Established cloud infrastructure for scalable deployment",
      "Implemented data validation and sanitation protocols"
    ],
    technologies: ["Node.js", "MongoDB", "Express", "AWS", "Firebase Auth", "REST API", "Docker"],
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    title: "Mobile App Development",
    subtitle: "Front-end Implementation",
    icon: <Code className="h-6 w-6 text-purple-700" />,
    description: "Development of the mobile application frontend, integrating with the backend services and implementing the core social and scheduling features of the Tatu platform.",
    achievements: [
      "Built cross-platform mobile application using React Native",
      "Implemented core social features including profiles, posts, and following",
      "Created appointment scheduling system with calendar integration",
      "Developed real-time notification system",
      "Integrated payment processing for booking deposits"
    ],
    technologies: ["React Native", "Redux", "Firebase", "Jest", "Expo", "WebSockets", "Payment APIs"],
    image: "https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    title: "Machine Prototyping",
    subtitle: "Hardware Development",
    icon: <Cpu className="h-6 w-6 text-purple-700" />,
    description: "Initial hardware design and prototyping for the autonomous tattooing machine, including mechanical components, control systems, and safety mechanisms.",
    achievements: [
      "Designed mechanical components in CAD software",
      "Fabricated initial prototype using 3D printing and CNC machining",
      "Developed control system architecture using Arduino and embedded systems",
      "Implemented basic safety measures and emergency stops",
      "Tested mechanical movements with simulated tattoo needles"
    ],
    technologies: ["CAD", "Arduino", "Embedded Systems", "3D Printing", "Electronics", "Mechanical Engineering", "Control Systems"],
    image: "https://images.pexels.com/photos/2086621/pexels-photo-2086621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 6,
    title: "Integration & AI",
    subtitle: "Advanced Features & System Connection",
    icon: <Zap className="h-6 w-6 text-purple-700" />,
    description: "The final phase focused on integrating AI capabilities and connecting the Tatu application with the autonomous tattooing machine, creating a complete end-to-end system.",
    achievements: [
      "Developed AI-powered tattoo visualization module using computer vision",
      "Created communication protocol between mobile app and tattooing machine",
      "Implemented machine learning algorithms for skin type detection",
      "Conducted end-to-end testing of the complete system",
      "Prepared for beta testing with professional tattoo artists"
    ],
    technologies: ["TensorFlow", "Computer Vision", "IoT", "WebSockets", "Protocol Buffers", "Machine Learning", "System Integration"],
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const AcademicPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 bg-navy-900">
        <div className="container mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-white mb-6 hover:text-green-400 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
          </Link>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Academic <span className="text-purple-400">Progress</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Follow the development journey of our project through each academic semester
              at Universidad de San Buenaventura Bogotá.
            </p>
          </div>
        </div>
      </section>
      
      {/* Timeline Navigation */}
      <section className="py-12 bg-white sticky top-0 z-20 shadow-md">
        <div className="container mx-auto px-6">
          <div className="relative">
            <div className="absolute left-0 right-0 h-1 bg-gray-200 top-1/2 transform -translate-y-1/2"></div>
            <div className="flex justify-between relative">
              {semesters.map((sem) => (
                <a
                  key={sem.id}
                  href={`#semester-${sem.id}`}
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-white border-2 border-purple-600 relative z-10 transition-all duration-300 hover:bg-purple-100 group"
                >
                  <span className="text-purple-700 font-bold">{sem.id}</span>
                  <div className="absolute bottom-full mb-2 w-32 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-navy-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                      {sem.title}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Semesters Details */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {semesters.map((semester) => (
              <div id={`semester-${semester.id}`} key={semester.id} className="pt-16 -mt-16">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-navy-900 text-white p-6">
                    <div className="flex items-center">
                      <div className="bg-white/10 p-3 rounded-lg mr-4">
                        {semester.icon}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold">Semester {semester.id}: {semester.title}</h2>
                        <p className="text-purple-300">{semester.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-12">
                      <div>
                        <div className="prose max-w-none">
                          <p className="text-lg text-gray-700 mb-8">{semester.description}</p>
                          
                          <h3 className="text-xl font-bold text-navy-900 mb-4">Key Achievements</h3>
                          <ul className="space-y-2">
                            {semester.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="bg-purple-100 text-purple-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <h3 className="text-xl font-bold text-navy-900 mt-8 mb-4">Technologies Used</h3>
                          <div className="flex flex-wrap gap-2">
                            {semester.technologies.map((tech, idx) => (
                              <span 
                                key={idx}
                                className="bg-gray-100 text-navy-700 py-1 px-3 rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="rounded-xl overflow-hidden shadow-lg h-full">
                          <img 
                            src={semester.image} 
                            alt={`Semester ${semester.id}: ${semester.title}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Navigation buttons */}
                    <div className="flex justify-between mt-12">
                      {semester.id > 1 ? (
                        <a 
                          href={`#semester-${semester.id - 1}`}
                          className="inline-flex items-center text-purple-700 hover:text-purple-800 transition-colors"
                        >
                          <ArrowLeft className="mr-2 h-4 w-4" /> Previous Semester
                        </a>
                      ) : (
                        <div></div>
                      )}
                      
                      {semester.id < semesters.length ? (
                        <a 
                          href={`#semester-${semester.id + 1}`}
                          className="inline-flex items-center text-purple-700 hover:text-purple-800 transition-colors"
                        >
                          Next Semester <ArrowLeft className="ml-2 h-4 w-4 transform rotate-180" />
                        </a>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Future Plans */}
      <section className="py-20 bg-gradient-to-r from-navy-900 to-purple-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Future Development Plans</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Our academic journey continues as we refine and expand the Artbyte Technology project.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">Clinical Trials</h3>
              <p className="text-gray-300">
                Conduct formal testing with professional tattoo artists and volunteers
                to validate the safety and effectiveness of our autonomous machine.
              </p>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">Advanced AI Integration</h3>
              <p className="text-gray-300">
                Enhance the AI capabilities with style transfer, customized design generation,
                and advanced skin condition detection for optimal tattooing.
              </p>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">Commercialization</h3>
              <p className="text-gray-300">
                Develop business plan, secure intellectual property, and prepare
                for market launch of both the Tatu platform and tattooing machine.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AcademicPage;