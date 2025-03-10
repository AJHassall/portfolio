import {
  Card,
  Container,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import classes from './Certifications.module.css'; // Create CertificationsCards.module.css

const certificationsData = [
  {
    title: 'AZ-900: Microsoft Azure Fundamentals',
    description: 'Microsoft Azure Fundamentals certification, demonstrating foundational knowledge of cloud services.',
  },
  {
    title: 'BCS Level 3 Certificate in Software Development Context and Methodologies',
    description: 'Certification from BCS demonstrating knowledge of software development methodologies.',
  },
  {
    title: 'BCS Level 3 Certificate in Programming',
    description: 'Certification from BCS demonstrating programming skills.',
  },
  {
    title: 'Level 3 Software Technician Apprenticeship',
    description: 'Completion of a Level 3 Software Technician Apprenticeship.',
  },
  {
    title: 'MTA: Software Development Fundamentals',
    description: 'Microsoft Technology Associate certification in software development fundamentals.',
  },
];

export function Certifications() {
  const certifications = certificationsData.map((cert) => (
    <Card key={cert.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {cert.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {cert.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">


      <Title order={2} className={classes.title} ta="center" mt="sm">
        Professional Certifications
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        These certifications highlight my commitment to continuous learning and professional development.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mt={50}>
        {certifications}
      </SimpleGrid>
    </Container>
  );
}