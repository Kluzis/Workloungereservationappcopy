import { useState } from 'react';
import { ArrowLeft, MapPin, Users, Clock, CreditCard, CheckCircle } from 'lucide-react';
import type { Location, Room, Booking } from '../App';
import { LocationMap } from './LocationMap';
import { LOCATIONS as MAP_LOCATIONS, LOCATION_IMAGES, ROOM_IMAGES } from '../data/locations';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BookingFlowProps {
  userCredits: number;
  onBack: () => void;
  onComplete: (booking: Omit<Booking, 'id' | 'status'>) => void;
}

const LOCATIONS: Location[] = [
  { id: 'forum', name: 'Forum Karlín' },
  { id: 'bck', name: 'BCK Smíchov' },
  { id: 'diamant', name: 'Diamant' },
  { id: 'prikopy', name: 'Příkopy' },
  { id: 'dejvice', name: 'Dejvice Telehouse' },
  { id: 'pankrac', name: 'Pankrác City Point' },
  { id: 'zizkov', name: 'Žižkov' }
];

const ROOMS: Room[] = [
  { id: 'room-1', name: 'Room 1', capacity: 4, credits: 2 },
  { id: 'room-2', name: 'Room 2', capacity: 4, credits: 2 },
  { id: 'room-3', name: 'Room 3', capacity: 4, credits: 2 },
  { id: 'room-4', name: 'Room 4', capacity: 6, credits: 3 }
];

const TIME_SLOTS = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30'
];

type Step = 'location' | 'room' | 'time' | 'confirm' | 'success';

