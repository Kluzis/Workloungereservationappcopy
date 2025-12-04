import { ArrowLeft, User, Mail, Building2, Calendar, Bell, HelpCircle, LogOut } from 'lucide-react';

interface ProfileProps {
  onBack: () => void;
}

export function Profile({ onBack }: ProfileProps) {
  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white p-4 shadow-lg">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors backdrop-blur-sm"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="font-bold">Profile</h1>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto">
        {/* User Info */}
        <div className="bg-gradient-to-b from-blue-600 to-blue-500 text-white p-6 pb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white bg-opacity-20 rounded-full p-4">
              <User className="w-12 h-12" />
            </div>
            <div>
              <h2 className="text-white">Daniel Novák</h2>
              <p className="text-blue-100 text-sm">Startup Founder</p>
            </div>
          </div>
        </div>

        {/* Account Details */}
        <section className="p-4 -mt-4 bg-white rounded-t-3xl">
          <h3 className="text-sm text-neutral-600 mb-3">ACCOUNT DETAILS</h3>
          <div className="space-y-1">
            <div className="flex items-center gap-3 p-3 hover:bg-neutral-50 rounded-lg transition-colors">
              <Mail className="w-5 h-5 text-neutral-600" />
              <div>
                <p className="text-sm text-neutral-600">Email</p>
                <p className="text-neutral-900">daniel.novak@startup.cz</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 hover:bg-neutral-50 rounded-lg transition-colors">
              <Building2 className="w-5 h-5 text-neutral-600" />
              <div>
                <p className="text-sm text-neutral-600">Member Since</p>
                <p className="text-neutral-900">March 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 hover:bg-neutral-50 rounded-lg transition-colors">
              <Calendar className="w-5 h-5 text-neutral-600" />
              <div>
                <p className="text-sm text-neutral-600">Membership</p>
                <p className="text-neutral-900">Premium Plan</p>
              </div>
            </div>
          </div>
        </section>

        {/* Settings */}
        <section className="p-4">
          <h3 className="text-sm text-neutral-600 mb-3">SETTINGS</h3>
          <div className="space-y-1">
            <button className="w-full flex items-center gap-3 p-3 hover:bg-neutral-50 rounded-lg transition-colors text-left">
              <Bell className="w-5 h-5 text-neutral-600" />
              <span className="text-neutral-900">Notifications</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 hover:bg-neutral-50 rounded-lg transition-colors text-left">
              <HelpCircle className="w-5 h-5 text-neutral-600" />
              <span className="text-neutral-900">Help & Support</span>
            </button>
          </div>
        </section>

        {/* Logout */}
        <section className="p-4">
          <button className="w-full flex items-center gap-3 p-3 hover:bg-red-50 rounded-lg transition-colors text-left text-red-600">
            <LogOut className="w-5 h-5" />
            <span>Log Out</span>
          </button>
        </section>

        {/* App Info */}
        <div className="p-4 text-center text-sm text-neutral-500">
          <p>WorkLounge App v1.0.0</p>
          <p className="text-xs mt-1">© 2025 WorkLounge. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
}
