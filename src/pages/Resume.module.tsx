// src/pages/HomePage.tsx
import React from 'react';
import { Paper } from '@mantine/core';
import { Certifications } from '../components/CV/Certifications';
import { ContactInfo } from '../components/CV/ContactInfo';
import { Experience } from '../components/CV/Experience';
import { Hero } from '../components/CV/Hero';
import { Skills } from '../components/CV/Skills';

export function Resume() {
  return (
    <>
      <Paper shadow="xs" p="xl" m="xl">
        <Hero />
        <ContactInfo />
        <Skills />
        <Experience />
        <Certifications />
      </Paper>
    </>
  );
}
