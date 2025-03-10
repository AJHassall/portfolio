// src/components/Certifications.tsx
import React from 'react';
import { Container, Title, List, ListItem } from '@mantine/core';

export function Certifications() {
  return (
    <Container size="xl" style={{ marginTop: '40px' }}>
      <Title order={2}>Certifications</Title>
      <List>
        <ListItem>Level 3 Certificate in Software Development Context and Methodologies BCS</ListItem>
        <ListItem>Level 3 Certificate in Programming</ListItem>
        <ListItem>Level 3 Software Technician Apprenticeship</ListItem>
        <ListItem>MTA: Software Development Fundamentals</ListItem>
        <ListItem>AZ-900: Microsoft Azure Fundamentals</ListItem>
      </List>
    </Container>
  );
}