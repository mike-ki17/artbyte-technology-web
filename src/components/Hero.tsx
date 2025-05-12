import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from './Link';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-navy-900">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-900/70"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="flex justify-center mb-8 animate-fadeIn">
          <Logo size="large" variant="light" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slideUp">
          Innovation in <span className="text-green-400">Tattoo Technology</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 animate-slideUp animation-delay-100">
          An academic project blending software development and industrial automation
          to revolutionize the tattoo industry
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slideUp animation-delay-200">
          <Link 
            to="/tatu" 
            className="bg-green-500 hover:bg-green-600 text-navy-900 font-semibold py-3 px-8 rounded-full transition-colors"
          >
            Explore Tatu
          </Link>
          <Link 
            to="/machine" 
            className="bg-transparent hover:bg-purple-700 text-white border-2 border-purple-700 font-semibold py-3 px-8 rounded-full transition-colors"
          >
            Discover the Machine
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link to="#overview" className="text-white">
          <ChevronDown size={32} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;