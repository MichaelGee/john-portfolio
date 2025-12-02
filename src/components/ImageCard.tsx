import { useState } from 'react';
import { motion } from 'framer-motion';
import john1Image from '@/assets/john1.jpg';
import john2Image from '@/assets/john2.jpg';

const ImageCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-[340px] h-[480px] perspective-[1000px]">
      <motion.div
        className="relative w-full h-full cursor-pointer preserve-3d"
        onHoverStart={() => setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Image */}
        <div
          className="absolute inset-0 w-full h-full rounded-[21.3px] overflow-hidden backface-hidden"
          style={{
            transform: 'rotateY(8.42deg)',
            background: 'linear-gradient(180deg, #061B51 0%, #07080D 88.51%, #05164D 100%)',
            backfaceVisibility: 'hidden',
          }}
        >
          <div className="w-full h-full p-1 rounded-[21.3px]">
            <img
              src={john1Image}
              alt="John Ojetunde"
              className="w-full h-full object-cover rounded-[21.3px]"
            />
          </div>
        </div>

        {/* Back Image */}
        <div
          className="absolute inset-0 w-full h-full rounded-[21.3px] overflow-hidden backface-hidden"
          style={{
            transform: 'rotateY(180deg) rotateY(8.42deg)',
            background: 'linear-gradient(180deg, #061B51 0%, #07080D 88.51%, #05164D 100%)',
            backfaceVisibility: 'hidden',
          }}
        >
          <div className="w-full h-full p-1 rounded-[21.3px]">
            <img
              src={john2Image}
              alt="John Ojetunde"
              className="w-full h-full object-cover rounded-[21.3px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ImageCard;
