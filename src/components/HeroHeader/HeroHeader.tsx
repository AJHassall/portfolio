import { IconCheck } from '@tabler/icons-react';
import image from '/productivity.svg';
import { Box, Button, Container, Group, Image, List, ThemeIcon, Title } from '@mantine/core';
import classes from './HeroHeader.module.css';

export function HeroHeader() {
  return (
    <Container fluid mih="30vh" w="100%" className={classes.heroContainer} p={0}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Hi, I'm <span className={classes.highlight}>Adam</span>
          </Title>

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
            <a href="#Projects">
              <Button radius="xl" size="md" className={classes.projectButton}>
                View My Projects
              </Button>
            </a>
            <a href="#ContactMe">
              <Button
                color="red"
                variant="filled"
                radius="xl"
                size="md"
                className={classes.contactButton}
              >
                Contact Me
              </Button>
            </a>
          </Group>
        </div>
        <Box className={classes.imageContainer}>
          <Image src={image} alt="Developer Illustration" className={classes.image} />
        </Box>
      </div>
    </Container>
  );
}
