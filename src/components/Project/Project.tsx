import { Badge, Card, Group, Image, Text } from '@mantine/core';

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  technologies: string[];
}

export function Project({ title, description, imageUrl, githubUrl, technologies }: ProjectProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={imageUrl} height={160} alt={title} />
      </Card.Section>
      <Group gap="apart" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
        <Badge color="blue" variant="light">
          GitHub
        </Badge>
      </Group>
      <Text size="sm" color="dimmed">
        {description}
      </Text>
      <Group gap={5} mt="md">
        {technologies.map((tech) => (
          <Badge key={tech} variant="light" size="xs">
            {tech}
          </Badge>
        ))}
      </Group>

    </Card>
  );
}
