// src/components/Hero.tsx
import React from 'react';
import { Container, Text, Title } from '@mantine/core';

export function Hero() {
  return (
    <Container size="md" style={{ textAlign: 'center' }}>
      <Title order={1}>Adam Hassall</Title>
      <Text size="lg" mt="md">
        Software Developer
      </Text>
      <Text size="md" mt="xl">
        Full-stack developer with 3+ years of experience building web applications in the banking
        and insurance industries. Skilled in C#, ASP.NET, SQL, Azure, and modern web frameworks
        (React, Next.js, Tailwind CSS). Interested in learning more, developing new skills and
        becoming a better developer.
      </Text>
    </Container>
  );
}
