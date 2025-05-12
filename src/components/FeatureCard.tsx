import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-start">
        <div className="mr-3 mt-1">
          {icon}
        </div>
        <div>
          <h4 className="font-semibold text-navy-900 mb-1">{title}</h4>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;