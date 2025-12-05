import React from 'react';
import BottomBorder from '../BottomBorder';
import Badge from '../Badge';
import bag from '@/assets/bag.svg';
import cursor from '@/assets/cursor.svg';
import CopyAnimation from '../CopyAnimation';
import ExperienceAccordion from '../ExperienceAccordion';

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

        {/* LinkedIn Button */}
        <div className="flex justify-center mb-16">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-[1.125rem] text-white font-medium transition-transform hover:scale-105"
            style={{
              width: '15.625rem', // 250px
              height: '3.4375rem', // 55px
              padding: '0.125rem', // 2px
              background: '#061227',
              border: '0.57px solid #0376FC',
              boxShadow:
                'inset 0px -9px 15.9px 0px #123A73, inset 0px 4px 18.8px 0px #1D4782, inset 0px -3px 20.2px 0px #093C81',
              fontFamily: 'var(--font-family-satoshi)',
              fontSize: '1.125rem', // 18px
            }}
          >
            <img src={cursor} alt="Cursor" className="w-6 h-6" />
            <span>See more on Linkedin</span>
          </a>
        </div>

        {/* Experience Accordions */}
        <div className="max-w-[68.75rem] mx-auto">
          <ExperienceAccordion
            title="Head of Engineering, POS Channels"
            company="Moniepoint Inc."
            period="2019 - Present"
            description="Leads the engineering organization behind Moniepoint’s POS channels, building systems that power millions of daily transactions across Africa. Oversees distributed teams and ensures platform reliability, scalability, and innovation in payment infrastructure."
          />
          <ExperienceAccordion
            title="Chief Technology Officer"
            company="Iddera Life"
            period="2020 - Present"
            description="Drove the product and engineering roadmap for a digital health startup. Designed the core user management and consultation systems, scaling to tens of thousands of users. Led engineering hiring, culture, and technical delivery while mentoring the next generation of developers."
          />
          <ExperienceAccordion
            title="Senior IT Consultant"
            company="Anchor"
            period="Mar 2022 - Dec 2022"
            description="Built critical fintech infrastructure, including a high-availability ledger system and idempotency libraries that improved reliability from 85% to 99%. Designed a sandbox environment that accelerated enterprise onboarding and testing."
          />
          <ExperienceAccordion
            title="Senior Software Engineer"
            company="Yapliy"
            period="2021 - 2022"
            description="Worked on open banking integrations across Europe, designing scalable systems that powered secure financial data exchange. Built regression testing tools for continuous delivery and mentored engineers on system design and deployment practices."
          />
        </div>
      </div>
      <BottomBorder />
    </section>
  );
};

export default Experience;
