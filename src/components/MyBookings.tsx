import { ArrowLeft, MapPin, Clock, Users, X } from 'lucide-react';
import type { Booking } from '../App';

interface MyBookingsProps {
  bookings: Booking[];
  onBack: () => void;
  onCancel: (bookingId: string) => void;
}

export function MyBookings({ bookings, onBack, onCancel }: MyBookingsProps) {
  const upcomingBookings = bookings.filter(b => b.status === 'upcoming');
  const pastBookings = bookings.filter(b => b.status === 'past');
  const cancelledBookings = bookings.filter(b => b.status === 'cancelled');

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="p-1 hover:bg-blue-700 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1>My Bookings</h1>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto p-4">
        {/* Upcoming Bookings */}
        <section className="mb-6">
          <h2 className="mb-3 text-neutral-900">Upcoming</h2>
          {upcomingBookings.length === 0 ? (
            <div className="bg-neutral-100 border border-neutral-200 rounded-lg p-4 text-center text-neutral-600">
              <p>No upcoming bookings</p>
            </div>
          ) : (
            <div className="space-y-3">
              {upcomingBookings.map(booking => (
                <div 
                  key={booking.id}
                  className="bg-white border border-neutral-300 rounded-lg p-4"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-neutral-900">{booking.roomName}</h3>
                      <p className="text-sm text-neutral-600">{booking.locationName}</p>
                    </div>
                    <button
                      onClick={() => {
                        if (window.confirm('Cancel this booking? Credits will be refunded.')) {
                          onCancel(booking.id);
                        }
                      }}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Cancel booking"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-neutral-600">
                      <Clock className="w-4 h-4" />
                      <span>{booking.date} at {booking.time}</span>
                    </div>
                    <div className="flex items-center gap-4 text-neutral-600">
                      <span>{booking.duration} minutes</span>
                      <span>•</span>
                      <span>{booking.credits} credits</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-neutral-200">
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Confirmed
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Past Bookings */}
        <section className="mb-6">
          <h2 className="mb-3 text-neutral-900">Past</h2>
          {pastBookings.length === 0 ? (
            <div className="bg-neutral-100 border border-neutral-200 rounded-lg p-4 text-center text-neutral-600">
              <p>No past bookings</p>
            </div>
          ) : (
            <div className="space-y-3">
              {pastBookings.map(booking => (
                <div 
                  key={booking.id}
                  className="bg-neutral-50 border border-neutral-200 rounded-lg p-4"
                >
                  <div className="mb-3">
                    <h3 className="text-neutral-700">{booking.roomName}</h3>
                    <p className="text-sm text-neutral-500">{booking.locationName}</p>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-neutral-500">
                      <Clock className="w-4 h-4" />
                      <span>{booking.date} at {booking.time}</span>
                    </div>
                    <div className="flex items-center gap-4 text-neutral-500">
                      <span>{booking.duration} minutes</span>
                      <span>•</span>
                      <span>{booking.credits} credits</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-neutral-200">
                    <span className="text-xs bg-neutral-200 text-neutral-600 px-2 py-1 rounded">
                      Completed
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Cancelled Bookings */}
        {cancelledBookings.length > 0 && (
          <section>
            <h2 className="mb-3 text-neutral-900">Cancelled</h2>
            <div className="space-y-3">
              {cancelledBookings.map(booking => (
                <div 
                  key={booking.id}
                  className="bg-neutral-50 border border-neutral-200 rounded-lg p-4"
                >
                  <div className="mb-3">
                    <h3 className="text-neutral-700">{booking.roomName}</h3>
                    <p className="text-sm text-neutral-500">{booking.locationName}</p>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-neutral-500">
                      <Clock className="w-4 h-4" />
                      <span>{booking.date} at {booking.time}</span>
                    </div>
                    <div className="flex items-center gap-4 text-neutral-500">
                      <span>{booking.duration} minutes</span>
                      <span>•</span>
                      <span>{booking.credits} credits (refunded)</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-neutral-200">
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                      Cancelled
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
