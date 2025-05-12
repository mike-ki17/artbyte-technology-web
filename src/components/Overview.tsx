import React from 'react';
import { Smartphone, Bot, Pencil, Users, Calendar, Image, Settings, Code } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Overview: React.FC = () => {
  return (
    <section id="overview" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            A Revolutionary <span className="text-green-500">Two-Part Project</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Artbyte Technology is developing an innovative solution that combines a social 
            platform for tattoo artists and clients with advanced automation technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Tatu Social Network */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg transform transition duration-300 hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <Smartphone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900">Tatu Social Network</h3>
            </div>
            <p className="text-gray-600 mb-8">
              A comprehensive platform connecting tattoo artists with clients, featuring
              scheduling, AI-powered design visualization, and social networking capabilities.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <FeatureCard 
                icon={<Calendar className="h-5 w-5 text-green-600" />}
                title="Appointment Scheduling"
                description="Book and manage tattoo appointments with ease"
              />
              <FeatureCard 
                icon={<Image className="h-5 w-5 text-green-600" />}
                title="AI Visualization"
                description="Preview tattoo designs on your body with AI"
              />
              <FeatureCard 
                icon={<Users className="h-5 w-5 text-green-600" />}
                title="Social Features"
                description="Follow artists, share designs, and build your profile"
              />
              <FeatureCard 
                icon={<Pencil className="h-5 w-5 text-green-600" />}
                title="Portfolio Management"
                description="Showcase your work and attract new clients"
              />
            </div>
          </div>

          {/* Autonomous Tattooing Machine */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg transform transition duration-300 hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <Bot className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900">Autonomous Tattooing Machine</h3>
            </div>
            <p className="text-gray-600 mb-8">
              A groundbreaking machine that combines robotics, software integration,
              and industrial automation to revolutionize tattoo application precision.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <FeatureCard 
                icon={<Settings className="h-5 w-5 text-purple-700" />}
                title="Precision Mechanics"
                description="High-precision robotics for accurate tattooing"
              />
              <FeatureCard 
                icon={<Code className="h-5 w-5 text-purple-700" />}
                title="Software Integration"
                description="Seamless connection with the Tatu app"
              />
              <FeatureCard 
                icon={<Bot className="h-5 w-5 text-purple-700" />}
                title="Autonomous Operation"
                description="Advanced algorithms for tattoo application"
              />
              <FeatureCard 
                icon={<Smartphone className="h-5 w-5 text-purple-700" />}
                title="Remote Control"
                description="Monitor and adjust operations via mobile"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;