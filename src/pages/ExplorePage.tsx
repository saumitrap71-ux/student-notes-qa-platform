import React, { useState } from 'react';
import { Layout, PageHeader, SearchBar, SectionHeading, NoteCard, Button } from '@/components';
import { demoNotes } from '@/data/demoData';
import { ChevronDown } from 'lucide-react';

export const ExplorePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedExam, setSelectedExam] = useState<string>('');
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('trending');

  const categories = ['JEE', 'NEET', 'Class 10', 'Class 12', 'Boards'];
  const exams = ['JEE Main', 'JEE Advanced', 'NEET', 'CBSE Board'];
  const subjects = ['Physics', 'Chemistry', 'Biology', 'Mathematics'];

  const filteredNotes = demoNotes.filter(note => {
    if (selectedCategory && note.category !== selectedCategory) return false;
    if (selectedExam && note.exam !== selectedExam) return false;
    if (selectedSubject && note.subject !== selectedSubject) return false;
    return true;
  });

  return (
    <Layout>
      <PageHeader 
        title="Explore Notes"
        description="Browse thousands of student notes"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search & Filters */}
        <div className="mb-12">
          <SearchBar />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-vey-white mb-4">Category</h3>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-vey-charcoal border border-vey-gray rounded text-vey-white focus:outline-none focus:border-vey-red"
                >
                  <option value="">All Categories</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-vey-white mb-4">Exam</h3>
                <select 
                  value={selectedExam}
                  onChange={(e) => setSelectedExam(e.target.value)}
                  className="w-full px-3 py-2 bg-vey-charcoal border border-vey-gray rounded text-vey-white focus:outline-none focus:border-vey-red"
                >
                  <option value="">All Exams</option>
                  {exams.map(exam => (
                    <option key={exam} value={exam}>{exam}</option>
                  ))}
                </select>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-vey-white mb-4">Subject</h3>
                <select 
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full px-3 py-2 bg-vey-charcoal border border-vey-gray rounded text-vey-white focus:outline-none focus:border-vey-red"
                >
                  <option value="">All Subjects</option>
                  {subjects.map(sub => (
                    <option key={sub} value={sub}>{sub}</option>
                  ))}
                </select>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-vey-white mb-4">Sort By</h3>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-vey-charcoal border border-vey-gray rounded text-vey-white focus:outline-none focus:border-vey-red"
                >
                  <option value="trending">Trending</option>
                  <option value="newest">Newest</option>
                  <option value="most-downloaded">Most Downloaded</option>
                  <option value="most-saved">Most Saved</option>
                  <option value="highest-rated">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notes Grid */}
          <div className="lg:col-span-3">
            {filteredNotes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredNotes.map(note => (
                  <NoteCard key={note.id} note={note} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-vey-light text-lg">No notes found. Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
