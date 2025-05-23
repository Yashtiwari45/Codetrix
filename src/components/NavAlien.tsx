
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface NavAlienProps {
  icon: React.ReactNode;
  name: string;
  position: string;
  isActive: boolean;
  onClick: () => void;
}

const NavAlien: React.FC<NavAlienProps> = ({
  icon,
  name,
  position,
  isActive,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate position class based on the position string
  const getPositionClass = () => {
    switch (position) {
      case 'top': return 'top-0 left-1/2 -translate-x-1/2 -translate-y-[60px]';
      case 'right': return 'top-1/2 right-0 translate-x-[60px] -translate-y-1/2';
      case 'bottom': return 'bottom-0 left-1/2 -translate-x-1/2 translate-y-[60px]';
      case 'left': return 'top-1/2 left-0 -translate-x-[60px] -translate-y-1/2';
      default: return '';
    }
  };

  return (
    <div
      className={cn(
        'alien-nav-item',
        getPositionClass(),
        isActive ? 'active' : '',
        isActive ? 'bg-omnitrix-green' : 'bg-omnitrix-gray',
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="text-3xl text-white">{icon}</div>
        
        {/* Improved tooltip styling for better readability during rotation */}
        {(isHovered || isActive) && (
          <div className="fixed z-50 bg-omnitrix-black border border-omnitrix-green px-3 py-1 rounded-md text-omnitrix-green text-sm font-medium shadow-lg shadow-omnitrix-green/20">
            {name}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavAlien;
