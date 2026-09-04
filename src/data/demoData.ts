// DEMO DATA - This is temporary data for UI development
// This will be replaced with Supabase data later

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon?: string;
}

export interface Note {
  id: string;
  title: string;
  description: string;
  category: string;
  exam: string;
  subject: string;
  chapter: string;
  uploader: string;
  uploaderAvatar?: string;
  rating: number;
  downloads: number;
  saves: number;
  type: 'handwritten' | 'typed' | 'short' | 'formula' | 'revision' | 'question' | 'other';
  tags: string[];
  preview?: string;
  createdAt: string;
}

export interface Question {
  id: string;
  title: string;
  description: string;
  category: string;
  subject: string;
  author: string;
  authorAvatar?: string;
  votes: number;
  answers: number;
  views: number;
  tags: string[];
  createdAt: string;
}

export interface Answer {
  id: string;
  questionId: string;
  author: string;
  authorAvatar?: string;
  content: string;
  votes: number;
  helpful: number;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar?: string;
  bio?: string;
  categories: string[];
  notesShared: number;
  downloads: number;
  helpfulVotes: number;
  averageRating: number;
  savedNotes: number;
}

// Categories
export const categories: Category[] = [
  {
    id: '1',
    name: 'Class 10',
    slug: 'class-10',
    description: 'CBSE & State Board Class 10',
    icon: '📚'
  },
  {
    id: '2',
    name: 'Class 12',
    slug: 'class-12',
    description: 'CBSE & State Board Class 12',
    icon: '📖'
  },
  {
    id: '3',
    name: 'JEE',
    slug: 'jee',
    description: 'JEE Main & Advanced',
    icon: '🎯'
  },
  {
    id: '4',
    name: 'NEET',
    slug: 'neet',
    description: 'NEET Preparation',
    icon: '🔬'
  },
  {
    id: '5',
    name: 'Boards',
    slug: 'boards',
    description: 'Board Exams',
    icon: '📝'
  }
];

// Demo Notes - TEMPORARY DATA
export const demoNotes: Note[] = [
  {
    id: '1',
    title: 'Electrostatics Short Notes',
    description: 'Complete electrostatics revision with key formulas and concepts',
    category: 'JEE',
    exam: 'JEE Main',
    subject: 'Physics',
    chapter: 'Electrostatics',
    uploader: 'Rahul Kumar',
    uploaderAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul',
    rating: 4.8,
    downloads: 2345,
    saves: 1256,
    type: 'short',
    tags: ['electrostatics', 'formulas', 'quick-revision'],
    preview: 'Important concepts: Coulomb\'s law, Electric field, Potential, Gauss theorem...',
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Organic Chemistry Reaction Map',
    description: 'Visual guide to all major organic reactions with mechanisms',
    category: 'JEE',
    exam: 'JEE Main',
    subject: 'Chemistry',
    chapter: 'Organic Chemistry',
    uploader: 'Priya Singh',
    uploaderAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
    rating: 4.9,
    downloads: 3456,
    saves: 2123,
    type: 'typed',
    tags: ['organic', 'reactions', 'mechanism'],
    preview: 'Substitution, Addition, Elimination, Condensation reactions with detailed mechanisms...',
    createdAt: '2024-01-20'
  },
  {
    id: '3',
    title: 'Class 12 Physics Formula Sheet',
    description: 'All important physics formulas for Class 12 Board exams',
    category: 'Class 12',
    exam: 'CBSE Board',
    subject: 'Physics',
    chapter: 'All Chapters',
    uploader: 'Aditya Patel',
    uploaderAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya',
    rating: 4.7,
    downloads: 5678,
    saves: 3456,
    type: 'formula',
    tags: ['formulas', 'class-12', 'board-exam'],
    preview: 'Mechanics, Thermodynamics, Waves, Electricity & Magnetism, Optics formulas...',
    createdAt: '2024-01-10'
  },
  {
    id: '4',
    title: 'Biology Human Physiology Revision',
    description: 'Complete human physiology notes with diagrams and explanations',
    category: 'NEET',
    exam: 'NEET',
    subject: 'Biology',
    chapter: 'Human Physiology',
    uploader: 'Neha Verma',
    uploaderAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha',
    rating: 4.6,
    downloads: 4123,
    saves: 2789,
    type: 'revision',
    tags: ['physiology', 'neet', 'biology'],
    preview: 'Digestion, Circulation, Respiration, Nervous System, Endocrine System...',
    createdAt: '2024-01-18'
  },
  {
    id: '5',
    title: 'Class 10 Science Important Questions',
    description: '150+ important questions with answers for Class 10 Science',
    category: 'Class 10',
    exam: 'CBSE Board',
    subject: 'Science',
    chapter: 'All Topics',
    uploader: 'Vikram Singh',
    uploaderAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram',
    rating: 4.5,
    downloads: 6234,
    saves: 4567,
    type: 'question',
    tags: ['important-questions', 'class-10', 'board'],
    preview: 'Chemistry: Periodic table, Chemical reactions, Acids and bases...',
    createdAt: '2024-01-12'
  },
  {
    id: '6',
    title: 'Calculus Integration Techniques',
    description: 'Master all integration methods with examples and practice problems',
    category: 'JEE',
    exam: 'JEE Advanced',
    subject: 'Mathematics',
    chapter: 'Calculus',
    uploader: 'Arjun Desai',
    uploaderAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun',
    rating: 4.9,
    downloads: 3890,
    saves: 2145,
    type: 'typed',
    tags: ['calculus', 'integration', 'jee'],
    preview: 'Substitution, Parts, Partial Fractions, Definite Integrals...',
    createdAt: '2024-01-16'
  }
];

