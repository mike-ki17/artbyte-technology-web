import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, Settings, Bot, Zap, Shield, Code, Smartphone } from 'lucide-react';
import { Link } from '../components/Link';

const MachinePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 bg-navy-900">
        <div className="container mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-white mb-6 hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Autonomous <span className="text-purple-400">Tattooing Machine</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Revolutionizing tattoo application with precision robotics, advanced
                software integration, and industrial automation techniques.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#specs" 
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-colors"
                >
                  Technical Specs
                </a>
                <a 
                  href="#technology" 
                  className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-semibold py-3 px-8 rounded-full transition-colors"
                >
                  Explore Technology
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 md:ml-12">
                <img 
                  src="https://images.pexels.com/photos/792910/pexels-photo-792910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Autonomous Tattooing Machine" 
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technical Specifications */}
      <section id="specs" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Technical <span className="text-purple-700">Specifications</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cutting-edge components and precise engineering for optimal tattooing results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold text-navy-900 flex items-center mb-4">
                    <Settings className="mr-3 text-purple-700" /> Mechanical Components
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                      <div>
                        <span className="font-medium">Precision Linear Actuators:</span> 0.01mm positioning accuracy
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                      <div>
                        <span className="font-medium">Needle Control System:</span> Variable depth and frequency
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                      <div>
                        <span className="font-medium">6-Axis Robotic Arm:</span> Full spatial movement capability
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                      <div>
                        <span className="font-medium">Custom Tattoo Gun Mount:</span> Quick-change needle system
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-navy-900 flex items-center mb-4">
                    <Zap className="mr-3 text-purple-700" /> Power & Performance
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                      <div>
                        <span className="font-medium">Onboard Computer:</span> 8-core processor, 16GB RAM
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                      <div>
                        <span className="font-medium">Power Supply:</span> 110-240V compatible, 8-hour battery backup
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                      <div>
                        <span className="font-medium">Operation Time:</span> Up to 6 hours continuous use
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                      <div>
                        <span className="font-medium">Noise Level:</span> Under 40 dB during operation
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold text-navy-900 flex items-center mb-4">
                    <Code className="mr-3 text-purple-700" /> Software & Connectivity
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                      <div>
                        <span className="font-medium">Operating System:</span> Custom Linux-based TatuOS
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                      <div>
                        <span className="font-medium">Connectivity:</span> WiFi, Bluetooth 5.0, USB-C, Ethernet
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                      <div>
                        <span className="font-medium">App Integration:</span> Direct connection with Tatu social app
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                      <div>
                        <span className="font-medium">File Formats:</span> SVG, PNG, JPG, and proprietary TTA format
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-navy-900 flex items-center mb-4">
                    <Shield className="mr-3 text-purple-700" /> Safety & Compliance
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                      <div>
                        <span className="font-medium">Emergency Stop:</span> Multiple physical and software kill switches
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                      <div>
                        <span className="font-medium">Sterilization:</span> Autoclavable components and UV sterilization
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                      <div>
                        <span className="font-medium">Sensors:</span> Pressure, depth, and client monitoring
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                      <div>
                        <span className="font-medium">Certifications:</span> ISO 13485, CE Medical, FDA Class II (pending)
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technology */}
      <section id="technology" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Innovative <span className="text-purple-700">Technology</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced systems that power our autonomous tattoo machine
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Bot className="h-7 w-7 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Machine Learning</h3>
              <p className="text-gray-600">
                Our machine adapts to different skin types and textures in real-time, optimizing needle 
                depth and speed for consistent results across diverse clients.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Code className="h-7 w-7 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Vector Processing</h3>
              <p className="text-gray-600">
                Advanced algorithms transform digital designs into precise movement instructions,
                ensuring accurate reproduction of even the most complex tattoo designs.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="h-7 w-7 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">App Integration</h3>
              <p className="text-gray-600">
                Seamless connection with the Tatu social app allows for direct transfer of designs,
                real-time monitoring, and machine control from any mobile device.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Settings className="h-7 w-7 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Dynamic Calibration</h3>
              <p className="text-gray-600">
                Continuous sensing and adjustment mechanisms maintain optimal needle position
                despite natural body movements during the tattooing process.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Safety Systems</h3>
              <p className="text-gray-600">
                Multi-layered safety protocols include movement boundaries, force feedback,
                and continuous monitoring to prevent any potential issues.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-7 w-7 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Power Management</h3>
              <p className="text-gray-600">
                Smart power systems optimize energy usage, enabling extended operation
                times while maintaining consistent performance throughout sessions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Development <span className="text-purple-700">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From conceptualization to production
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200"></div>
            
            {/* Timeline items */}
            <div className="space-y-24 relative">
              {/* Item 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Research & Concept</h3>
                  <p className="text-gray-600">
                    Extensive market research and conceptualization, including
                    analysis of tattoo techniques and artist workflows.
                  </p>
                </div>
                <div className="bg-purple-700 rounded-full h-10 w-10 flex items-center justify-center z-10">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <img 
                    src="https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Research phase" 
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-1 mb-8 md:mb-0">
                  <img 
                    src="https://images.pexels.com/photos/3846205/pexels-photo-3846205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Prototyping phase" 
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="bg-purple-700 rounded-full h-10 w-10 flex items-center justify-center z-10 order-2 md:order-2">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="md:w-1/2 md:pl-12 order-3 md:order-3">
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Prototyping</h3>
                  <p className="text-gray-600">
                    Development of initial mechanical components and control systems,
                    with extensive testing on various materials.
                  </p>
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Software Development</h3>
                  <p className="text-gray-600">
                    Creation of custom operating system, control algorithms, and
                    integration with the Tatu social network application.
                  </p>
                </div>
                <div className="bg-purple-700 rounded-full h-10 w-10 flex items-center justify-center z-10">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <img 
                    src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Software development phase" 
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
              
              {/* Item 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-1 mb-8 md:mb-0">
                  <img 
                    src="https://images.pexels.com/photos/3912976/pexels-photo-3912976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Testing phase" 
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="bg-purple-700 rounded-full h-10 w-10 flex items-center justify-center z-10 order-2 md:order-2">
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="md:w-1/2 md:pl-12 order-3 md:order-3">
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Testing & Refinement</h3>
                  <p className="text-gray-600">
                    Rigorous testing with artificial skin materials and professional tattoo
                    artists providing feedback for system optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-20 bg-gradient-to-r from-navy-900 to-purple-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Tattoo Technology Revolution</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Sign up for updates on our autonomous tattooing machine development
            and be among the first to experience the future of tattooing.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="#" 
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-colors"
            >
              Request Demo
            </a>
            <a 
              href="#" 
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-semibold py-3 px-8 rounded-full transition-colors"
            >
              Join Newsletter
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default MachinePage;