import { useEffect, useRef, useState } from 'react';
import cx from 'clsx';
import { Box } from '@mantine/core';
import classes from './TableOfContentsFloating.module.css';

const links = [
  { label: 'Work Experience', link: '#WorkExperience', order: 1 },
  { label: 'Projects', link: '#Projects', order: 1 },
  { label: 'Skills', link: '#Skills', order: 1 },
  { label: 'Contact', link: '#Contact', order: 1 },
];

export function TableOfContentsFloating() {
  const [active, setActive] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isClickScrolling, setIsClickScrolling] = useState(false); // Add a flag

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling) {return;} // Ignore scroll if click-triggered
      let currentActive = 0;
      links.forEach((item, index) => {
        const targetElement = document.querySelector(item.link);
        if (targetElement) {
          const rect = targetElement.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            currentActive = index;
          }
        }
      });
      setActive(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClickScrolling]); // Add isClickScrolling dependency

  const items = links.map((item, index) => (
    <Box<'a'>
      component="a"
      href={item.link}
      onClick={(event) => {
        event.preventDefault();
        setIsClickScrolling(true); // Set flag
        setActive(index);
        const targetElement = document.querySelector(item.link);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          // Reset the flag after a short delay
          setTimeout(() => setIsClickScrolling(false), 500); // Adjust delay as needed
        }
      }}
      key={item.label}
      className={cx(classes.link, { [classes.linkActive]: active === index })}
      style={{ paddingLeft: `calc(${item.order} * var(--mantine-spacing-md))` }}
    >
      {item.label}
    </Box>
  ));

  return (
    <div className={classes.root} ref={scrollContainerRef}>
      <div className={classes.links}>
        <div
          className={classes.indicator}
          style={{
            transform: `translateY(calc(${active} * var(--link-height) + var(--indicator-offset)))`,
          }}
        />
        {items}
      </div>
    </div>
  );
}