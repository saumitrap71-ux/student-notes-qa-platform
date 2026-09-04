import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {
  HomePage,
  ExplorePage,
  CategoryPage,
  NoteDetailPage,
  QuestionDetailPage,
  QuestionsPage,
  UploadPage,
  LoginPage,
  SignupPage,
  ProfilePage
} from '@/pages';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/question/:id" element={<QuestionDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        
        {/* Protected Routes (for now accessible without auth) */}
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        
        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
