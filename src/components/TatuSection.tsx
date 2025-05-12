import React from 'react';
import { Smartphone, Image, Calendar, Users, ArrowRight } from 'lucide-react';
import { Link } from './Link';

const TatuSection: React.FC = () => {
  return (
    <section id="tatu" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Tatu <span className="text-green-500">Social Network</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connecting tattoo artists and clients through an innovative platform
            with cutting-edge features and seamless user experience.
          </p>
        </div>

        {/* App mockup and features */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* App mockup */}
          <div className="relative">
            <div className="w-3/4 mx-auto relative z-10">
              <div className="rounded-3xl overflow-hidden border-8 border-navy-900 shadow-2xl">
                <img 
                  src="https://ik.imagekit.io/yjcg0b5mfartbyte/Logo%20Artbyte-Technology/WhatsApp%20Image%202024-05-09%20at%202.24.33%20PM.jpeg?updatedAt=1747085781063" 
                  alt="Tatu App Interface" 
                  className="w-full"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            </div>
          </div>

          {/* Features */}
          <div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Appointment Scheduling</h3>
                  <p className="text-gray-600">
                    Easily book, reschedule, and manage tattoo appointments with your 
                    favorite artists. Get real-time availability and confirmation.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <Image className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">AI Tattoo Visualization</h3>
                  <p className="text-gray-600">
                    Preview how tattoos will look on your body using our advanced
                    AI visualization technology. Experiment with size, placement, and designs.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Social Features</h3>
                  <p className="text-gray-600">
                    Follow your favorite artists, showcase your tattoos, build a personalized
                    profile, and connect with the tattoo community.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <Smartphone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Machine Connectivity</h3>
                  <p className="text-gray-600">
                    Seamlessly connect with our autonomous tattooing machine for precision
                    tattoo application using your chosen designs.
                  </p>
                </div>
              </div>

              <Link 
                to="/tatu" 
                className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Learn more about Tatu <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TatuSection;