import { ReactNode } from 'react';
import { Box } from '@mantine/core';
import { useInViewport } from '@mantine/hooks';
import classes from './SlideUp.module.css';

interface AnimatedCardProps {
  children: ReactNode;
  duration?: string;
  timingFunction?: string;
  delay?: string;
}

export function SlideUp({ children }: AnimatedCardProps) {
  const { ref, inViewport } = useInViewport();

  return (
    <Box className={inViewport ? classes.slideUpVisible : classes.slideUpHidden}>
      <div ref={ref}>{children}</div>
    </Box>
  );
}
