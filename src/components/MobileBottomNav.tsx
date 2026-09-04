import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, Upload, MessageCircle, User } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-vey-black border-t border-vey-charcoal">
      <div className="flex items-center justify-around h-16 px-2">
        <Link to="/" className="flex flex-col items-center gap-1 py-2 px-4 text-vey-gray hover:text-vey-white transition">
          <Home size={24} />
          <span className="text-xs">Home</span>
        </Link>
        <Link to="/explore" className="flex flex-col items-center gap-1 py-2 px-4 text-vey-gray hover:text-vey-white transition">
          <Compass size={24} />
          <span className="text-xs">Explore</span>
        </Link>
        <Link to="/upload" className="flex flex-col items-center gap-1 py-2 px-4 text-vey-red hover:text-vey-white transition">
          <div className="bg-vey-red text-vey-black rounded-full p-2">
            <Upload size={20} />
          </div>
          <span className="text-xs">Upload</span>
        </Link>
        <Link to="/questions" className="flex flex-col items-center gap-1 py-2 px-4 text-vey-gray hover:text-vey-white transition">
          <MessageCircle size={24} />
          <span className="text-xs">Q&A</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center gap-1 py-2 px-4 text-vey-gray hover:text-vey-white transition">
          <User size={24} />
          <span className="text-xs">Profile</span>
        </Link>
      </div>
    </nav>
  );
};
