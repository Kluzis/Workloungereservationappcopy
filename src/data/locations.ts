import type { Location } from '../components/LocationMap';

export const LOCATIONS: Location[] = [
  {
    id: 'forum',
    name: 'Forum Karlín',
    address: 'Pernerova 51, 186 00 Praha 8',
    lat: 50.0925,
    lng: 14.4500
  },
  {
    id: 'bck',
    name: 'BCK Smíchov',
    address: 'Nádražní 1, 150 00 Praha 5',
    lat: 50.0700,
    lng: 14.4100
  },
  {
    id: 'diamant',
    name: 'Diamant',
    address: 'Spálená 76, 110 00 Praha 1',
    lat: 50.0800,
    lng: 14.4200
  },
  {
    id: 'prikopy',
    name: 'Příkopy',
    address: 'Na Příkopě 22, 110 00 Praha 1',
    lat: 50.0850,
    lng: 14.4250
  },
  {
    id: 'dejvice',
    name: 'Dejvice Telehouse',
    address: 'Evropská 178, 160 00 Praha 6',
    lat: 50.1000,
    lng: 14.3900
  },
  {
    id: 'pankrac',
    name: 'Pankrác City Point',
    address: 'Pankrác, 140 00 Praha 4',
    lat: 50.0500,
    lng: 14.4400
  },
  {
    id: 'zizkov',
    name: 'Žižkov',
    address: 'Seifertova 81, 130 00 Praha 3',
    lat: 50.0880,
    lng: 14.4500
  }
];

// Room images mapping (using placeholder URLs - replace with actual images)
export const LOCATION_IMAGES: Record<string, string> = {
  'forum': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
  'bck': 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop',
  'diamant': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
  'prikopy': 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop',
  'dejvice': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
  'pankrac': 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop',
  'zizkov': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop'
};

export const ROOM_IMAGES: Record<string, string> = {
  'room-1': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
  'room-2': 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop',
  'room-3': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
  'room-4': 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop'
};

