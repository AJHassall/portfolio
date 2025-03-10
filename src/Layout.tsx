// RootLayout.tsx

import { AppShell, Box, Container, Stack } from '@mantine/core';
import { FooterSimple } from './components/Footer/Footer';
import { Intro } from './components/Intro/Intro';
import { SocialLinks } from './components/SocialLinks/SocialLinks';
import { TableOfContentsFloating } from './components/TableOfContents/TableOfContentsFloating';
import classes from './Layout.module.css';

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      navbar={{ width: 500, breakpoint: 'sm', collapsed: { mobile: true } }}
      className={classes.root}
    >
      <AppShell.Navbar className={classes.navbar}>
        <Container p="xl">
          <Stack align="stretch" justify="flex-start">
            <Intro />
            <TableOfContentsFloating />
            <Box pt="100%">
              <SocialLinks />
            </Box>
          </Stack>
        </Container>
      </AppShell.Navbar>
      <AppShell.Main className={classes.content}>
        <Box bg="white" style={{ zIndex: 1, position: 'relative' }}>
          {children}{' '}
        </Box>
        <FooterSimple />
      </AppShell.Main>
    </AppShell>
  );
}
