import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Paper, rem } from '@mantine/core';
import classes from './Footer.module.css';

export function FooterSimple() {
  return (
    <>
      <div className={classes.footerSpacer} />
      <div className={classes.footerWrapper}>
        <Container className={classes.inner}>
          <Paper pl="lg" pr="lg" style={{ backgroundColor: 'rgba(0,0,0,0)' }} />

          <Group pr="lg" gap="sm" justify="flex-end" wrap="nowrap">
            <ActionIcon
              size="lg"
              variant="default"
              radius="xl"
              component="a"
              href="https://www.linkedin.com/in/adam-hassall/"
            >
              <IconBrandLinkedin style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              size="lg"
              variant="default"
              radius="xl"
              component="a"
              href="https://github.com/AJHassall"
              style={{}}
            >
              <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Container>
      </div>
    </>
  );
}
