import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, Users, BookOpen, Award, MapPin, Mail, Phone, Clock } from 'lucide-react';
import { Link } from '../components/Link';
import Logo from '../components/Logo';

const AboutPage: React.FC = () => {
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
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About <span className="text-green-400">Artbyte Technology</span>
              </h1>
              <p className="text-xl text-gray-300">
                We are an academic project team focused on innovating at the intersection 
                of software development and industrial automation for the tattoo industry.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <Logo size="large" variant="light" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Artbyte Technology began as an ambitious academic project at Universidad de San Buenaventura Bogotá,
                  where a team of passionate students identified an opportunity to revolutionize the tattoo industry
                  through technology innovation.
                </p>
                <p>
                  What started as a conceptual exploration has evolved into a comprehensive project that spans multiple
                  semesters, building both a social platform for tattoo artists and clients, as well as an autonomous
                  tattooing machine that pushes the boundaries of what's possible in the industry.
                </p>
                <p>
                  Our team combines expertise in software development, mechanical engineering, user experience design,
                  and industrial automation to create an integrated solution that addresses real-world challenges in
                  the tattoo community.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://ik.imagekit.io/yjcg0b5mfartbyte/Logo%20Artbyte-Technology/Banner-artbyte.png?updatedAt=1747085700971" 
                alt="Artbyte Technology Team" 
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Our <span className="text-purple-700">Mission</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to advancing the tattoo industry through technological innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Connect Community</h3>
              <p className="text-gray-600">
                Build meaningful connections between tattoo artists and clients through
                our innovative Tatu social platform, enhancing collaboration and discovery.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-7 w-7 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Advance Technology</h3>
              <p className="text-gray-600">
                Push the boundaries of what's possible in tattoo application through
                our autonomous tattooing machine, improving precision and consistency.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="h-7 w-7 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Academic Excellence</h3>
              <p className="text-gray-600">
                Demonstrate the practical application of academic knowledge by developing
                innovative solutions to real-world problems in a growing industry.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* The Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Meet Our <span className="text-green-500">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The passionate students and faculty behind Artbyte Technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
              <div className="h-48 bg-gray-200">
                <img 
                  src="https://ik.imagekit.io/yjcg0b5mfartbyte/Logo%20Artbyte-Technology/mike.jpg?updatedAt=1747084793702" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900">Michael Castro</h3>
                <p className="text-green-600 mb-4">Project Lead & Software Developer</p>
                <p className="text-gray-600 text-sm">
                  Leads the development of the Tatu social network and coordinates the integration with the autonomous machine.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
              <div className="h-48 bg-gray-200">
                <img 
                  src="https://ik.imagekit.io/yjcg0b5mfartbyte/Logo%20Artbyte-Technology/juan1.jpg?updatedAt=1747085112267" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900">Juan Higuera</h3>
                <p className="text-green-600 mb-4">UX/UI Designer</p>
                <p className="text-gray-600 text-sm">
                  Creates intuitive and beautiful interfaces for the Tatu application, enhancing user experience.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
              <div className="h-48 bg-gray-200">
                <img 
                  src="https://ik.imagekit.io/yjcg0b5mfartbyte/Logo%20Artbyte-Technology/cris.jpg?updatedAt=1747085110896" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900">Cristian Muñoz</h3>
                <p className="text-green-600 mb-4">Mechatronics Engineer</p>
                <p className="text-gray-600 text-sm">
                  Designs and builds the mechanical components of the autonomous tattooing machine.
                </p>
              </div>
            </div>
            
            {/* Team Member 4 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
              <div className="h-48 bg-gray-200">
                <img 
                  src="https://ik.imagekit.io/yjcg0b5mfartbyte/Logo%20Artbyte-Technology/gerald.jpg?updatedAt=1747085112293" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900">Gerald Palacios</h3>
                <p className="text-green-600 mb-4">AI & Machine Learning Specialist</p>
                <p className="text-gray-600 text-sm">
                  Develops the AI tattoo visualization technology and machine learning algorithms for the project.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Faculty advisors: Dr. Marco Jiménez, Prof. Laura Mendoza, and Dr. Carlos Restrepo
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact & Location */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our project or interested in collaboration opportunities?
                Reach out to the Artbyte Technology team:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">Email</h3>
                    <a href="mailto:contact@artbyte.tech" className="text-green-600 hover:text-green-700 transition-colors">
                      contact@artbyte.tech
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">Phone</h3>
                    <a href="tel:+5712345678" className="text-green-600 hover:text-green-700 transition-colors">
                      +57 (1) 234 5678
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">Location</h3>
                    <p className="text-gray-700">
                      Universidad de San Buenaventura<br />
                      Carrera 8H # 172-20<br />
                      Bogotá, Colombia
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">Project Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Campus</h2>
              <div className="rounded-xl overflow-hidden shadow-lg h-96">
                <img 
                  src="https://ik.imagekit.io/yjcg0b5mfartbyte/Logo%20Artbyte-Technology/th-1867629470.jpeg?updatedAt=1747085258564" 
                  alt="Universidad de San Buenaventura Campus" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-gray-600">
                Our project is housed in the Technology Innovation Center at Universidad de San Buenaventura Bogotá.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-20 bg-gradient-to-r from-navy-900 to-green-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Whether you're a tattoo artist, technology enthusiast, or potential collaborator,
            we'd love to connect with you and share our vision for the future of tattooing.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:contact@artbyte.tech" 
              className="bg-green-500 hover:bg-green-600 text-navy-900 font-semibold py-3 px-8 rounded-full transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="#" 
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-semibold py-3 px-8 rounded-full transition-colors"
            >
              Follow Our Progress
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;