import { Calendar, MapPin, CreditCard, User, Clock, Sparkles } from 'lucide-react';
import type { View, Booking } from '../App';

interface HomePageProps {
  userCredits: number;
  upcomingBookings: Booking[];
  onNavigate: (view: View) => void;
}

export function HomePage({ userCredits, upcomingBookings, onNavigate }: HomePageProps) {
  const todayBookings = upcomingBookings.filter(b => b.date === '2025-12-01');
  
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1>WorkLounge</h1>
            <p className="text-blue-100 text-sm">Welcome back, Daniel</p>
          </div>
          <button 
            onClick={() => onNavigate('profile')}
            className="p-2 hover:bg-blue-700 rounded-full transition-colors"
          >
            <User className="w-6 h-6" />
          </button>
        </div>
        
        {/* Credit Balance */}
        <div className="bg-blue-700 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              <span className="text-sm">Available Credits</span>
            </div>
            <span className="text-2xl">{userCredits}</span>
          </div>
          <button 
            onClick={() => onNavigate('credits')}
            className="mt-2 text-sm text-blue-200 hover:text-white transition-colors"
          >
            View details & purchase →
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4">
        {/* AI Suggestions Button - NEW! */}
        <button 
          onClick={() => onNavigate('ai-suggestions')}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-lg mb-3 hover:shadow-lg transition-all shadow-md"
        >
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6" />
            <div className="text-left">
              <div>AI Smart Suggestions</div>
              <div className="text-xs text-white text-opacity-90">Book in 1-tap with AI recommendations</div>
            </div>
          </div>
        </button>

        {/* Quick Book Button */}
        <button 
          onClick={() => onNavigate('booking')}
          className="w-full bg-blue-600 text-white p-4 rounded-lg mb-6 hover:bg-blue-700 transition-colors shadow-md"
        >
          <div className="flex items-center justify-center gap-2">
            <Calendar className="w-6 h-6" />
            <span>Book a Room</span>
          </div>
        </button>

        {/* Today's Bookings */}
        <section className="mb-6">
          <h2 className="mb-3 text-neutral-900">Today's Bookings</h2>
          {todayBookings.length === 0 ? (
            <div className="bg-neutral-100 border border-neutral-200 rounded-lg p-4 text-center text-neutral-600">
              <Clock className="w-8 h-8 mx-auto mb-2 text-neutral-400" />
              <p>No bookings today</p>
            </div>
          ) : (
            <div className="space-y-3">
              {todayBookings.map(booking => (
                <div 
                  key={booking.id}
                  className="bg-white border border-neutral-200 rounded-lg p-4"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-neutral-900">{booking.roomName}</h3>
                      <p className="text-sm text-neutral-600">{booking.locationName}</p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Confirmed
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-neutral-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{booking.time}</span>
                    </div>
                    <span>•</span>
                    <span>{booking.duration} min</span>
                    <span>•</span>
                    <span>{booking.credits} credits</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* All Bookings Link */}
        <button 
          onClick={() => onNavigate('my-bookings')}
          className="w-full bg-white border border-neutral-300 text-neutral-900 p-3 rounded-lg hover:bg-neutral-50 transition-colors mb-6"
        >
          View All Bookings
        </button>

        {/* Quick Access */}
        <section>
          <h2 className="mb-3 text-neutral-900">Locations</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              'Forum Karlín',
              'BCK Smíchov',
              'Diamant',
              'Příkopy',
              'Dejvice Telehouse',
              'Pankrác City Point',
              'Žižkov'
            ].map(location => (
              <button
                key={location}
                onClick={() => onNavigate('booking')}
                className="bg-white border border-neutral-200 p-3 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-left"
              >
                <MapPin className="w-4 h-4 text-blue-600 mb-1" />
                <p className="text-sm text-neutral-900">{location}</p>
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}