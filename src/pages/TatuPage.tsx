import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, Smartphone, Image, Calendar, Users, Upload, Heart, MessageCircle } from 'lucide-react';
import { Link } from '../components/Link';

const TatuPage: React.FC = () => {
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Tatu <span className="text-green-400">Social Network</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Connecting tattoo artists and clients through an innovative platform with 
                cutting-edge features and seamless user experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#" 
                  className="bg-green-500 hover:bg-green-600 text-navy-900 font-semibold py-3 px-8 rounded-full transition-colors"
                >
                  Download Beta
                </a>
                <a 
                  href="#features" 
                  className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-semibold py-3 px-8 rounded-full transition-colors"
                >
                  Explore Features
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 md:ml-12">
                <div className="bg-navy-800 rounded-3xl p-4 shadow-2xl transform rotate-3">
                  <img 
                    src="https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Tatu App Interface" 
                    className="rounded-2xl"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Comprehensive <span className="text-green-500">Features</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our app combines social networking with practical tools for the tattoo community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Calendar className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Appointment Scheduling</h3>
              <p className="text-gray-600 mb-4">
                Book, reschedule, and manage tattoo appointments with real-time availability.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  Real-time artist availability
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  Automated reminders
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  Booking history
                </li>
              </ul>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Image className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">AI Tattoo Visualization</h3>
              <p className="text-gray-600 mb-4">
                Preview tattoos on your body using our advanced AI technology.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  Real-time preview
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  Size and placement adjustment
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  Skin tone adaptation
                </li>
              </ul>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Social Features</h3>
              <p className="text-gray-600 mb-4">
                Connect with artists and clients through a dedicated tattoo community.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  Artist and client profiles
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  Follow system and activity feed
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  Rating and review system
                </li>
              </ul>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Upload className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Portfolio Management</h3>
              <p className="text-gray-600 mb-4">
                Showcase your work and attract new clients with a professional portfolio.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  Categorized galleries
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  Detail views with information
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  Before/after comparisons
                </li>
              </ul>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Inspiration Feed</h3>
              <p className="text-gray-600 mb-4">
                Discover tattoo designs and get inspired by trending styles.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  Personalized recommendations
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  Style categories and filters
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  Save designs for later
                </li>
              </ul>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <MessageCircle className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Direct Messaging</h3>
              <p className="text-gray-600 mb-4">
                Communicate directly with artists to discuss designs and details.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  Text and image sharing
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  Design approval workflow
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  Read receipts and status
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* App mockups */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              User <span className="text-green-500">Experience</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Intuitive interfaces designed for both artists and clients
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <div className="relative w-64">
              <div className="bg-navy-900 rounded-3xl p-4 shadow-lg transform -rotate-6">
                <img 
                  src="https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Tatu App Profile Screen" 
                  className="rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-2xl">
                  <p className="text-white text-sm font-medium">Artist Profile</p>
                </div>
              </div>
            </div>
            
            <div className="relative w-64 mt-12">
              <div className="bg-navy-900 rounded-3xl p-4 shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/7642000/pexels-photo-7642000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Tatu App Booking Screen" 
                  className="rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-2xl">
                  <p className="text-white text-sm font-medium">Booking Calendar</p>
                </div>
              </div>
            </div>
            
            <div className="relative w-64">
              <div className="bg-navy-900 rounded-3xl p-4 shadow-lg transform rotate-6">
                <img 
                  src="https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Tatu App Design Screen" 
                  className="rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-2xl">
                  <p className="text-white text-sm font-medium">AI Visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-20 bg-gradient-to-r from-navy-900 to-purple-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Tattoo Experience?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Join our community of artists and enthusiasts pioneering the future of tattooing.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="#" 
              className="bg-green-500 hover:bg-green-600 text-navy-900 font-semibold py-3 px-8 rounded-full transition-colors"
            >
              Download Beta
            </a>
            <a 
              href="#" 
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-semibold py-3 px-8 rounded-full transition-colors"
            >
              Join Waiting List
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TatuPage;