// src/components/ContactInfo.tsx
import { Text, Container, Flex, Group } from '@mantine/core';
import { IconMail, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';

export function ContactInfo() {
  return (
    <Container size="xl" style={{ textAlign: 'center', marginTop: '40px' }}>
      <Group justify="center" gap="xl">
        <Flex align="center">
          <IconMail size={20} style={{ marginRight: '5px' }} />
          <Text>ajhassall2000@gmail.com</Text>
        </Flex>
        <Flex align="center">
          <IconBrandLinkedin size={20} style={{ marginRight: '5px' }} />
          <Text>linkedin.com/in/adam-hassall/</Text>
        </Flex>
        <Flex align="center">
          <IconBrandGithub size={20} style={{ marginRight: '5px' }} />
          <Text>github.com/AJHassall</Text>
        </Flex>
      </Group>
    </Container>
  );
}