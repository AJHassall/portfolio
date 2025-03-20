import { ReactNode, useEffect, useRef, useState, CSSProperties } from 'react';
import { Box } from '@mantine/core';
import { useIntersection } from '@mantine/hooks';
import classes from './SlideUp.module.css'; // Create this CSS module file

interface AnimatedCardProps {
  children: ReactNode;
  duration?: string; // Use string for CSS duration (e.g., '0.5s')
  timingFunction?: string;
  delay?: string;
}

export function SlideUp({
  children,
  duration = '2.5s',
  timingFunction = 'ease',
  delay = '0s',
}: AnimatedCardProps) {
  const [hasBeenInViewport, setHasBeenInViewport] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { entry } = useIntersection({
    root: null,
    threshold: 1,
  });

  useEffect(() => {
    if ((entry?.isIntersecting ?? false) && !hasBeenInViewport) {
      setHasBeenInViewport(true);
    }
  }, [entry, hasBeenInViewport]);

  const styleProps: CSSProperties = {
    '--slide-up-duration': duration,
    '--slide-up-timing-function': timingFunction,
    '--slide-up-delay': delay,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={hasBeenInViewport ? classes.slideUpVisible : classes.slideUpHidden}
      style={styleProps}
    >
      <Box>{children}</Box>
    </div>
  );
}