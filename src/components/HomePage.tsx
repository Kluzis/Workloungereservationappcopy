import { Calendar, MapPin, CreditCard, User, Clock, Sparkles } from 'lucide-react';
import type { View, Booking } from '../App';
import { LOCATIONS, LOCATION_IMAGES } from '../data/locations';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
      <header className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white p-4 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="font-bold tracking-tight">WORK LOUNGE</h1>
            <p className="text-blue-100 text-sm">Welcome back, Daniel</p>
          </div>
          <button 
            onClick={() => onNavigate('profile')}
            className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors backdrop-blur-sm"
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
              {todayBookings.map(booking => {
                const locationImage = LOCATION_IMAGES[booking.locationId] || LOCATION_IMAGES['forum'];
                return (
                  <div 
                    key={booking.id}
                    className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="relative h-32 overflow-hidden">
                      <ImageWithFallback
                        src={locationImage}
                        alt={booking.locationName}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded backdrop-blur-sm bg-opacity-90">
                          Confirmed
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="mb-2">
                        <h3 className="text-neutral-900 font-medium">{booking.roomName}</h3>
                        <p className="text-sm text-neutral-600">{booking.locationName}</p>
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
                  </div>
                );
              })}
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
            {LOCATIONS.map(location => {
              const locationImage = LOCATION_IMAGES[location.id] || LOCATION_IMAGES['forum'];
              return (
                <button
                  key={location.id}
                  onClick={() => onNavigate('booking')}
                  className="bg-white border border-neutral-200 rounded-lg overflow-hidden hover:border-blue-500 hover:shadow-md transition-all text-left group"
                >
                  <div className="relative h-24 overflow-hidden">
                    <ImageWithFallback
                      src={locationImage}
                      alt={location.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-600" />
                      <p className="text-sm text-neutral-900 font-medium">{location.name}</p>
                    </div>
                    <p className="text-xs text-neutral-500 line-clamp-1">{location.address}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}