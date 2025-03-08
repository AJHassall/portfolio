// src/pages/HomePage.tsx
import React from 'react';
import { Hero } from '../components/CV/Hero';
import { ContactInfo } from '../components/CV/ContactInfo';
import { Skills } from '../components/CV/Skills';
import { Experience } from '../components/CV/Experience';
import { Certifications } from '../components/CV/Certifications';

export function Resume() {
  return (
    <>
      <Hero />
      <ContactInfo />
      <Skills />
      <Experience />
      <Certifications />
    </>
  );
}