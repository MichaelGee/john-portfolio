import React from 'react';
import BottomBorder from '../BottomBorder';
import Badge from '../Badge';
import bag from '@/assets/bag.svg';
import CopyAnimation from '../CopyAnimation';

const Experience = () => {
  return (
    <section className="relative py-32 bg-[#05070C]">
      <div className="page-guard-rail relative z-20">
        {/* Experience Badge with Lines */}
        <div className="mb-16">
          <Badge text="EXPERIENCE" icon={bag} showLines={true} />
        </div>

        {/* Heading */}
        <div className="text-center mb-16">
          <CopyAnimation>
            <h2
              className="text-[2rem] md:text-[3.5rem] leading-tight font-medium text-white"
              style={{ fontFamily: 'var(--font-family-satoshi)' }}
            >
              Mastery forged through years of{' '}
              <span
                className="text-[#7A8090] italic"
                style={{ fontFamily: 'var(--font-family-satoshi)' }}
              >
                depth and <br />
                discipline.
              </span>
            </h2>
          </CopyAnimation>
        </div>

        {/* Content will be added later */}
      </div>
      <BottomBorder />
    </section>
  );
};

export default Experience;
