import { useRef, ReactNode } from 'react';
import { useInView } from 'framer-motion';

interface ViewportDetectorProps {
  children: (isInView: boolean) => ReactNode;
  once?: boolean;
  amount?: number | 'some' | 'all';
}

const ViewportDetector = ({ children, once = true, amount = 0.3 }: ViewportDetectorProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  return <div ref={ref}>{children(isInView)}</div>;
};

export default ViewportDetector;
