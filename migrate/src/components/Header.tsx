import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="bg-black border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold text-white">flashfog</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/fog-details"
              className="text-white hover:text-cyan-400 transition-colors font-medium"
            >
              FOG DETAILS
            </Link>
            <Link 
              to="/security-strobe"
              className="text-white hover:text-cyan-400 transition-colors font-medium"
            >
              SECURITY STROBE
            </Link>
            <Link 
              to="/sound-barrier"
              className="text-white hover:text-cyan-400 transition-colors font-medium"
            >
              SOUND BARRIER
            </Link>
          </nav>

          <Link 
            to="/store"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors font-medium"
          >
            Store
          </Link>
        </div>
        
        {/* Mobile Navigation */}
        <nav className="md:hidden mt-4 flex flex-wrap gap-4">
          <Link 
            to="/fog-details"
            className="text-white hover:text-cyan-400 transition-colors text-sm"
          >
            FOG DETAILS
          </Link>
          <Link 
            to="/security-strobe"
            className="text-white hover:text-cyan-400 transition-colors text-sm"
          >
            SECURITY STROBE
          </Link>
          <Link 
            to="/sound-barrier"
            className="text-white hover:text-cyan-400 transition-colors text-sm"
          >
            SOUND BARRIER
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;