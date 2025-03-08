import { Button, Container, Group, Image, List, Text, ThemeIcon, Title } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import image from '/productivity.svg'; // Replace with your image
import classes from './HeroHeader.module.css';

export function HeroHeader() {
  return (
    <Container size="md" mih="100vh">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Hi, I'm <span className={classes.highlight}>Adam</span>
          </Title>
          <Text c="dimmed" mt="md">
            Full-stack developer with 3+ years of experience building web applications in the banking and insurance industries. Skilled in C#, ASP.NET, SQL, Azure, and modern web frameworks (React, Next.js, Tailwind CSS).
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={12} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Experienced with .NET and C#</b> - building robust backend applications.
            </List.Item>
            <List.Item>
              <b>Proficient in Azure cloud services</b> - for scalable and reliable applications.
            </List.Item>
            <List.Item>
              <b>Skilled in modern web frameworks</b> - using React and Next.js for dynamic UIs.
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              View My Projects
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              Contact Me
            </Button>
          </Group>
        </div>
        <Image src={image} alt="Developer Illustration" className={classes.image} />
      </div>
    </Container>
  );
}