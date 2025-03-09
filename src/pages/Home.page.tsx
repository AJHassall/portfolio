import { Container, SimpleGrid, Text, Title, TypographyStylesProvider } from '@mantine/core';
import { Project } from '@/components/Project/Project';
import { WorkHistoryCard } from '@/components/WorkHIstoryCard/WorkHistoryCard';

import i1 from '/Echo.png';
import i2 from '/wolfenstein.png';
import i3 from '/YouTubeCommentDeleter.png'; 

export function HomePage() {
  return (
    <>
      <Container size="sm" p="xl" bg="white">
        <SimpleGrid verticalSpacing="sm">
          <TypographyStylesProvider fz="sm">
            <Text inherit>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
            <Text inherit>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
            <Text inherit>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
            <Text inherit>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
          </TypographyStylesProvider>
        </SimpleGrid>

        <SimpleGrid verticalSpacing="xl" pt="xl">
          <Title> Work Experience</Title>
          <WorkHistoryCard
            title="Software Engineer"
            image="path/to/your/image.jpg"
            description="Developed and maintained web applications using React, Node.js, and PostgreSQL. Implemented new features and improved performance."
            company="Acme Corporation"
            startDate={new Date(2022, 0, 1)} // January 1, 2022
            endDate={new Date(2024, 11, 31)} // December 31, 2024
            skills={['React', 'Node.js', 'PostgreSQL', 'JavaScript', 'HTML', 'CSS']}
          />
          <WorkHistoryCard
            title="Software Engineer"
            image="path/to/your/image.jpg"
            description="Developed and maintained web applications using React, Node.js, and PostgreSQL. Implemented new features and improved performance."
            company="Acme Corporation"
            startDate={new Date(2022, 0, 1)} // January 1, 2022
            endDate={new Date(2024, 11, 31)} // December 31, 2024
            skills={['React', 'Node.js', 'PostgreSQL', 'JavaScript', 'HTML', 'CSS']}
          />
          <WorkHistoryCard
            title="Software Engineer"
            image="path/to/your/image.jpg"
            description="Developed and maintained web applications using React, Node.js, and PostgreSQL. Implemented new features and improved performance."
            company="Acme Corporation"
            startDate={new Date(2022, 0, 1)} // January 1, 2022
            endDate={new Date(2024, 11, 31)} // December 31, 2024
            skills={['React', 'Node.js', 'PostgreSQL', 'JavaScript', 'HTML', 'CSS']}
          />
        </SimpleGrid>

        <SimpleGrid verticalSpacing="xl" pt="xl">
          <Title> Projects</Title>
          <Project
            title="My Awesome Project"
            description="A brief description of my awesome project."
            imageUrl={i1}
            githubUrl="https://github.com/your-username/my-awesome-project"
            technologies={['React', 'Node.js', 'PostgreSQL']}
          />
          <Project
            title="My Awesome Project"
            description="A brief description of my awesome project."
            imageUrl={i2}
            githubUrl="https://github.com/your-username/my-awesome-project"
            technologies={['React', 'Node.js', 'PostgreSQL']}
          />
          <Project
            title="My Awesome Project"
            description="A brief description of my awesome project."
            imageUrl={i3}
            githubUrl="https://github.com/your-username/my-awesome-project"
            technologies={['React', 'Node.js', 'PostgreSQL']}
          />
        </SimpleGrid>
      </Container>
    </>
  );
}
