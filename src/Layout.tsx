// RootLayout.tsx

import { AppShell, Box, Burger, Container, Grid, Group, SimpleGrid, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FooterSimple } from './components/Footer/Footer';
import { Intro } from './components/Intro/Intro';
import { SocialLinks } from './components/SocialLinks/SocialLinks';
import { TableOfContentsFloating } from './components/TableOfContents/TableOfContentsFloating';
import classes from './Layout.module.css';

export function RootLayout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      navbar={{ width: 700, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      className={classes.root}
    >
      <Group h="100%" px="md">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </Group>
      <AppShell.Navbar className={classes.navbar}>
        <Container p={'xl'}>
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
        <Box bg="white">{children}</Box>
        <FooterSimple />
      </AppShell.Main>
    </AppShell>
  );
}
