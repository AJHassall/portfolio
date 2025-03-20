import { Badge, Box, Card, Group, Image, rem, Text } from '@mantine/core';
import { SlideUp } from '../Transitions/SlideUp';

interface WorkHistoryCardProps {
  title: string;
  description: string;
  company: string;
  startDate: Date;
  endDate: Date;
  skills: string[];
  link?: string;
  imageUrl: string; // Optional image URL
}

export function WorkHistoryCard({
  title,
  description,
  company,
  startDate,
  endDate,
  skills,
  link,
  imageUrl,
}: WorkHistoryCardProps) {
  const formatDate = (date: Date) => {
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  return (
    <SlideUp>
      <Card
        withBorder
        radius="md"
        p="xl"
        style={{
          border: `${rem(1)} solid #e0e0e0`,
          cursor: link ? 'pointer' : 'default',
        }}
      >
        <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Card.Section p="md" w="100%">
            <Text fw={500}>{title}</Text>
            <Group justify="space-between">
              <Text size="md">{company}</Text>
              <Image src={imageUrl} h={30} w={30} radius="md" />
            </Group>
            <Text size="sm" c="dimmed" fw="300">
              {formatDate(startDate)} - {formatDate(endDate)}
            </Text>
            <Text size="sm">{description}</Text>

            <Group gap={5} style={{ marginTop: rem(16) }}>
              {skills.map((skill) => (
                <Badge key={skill} variant="light" size="sm">
                  {skill}
                </Badge>
              ))}
            </Group>
          </Card.Section>
        </Box>
      </Card>
    </SlideUp>
  );
}
