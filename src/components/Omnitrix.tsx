
import React, { useState, useEffect } from 'react';
import NavAlien from './NavAlien';
import { Navigation, Circle, Rocket, Info } from 'lucide-react';

interface OmnitrixProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

const Omnitrix: React.FC<OmnitrixProps> = ({ onNavigate, activeSection }) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Delay initialization animation
    const timer = setTimeout(() => {
      setIsInitialized(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (section: string) => {
    onNavigate(section);
  };

  return (
    <div className={`relative w-64 h-64 mx-auto transition-all duration-1000 ${isInitialized ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
      {/* Outer ring */}
      <div className="omnitrix-ring w-full h-full animate-rotate-slow">
        {/* Navigation "aliens" */}
        <NavAlien
          icon={<Navigation />}
          name="Home"
          position="top"
          isActive={activeSection === 'home'}
          onClick={() => handleNavClick('home')}
        />
        <NavAlien
          icon={<Circle />}
          name="Topics"
          position="right"
          isActive={activeSection === 'topics'}
          onClick={() => handleNavClick('topics')}
        />
        <NavAlien
          icon={<Rocket />}
          name="Challenges"
          position="bottom"
          isActive={activeSection === 'challenges'}
          onClick={() => handleNavClick('challenges')}
        />
        <NavAlien
          icon={<Info />}
          name="About"
          position="left"
          isActive={activeSection === 'about'}
          onClick={() => handleNavClick('about')}
        />
      </div>
      
      {/* Center button - improved positioning and styling */}
      <div className="omnitrix-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 animate-pulse-glow cursor-pointer rounded-full flex items-center justify-center" 
           onClick={() => handleNavClick('home')}>
        <div className="text-omnitrix-black font-bold text-xl z-10">CODE</div>
      </div>
    </div>
  );
};

export default Omnitrix;
