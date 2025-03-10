
import React from 'react';
import { Text, Container, Group, Badge } from '@mantine/core';

export function Skills() {
  return (
    <Container size="xl" style={{ marginTop: '40px' }}>
      <Text size="lg" fw={700} style={{ marginBottom: '20px' }}>Skills</Text>
      <Group justify="xs" wrap="wrap">
        <Badge>C#</Badge>
        <Badge>JavaScript (TypeScript)</Badge>
        <Badge>Python</Badge>
        <Badge>ASP.NET</Badge>
        <Badge>React</Badge>
        <Badge>Next.js</Badge>
        <Badge>SQL (MSSQL, MySQL, PostgreSQL)</Badge>
        <Badge>Azure</Badge>
        <Badge>Docker</Badge>
        <Badge>Git</Badge>
        <Badge>CI/CD (Octopus, TeamCity, GitHub Actions)</Badge>
      </Group>
    </Container>
  );
}