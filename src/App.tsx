import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { BookingFlow } from './components/BookingFlow';
import { MyBookings } from './components/MyBookings';
import { CreditManagement } from './components/CreditManagement';
import { Profile } from './components/Profile';
import { AISuggestions, type SuggestedBooking } from './components/AISuggestions';
import { LoginPage } from './components/LoginPage';

export type View = 'home' | 'booking' | 'my-bookings' | 'credits' | 'profile' | 'ai-suggestions';

export interface Location {
  id: string;
  name: string;
}

export interface Room {
  id: string;
  name: string;
  capacity: number;
  credits: number;
}

export interface Booking {
  id: string;
  locationId: string;
  locationName: string;
  roomId: string;
  roomName: string;
  date: string;
  time: string;
  duration: number;
  credits: number;
  status: 'upcoming' | 'past' | 'cancelled';
}

export interface CreditTransaction {
  id: string;
  type: 'purchase' | 'booking' | 'refund';
  amount: number;
  date: string;
  description: string;
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState<View>('home');
  const [userCredits, setUserCredits] = useState(45);
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: '1',
      locationId: 'forum',
      locationName: 'Forum Karlín',
      roomId: 'room-3',
      roomName: 'Room 3',
      date: '2025-12-01',
      time: '14:00',
      duration: 60,
      credits: 4,
      status: 'upcoming'
    },
    {
      id: '2',
      locationId: 'bck',
      locationName: 'BCK Smíchov',
      roomId: 'room-1',
      roomName: 'Room 1',
      date: '2025-12-01',
      time: '16:00',
      duration: 30,
      credits: 2,
      status: 'upcoming'
    },
    {
      id: '3',
      locationId: 'diamant',
      locationName: 'Diamant',
      roomId: 'room-4',
      roomName: 'Room 4',
      date: '2025-11-29',
      time: '10:00',
      duration: 60,
      credits: 5,
      status: 'past'
    }
  ]);
  
  const [creditHistory, setCreditHistory] = useState<CreditTransaction[]>([
    {
      id: '1',
      type: 'purchase',
      amount: 50,
      date: '2025-11-25',
      description: 'Credit purchase'
    },
    {
      id: '2',
      type: 'booking',
      amount: -4,
      date: '2025-12-01',
      description: 'Forum Karlín - Room 3'
    },
    {
      id: '3',
      type: 'booking',
      amount: -2,
      date: '2025-12-01',
      description: 'BCK Smíchov - Room 1'
    },
    {
      id: '4',
      type: 'booking',
      amount: -5,
      date: '2025-11-29',
      description: 'Diamant - Room 4'
    }
  ]);

  const addBooking = (booking: Omit<Booking, 'id' | 'status'>) => {
    const newBooking: Booking = {
      ...booking,
      id: Date.now().toString(),
      status: 'upcoming'
    };
    setBookings([newBooking, ...bookings]);
    setUserCredits(userCredits - booking.credits);
    
    const transaction: CreditTransaction = {
      id: Date.now().toString(),
      type: 'booking',
      amount: -booking.credits,
      date: new Date().toISOString().split('T')[0],
      description: `${booking.locationName} - ${booking.roomName}`
    };
    setCreditHistory([transaction, ...creditHistory]);
  };

  const cancelBooking = (bookingId: string) => {
    const booking = bookings.find(b => b.id === bookingId);
    if (booking && booking.status === 'upcoming') {
      setBookings(bookings.map(b => 
        b.id === bookingId ? { ...b, status: 'cancelled' as const } : b
      ));
      setUserCredits(userCredits + booking.credits);
      
      const transaction: CreditTransaction = {
        id: Date.now().toString(),
        type: 'refund',
        amount: booking.credits,
        date: new Date().toISOString().split('T')[0],
        description: `Cancelled: ${booking.locationName} - ${booking.roomName}`
      };
      setCreditHistory([transaction, ...creditHistory]);
    }
  };

  const purchaseCredits = (amount: number, price: number) => {
    setUserCredits(userCredits + amount);
    
    const transaction: CreditTransaction = {
      id: Date.now().toString(),
      type: 'purchase',
      amount: amount,
      date: new Date().toISOString().split('T')[0],
      description: `Credit purchase - €${price}`
    };
    setCreditHistory([transaction, ...creditHistory]);
  };

  const handleAISuggestionBook = (suggestion: SuggestedBooking) => {
    const booking: Omit<Booking, 'id' | 'status'> = {
      locationId: suggestion.locationId,
      locationName: suggestion.locationName,
      roomId: suggestion.roomId,
      roomName: suggestion.roomName,
      date: suggestion.date,
      time: suggestion.time,
      duration: suggestion.duration,
      credits: suggestion.credits
    };
    addBooking(booking);
    setCurrentView('home');
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-lg">
        {!isLoggedIn && (
          <LoginPage
            onLogin={() => setIsLoggedIn(true)}
          />
        )}
        
        {isLoggedIn && currentView === 'home' && (
          <HomePage 
            userCredits={userCredits}
            upcomingBookings={bookings.filter(b => b.status === 'upcoming')}
            onNavigate={setCurrentView}
          />
        )}
        
        {isLoggedIn && currentView === 'booking' && (
          <BookingFlow
            userCredits={userCredits}
            onBack={() => setCurrentView('home')}
            onComplete={addBooking}
          />
        )}
        
        {isLoggedIn && currentView === 'my-bookings' && (
          <MyBookings
            bookings={bookings}
            onBack={() => setCurrentView('home')}
            onCancel={cancelBooking}
          />
        )}
        
        {isLoggedIn && currentView === 'credits' && (
          <CreditManagement
            credits={userCredits}
            history={creditHistory}
            onBack={() => setCurrentView('home')}
            onPurchase={purchaseCredits}
          />
        )}
        
        {isLoggedIn && currentView === 'profile' && (
          <Profile
            onBack={() => setCurrentView('home')}
          />
        )}

        {isLoggedIn && currentView === 'ai-suggestions' && (
          <AISuggestions
            userCredits={userCredits}
            onBack={() => setCurrentView('home')}
            onBookSuggestion={handleAISuggestionBook}
          />
        )}
      </div>
    </div>
  );
}