import React, { useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, SplitText);

type CopyAnimationProps = {
  children?: React.ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
};

const CopyAnimation: React.FC<CopyAnimationProps> = ({
  children,
  animateOnScroll = true,
  delay = 0.8,
}) => {
  const constainerRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement[]>([]);
  const splitRef = useRef<(SplitText | null)[]>([]);
  const linesRef = useRef<HTMLElement[]>([]);

  useGSAP(
    () => {
      if (!constainerRef.current) return;
      splitRef.current = [];
      elementRef.current = [];
      linesRef.current = [];

      let elements = [];
      if (constainerRef.current.hasAttribute('data-copy-wrapper')) {
        elements = Array.from(constainerRef.current.children) as HTMLElement[];
      } else {
        elements = [constainerRef.current];
      }
      elements.forEach(el => {
        elementRef.current.push(el);
        const split = SplitText.create(el, { type: 'lines', mask: 'lines', linesClass: 'line++' });
        splitRef.current.push(split);

        const computedStyle = window.getComputedStyle(el);
        const textIndent = computedStyle.textIndent;
        if (textIndent && textIndent !== '0px') {
          if (split.lines.length > 0) {
            (split.lines[0] as HTMLElement).style.paddingLeft = textIndent;
          }
          el.style.textIndent = '0';
        }

        linesRef.current.push(...(split.lines as HTMLElement[]));
      });
      gsap.set(linesRef.current, { yPercent: 100 });
      const animationProps = {
        yPercent: 0,
        ease: 'power4.out',
        duration: 1,
        delay,
        stagger: 0.1,
      };
      if (animateOnScroll) {
        gsap.to(linesRef.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: constainerRef.current,
            start: 'top 80%',
            once: true,
          },
        });
      } else {
        gsap.to(linesRef.current, animationProps);
      }
      return () => {
        splitRef.current.forEach(split => {
          if (split) split.revert();
        });
      };
    },
    {
      scope: constainerRef,
      dependencies: [animateOnScroll, delay],
    }
  );

  return (
    <div ref={constainerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
};

export default CopyAnimation;