// Demo Questions - TEMPORARY DATA
export const demoQuestions: Question[] = [
  {
    id: '1',
    title: 'How should I revise electrostatics?',
    description: 'I find electrostatics tough. What\'s the best strategy to revise before JEE?',
    category: 'JEE',
    subject: 'Physics',
    author: 'Rajesh Kumar',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh',
    votes: 245,
    answers: 12,
    views: 1890,
    tags: ['jee', 'electrostatics', 'revision'],
    createdAt: '2024-01-22'
  },
  {
    id: '2',
    title: 'Best way to remember organic reactions?',
    description: 'There are too many organic reactions. How do I memorize them effectively?',
    category: 'JEE',
    subject: 'Chemistry',
    author: 'Sneha Patel',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha',
    votes: 312,
    answers: 18,
    views: 2456,
    tags: ['organic', 'chemistry', 'memory'],
    createdAt: '2024-01-20'
  },
  {
    id: '3',
    title: 'Which chapters should I revise before a physics test?',
    description: 'Class 12 physics test coming up. Which are the most important chapters?',
    category: 'Class 12',
    subject: 'Physics',
    author: 'Kavya Sharma',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kavya',
    votes: 189,
    answers: 8,
    views: 1234,
    tags: ['physics', 'class-12', 'test'],
    createdAt: '2024-01-19'
  },
  {
    id: '4',
    title: 'NEET Biology: How to approach human physiology?',
    description: 'Human physiology has many systems. What\'s the best learning approach?',
    category: 'NEET',
    subject: 'Biology',
    author: 'Arun Verma',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arun',
    votes: 267,
    answers: 14,
    views: 1876,
    tags: ['neet', 'biology', 'physiology'],
    createdAt: '2024-01-21'
  },
  {
    id: '5',
    title: 'Best resources for Class 10 mathematics?',
    description: 'Any recommended resources or strategies for scoring 95+ in Class 10 maths?',
    category: 'Class 10',
    subject: 'Mathematics',
    author: 'Isha Singh',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Isha',
    votes: 145,
    answers: 10,
    views: 987,
    tags: ['maths', 'class-10', 'resources'],
    createdAt: '2024-01-18'
  }
];

// Demo Answers - TEMPORARY DATA
export const demoAnswers: Answer[] = [
  {
    id: '1',
    questionId: '1',
    author: 'Physics Expert',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Expert1',
    content: 'I recommend breaking electrostatics into 3 phases: 1) Coulomb\'s law fundamentals, 2) Electric field and potential, 3) Gauss theorem applications. Solve at least 50 problems from each phase. Use concept maps to visualize relationships.',
    votes: 234,
    helpful: 156,
    createdAt: '2024-01-22'
  },
  {
    id: '2',
    questionId: '2',
    author: 'Chemistry Mentor',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Expert2',
    content: 'Don\'t memorize! Understand the mechanism. Once you know why a reaction happens (electron movement, stability), you\'ll remember it. Create flowcharts grouping reactions by mechanism type (SN1, SN2, E1, E2, etc.). Practice with variations.',
    votes: 289,
    helpful: 201,
    createdAt: '2024-01-20'
  }
];

// Demo User
export const demoUser: User = {
  id: '1',
  name: 'Saumitra Patel',
  username: 'saumitra_notes',
  email: 'saumitra@example.com',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Saumitra',
  bio: 'Sharing knowledge to help fellow students ace their exams.',
  categories: ['JEE', 'Class 12', 'Physics'],
  notesShared: 24,
  downloads: 12456,
  helpfulVotes: 892,
  averageRating: 4.7,
  savedNotes: 156
};
