import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Download, Bookmark } from 'lucide-react';
import { Note } from '@/data/demoData';

interface NoteCardProps {
  note: Note;
}

export const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className="bg-vey-charcoal border border-vey-gray rounded hover:border-vey-red transition group cursor-pointer h-full flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-vey-gray">
          <h3 className="text-lg font-semibold text-vey-white group-hover:text-vey-red transition line-clamp-2">
            {note.title}
          </h3>
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            <span className="text-xs bg-vey-dark px-2 py-1 rounded text-vey-light">
              {note.exam}
            </span>
            <span className="text-xs bg-vey-dark px-2 py-1 rounded text-vey-light">
              {note.subject}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex-1">
          <p className="text-sm text-vey-light line-clamp-2">
            {note.description}
          </p>
          <div className="text-xs text-vey-gray mt-3">
            Chapter: {note.chapter}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-vey-gray space-y-3">
          <div className="flex items-center justify-between text-xs text-vey-gray">
            <div className="flex items-center gap-1">
              <Star size={14} className="text-vey-red" fill="currentColor" />
              <span>{note.rating}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Download size={14} />
                <span>{note.downloads}</span>
              </div>
              <div className="flex items-center gap-1">
                <Bookmark size={14} />
                <span>{note.saves}</span>
              </div>
            </div>
          </div>
          <div className="text-xs text-vey-gray">
            by {note.uploader}
          </div>
        </div>
      </div>
    </Link>
  );
};
