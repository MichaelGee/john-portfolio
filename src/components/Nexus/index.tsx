import CopyAnimation from '../CopyAnimation';
import BottomBorder from '../BottomBorder';
import Badge from '../Badge';
import Star from '@/assets/star2.svg';

const Nexus = () => {
  return (
    <section className="relative py-32 bg-[#05070C]">
      <div className="page-guard-rail relative z-20">
        {/* Nexus Badge with Lines */}
        <div className="mb-16">
          <Badge text="NEXUS" icon={Star} showLines={true} />
        </div>

        {/* Main Content */}
        <div className="max-w-[68.75rem] mx-auto text-center">
          <CopyAnimation>
            <h2
              className="text-[1.6675rem] md:text-[3.5rem] leading-tight font-medium text-[#7A8090] mb-8"
              style={{ fontFamily: 'var(--font-family-satoshi)' }}
            >
              Hi, I'm John Ojetunde — a two-time{' '}
              <span
                className="italic text-white"
                style={{ fontFamily: 'var(--font-family-satoshi)' }}
              >
                founder,{' '}
              </span>
              <span
                className="italic text-white"
                style={{ fontFamily: 'var(--font-family-satoshi)' }}
              >
                engineer
              </span>
              , and{' '}
              <span
                className="italic text-white"
                style={{ fontFamily: 'var(--font-family-satoshi)' }}
              >
                photographer
              </span>{' '}
              dedicated to{' '}
              <span
                className="italic text-white"
                style={{ fontFamily: 'var(--font-family-satoshi)' }}
              >
                building systems
              </span>{' '}
              that work beautifully at scale.
            </h2>
          </CopyAnimation>
        </div>
      </div>

      <BottomBorder />
    </section>
  );
};

export default Nexus;
