import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import { motion } from 'framer-motion';
import ViewportDetector from '../ViewportDetector';
import heroImage from '../../assets/img1.jpg';
import { useMousePosition } from '../../hooks/useMousePosition';

gsap.registerPlugin(SplitText);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;
  const splitInstancesRef = useRef<{ hero: SplitText | null; paragraph: SplitText | null }>({
    hero: null,
    paragraph: null,
  });

  const mainText = 'JOHN OJETUNDE';
  const subText =
    "Hi, I'm John Ojetunde — a two-time founder, engineer, and photographer dedicated to building systems that work beautifully at scale.";

  useEffect(() => {
    const instances = splitInstancesRef.current;
    return () => {
      instances.hero?.revert();
      instances.paragraph?.revert();
    };
  }, []);

  const animateText = (inView: boolean) => {
    if (!inView || !containerRef.current || hasAnimated) return;

    setHasAnimated(true);

    const heroSplit = new SplitText('.title', { type: 'chars, words' });
    const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

    splitInstancesRef.current.hero = heroSplit;
    splitInstancesRef.current.paragraph = paragraphSplit;

    heroSplit.chars.forEach(char => {
      char.classList.add('text-gradient');
    });

    const tl = gsap.timeline();

    tl.fromTo(
      imageRef.current,
      {
        scale: 1.4,
        clipPath: 'inset(100% 0% 0% 0%)',
      },
      {
        scale: 1,
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 2,
        ease: 'expo.out',
      }
    )
      .fromTo(
        heroSplit.chars,
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: 1.8,
          ease: 'expo.out',
          stagger: 0.05,
        },
        '-=1.5'
      )
      .fromTo(
        paragraphSplit.lines,
        { opacity: 0, yPercent: 100 },
        {
          opacity: 1,
          yPercent: 0,
          duration: 1.8,
          ease: 'expo.out',
          stagger: 0.1,
        },
        '-=1.2'
      );
  };

  return (
    <ViewportDetector once={true} amount={0.3}>
      {isInView => {
        if (isInView && !hasAnimated) {
          requestAnimationFrame(() => animateText(isInView));
        }
        return (
          <section
            ref={containerRef}
            className="min-h-screen flex items-center justify-center py-32 relative"
          >
            {/* Main background with grayscale and gradient */}
            <div ref={imageRef} className="absolute inset-0 w-full h-full overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-transparent z-10" />
              <img
                src={heroImage}
                alt="John Ojetunde"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Mask revealing color image */}
            <motion.div
              className="absolute inset-0 w-full h-full overflow-hidden z-20 pointer-events-none"
              animate={{
                maskPosition: `${x - size / 2}px ${y - size / 2}px`,
                maskSize: `${size}px`,
              }}
              transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
              style={{
                maskImage:
                  'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMDAiIGN5PSIyMDAiIHI9IjIwMCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=)',
                maskRepeat: 'no-repeat',
                WebkitMaskImage:
                  'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMDAiIGN5PSIyMDAiIHI9IjIwMCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=)',
                WebkitMaskRepeat: 'no-repeat',
              }}
            >
              <img
                src={heroImage}
                alt="John Ojetunde Color"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="page-guard-rail relative z-30">
              <div
                ref={textAreaRef}
                className="flex flex-col gap-12"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <h1
                  className="title text-[clamp(4rem,12vw,10rem)] leading-none font-extrabold overflow-hidden text-[#909090]"
                  style={{ fontFamily: 'var(--font-family-big-shoulders)' }}
                >
                  {mainText}
                </h1>
                <p
                  className="subtitle text-[clamp(1.25rem,2.5vw,1.75rem)] leading-relaxed max-w-[700px] overflow-hidden text-[#909090]"
                  style={{ fontFamily: 'var(--font-family-outfit)' }}
                >
                  {subText}
                </p>
              </div>
            </div>

            {/* Mask revealing primary color text */}
            <motion.div
              className="absolute inset-0 w-full h-full overflow-hidden z-40 pointer-events-none"
              animate={{
                maskPosition: `${x - size / 2}px ${y - size / 2}px`,
                maskSize: `${size}px`,
              }}
              transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
              style={{
                maskImage:
                  'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMDAiIGN5PSIyMDAiIHI9IjIwMCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=)',
                maskRepeat: 'no-repeat',
                WebkitMaskImage:
                  'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMDAiIGN5PSIyMDAiIHI9IjIwMCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=)',
                WebkitMaskRepeat: 'no-repeat',
              }}
            >
              <div className="w-full h-full flex items-center justify-center py-32">
                <div className="page-guard-rail w-full">
                  <div className="flex flex-col gap-12">
                    <h1
                      className="text-[clamp(4rem,12vw,10rem)] leading-none font-extrabold overflow-hidden text-(--primary-color)"
                      style={{ fontFamily: 'var(--font-family-big-shoulders)' }}
                    >
                      {mainText}
                    </h1>
                    <p
                      className="text-[clamp(1.25rem,2.5vw,1.75rem)] leading-relaxed max-w-[700px] overflow-hidden text-(--primary-color)"
                      style={{ fontFamily: 'var(--font-family-outfit)' }}
                    >
                      {subText}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        );
      }}
    </ViewportDetector>
  );
};

export default Hero;
