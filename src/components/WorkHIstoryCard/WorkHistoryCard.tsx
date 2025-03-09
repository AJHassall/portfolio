import { Card, Text, Group, Badge, rem } from '@mantine/core';

interface WorkHistoryCardProps {
  title: string;
  image: string;
  description: string;
  company: string;
  startDate: Date;
  endDate: Date;
  skills: string[];
}

export function WorkHistoryCard({
  title,
  description,
  company,
  startDate,
  endDate,
  skills,
}: WorkHistoryCardProps) {

  const formatDate = (date: Date) => {
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  return (
    <Card
      withBorder
      radius="md"
      style={{
        backgroundColor: 'white', // Or your desired background color
        border: `${rem(1)} solid #e0e0e0`, // Or your desired border color
        transition: 'transform 200ms ease, box-shadow 200ms ease',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)', // Or your desired shadow
        },
      }}
    >

      <Card.Section p='md'>
        <Text fw={500} style={{ marginBottom: rem(8) }}>
          {title}
        </Text>
        <Text style={{ color: '#616161', fontWeight: 500 }}>{company}</Text>
        <Text style={{ color: '#616161', fontSize: '14px' }}>
          {formatDate(startDate)} - {formatDate(endDate)}
        </Text>
        <Text style={{ lineHeight: 1.6 }}>{description}</Text>

        <Group gap={5} style={{ marginTop: rem(16) }}>
          {skills.map((skill) => (
            <Badge key={skill} variant="light" size="sm">
              {skill}
            </Badge>
          ))}
        </Group>
      </Card.Section>
    </Card>
  );
}