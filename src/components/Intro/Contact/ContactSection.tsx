import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import { Anchor, Container, Divider, Group, Text, Title } from '@mantine/core';
import classes from './ContactMeSection.module.css'; // Create this CSS file

export function ContactMeSection() {
  return (
    <Container size="xl" className={classes.contactSection}>
      <Title order={2} className={classes.contactTitle}>
        Contact Me
      </Title>

      <Divider my="xl" />

      <Group justify="center" gap="xl" mt="xl">
        <Anchor
          href="mailto:ajhassall2000@gmail.com"
          target="_blank"
          className={classes.contactLink}
        >
          <IconMail size={30} stroke={1.5} />
          <Text ml="sm">ajhassall2000@gmail.com</Text>
        </Anchor>

        <Anchor
          href="https://www.linkedin.com/in/adam-hassall/"
          target="_blank"
          className={classes.contactLink}
        >
          <IconBrandLinkedin size={30} stroke={1.5} />
          <Text ml="sm">LinkedIn</Text>
        </Anchor>

        <Anchor href="https://github.com/AJHassall" target="_blank" className={classes.contactLink}>
          <IconBrandGithub size={30} stroke={1.5} />
          <Text ml="sm">GitHub</Text>
        </Anchor>
      </Group>
    </Container>
  );
}
