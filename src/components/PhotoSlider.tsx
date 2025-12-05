import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PhotoSlide {
  image: string;
  category?: string;
  credit: string;
}

interface PhotoSliderProps {
  photos: PhotoSlide[];
}

const PhotoSlider: React.FC<PhotoSliderProps> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="relative max-w-[68.75rem] mx-auto mb-16">
      <div className="relative">
        {/* Corner Brackets - OUTSIDE the rounded image */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Top-left bracket */}
          <div className="absolute top-0 left-0 w-10 h-10">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-white" />
            <div className="absolute top-0 left-0 w-[2px] h-full bg-white" />
          </div>
          {/* Top-right bracket */}
          <div className="absolute top-0 right-0 w-10 h-10">
            <div className="absolute top-0 right-0 w-full h-[2px] bg-white" />
            <div className="absolute top-0 right-0 w-[2px] h-full bg-white" />
          </div>
          {/* Bottom-left bracket */}
          <div className="absolute bottom-0 left-0 w-10 h-10">
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white" />
            <div className="absolute bottom-0 left-0 w-[2px] h-full bg-white" />
          </div>
          {/* Bottom-right bracket */}
          <div className="absolute bottom-0 right-0 w-10 h-10">
            <div className="absolute bottom-0 right-0 w-full h-[2px] bg-white" />
            <div className="absolute bottom-0 right-0 w-[2px] h-full bg-white" />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] h-[400px] md:h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <img
                src={photos[currentIndex].image}
                alt={`Photography ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Camera Icon - top-right */}
              <div className="absolute top-6 right-6">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="20" fill="white" fillOpacity="0.2"/>
                  <path d="M20 23C21.6569 23 23 21.6569 23 20C23 18.3431 21.6569 17 20 17C18.3431 17 17 18.3431 17 20C17 21.6569 18.3431 23 20 23Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M27 25V15C27 14.4696 26.7893 13.9609 26.4142 13.5858C26.0391 13.2107 25.5304 13 25 13H15C14.4696 13 13.9609 13.2107 13.5858 13.5858C13.2107 13.9609 13 14.4696 13 15V25C13 25.5304 13.2107 26.0391 13.5858 26.4142C13.9609 26.7893 14.4696 27 15 27H25C25.5304 27 26.0391 26.7893 26.4142 26.4142C26.7893 26.0391 27 25.5304 27 25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Credit text - bottom-left */}
              <div className="absolute bottom-8 left-8">
                <span
                  className="text-white text-xl font-light"
                  style={{ fontFamily: 'var(--font-family-satoshi)' }}
                >
                  {photos[currentIndex].credit}
                </span>
              </div>

              {/* Category Badge - bottom-right */}
              {photos[currentIndex].category && (
                <div className="absolute bottom-8 right-8">
                  <span
                    className="px-6 py-2 rounded-full text-white text-xs font-medium tracking-widest uppercase"
                    style={{
                      background: 'rgba(0, 0, 0, 0.7)',
                      fontFamily: 'var(--font-family-satoshi)',
                    }}
                  >
                    {photos[currentIndex].category}
                  </span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all hover:bg-white/20"
          aria-label="Previous photo"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all hover:bg-white/20"
          aria-label="Next photo"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/30'
            }`}
            aria-label={`Go to photo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoSlider;
