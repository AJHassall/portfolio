import { useState } from 'react';
import cx from 'clsx';
import { Box } from '@mantine/core';
import classes from './TableOfContentsFloating.module.css';

const links = [
  { label: 'Lorem', link: '#usage', order: 1 },
  { label: 'Ipsum', link: '#position', order: 1 },
  { label: 'Delore', link: '#overlays', order: 1 },

];

export function TableOfContentsFloating() {
  const [active, setActive] = useState(2);

  const items = links.map((item, index) => (
    <Box<'a'>
      component="a"
      href={item.link}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
      }}
      key={item.label}
      className={cx(classes.link, { [classes.linkActive]: active === index })}
      style={{ paddingLeft: `calc(${item.order} * var(--mantine-spacing-md))` }}
    >
      {item.label}
    </Box>
  ));

  return (
    <div className={classes.root}>

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