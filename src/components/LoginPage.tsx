import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Building2, Sparkles } from 'lucide-react';

interface LoginPageProps {
  onLogin: (email: string, password: string) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login delay
    setTimeout(() => {
      onLogin(email, password);
      setIsLoading(false);
    }, 1000);
  };

  const handleDemoLogin = () => {
    setEmail('daniel.novak@startup.cz');
    setPassword('demo1234');
    setTimeout(() => {
      onLogin('daniel.novak@startup.cz', 'demo1234');
    }, 500);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-blue-600 to-blue-800">
      {/* Top Section - Branding */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-6 mb-6 relative z-10 shadow-lg">
          <Building2 className="w-16 h-16" />
        </div>
        <h1 className="text-white text-4xl mb-2 font-bold relative z-10 tracking-tight">WORK LOUNGE</h1>
        <p className="text-blue-100 text-center mb-2 relative z-10">Meeting Room Booking</p>
        <div className="flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1.5 relative z-10 shadow-md">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm">AI-Powered Suggestions</span>
        </div>
      </div>

      {/* Bottom Section - Login Form */}
      <div className="bg-white rounded-t-3xl p-6 shadow-2xl">
        <h2 className="text-neutral-900 mb-2">Welcome Back</h2>
        <p className="text-neutral-600 mb-6">Sign in to continue booking</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm text-neutral-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
                <Mail className="w-5 h-5" />
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@company.com"
                required
                className="w-full pl-11 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm text-neutral-700 mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
                <Lock className="w-5 h-5" />
              </div>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full pl-11 pr-12 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button
              type="button"
              className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-lg text-white transition-all ${
              isLoading
                ? 'bg-blue-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Signing in...
              </span>
            ) : (
              'Sign In'
            )}
          </button>

          {/* Demo Login Button */}
          <button
            type="button"
            onClick={handleDemoLogin}
            className="w-full py-3 rounded-lg bg-purple-100 text-purple-700 hover:bg-purple-200 transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Try Demo Login
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-neutral-600">
            Don't have an account?{' '}
            <button className="text-blue-600 hover:text-blue-700 transition-colors">
              Sign Up
            </button>
          </p>
        </div>

        {/* Footer Info */}
        <div className="mt-8 pt-6 border-t border-neutral-200 text-center">
          <p className="text-xs text-neutral-500">
            WorkLounge Coworking Spaces
          </p>
          <p className="text-xs text-neutral-400 mt-1">
            Prague • 7 Locations
          </p>
        </div>
      </div>
    </div>
  );
}
