import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Button } from '@/components';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email, password });
    alert('Login submitted! (Demo - no real authentication yet)');
    navigate('/');
  };

  return (
    <Layout>
      <div className="min-h-screen bg-vey-black flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-vey-white mb-2">VEYSHOT</h1>
            <p className="text-vey-gray">Welcome back</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-vey-white font-semibold mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-vey-gray" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-vey-light">
                <input type="checkbox" className="w-4 h-4" />
                Remember me
              </label>
              <a href="#" className="text-vey-red hover:text-red-600">Forgot password?</a>
            </div>

            <Button variant="primary" size="lg" className="w-full">
              Login
            </Button>

            <p className="text-center text-vey-gray">
              Don't have an account?{' '}
              <a href="/signup" className="text-vey-red hover:text-red-600 font-semibold">
                Sign up
              </a>
            </p>
          </form>

          <div className="mt-12 p-4 bg-vey-charcoal border border-vey-gray rounded text-center text-vey-light text-sm">
            <p>Demo Mode: Use any email/password</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
