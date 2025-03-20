import { ReactNode, useEffect, useRef, useState } from 'react';
import { Box, Transition } from '@mantine/core';
import { useIntersection } from '@mantine/hooks';

interface AnimatedCardProps {
  children: ReactNode;
  transition?: TransitionProps['transition'];
  duration?: number;
  timingFunction?: string;
  delay?: number;
  keepMounted?: boolean;
}

interface TransitionProps {
  mounted: boolean;
  transition: string;
  duration: number;
  timingFunction: string;
  delay?: number;
  keepMounted?: boolean;
}

export function SlideUp({
  children,
  duration = 500,
  timingFunction = 'ease',
  keepMounted = true,
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

  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      {' '}
      {/* Optional: Prevent content overflow before animation */}
      <Transition
        mounted={hasBeenInViewport}
        transition="slide-up" // Revert to slide-up for the desired effect
        duration={duration}
        timingFunction={timingFunction}
        keepMounted={keepMounted}
      >
        {(styles) => (
          <Box style={{ ...styles, visibility: hasBeenInViewport ? 'visible' : 'hidden' }}>
            {children}
          </Box>
        )}
      </Transition>
    </div>
  );
}
