import React from 'react';
import { Layout, PageHeader, NoteCard, SearchBar, SectionHeading, Button } from '@/components';
import { demoNotes } from '@/data/demoData';
import { Search } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <PageHeader 
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-4xl font-bold text-vey-white mb-4">Oops!</h1>
          <p className="text-vey-light text-lg mb-8">We couldn't find what you're looking for.</p>
          <a href="/" className="inline-block">
            <Button variant="primary" size="lg">Go Home</Button>
          </a>
        </div>

        <div>
          <SectionHeading title="Explore Instead" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoNotes.slice(0, 3).map(note => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
