import React from 'react';
import { Link } from 'react-router-dom';
import { Search, LogIn } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-vey-black border-b border-vey-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="text-xl font-bold text-vey-white">
              VEYSHOT
            </div>
            <div className="text-xs text-vey-gray tracking-wider">EVERYTHING AT YOUR TIP.</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/explore" className="text-vey-light hover:text-vey-white transition">
              Explore
            </Link>
            <Link to="/categories" className="text-vey-light hover:text-vey-white transition">
              Categories
            </Link>
            <Link to="/questions" className="text-vey-light hover:text-vey-white transition">
              Questions
            </Link>
            <Link to="/upload" className="text-vey-light hover:text-vey-white transition">
              Upload
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:block p-2 hover:bg-vey-charcoal rounded transition">
              <Search size={20} />
            </button>
            <Link to="/login" className="flex items-center gap-2 px-4 py-2 text-vey-light hover:text-vey-white transition">
              <LogIn size={18} />
              <span className="hidden sm:inline">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
