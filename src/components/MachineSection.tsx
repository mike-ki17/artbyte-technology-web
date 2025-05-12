import React from 'react';
import { Bot, Settings, Zap, Shield, ArrowRight } from 'lucide-react';
import { Link } from './Link';

const MachineSection: React.FC = () => {
  return (
    <section id="machine" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Autonomous <span className="text-purple-700">Tattooing Machine</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Revolutionizing tattoo application with precision robotics, advanced
            software integration, and industrial automation techniques.
          </p>
        </div>

        {/* Machine visuals and features */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Features */}
          <div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <Settings className="h-6 w-6 text-purple-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Precision Mechanics</h3>
                  <p className="text-gray-600">
                    High-precision robotic components ensure accurate and consistent
                    tattoo application with minimal margin of error.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <Zap className="h-6 w-6 text-purple-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Advanced Control System</h3>
                  <p className="text-gray-600">
                    Sophisticated control algorithms monitor and adjust tattooing parameters
                    in real-time for optimal results on different skin types.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <Bot className="h-6 w-6 text-purple-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Software Integration</h3>
                  <p className="text-gray-600">
                    Seamless connectivity with the Tatu app allows for direct transfer of
                    designs and parameters from mobile to machine.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <Shield className="h-6 w-6 text-purple-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Safety Protocols</h3>
                  <p className="text-gray-600">
                    Comprehensive safety mechanisms, emergency stops, and continuous
                    monitoring ensure a secure tattooing experience.
                  </p>
                </div>
              </div>

              <Link 
                to="/machine" 
                className="inline-flex items-center text-purple-700 font-semibold hover:text-purple-800 transition-colors"
              >
                Learn more about the machine <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Machine visuals */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Autonomous Tattooing Machine" 
                className="w-full"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachineSection;