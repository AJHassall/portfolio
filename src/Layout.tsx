// RootLayout.tsx
import { IconFileCv, IconHome } from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';
import { ActionToggle } from './components/ColorSchemeToggle/Toggle';
import classes from './Layout.module.css';
import { AppShell, Burger, Group } from '@mantine/core';
import { TableOfContents } from './components/TableOfContent/TableOfContent';
import { useDisclosure } from '@mantine/hooks';



export function RootLayout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      navbar={{ width: 200, breakpoint: 'sm', collapsed: { mobile: !opened }, }}
      className={classes.root}
    >
      <Group h="100%" px="md">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </Group>
      <AppShell.Navbar className={classes.navbar}>
        <TableOfContents />
      </AppShell.Navbar>
      <AppShell.Main className={classes.content}>{children}</AppShell.Main>
    </AppShell>
  );
}
