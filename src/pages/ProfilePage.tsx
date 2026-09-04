import React from 'react';
import { Layout, PageHeader } from '@/components';
import { demoUser } from '@/data/demoData';
import { MapPin, BookOpen, Download, Heart, Star, Bookmark } from 'lucide-react';

export const ProfilePage: React.FC = () => {
  return (
    <Layout>
      <PageHeader title="My Profile" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Header */}
        <div className="bg-vey-charcoal border border-vey-gray rounded p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <img 
              src={demoUser.avatar}
              alt={demoUser.name}
              className="w-24 h-24 rounded-full"
            />
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-vey-white mb-2">{demoUser.name}</h1>
              <p className="text-vey-gray text-lg mb-4">@{demoUser.username}</p>
              <p className="text-vey-light mb-4">{demoUser.bio}</p>
              <div className="flex items-center gap-2 text-vey-gray">
                <MapPin size={16} />
                <span>India</span>
              </div>
            </div>
            <button className="px-6 py-2 border border-vey-red text-vey-red hover:bg-vey-red hover:text-vey-black transition rounded font-semibold">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12">
          <div className="bg-vey-charcoal border border-vey-gray rounded p-6 text-center">
            <p className="text-3xl font-bold text-vey-red">{demoUser.notesShared}</p>
            <p className="text-vey-gray text-sm mt-2">Notes Shared</p>
          </div>
          <div className="bg-vey-charcoal border border-vey-gray rounded p-6 text-center">
            <p className="text-3xl font-bold text-vey-white">{demoUser.downloads}</p>
            <p className="text-vey-gray text-sm mt-2">Downloads</p>
          </div>
          <div className="bg-vey-charcoal border border-vey-gray rounded p-6 text-center">
            <p className="text-3xl font-bold text-vey-white">{demoUser.helpfulVotes}</p>
            <p className="text-vey-gray text-sm mt-2">Helpful Votes</p>
          </div>
          <div className="bg-vey-charcoal border border-vey-gray rounded p-6 text-center">
            <p className="text-3xl font-bold text-vey-white">{demoUser.averageRating}</p>
            <p className="text-vey-gray text-sm mt-2">Avg Rating</p>
          </div>
          <div className="bg-vey-charcoal border border-vey-gray rounded p-6 text-center">
            <p className="text-3xl font-bold text-vey-white">{demoUser.savedNotes}</p>
            <p className="text-vey-gray text-sm mt-2">Saved Notes</p>
          </div>
          <div className="bg-vey-charcoal border border-vey-gray rounded p-6 text-center">
            <p className="text-3xl font-bold text-vey-white">{demoUser.categories.length}</p>
            <p className="text-vey-gray text-sm mt-2">Categories</p>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-vey-white mb-6">Preparing For</h2>
          <div className="flex flex-wrap gap-3">
            {demoUser.categories.map(cat => (
              <span key={cat} className="bg-vey-charcoal border border-vey-red text-vey-white px-4 py-2 rounded font-semibold">
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-vey-white mb-6 flex items-center gap-2">
              <BookOpen size={28} />
              My Notes
            </h2>
            <div className="bg-vey-charcoal border border-vey-gray rounded p-8 text-center">
              <p className="text-vey-light">You haven't shared any notes yet.</p>
              <a href="/upload" className="text-vey-red hover:text-red-600 font-semibold mt-2 inline-block">
                Share your first note
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-vey-white mb-6 flex items-center gap-2">
              <Bookmark size={28} />
              Saved Notes
            </h2>
            <div className="bg-vey-charcoal border border-vey-gray rounded p-8 text-center">
              <p className="text-vey-light">You haven't saved any notes yet.</p>
              <a href="/explore" className="text-vey-red hover:text-red-600 font-semibold mt-2 inline-block">
                Explore notes
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-vey-white mb-6 flex items-center gap-2">
              <Heart size={28} />
              Activity
            </h2>
            <div className="bg-vey-charcoal border border-vey-gray rounded p-8 text-center">
              <p className="text-vey-light">No activity yet.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
