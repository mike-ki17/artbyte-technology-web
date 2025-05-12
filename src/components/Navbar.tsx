import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from './Link';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="z-50">
            <Logo size="small" variant={scrolled ? "dark" : "light"}/>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                scrolled ? 'text-navy-900 hover:text-green-500' : 'text-white hover:text-green-400'
              }`}
            >
              Home
            </Link>
            <div className="relative group">
              <button 
                className={`flex items-center font-medium transition-colors ${
                  scrolled ? 'text-navy-900 hover:text-green-500' : 'text-white hover:text-green-400'
                }`}
              >
                Projects <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link 
                    to="/tatu" 
                    className="block px-4 py-2 text-sm text-navy-900 hover:bg-gray-100"
                  >
                    Tatu Social Network
                  </Link>
                  <Link 
                    to="/machine" 
                    className="block px-4 py-2 text-sm text-navy-900 hover:bg-gray-100"
                  >
                    Autonomous Machine
                  </Link>
                </div>
              </div>
            </div>
            <Link 
              to="/academic" 
              className={`font-medium transition-colors ${
                scrolled ? 'text-navy-900 hover:text-green-500' : 'text-white hover:text-green-400'
              }`}
            >
              Academic Progress
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                scrolled ? 'text-navy-900 hover:text-green-500' : 'text-white hover:text-green-400'
              }`}
            >
              About Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50"
          >
            {isOpen ? (
              <X className={scrolled ? 'text-navy-900' : 'text-white'} />
            ) : (
              <Menu className={scrolled ? 'text-navy-900' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-navy-900 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <Link 
          to="/" 
          className="text-white font-medium text-2xl"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link 
          to="/tatu" 
          className="text-white font-medium text-2xl"
          onClick={() => setIsOpen(false)}
        >
          Tatu Social Network
        </Link>
        <Link 
          to="/machine" 
          className="text-white font-medium text-2xl"
          onClick={() => setIsOpen(false)}
        >
          Autonomous Machine
        </Link>
        <Link 
          to="/academic" 
          className="text-white font-medium text-2xl"
          onClick={() => setIsOpen(false)}
        >
          Academic Progress
        </Link>
        <Link 
          to="/about" 
          className="text-white font-medium text-2xl"
          onClick={() => setIsOpen(false)}
        >
          About Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;