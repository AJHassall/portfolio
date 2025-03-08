import { Button, Container, Group, Image, List, Text, ThemeIcon, Title, Box } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import image from '/productivity.svg';
import classes from './HeroHeader.module.css';

export function HeroHeader() {
  return (
    <Container size="auto" mih="30vh" className={classes.heroContainer}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Hi, I'm <span className={classes.highlight}>Adam</span>
          </Title>
          <Text c="dimmed" mt="md" className={classes.description}>
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
            className={classes.skillList}
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

          <Group mt={30} className={classes.buttonGroup}>
            <Button radius="xl" size="md" className={classes.projectButton}>
              View My Projects
            </Button>
            <Button color="red" variant="filled" radius="xl" size="md" className={classes.contactButton}>
              Contact Me
            </Button>
          </Group>
        </div>
        <Box className={classes.imageContainer}>
          <Image src={image} alt="Developer Illustration" className={classes.image} />
        </Box>
      </div>
    </Container>
  );
}