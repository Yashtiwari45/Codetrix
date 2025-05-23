
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <div className="container mx-auto text-center py-16 animate-fade-in">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-omnitrix-white">
        <span className="text-omnitrix-green">Code</span>Master Challenge
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
        Transform your coding skills with interactive challenges and real-world testing
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
        <Button className="bg-omnitrix-green hover:bg-omnitrix-darkGreen text-omnitrix-black text-lg px-8 py-6">
          Start Coding
        </Button>
        <Button variant="outline" className="border-omnitrix-green text-omnitrix-green hover:bg-omnitrix-green/10 text-lg px-8 py-6">
          Learn More
        </Button>
      </div>
      <div className="mt-12 text-center text-omnitrix-green text-lg animate-float">
        Scroll down or select an alien to explore
      </div>
    </div>
  );
};

export default HeroSection;
