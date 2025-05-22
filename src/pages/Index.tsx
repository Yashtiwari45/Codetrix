
import React, { useState, useEffect, useRef } from 'react';
import Omnitrix from '@/components/Omnitrix';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolling, setScrolling] = useState(false);
  
  const homeRef = useRef<HTMLDivElement>(null);
  const topicsRef = useRef<HTMLDivElement>(null);
  const challengesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  // Handle navigation from omnitrix
  const handleNavigate = (section: string) => {
    setActiveSection(section);
    setScrolling(true);
    
    let targetRef;
    switch (section) {
      case 'home':
        targetRef = homeRef;
        break;
      case 'topics':
        targetRef = topicsRef;
        break;
      case 'challenges':
        targetRef = challengesRef;
        break;
      case 'about':
        targetRef = aboutRef;
        break;
      default:
        targetRef = homeRef;
    }
    
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
      
      // Reset scrolling state after animation
      setTimeout(() => {
        setScrolling(false);
      }, 1000);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (scrolling) return;
      
      const scrollPosition = window.scrollY + 100;
      
      // Determine which section is currently in view
      if (aboutRef.current && scrollPosition >= aboutRef.current.offsetTop) {
        setActiveSection('about');
      } else if (challengesRef.current && scrollPosition >= challengesRef.current.offsetTop) {
        setActiveSection('challenges');
      } else if (topicsRef.current && scrollPosition >= topicsRef.current.offsetTop) {
        setActiveSection('topics');
      } else {
        setActiveSection('home');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolling]);

  return (
    <div className="min-h-screen bg-omnitrix-black text-omnitrix-white">
      {/* Fixed navigation */}
      <div className="fixed bottom-10 right-10 z-50">
        <Omnitrix onNavigate={handleNavigate} activeSection={activeSection} />
      </div>
      
      {/* Home Section */}
      <section ref={homeRef} className="min-h-screen flex items-center justify-center py-20">
        <HeroSection />
      </section>
      
      {/* Topics Section */}
      <section ref={topicsRef} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-omnitrix-black to-omnitrix-gray/20 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-omnitrix-green">Topic</span> Based Learning
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Practice what you've learned with focused exercises on specific programming topics
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {['Data Structures', 'Algorithms', 'Web Development', 'Databases', 'Machine Learning', 'System Design'].map((topic) => (
              <div 
                key={topic}
                className="bg-omnitrix-gray p-8 rounded-lg border border-omnitrix-green/30 hover:border-omnitrix-green hover:shadow-lg hover:shadow-omnitrix-green/20 transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-xl font-bold mb-2">{topic}</h3>
                <p className="text-gray-400">Practice exercises and challenges</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Challenges Section */}
      <section ref={challengesRef} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-omnitrix-gray/20 to-omnitrix-black py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-omnitrix-green">Coding</span> Challenges
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Test your skills with challenges of varying difficulty and earn points
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center max-w-5xl mx-auto">
            {[
              { level: 'Easy', points: '10-50 points', color: 'border-green-500' },
              { level: 'Medium', points: '50-100 points', color: 'border-yellow-500' },
              { level: 'Hard', points: '100-200 points', color: 'border-red-500' }
            ].map((category) => (
              <div 
                key={category.level}
                className={`flex-1 bg-omnitrix-gray p-8 rounded-lg border-2 ${category.color} hover:shadow-lg transition-all duration-300 cursor-pointer`}
              >
                <h3 className="text-2xl font-bold mb-4">{category.level}</h3>
                <p className="text-gray-400 mb-4">{category.points}</p>
                <div className="text-omnitrix-green font-semibold">View Challenges →</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section ref={aboutRef} className="min-h-screen flex items-center justify-center py-20">
        <AboutSection />
      </section>
    </div>
  );
};

export default Index;
