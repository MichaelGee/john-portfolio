import smokeImage from '@/assets/smoke.png';
import trackImage from '@/assets/track.png';
import Scroll from '@/assets/scroll.svg';
import Marquee from '../Marquee';
import ImageCard from '../ImageCard';
import CopyAnimation from '../CopyAnimation';
import BottomBorder from '../BottomBorder';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative py-32">
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={trackImage}
          alt="Track Background"
          className="w-full object-cover opacity-[0.5] bottom-0 absolute h-[30rem]"
        />
      </div>
      <div className="absolute inset-0 w-full h-full z-10">
        <img src={smokeImage} alt="Smoke Overlay" className="w-full h-full object-cover" />
      </div>

      {/* Content wrapper with relative positioning */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 md:px-[4.25rem]">
        <div className="page-guard-rail relative">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-[1.2fr_1fr_1.2fr] gap-12 items-center mb-24 mt-16">
            {/* Left Content */}
            <div className="flex flex-col gap-6 overflow-visible">
              <CopyAnimation>
                <p
                  className="text-[1rem] font-normal text-[#D0D4EC]"
                  style={{ fontFamily: 'var(--font-family-satoshi)' }}
                >
                  JOHN ÓJẸ́TÚNDÉ
                </p>
              </CopyAnimation>

              <CopyAnimation>
                <h1
                  className="text-[5rem] leading-none font-extrabold text-white overflow-visible whitespace-nowrap"
                  style={{
                    fontFamily: 'var(--font-family-druk)',
                    overflow: 'visible !important',
                  }}
                >
                  VISIONARY
                </h1>
              </CopyAnimation>

              <div
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#272D3D] w-fit relative"
                style={{
                  backdropFilter: 'blur(10px)',
                  border: '0.57px solid transparent',
                  backgroundImage:
                    'linear-gradient(#272D3D, #272D3D), linear-gradient(to bottom, #7A9DF7, #24272E, #24272E)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box',
                }}
              >
                <div className="w-2 h-2 rounded-full bg-[#82D97B] pulse-dot" />
                <span
                  className="text-[0.75rem] font-normal text-[#D0D4EC]"
                  style={{ fontFamily: 'var(--font-family-satoshi)' }}
                >
                  DESIGNING SYSTEMS & LEADING TEAMS
                </span>
              </div>
            </div>

            {/* Center Image */}
            <div className="flex justify-center items-center">
              <ImageCard />
            </div>

            {/* Right Content */}
            <div className="flex flex-col gap-6 items-end text-right mt-20">
              <CopyAnimation>
                <h1
                  className="text-[5rem] leading-none font-extrabold text-white"
                  style={{ fontFamily: 'var(--font-family-druk)' }}
                >
                  POLYMATH
                </h1>
              </CopyAnimation>

              <CopyAnimation>
                <p
                  className="text-[1rem] font-normal text-[#D0D4EC] leading-relaxed max-w-[280px]"
                  style={{ fontFamily: 'var(--font-family-satoshi)' }}
                >
                  Building systems and stories that last — through software, mentorship, and
                  photography
                </p>
              </CopyAnimation>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col items-center gap-8 mb-24">
            <CopyAnimation>
              <p
                className="text-[1rem] font-normal text-[#D0D4EC] text-center"
                style={{ fontFamily: 'var(--font-family-satoshi)' }}
              >
                JOHN ÓJẸ́TÚNDÉ
              </p>
            </CopyAnimation>

            <CopyAnimation>
              <h1
                className="text-[3rem] leading-none font-extrabold text-white text-center"
                style={{ fontFamily: 'var(--font-family-druk)' }}
              >
                VISIONARY
              </h1>
            </CopyAnimation>

            <ImageCard />

            <CopyAnimation>
              <h1
                className="text-[3rem] leading-none font-extrabold text-white text-center"
                style={{ fontFamily: 'var(--font-family-druk)' }}
              >
                POLYMATH
              </h1>
            </CopyAnimation>

            <div
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#272D3D] relative"
              style={{
                backdropFilter: 'blur(10px)',
                border: '0.57px solid transparent',
                backgroundImage:
                  'linear-gradient(#272D3D, #272D3D), linear-gradient(to right, #7A9DF7, #24272E, #24272E)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
              }}
            >
              <div className="w-2 h-2 rounded-full bg-[#82D97B] pulse-dot" />
              <span
                className="text-[0.75rem] font-normal text-[#D0D4EC]"
                style={{ fontFamily: 'var(--font-family-satoshi)' }}
              >
                DESIGNING SYSTEMS & LEADING TEAMS
              </span>
            </div>

            <CopyAnimation>
              <p
                className="text-[0.875rem] font-normal text-[#D0D4EC] leading-relaxed text-center max-w-[320px]"
                style={{ fontFamily: 'var(--font-family-satoshi)' }}
              >
                Building systems and stories that last — through software, mentorship, and
                photography
              </p>
            </CopyAnimation>
          </div>

          {/* Marquee at bottom */}
          <Marquee />

          {/* Scroll indicator - positioned relative to content */}
          <div className="hidden lg:flex absolute -right-12  top-[26rem] flex-col items-center gap-1">
            <div className="text-[3rem] font-bold text-white leading-none">
              <img src={Scroll} alt="Scroll Down" className="w-5 h-5 mx-auto mb-2" />
            </div>
            <p
              className="text-[0.6875rem] font-normal text-[#D0D4EC] uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-family-satoshi)' }}
            >
              SCROLL
            </p>
          </div>
        </div>
      </div>

      <BottomBorder />
    </section>
  );
};

export default Hero;
