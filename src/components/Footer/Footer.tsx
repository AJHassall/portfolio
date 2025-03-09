import { Container, Group, Paper, ActionIcon, rem } from '@mantine/core';
import { IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react';
import classes from './Footer.module.css';

export function FooterSimple() {
  return (
    <>
      <div className={classes.footerSpacer} />
      <div className={classes.footerWrapper}>
        <Container className={classes.inner}>
          <Paper pl="lg" pr="lg" style={{ backgroundColor: 'rgba(0,0,0,0)' }} />

          <Group pr="lg" gap="sm" justify="flex-end" wrap="nowrap">
            <ActionIcon size="lg" variant="default" radius="xl" component="a" href="https://www.facebook.com/hassallgroupltd/">
              <IconBrandFacebook style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" variant="default" radius="xl" component="a" href="https://www.instagram.com/hassallgroupltd/">
              <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Container>

      </div>
    </>
  );
}