export function BookingFlow({ userCredits, onBack, onComplete }: BookingFlowProps) {
  const [step, setStep] = useState<Step>('location');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [selectedDate, setSelectedDate] = useState('2025-12-02');
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [duration, setDuration] = useState(30);

  const totalCredits = selectedRoom ? Math.ceil((duration / 30) * selectedRoom.credits) : 0;
  const hasEnoughCredits = totalCredits <= userCredits;

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location);
    setStep('room');
  };

  const handleRoomSelect = (room: Room) => {
    setSelectedRoom(room);
    setStep('time');
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleConfirm = () => {
    if (selectedLocation && selectedRoom && selectedTime) {
      onComplete({
        locationId: selectedLocation.id,
        locationName: selectedLocation.name,
        roomId: selectedRoom.id,
        roomName: selectedRoom.name,
        date: selectedDate,
        time: selectedTime,
        duration,
        credits: totalCredits
      });
      setStep('success');
    }
  };

  const handleBack = () => {
    if (step === 'location') {
      onBack();
    } else if (step === 'room') {
      setStep('location');
      setSelectedRoom(null);
    } else if (step === 'time') {
      setStep('room');
      setSelectedTime(null);
    } else if (step === 'confirm') {
      setStep('time');
    }
  };

  // Mock availability - some slots are taken
  const isSlotAvailable = (time: string) => {
    const taken = ['09:00', '14:00', '16:30'];
    return !taken.includes(time);
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white p-4 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={step === 'success' ? onBack : handleBack}
            className="p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors backdrop-blur-sm"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="font-bold">
            {step === 'success' ? 'Booking Confirmed' : 'Book a Room'}
          </h1>
        </div>

        {/* Progress Indicator */}
        {step !== 'success' && (
          <div className="flex items-center gap-2">
            <div className={`flex-1 h-1 rounded ${step === 'location' ? 'bg-blue-300' : 'bg-white'}`} />
            <div className={`flex-1 h-1 rounded ${step === 'room' ? 'bg-blue-300' : step === 'time' || step === 'confirm' ? 'bg-white' : 'bg-blue-800'}`} />
            <div className={`flex-1 h-1 rounded ${step === 'time' ? 'bg-blue-300' : step === 'confirm' ? 'bg-white' : 'bg-blue-800'}`} />
            <div className={`flex-1 h-1 rounded ${step === 'confirm' ? 'bg-blue-300' : 'bg-blue-800'}`} />
          </div>
        )}
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto p-4">
        {step === 'location' && (
          <div>
            <h2 className="mb-4 text-neutral-900">Select Location</h2>
            
            {/* Map View */}
            <div className="mb-4">
              <LocationMap
                locations={MAP_LOCATIONS}
                selectedLocationId={selectedLocation?.id}
                onLocationSelect={(loc) => {
                  const location = LOCATIONS.find(l => l.id === loc.id);
                  if (location) handleLocationSelect(location);
                }}
              />
            </div>
            
            <div className="space-y-3">
              {LOCATIONS.map(location => {
                const locationImage = LOCATION_IMAGES[location.id] || LOCATION_IMAGES['forum'];
                return (
                  <button
                    key={location.id}
                    onClick={() => handleLocationSelect(location)}
                    className={`w-full bg-white border-2 rounded-lg overflow-hidden hover:shadow-md transition-all text-left ${
                      selectedLocation?.id === location.id
                        ? 'border-blue-500 shadow-md'
                        : 'border-neutral-300 hover:border-blue-500'
                    }`}
                  >
                    <div className="relative h-32 overflow-hidden">
                      <ImageWithFallback
                        src={locationImage}
                        alt={location.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="flex items-center gap-2 text-white">
                          <MapPin className="w-4 h-4" />
                          <span className="font-medium">{location.name}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 'room' && (
          <div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-neutral-900">{selectedLocation?.name}</span>
              </div>
            </div>

            <h2 className="mb-4 text-neutral-900">Select Room</h2>
            <div className="space-y-3">
              {ROOMS.map(room => {
                const roomImage = ROOM_IMAGES[room.id] || ROOM_IMAGES['room-1'];
                return (
                  <button
                    key={room.id}
                    onClick={() => handleRoomSelect(room)}
                    className={`w-full bg-white border-2 rounded-lg overflow-hidden hover:shadow-md transition-all text-left ${
                      selectedRoom?.id === room.id
                        ? 'border-blue-500 shadow-md'
                        : 'border-neutral-300 hover:border-blue-500'
                    }`}
                  >
                    <div className="relative h-40 overflow-hidden">
                      <ImageWithFallback
                        src={roomImage}
                        alt={room.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded backdrop-blur-sm bg-opacity-90">
                          Available
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <h3 className="text-white font-medium mb-1">{room.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-white text-opacity-90">
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{room.capacity} seats</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <CreditCard className="w-4 h-4" />
                            <span>{room.credits} credits/30min</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 'time' && (
          <div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-neutral-900">{selectedLocation?.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-neutral-900">{selectedRoom?.name} ({selectedRoom?.capacity} seats)</span>
              </div>
            </div>

            <h2 className="mb-3 text-neutral-900">Select Date</h2>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min="2025-12-01"
              className="w-full border border-neutral-300 rounded-lg p-3 mb-4"
            />

            <h2 className="mb-3 text-neutral-900">Duration</h2>
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setDuration(30)}
                className={`flex-1 p-3 rounded-lg border transition-all ${
                  duration === 30
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-neutral-900 border-neutral-300 hover:border-blue-500'
                }`}
              >
                30 min
              </button>
              <button
                onClick={() => setDuration(60)}
                className={`flex-1 p-3 rounded-lg border transition-all ${
                  duration === 60
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-neutral-900 border-neutral-300 hover:border-blue-500'
                }`}
              >
                60 min
              </button>
              <button
                onClick={() => setDuration(90)}
                className={`flex-1 p-3 rounded-lg border transition-all ${
                  duration === 90
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-neutral-900 border-neutral-300 hover:border-blue-500'
                }`}
              >
                90 min
              </button>
            </div>

            <h2 className="mb-3 text-neutral-900">Select Time</h2>
            <div className="grid grid-cols-4 gap-2">
              {TIME_SLOTS.map(time => {
                const available = isSlotAvailable(time);
                return (
                  <button
                    key={time}
                    onClick={() => available && handleTimeSelect(time)}
                    disabled={!available}
                    className={`p-3 rounded-lg border text-sm transition-all ${
                      selectedTime === time
                        ? 'bg-blue-600 text-white border-blue-600'
                        : available
                        ? 'bg-white text-neutral-900 border-neutral-300 hover:border-blue-500'
                        : 'bg-neutral-100 text-neutral-400 border-neutral-200 cursor-not-allowed'
                    }`}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 'confirm' && (
          <div>
            <h2 className="mb-4 text-neutral-900">Confirm Booking</h2>
            
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 mb-4 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-neutral-600 mt-0.5" />
                <div>
                  <p className="text-sm text-neutral-600">Location</p>
                  <p className="text-neutral-900">{selectedLocation?.name}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-neutral-600 mt-0.5" />
                <div>
                  <p className="text-sm text-neutral-600">Room</p>
                  <p className="text-neutral-900">{selectedRoom?.name} ({selectedRoom?.capacity} seats)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-neutral-600 mt-0.5" />
                <div>
                  <p className="text-sm text-neutral-600">Date & Time</p>
                  <p className="text-neutral-900">{selectedDate} at {selectedTime}</p>
                  <p className="text-sm text-neutral-600">{duration} minutes</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-neutral-900">Credits Required</span>
                <span className="text-2xl text-blue-600">{totalCredits}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-600">Your Balance</span>
                <span className={hasEnoughCredits ? 'text-green-600' : 'text-red-600'}>
                  {userCredits} credits
                </span>
              </div>
              {hasEnoughCredits && (
                <div className="flex items-center justify-between text-sm mt-1">
                  <span className="text-neutral-600">After Booking</span>
                  <span className="text-neutral-900">{userCredits - totalCredits} credits</span>
                </div>
              )}
            </div>

            {!hasEnoughCredits && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4 text-sm text-red-800">
                Insufficient credits. Please purchase more credits to complete this booking.
              </div>
            )}
          </div>
        )}

        {step === 'success' && (
          <div className="flex flex-col items-center justify-center text-center py-12">
            <div className="bg-green-100 rounded-full p-6 mb-6">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
            <h2 className="mb-2 text-neutral-900">Booking Confirmed!</h2>
            <p className="text-neutral-600 mb-6">
              Your meeting room has been reserved
            </p>
            
            <div className="w-full bg-neutral-50 border border-neutral-200 rounded-lg p-4 mb-6 text-left space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-neutral-600 mt-0.5" />
                <div>
                  <p className="text-sm text-neutral-600">Location</p>
                  <p className="text-neutral-900">{selectedLocation?.name}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-neutral-600 mt-0.5" />
                <div>
                  <p className="text-sm text-neutral-600">Room</p>
                  <p className="text-neutral-900">{selectedRoom?.name}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-neutral-600 mt-0.5" />
                <div>
                  <p className="text-sm text-neutral-600">Date & Time</p>
                  <p className="text-neutral-900">{selectedDate} at {selectedTime}</p>
                </div>
              </div>
            </div>

            <button
              onClick={onBack}
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </button>
          </div>
        )}
      </main>

      {/* Bottom Action Button */}
      {step === 'time' && selectedTime && (
        <div className="p-4 border-t border-neutral-200 bg-white">
          <button
            onClick={() => setStep('confirm')}
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Continue to Confirmation
          </button>
        </div>
      )}

      {step === 'confirm' && (
        <div className="p-4 border-t border-neutral-200 bg-white">
          <button
            onClick={handleConfirm}
            disabled={!hasEnoughCredits}
            className={`w-full p-3 rounded-lg transition-colors ${
              hasEnoughCredits
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
            }`}
          >
            Confirm Booking
          </button>
        </div>
      )}
    </div>
  );
}
