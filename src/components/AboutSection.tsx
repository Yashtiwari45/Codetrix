
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <Card className="bg-omnitrix-gray border-omnitrix-green hover:shadow-lg hover:shadow-omnitrix-green/30 transition-all duration-300">
      <CardContent className="p-6">
        <div className="bg-omnitrix-green rounded-full w-12 h-12 flex items-center justify-center mb-4 text-omnitrix-black">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-omnitrix-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </CardContent>
    </Card>
  );
};

const AboutSection: React.FC = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-omnitrix-white">
        Your <span className="text-omnitrix-green">Coding Journey</span> Enhanced
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          title="Practice Challenges"
          description="Test your knowledge with coding challenges ranging from easy to hard difficulty."
          icon={<span className="text-2xl">⌨️</span>}
        />
        <FeatureCard
          title="Topic-Based Learning"
          description="Practice specific topics you've learned online with targeted exercises."
          icon={<span className="text-2xl">📚</span>}
        />
        <FeatureCard
          title="Real-Time Feedback"
          description="Get instant feedback on your code with test cases and detailed explanations."
          icon={<span className="text-2xl">✓</span>}
        />
        <FeatureCard
          title="Point Rewards"
          description="Earn points for completing challenges and track your progress over time."
          icon={<span className="text-2xl">🏆</span>}
        />
        <FeatureCard
          title="Difficulty Levels"
          description="Progress through increasingly difficult challenges as your skills improve."
          icon={<span className="text-2xl">📈</span>}
        />
        <FeatureCard
          title="Interactive Compiler"
          description="Write and test your code in our in-browser compiler with support for multiple languages."
          icon={<span className="text-2xl">💻</span>}
        />
      </div>
    </div>
  );
};

export default AboutSection;
