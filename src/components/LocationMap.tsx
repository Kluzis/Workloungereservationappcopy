import { MapPin } from 'lucide-react';

export interface Location {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
}

interface LocationMapProps {
  locations: Location[];
  selectedLocationId?: string;
  onLocationSelect?: (location: Location) => void;
}

// Mock Prague map coordinates (simplified)
const PRAGUE_CENTER = { lat: 50.0755, lng: 14.4378 };

export function LocationMap({ locations, selectedLocationId, onLocationSelect }: LocationMapProps) {
  // Calculate relative positions for a simple SVG map
  const normalizePosition = (lat: number, lng: number) => {
    const latRange = 0.1; // ~11km
    const lngRange = 0.15; // ~11km
    const x = ((lng - PRAGUE_CENTER.lng + lngRange / 2) / lngRange) * 100;
    const y = ((PRAGUE_CENTER.lat - lat + latRange / 2) / latRange) * 100;
    return { x: Math.max(5, Math.min(95, x)), y: Math.max(5, Math.min(95, y)) };
  };

  return (
    <div className="relative w-full bg-gradient-to-br from-blue-50 to-neutral-100 rounded-lg overflow-hidden border border-neutral-200">
      {/* SVG Map */}
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-64"
        preserveAspectRatio="none"
      >
        {/* Background pattern */}
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />
        
        {/* Vltava River (simplified) */}
        <path
          d="M 20 30 Q 40 25, 50 30 Q 60 35, 70 30 Q 80 25, 85 30"
          fill="none"
          stroke="#60A5FA"
          strokeWidth="1.5"
          opacity="0.6"
        />
        
        {/* Location markers */}
        {locations.map((location) => {
          const pos = normalizePosition(location.lat, location.lng);
          const isSelected = selectedLocationId === location.id;
          
          return (
            <g key={location.id}>
              {/* Pulse animation for selected */}
              {isSelected && (
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="4"
                  fill="#2563EB"
                  opacity="0.3"
                  className="animate-ping"
                />
              )}
              
              {/* Marker circle */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r={isSelected ? "3" : "2.5"}
                fill={isSelected ? "#2563EB" : "#64748B"}
                stroke="white"
                strokeWidth="1"
                className="cursor-pointer transition-all"
                onClick={() => onLocationSelect?.(location)}
              />
              
              {/* Location label (on hover/select) */}
              {isSelected && (
                <g>
                  <rect
                    x={pos.x - 8}
                    y={pos.y - 6}
                    width="16"
                    height="4"
                    rx="2"
                    fill="#2563EB"
                    opacity="0.9"
                  />
                  <text
                    x={pos.x}
                    y={pos.y - 2}
                    textAnchor="middle"
                    fontSize="2"
                    fill="white"
                    fontWeight="bold"
                  >
                    {location.name.split(' ')[0]}
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>
      
      {/* Location list overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm p-3 border-t border-neutral-200">
        <div className="flex items-center gap-2 text-xs text-neutral-600 mb-2">
          <MapPin className="w-3 h-3" />
          <span>7 Locations in Prague</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {locations.slice(0, 4).map((location) => (
            <div
              key={location.id}
              className={`text-xs p-1.5 rounded ${
                selectedLocationId === location.id
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-neutral-600'
              }`}
            >
              {location.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

