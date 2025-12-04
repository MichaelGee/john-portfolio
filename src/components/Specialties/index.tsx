import React from 'react';
import BottomBorder from '../BottomBorder';
import Badge from '../Badge';
import flower from '@/assets/flower.svg';
import CopyAnimation from '../CopyAnimation';
import Mentorship from '@/assets/mentorship.svg';
import Engineering from '@/assets/engineering.svg';
import Graph from '@/assets/graph.svg';
import Rocket from '@/assets/rocket.svg';

const Specialties = () => {
  return (
    <section className="relative py-32 bg-[#05070C]">
      <div className="page-guard-rail relative z-20">
        {/* Specialties Badge with Lines */}
        <div className="mb-16">
          <Badge text="SPECIALTIES" icon={flower} showLines={true} />
        </div>

        {/* Heading */}
        <div className="text-center mb-16">
          <CopyAnimation>
            <h2
              className="text-[2rem] md:text-[3.5rem] leading-tight font-medium text-[#7A8090]"
              style={{ fontFamily: 'var(--font-family-satoshi)' }}
            >
              Here's how I can{' '}
              <span
                className="italic text-white"
                style={{ fontFamily: 'var(--font-family-satoshi)' }}
              >
                help
              </span>
            </h2>
          </CopyAnimation>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap gap-6 max-w-[71rem] mx-auto justify-center">
          {/* Mentorship & Career Growth Card */}
          <div
            className="rounded-[2rem] p-[0.47px] relative h-full w-full md:w-[41.5rem]"
            style={{
              background:
                'linear-gradient(177.74deg, #4479FF 3.91%, #1A2A53 29.25%, #152A60 98.28%)',
            }}
          >
            <div className="rounded-[2rem] p-2 bg-[#05070C] h-full">
              <div
                className="rounded-[2rem] p-8 md:p-10 h-full flex flex-col"
                style={{
                  background: 'linear-gradient(180deg, #07122E 0%, #010714 100%)',
                }}
              >
                <div className="flex items-center justify-center">
                  <img src={Mentorship} alt="Mentorship" className="" />
                </div>
                <div className="w-full flex items-center justify-center my-5">
                  <div
                    style={{
                      width: '8rem', // 692.5px
                      height: '0.0625rem', // 1px
                      background:
                        'linear-gradient(90deg, #101520 0%, #5483F8 50.35%, #101520 100%)',
                    }}
                  />
                </div>
                <CopyAnimation>
                  <h3
                    className="text-[1.25rem] md:text-[1.5rem] font-medium text-white mb-4 text-center"
                    style={{ fontFamily: 'var(--font-family-satoshi)' }}
                  >
                    Mentorship & Career Growth
                  </h3>

                  <p
                    className="text-[0.875rem] md:text-[1rem] leading-relaxed text-[#7A8090]  text-center"
                    style={{ fontFamily: 'var(--font-family-satoshi)' }}
                  >
                    Career guidance for software engineers and founders
                  </p>
                </CopyAnimation>
              </div>
            </div>
          </div>

          {/* Engineering Excellence & Leadership Card */}
          <div
            className="rounded-[2rem] p-[0.47px] relative h-full w-full md:w-[27.1875rem]"
            style={{
              background:
                'linear-gradient(177.74deg, #4479FF 3.91%, #1A2A53 29.25%, #152A60 98.28%)',
            }}
          >
            <div className="rounded-[2rem] p-2 bg-[#05070C] h-full">
              <div
                className="rounded-[2rem] p-8 md:p-10 h-full flex flex-col"
                style={{
                  background: 'linear-gradient(180deg, #07122E 0%, #010714 100%)',
                }}
              >
                <div className="flex items-center justify-center">
                  <img src={Engineering} alt="Engineering" className="" />
                </div>
                <div className="w-full flex items-center justify-center my-5">
                  <div
                    style={{
                      width: '8rem', // 692.5px
                      height: '0.0625rem', // 1px
                      background:
                        'linear-gradient(90deg, #101520 0%, #5483F8 50.35%, #101520 100%)',
                    }}
                  />
                </div>
                <CopyAnimation>
                  <h3
                    className="text-[1.25rem] md:text-[1.5rem] font-medium text-white mb-4 text-center"
                    style={{ fontFamily: 'var(--font-family-satoshi)' }}
                  >
                    Engineering Excellence & Leadership
                  </h3>

                  <p
                    className="text-[0.875rem] md:text-[1rem] leading-relaxed text-[#7A8090]  text-center"
                    style={{ fontFamily: 'var(--font-family-satoshi)' }}
                  >
                    Building scalable systems and engineering leadership
                  </p>
                </CopyAnimation>
              </div>
            </div>
          </div>

          {/* Breaking Into Tech & Career Development Card */}
          <div
            className="rounded-[2rem] p-[0.47px] relative h-full w-full md:w-[34.3125rem]"
            style={{
              background:
                'linear-gradient(177.74deg, #4479FF 3.91%, #1A2A53 29.25%, #152A60 98.28%)',
            }}
          >
            <div className="rounded-[2rem] p-2 bg-[#05070C] h-full">
              <div
                className="rounded-[2rem] p-8 md:p-10 h-full flex flex-col"
                style={{
                  background: 'linear-gradient(180deg, #07122E 0%, #010714 100%)',
                }}
              >
                <div className="flex items-center justify-center">
                  <img src={Graph} alt="Graph" className="" />
                </div>
                <div className="w-full flex items-center justify-center my-5">
                  <div
                    style={{
                      width: '8rem', // 692.5px
                      height: '0.0625rem', // 1px
                      background:
                        'linear-gradient(90deg, #101520 0%, #5483F8 50.35%, #101520 100%)',
                    }}
                  />
                </div>
                <CopyAnimation>
                  <h3
                    className="text-[1.25rem] md:text-[1.5rem] font-medium text-white mb-4 text-center"
                    style={{ fontFamily: 'var(--font-family-satoshi)' }}
                  >
                    Breaking Into Tech & Career Development
                  </h3>

                  <p
                    className="text-[0.875rem] md:text-[1rem] leading-relaxed text-[#7A8090]  text-center"
                    style={{ fontFamily: 'var(--font-family-satoshi)' }}
                  >
                    Transitioning into tech and navigating career growth
                  </p>
                </CopyAnimation>
              </div>
            </div>
          </div>

          {/* Startup Team Design & Management Card */}
          <div
            className="rounded-[2rem] p-[0.47px] relative h-full w-full md:w-[34.3125rem]"
            style={{
              background:
                'linear-gradient(177.74deg, #4479FF 3.91%, #1A2A53 29.25%, #152A60 98.28%)',
            }}
          >
            <div className="rounded-[2rem] p-2 bg-[#05070C] h-full">
              <div
                className="rounded-[2rem] p-8 md:p-10 h-full flex flex-col"
                style={{
                  background: 'linear-gradient(180deg, #07122E 0%, #010714 100%)',
                }}
              >
                <div className="flex items-center justify-center">
                  <img src={Rocket} alt="Rocket" className="" />
                </div>
                <div className="w-full flex items-center justify-center my-5">
                  <div
                    style={{
                      width: '8rem', // 692.5px
                      height: '0.0625rem', // 1px
                      background:
                        'linear-gradient(90deg, #101520 0%, #5483F8 50.35%, #101520 100%)',
                    }}
                  />
                </div>
                <CopyAnimation>
                  <h3
                    className="text-[1.25rem] md:text-[1.5rem] font-medium text-white mb-4 text-center"
                    style={{ fontFamily: 'var(--font-family-satoshi)' }}
                  >
                    Startup Team Design & Management
                  </h3>

                  <p
                    className="text-[0.875rem] md:text-[1rem] leading-relaxed text-[#7A8090] text-center"
                    style={{ fontFamily: 'var(--font-family-satoshi)' }}
                  >
                    Structuring technical teams for startups
                  </p>
                </CopyAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomBorder />
    </section>
  );
};

export default Specialties;
