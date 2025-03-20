// RootLayout.tsx

import { AppShell, Box, Container, Stack, useMantineColorScheme } from '@mantine/core';
import { FooterSimple } from './components/Footer/Footer';
import { Intro } from './components/Intro/Intro';
import { TableOfContentsFloating } from './components/TableOfContents/TableOfContentsFloating';
import classes from './Layout.module.css';
import { ActionToggle } from './components/ColorSchemeToggle/Toggle';

export function RootLayout({ children }: { children: React.ReactNode }) {

      const { colorScheme } = useMantineColorScheme();
  
    const _bg = colorScheme=== 'dark'
    ? 'dark' // Dark theme background
    : 'white'// Light theme background
  
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
            <Box>
              <ActionToggle/>
            </Box>
          </Stack>
        </Container>
      </AppShell.Navbar>
      <AppShell.Main className={classes.content}>
        <Box style={{ zIndex: 1, position: 'relative' }} bg={_bg}>
          {children}{' '}
        </Box>
        <FooterSimple />
      </AppShell.Main>
    </AppShell>
  );
}
