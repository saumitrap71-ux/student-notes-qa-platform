import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-vey-dark border-t border-vey-charcoal mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-lg font-bold text-vey-white mb-2">VEYSHOT</div>
            <p className="text-vey-gray text-sm">Everything at your tip.</p>
            <p className="text-vey-gray text-xs mt-4">Study. Share. Discover.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-vey-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><Link to="/explore" className="text-vey-gray hover:text-vey-white text-sm transition">Explore Notes</Link></li>
              <li><Link to="/questions" className="text-vey-gray hover:text-vey-white text-sm transition">Questions</Link></li>
              <li><Link to="/upload" className="text-vey-gray hover:text-vey-white text-sm transition">Upload</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-vey-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/category/class-10" className="text-vey-gray hover:text-vey-white text-sm transition">Class 10</Link></li>
              <li><Link to="/category/class-12" className="text-vey-gray hover:text-vey-white text-sm transition">Class 12</Link></li>
              <li><Link to="/category/jee" className="text-vey-gray hover:text-vey-white text-sm transition">JEE</Link></li>
              <li><Link to="/category/neet" className="text-vey-gray hover:text-vey-white text-sm transition">NEET</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-vey-white font-semibold mb-4">Info</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-vey-gray hover:text-vey-white text-sm transition">About Us</a></li>
              <li><a href="#" className="text-vey-gray hover:text-vey-white text-sm transition">Community Guidelines</a></li>
              <li><a href="#" className="text-vey-gray hover:text-vey-white text-sm transition">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-vey-charcoal flex flex-col md:flex-row justify-between items-center text-vey-gray text-sm">
          <p>&copy; 2024 VEYSHOT. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-vey-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-vey-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
