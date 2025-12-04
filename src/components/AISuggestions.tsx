import { ArrowLeft, Sparkles, MapPin, Users, Clock, CreditCard, TrendingUp, Calendar, Zap } from 'lucide-react';
import type { Location, Room } from '../App';

interface AISuggestionsProps {
  userCredits: number;
  onBack: () => void;
  onBookSuggestion: (suggestion: SuggestedBooking) => void;
}

export interface SuggestedBooking {
  id: string;
  locationId: string;
  locationName: string;
  roomId: string;
  roomName: string;
  capacity: number;
  date: string;
  time: string;
  duration: number;
  credits: number;
  reason: string;
  confidence: number; // 0-100
  tags: string[];
}

const MOCK_SUGGESTIONS: SuggestedBooking[] = [
  {
    id: 'sug-1',
    locationId: 'forum',
    locationName: 'Forum Karlín',
    roomId: 'room-3',
    roomName: 'Room 3',
    capacity: 4,
    date: '2025-12-05',
    time: '14:00',
    duration: 60,
    credits: 4,
    reason: 'You often book here on Thursday afternoons',
    confidence: 95,
    tags: ['Most Booked', 'Preferred Time']
  },
  {
    id: 'sug-2',
    locationId: 'bck',
    locationName: 'BCK Smíchov',
    roomId: 'room-4',
    roomName: 'Room 4',
    capacity: 6,
    date: '2025-12-05',
    time: '10:00',
    duration: 90,
    credits: 9,
    reason: 'Larger space for your typical team meetings',
    confidence: 88,
    tags: ['Team Size Match', 'Available Now']
  },
  {
    id: 'sug-3',
    locationId: 'diamant',
    locationName: 'Diamant',
    roomId: 'room-1',
    roomName: 'Room 1',
    capacity: 4,
    date: '2025-12-05',
    time: '09:00',
    duration: 30,
    credits: 2,
    reason: 'Quick morning sync - matches your pattern',
    confidence: 82,
    tags: ['Morning Slot', 'Budget Friendly']
  },
  {
    id: 'sug-4',
    locationId: 'prikopy',
    locationName: 'Příkopy',
    roomId: 'room-2',
    roomName: 'Room 2',
    capacity: 4,
    date: '2025-12-05',
    time: '16:00',
    duration: 30,
    credits: 2,
    reason: 'New location nearby - worth trying!',
    confidence: 75,
    tags: ['New Location', 'Nearby']
  }
];

export function AISuggestions({ userCredits, onBack, onBookSuggestion }: AISuggestionsProps) {
  const handleQuickBook = (suggestion: SuggestedBooking) => {
    if (suggestion.credits <= userCredits) {
      if (window.confirm(`Book ${suggestion.roomName} at ${suggestion.locationName} for ${suggestion.time}?`)) {
        onBookSuggestion(suggestion);
      }
    } else {
      alert('Insufficient credits. Please purchase more credits.');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={onBack}
            className="p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6" />
            <h1>AI Suggestions</h1>
          </div>
        </div>

        <div className="bg-white bg-opacity-20 rounded-lg p-3">
          <p className="text-sm text-white text-opacity-90 mb-2">
            Smart recommendations based on your booking habits
          </p>
          <div className="flex items-center gap-2 text-sm">
            <TrendingUp className="w-4 h-4" />
            <span>Updated just now</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto p-4">
        {/* Info Banner */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-4 flex items-start gap-3">
          <Zap className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-purple-900 mb-1">Quick Book in 1-Tap</p>
            <p className="text-xs text-purple-700">
              Tap "Book Now" to instantly reserve with default settings
            </p>
          </div>
        </div>

        {/* Suggestions List */}
        <div className="space-y-4">
          {MOCK_SUGGESTIONS.map((suggestion, index) => (
            <div 
              key={suggestion.id}
              className="bg-white border-2 border-neutral-200 rounded-lg p-4 hover:border-purple-400 transition-all relative overflow-hidden"
            >
              {/* Best Match Badge */}
              {index === 0 && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs px-3 py-1 rounded-bl-lg flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Best Match</span>
                </div>
              )}

              {/* Confidence Bar */}
              <div className="mb-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-neutral-600">AI Confidence</span>
                  <span className="text-xs text-purple-600">{suggestion.confidence}%</span>
                </div>
                <div className="h-1.5 bg-neutral-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transition-all"
                    style={{ width: `${suggestion.confidence}%` }}
                  />
                </div>
              </div>

              {/* Room Info */}
              <div className="mb-3">
                <h3 className="text-neutral-900 mb-1 font-medium">{suggestion.roomName}</h3>
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>{suggestion.locationName}</span>
                </div>
              </div>

              {/* Booking Details */}
              <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                <div className="flex items-center gap-2 text-neutral-600">
                  <Calendar className="w-4 h-4" />
                  <span>{suggestion.date}</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-600">
                  <Clock className="w-4 h-4" />
                  <span>{suggestion.time}</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-600">
                  <Users className="w-4 h-4" />
                  <span>{suggestion.capacity} seats</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-600">
                  <span>{suggestion.duration} min</span>
                </div>
              </div>

              {/* AI Reason */}
              <div className="bg-purple-50 rounded-lg p-2 mb-3">
                <p className="text-xs text-purple-900 flex items-start gap-2">
                  <Sparkles className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-purple-600" />
                  <span>{suggestion.reason}</span>
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {suggestion.tags.map(tag => (
                  <span 
                    key={tag}
                    className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Credit Cost & Action */}
              <div className="flex items-center justify-between pt-3 border-t border-neutral-200">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-neutral-600" />
                  <span className="text-neutral-900">{suggestion.credits} credits</span>
                  {suggestion.credits <= userCredits ? (
                    <span className="text-xs text-green-600">✓ Available</span>
                  ) : (
                    <span className="text-xs text-red-600">Insufficient</span>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleQuickBook(suggestion)}
                    disabled={suggestion.credits > userCredits}
                    className={`px-4 py-2 rounded-lg text-sm transition-all ${
                      suggestion.credits <= userCredits
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg'
                        : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                    }`}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why These Suggestions */}
        <div className="mt-6 bg-neutral-50 border border-neutral-200 rounded-lg p-4">
          <h3 className="text-neutral-900 mb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600" />
            How AI Works
          </h3>
          <div className="space-y-2 text-sm text-neutral-600">
            <div className="flex items-start gap-2">
              <span className="text-purple-600">•</span>
              <p>Analyzes your booking history and patterns</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-600">•</span>
              <p>Considers time of day, location, and room preferences</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-600">•</span>
              <p>Checks real-time availability across all locations</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-600">•</span>
              <p>Learns from your choices to improve suggestions</p>
            </div>
          </div>
        </div>

        {/* Manual Booking Option */}
        <div className="mt-4 text-center">
          <p className="text-sm text-neutral-600 mb-2">Don't see what you need?</p>
          <button
            onClick={onBack}
            className="text-blue-600 hover:text-blue-700 transition-colors text-sm"
          >
            Browse all rooms manually →
          </button>
        </div>
      </main>
    </div>
  );
}
