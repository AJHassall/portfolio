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
      technologies: ['Rust', 'React', 'Neon-rs', 'Whisper C++','Tokio', 'Webpack', 'JavaScript', 'TypeScript' ], // Add technologies here
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
        <Container size="xl">
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