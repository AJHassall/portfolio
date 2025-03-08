import { Title, Container, Grid, Card, Image, Text, Button, Group, Badge } from '@mantine/core';
import classes from './Portfolio.module.css';
import echoPng from '/Echo.png';
import ycdPng from '/YouTubeCommentDeleter.png'
import wolfenstein from '/wolfenstein.png'

const projects = [
  {
    title: 'Echo',
    description: 'voice transcription using whisper ai model and whisper cpp rust bindings',
    image: echoPng,
    link: 'https://github.com/AJHassall/echo',
    technologies: ['Rust', 'React', 'Neon-rs', 'Whisper C++', 'Tokio', 'Webpack', 'JavaScript', 'TypeScript'], // Add technologies here
  },
  {
    title: 'Youtube Comment Remover',
    description: 'Add users to database, and the extension will hide all comments from them',
    image: ycdPng,
    link: 'https://github.com/AJHassall/youtube-comment-blocker',
    technologies: ['C#', 'JavaScript', 'TypeScript', 'Docker', 'PostgreSQL'], // Add technologies here
  },
  {
    title: 'SFML Wolfenstein',
    description: 'Wolfstenstein style game engine.',
    image: wolfenstein,
    link: 'https://github.com/AJHassall/sfml-wolfenstein',
    technologies: ['C#', 'Batch', 'SFML'], // Add technologies here
  },
  // Add more projects here
];

export function Portfolio() {
  return (
    <section className={classes.portfolioSection}>
      <div className={classes.wave}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={classes.shapeFill}></path>
        </svg>
      </div>
      <Container size="xl" pt={'100px'}>
        <Title order={2} className={classes.portfolioTitle}>
          My Projects
        </Title>
        <Grid gutter="xl" mt="xl">
          {projects.map((project, index) => (
            <Grid.Col span={4} key={index}>
              <Card withBorder radius="md" className={classes.portfolioCard}>
                <Card.Section>
                  <Image h={300} w="auto" src={project.image} alt={project.title} />
                </Card.Section>
                <Text fw={500} mt="md" className={classes.portfolioProjectTitle}>
                  {project.title}
                </Text>
                <Text size="sm" c="dimmed" className={classes.portfolioProjectDescription}>
                  {project.description}
                </Text>
                {/* Add technologies section */}
                <Group gap="xs" mt="md" className={classes.portfolioProjectTechnologies}>
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} size="sm" variant="light">
                      {tech}
                    </Badge>
                  ))}
                </Group>
                <Group justify="right" mt="md">
                  <Button component="a" href={project.link} target="_blank" variant="light" size="xs">
                    View Project
                  </Button>
                </Group>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </section>
  );
}