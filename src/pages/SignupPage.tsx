import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Button } from '@/components';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';

interface SignupFormData {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  categories: string[];
}

export const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignupFormData>({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    categories: []
  });
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState<'details' | 'interests'>('details');

  const categories = ['Class 10', 'Class 12', 'JEE', 'JEE Dropper', 'NEET', 'NEET Dropper', 'Boards'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleCategory = (category: string) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    setStep('interests');
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup:', formData);
    alert('Account created! (Demo - no real authentication yet)');
    navigate('/');
  };

  return (
    <Layout>
      <div className="min-h-screen bg-vey-black flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-vey-white mb-2">VEYSHOT</h1>
            <p className="text-vey-gray">Join the student community</p>
          </div>

          {step === 'details' ? (
            <form onSubmit={handleDetailsSubmit} className="space-y-6">
              <div>
                <label className="block text-vey-white font-semibold mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-vey-gray" size={20} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full pl-12 pr-4 py-3 bg-vey-charcoal border border-vey-gray rounded text-vey-white placeholder-vey-gray focus:outline-none focus:border-vey-red"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-vey-white font-semibold mb-2">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="@username"
                  className="w-full px-4 py-3 bg-vey-charcoal border border-vey-gray rounded text-vey-white placeholder-vey-gray focus:outline-none focus:border-vey-red"
                  required
                />
              </div>

              <div>
                <label className="block text-vey-white font-semibold mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-vey-gray" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full pl-12 pr-4 py-3 bg-vey-charcoal border border-vey-gray rounded text-vey-white placeholder-vey-gray focus:outline-none focus:border-vey-red"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-vey-white font-semibold mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-vey-gray" size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-3 bg-vey-charcoal border border-vey-gray rounded text-vey-white placeholder-vey-gray focus:outline-none focus:border-vey-red"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-vey-gray hover:text-vey-white"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-vey-white font-semibold mb-2">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-vey-gray" size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-3 bg-vey-charcoal border border-vey-gray rounded text-vey-white placeholder-vey-gray focus:outline-none focus:border-vey-red"
                    required
                  />
                </div>
              </div>

              <Button variant="primary" size="lg" className="w-full">
                Continue
              </Button>

              <p className="text-center text-vey-gray">
                Already have an account?{' '}
                <a href="/login" className="text-vey-red hover:text-red-600 font-semibold">
                  Login
                </a>
              </p>
            </form>
          ) : (
            <form onSubmit={handleSignup} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-vey-white mb-2">What are you preparing for?</h2>
                <p className="text-vey-gray text-sm mb-6">Select one or more</p>
              </div>

              <div className="space-y-3">
                {categories.map(category => (
                  <label key={category} className="flex items-center gap-3 p-4 bg-vey-charcoal border border-vey-gray rounded hover:border-vey-red transition cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.categories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="w-5 h-5 rounded border-vey-gray"
                    />
                    <span className="text-vey-white font-semibold">{category}</span>
                  </label>
                ))}
              </div>

              <div className="flex gap-3">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="flex-1"
                  type="button"
                  onClick={() => setStep('details')}
                >
                  Back
                </Button>
                <Button variant="primary" size="lg" className="flex-1">
                  Create Account
                </Button>
              </div>

              <p className="text-center text-vey-gray text-sm">
                Already have an account?{' '}
                <a href="/login" className="text-vey-red hover:text-red-600 font-semibold">
                  Login
                </a>
              </p>
            </form>
          )}

          <div className="mt-8 p-4 bg-vey-charcoal border border-vey-gray rounded text-center text-vey-light text-sm">
            <p>Demo Mode: Use any credentials</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
