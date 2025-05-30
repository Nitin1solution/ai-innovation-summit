import React from 'react';
import VideoCard from '../VideoCard';

interface WatchDemandProps {
  city: string;
  imageName: string;
  videoLinks: string[];
}

const WatchDemand: React.FC<WatchDemandProps> = ({ city, imageName, videoLinks }) => {
  return (
    <div
      className="bg-black text-white text-center z-10 transition-all duration-300 pb-40 pt-120"
      style={{ top: '30px' }}
    >
       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold pb-10 font-orbitron leading-tight">
        Watch On Demand Session - {city}
      </h2>

      <div className="px-6 sm:px-12 max-w-7xl mx-auto pb-40">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoLinks.map((link, index) => (
            <div key={index} className="p-2">
              <div className="h-[320px] sm:h-[360px] md:h-[400px] flex items-center justify-center">
                <VideoCard
                  videoUrl={link}
                  imageSrc={`/edition/${index + 1}-${imageName}.png`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchDemand;
