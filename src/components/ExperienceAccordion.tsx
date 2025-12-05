import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExperienceAccordionProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceAccordion: React.FC<ExperienceAccordionProps> = ({
  title,
  company,
  period,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="rounded-[2rem] p-[0.47px] relative mb-6"
      style={{
        background: 'linear-gradient(177.74deg, #4479FF 3.91%, #1A2A53 29.25%, #152A60 98.28%)',
      }}
    >
      <div className="rounded-[2rem] p-2 bg-[#05070C]">
        <div
          className="rounded-[2rem] p-4 md:p-8 lg:p-10"
          style={{
            background: 'linear-gradient(180deg, #07122E 0%, #010714 100%)',
          }}
        >
          {/* Header */}
          <div
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex-1">
              <div className="flex flex-col gap-1 md:gap-0 md:flex-row md:items-center md:gap-4">
                <h3
                  className="text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] font-medium text-white"
                  style={{ fontFamily: 'var(--font-family-satoshi)' }}
                >
                  {title}
                </h3>
                <span
                  className="text-[0.75rem] md:text-[0.875rem] lg:text-[1rem] text-[#7A8090]"
                  style={{ fontFamily: 'var(--font-family-satoshi)' }}
                >
                  | {company}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-4">
              <span
                className="text-[0.75rem] md:text-[0.875rem] lg:text-[1rem] text-white"
                style={{ fontFamily: 'var(--font-family-satoshi)' }}
              >
                {period}
              </span>
              <button
                className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all flex-shrink-0"
                style={{
                  background: isOpen ? '#1A4282' : '#0F2847',
                  border: '1px solid #2A5BA8',
                }}
              >
                <motion.svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path d="M8 3V13M3 8H13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </motion.svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{ overflow: 'hidden' }}
              >
                <div className="mt-6 pt-6 border-t border-[#1A2A53]">
                  <p
                    className="text-[0.875rem] md:text-[1rem] leading-relaxed text-[#D0D4EC]"
                    style={{ fontFamily: 'var(--font-family-satoshi)' }}
                  >
                    {description}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ExperienceAccordion;
