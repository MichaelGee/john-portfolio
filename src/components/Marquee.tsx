import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import starIcon from '@/assets/star.svg';

const Marquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const marqueeContent = marqueeRef.current.querySelector('.marquee-content');
    if (!marqueeContent) return;

    const animation = gsap.to(marqueeContent, {
      x: '-50%',
      duration: 20,
      ease: 'none',
      repeat: -1,
    });

    return () => {
      animation.kill();
    };
  }, []);

  const words = ['FOUNDER', 'MENTOR', 'ENGINEER'];

  const renderContent = () => (
    <>
      {[...Array(8)].map((_, index) => (
        <div key={index} className="flex items-center">
          {words.map((word, wordIndex) => (
            <div key={`${index}-${wordIndex}`} className="flex items-center">
              <span className="mx-8">{word}</span>
              <img src={starIcon} alt="star" className="w-3 h-3 mr-8" />
            </div>
          ))}
        </div>
      ))}
    </>
  );

  return (
    <div ref={marqueeRef} className="w-3/4 m-auto overflow-hidden py-8">
      <div className="marquee-content flex whitespace-nowrap">
        <div
          className="flex items-center text-[clamp(1rem,8vw,1.5rem)] font-extrabold text-[#D0D4EC]"
          style={{ fontFamily: 'var(--font-family-satoshi)' }}
        >
          {renderContent()}
        </div>
        <div
          className="flex items-center text-[clamp(1rem,8vw,1.5rem)] font-extrabold text-[#D0D4EC]"
          style={{ fontFamily: 'var(--font-family-satoshi)' }}
        >
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
