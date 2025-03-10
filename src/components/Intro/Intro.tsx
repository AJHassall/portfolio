import { Text, Title } from '@mantine/core';

export function Intro() {
  return (
    <>
      <Title fz="60px" fw={1200} order={1}>
        Adam Hassall
      </Title>
      <Title order={2}>Software Developer</Title>
      <Text c="dimmed" mt="md">
        Full-stack developer with 3+ years of experience building web applications in the banking
        and insurance industries. Skilled in C#, ASP.NET, SQL, Azure, and modern web frameworks
        (React, Next.js, Tailwind CSS).
      </Text>
    </>
  );
}
