import React from 'react';
import BottomBorder from '../BottomBorder';
import Badge from '../Badge';
import star from '@/assets/star3.svg';
import push from '@/assets/push.svg';
import CopyAnimation from '../CopyAnimation';

const MeetJohn = () => {
  return (
    <section className="relative py-32 bg-[#05070C]">
      <div className="page-guard-rail relative z-20">
        {/* MeetJohn Badge with Lines */}
        <div className="mb-16">
          <Badge text="MEET JOHN" icon={star} showLines={true} />
        </div>

        {/* Heading */}
        <div className="text-center mb-16">
          <CopyAnimation>
            <h2
              className="text-[2rem] md:text-[3.5rem] leading-tight font-medium text-[#7A8090]"
              style={{ fontFamily: 'var(--font-family-satoshi)' }}
            >
              Pushing boundaries{' '}
              <img src={push} alt="Push Icon" className="inline-block w-12 h-12 md:w-16 md:h-16" />{' '}
              for 12+{' '}
              <span
                className="italic text-white"
                style={{ fontFamily: 'var(--font-family-satoshi)' }}
              >
                years
              </span>
            </h2>
          </CopyAnimation>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-[68.75rem] mx-auto">
          {/* Builder Card */}
          <div
            className="rounded-[2rem] p-[0.47px] relative h-full"
            style={{
              background:
                'linear-gradient(177.74deg, #4479FF 3.91%, #1A2A53 29.25%, #152A60 98.28%)',
            }}
          >
            <div className="rounded-[2rem] p-2 bg-[#05070C] h-full">
              <div
                className="rounded-[2rem] p-8 md:p-10 h-full"
                style={{
                  background: 'linear-gradient(180deg, #07122E 0%, #010714 100%)',
                }}
              >
                <div className="mb-6">
                  <Badge text="BUILDER" />
                </div>
                <CopyAnimation>
                  <p
                    className="text-[0.875rem] md:text-[1rem] leading-relaxed text-[#D0D4EC]"
                    style={{ fontFamily: 'var(--font-family-satoshi)' }}
                  >
                    I've spent more than a decade building technology that scales from financial
                    systems serving millions of users to digital health platforms improving access
                    to care. Along the way, I've worked as an engineer, consultant, and leader
                    across Europe and the United States. Today, I focus on creating systems that
                    don't just work at scale but work beautifully, leading teams that turn complex
                    challenges into meaningful products.
                  </p>
                </CopyAnimation>
                <div className="w-full flex items-center justify-center">
                  <div
                    style={{
                      width: '8rem', // 692.5px
                      height: '0.0625rem', // 1px
                      position: 'absolute',
                      bottom: '2rem',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background:
                        'linear-gradient(90deg, #101520 0%, #5483F8 50.35%, #101520 100%)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Innovator Card */}
          <div
            className="rounded-[2rem] p-[0.47px] relative h-full"
            style={{
              background: 'linear-gradient(180deg, #4479FF 0%, #1A2A53 50%, #152A60 100%)',
            }}
          >
            <div className="rounded-[2rem] p-2 bg-[#05070C] h-full">
              <div
                className="rounded-[2rem] p-8 md:p-10 h-full"
                style={{
                  background: 'linear-gradient(180deg, #07122E 0%, #010714 100%)',
                }}
              >
                <div className="mb-6">
                  <Badge text="INNOVATOR" />
                </div>
                <CopyAnimation>
                  <p
                    className="text-[0.875rem] md:text-[1rem] leading-relaxed text-[#D0D4EC]"
                    style={{ fontFamily: 'var(--font-family-satoshi)' }}
                  >
                    I studied Computer Science at the University of Ibadan, where I built my first
                    real-world applications and discovered how much creativity lives inside
                    structure. That's where I learned to see programming as both an art and a
                    science. Over the years, I've grown from writing code to building teams,
                    starting companies, and designing systems that empower others to create. Outside
                    work, I stay grounded through mentorship and photography, both of which remind
                    me to slow down, share what I know, and keep learning.
                  </p>
                </CopyAnimation>
                <div className="w-full flex items-center justify-center">
                  <div
                    style={{
                      width: '8rem', // 692.5px
                      height: '0.0625rem', // 1px
                      position: 'absolute',
                      bottom: '2rem',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background:
                        'linear-gradient(90deg, #101520 0%, #5483F8 50.35%, #101520 100%)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomBorder />
    </section>
  );
};

export default MeetJohn;
