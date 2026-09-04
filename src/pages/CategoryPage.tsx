import React from 'react';
import { Layout, PageHeader, SectionHeading, NoteCard } from '@/components';
import { useParams } from 'react-router-dom';
import { demoNotes, categories } from '@/data/demoData';

export const CategoryPage: React.FC = () => {
  const { slug } = useParams();
  const category = categories.find(c => c.slug === slug);
  const categoryNotes = demoNotes.filter(n => n.category === category?.name);

  if (!category) {
    return (
      <Layout>
        <PageHeader title="Category Not Found" />
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <p className="text-vey-light text-lg">The category you're looking for doesn't exist.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader 
        title={category.name}
        description={category.description}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Subjects */}
        <div className="mb-16">
          <SectionHeading title="Popular Subjects" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English', 'History', 'Geography', 'Economics'].map(subject => (
              <button
                key={subject}
                className="p-4 bg-vey-charcoal border border-vey-gray rounded hover:border-vey-red transition text-vey-white font-semibold"
              >
                {subject}
              </button>
            ))}
          </div>
        </div>

        {/* Trending Notes */}
        <div className="mb-16">
          <SectionHeading title="Trending Notes" />
          {categoryNotes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryNotes.map(note => (
                <NoteCard key={note.id} note={note} />
              ))}
            </div>
          ) : (
            <div className="bg-vey-charcoal border border-vey-gray rounded p-8 text-center">
              <p className="text-vey-light">No notes available in this category yet.</p>
            </div>
          )}
        </div>

        {/* Recent Notes */}
        <div>
          <SectionHeading title="Recent Notes" />
          {categoryNotes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryNotes.slice(0, 3).map(note => (
                <NoteCard key={note.id} note={note} />
              ))}
            </div>
          ) : (
            <div className="bg-vey-charcoal border border-vey-gray rounded p-8 text-center">
              <p className="text-vey-light">No recent notes in this category.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
