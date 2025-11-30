import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CopyAnimation from '../CopyAnimation';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!imageRef.current) return;

      gsap.from(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 75%',
          once: true,
        },
      });

      gsap.to(imageRef.current, {
        y: -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="min-h-screen relative overflow-hidden py-[4rem]!">
      <div className="page-guard-rail">
        {/* Header */}
        <div className="mb-24!">
          <CopyAnimation>
            <h2
              className="text-[clamp(3rem,8vw,6rem)] leading-none font-extrabold text-primary"
              style={{ fontFamily: 'var(--font-family-big-shoulders)' }}
            >
              ABOUT ME
            </h2>
          </CopyAnimation>
        </div>

        {/* Content */}
        <div className="w-full">
          <CopyAnimation>
            <p
              className="text-[clamp(1.25rem,2vw,1.5rem)] leading-relaxed text-(--text-color) w-full"
              style={{ fontFamily: 'var(--font-family-outfit)' }}
            >
              I've spent more than a decade building technology that scales from financial systems
              serving millions of users to digital health platforms improving access to care. Along
              the way, I've worked as an engineer, consultant, and leader across Africa, Europe, and
              the United States. Today, I focus on creating systems that don't just work at scale
              but work beautifully, leading teams that turn complex challenges into meaningful
              products.
            </p>
          </CopyAnimation>
        </div>

        {/* Floating Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-32">
          {[
            { number: '10+', label: 'Years Experience' },
            { number: '3', label: 'Continents' },
            { number: '2', label: 'Companies Founded' },
            { number: '∞', label: 'Lines of Code' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <CopyAnimation delay={index * 0.1}>
                <h3
                  className="text-[clamp(3rem,6vw,5rem)] font-extrabold text-(--primary-color) leading-none mb-2"
                  style={{ fontFamily: 'var(--font-family-big-shoulders)' }}
                >
                  {stat.number}
                </h3>
              </CopyAnimation>
              <CopyAnimation delay={index * 0.1 + 0.1}>
                <p
                  className="text-[clamp(0.875rem,1.5vw,1rem)] text-(--text-color) uppercase tracking-wider"
                  style={{ fontFamily: 'var(--font-family-outfit)' }}
                >
                  {stat.label}
                </p>
              </CopyAnimation>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default About;
