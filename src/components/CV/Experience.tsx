// src/components/Experience.tsx
import React from 'react';
import { Text, Container, Title } from '@mantine/core';

export function Experience() {
  return (
    <Container size="xl" style={{ marginTop: '40px' }}>
      <Title order={2}>Experience</Title>
      <Text fw={700} style={{ marginTop: '20px' }}>Aug 2023 - Present</Text>
      <Text>Since leaving my previous role, I've been actively engaged in professional development and expanding my skillset. I successfully achieved the Azure AZ-900 certification, demonstrating my foundational knowledge of cloud concepts and Azure services. Additionally, I've dedicated time to personal projects, focusing on front-end development with React and Next.js, as well as back-end development using C#. These projects have allowed me to apply and refine my technical abilities in practical, real-world scenarios.</Text>

      <Text fw={700} style={{ marginTop: '20px' }}>Software Engineer | Consultant at Wiley Edge with placement at ICBC (London) Limited | May 2022 - Aug 2023</Text>
      <Text>Collaborated team of 10 developers to enhance financial applications for ICBC, utilizing C#, ASP.NET, and SQL to deliver robust solutions. Utilized Agile (Scrum/Kanban) methodologies in project delivery. Managed successful application releases, ensuring on-time delivery and functionality. Developed and maintained well-tested, documented applications, reducing bug reports by 20%. Proactively resolved overnight technical issues (e.g., batch failures), minimizing downtime and ensuring business continuity. Utilised MS SQL in multi-terabyte databases and optimized queries for high-volume transaction processing. Integrated RabbitMQ to facilitate seamless communication between banking applications. Partnered with end-users and business analysts to translate requirements into effective technical solutions.</Text>

      <Text fw={700} style={{ marginTop: '20px' }}>Software Developer | Mandon Software Limited | Aug 2020 - May 2022</Text>
      <Text>Employed diverse technologies (React, JavaScript, CSS, MVC, ASP.NET, C#, Progress Open Edge) to deliver web-based insurance solutions within a team of experienced developers. Developed and implemented numerous React features to deliver policy information and updates to clients. Demonstrated rapid professional growth, progressing from an apprenticeship to direct client interaction and project leadership roles. Responsibilities included implementing and improving the full range of services offered, such as quote calculations, new policies, claim management, and payments. Proficient in Azure cloud infrastructure management and DevOps methodologies, ensuring efficient and reliable application deployment.</Text>
    </Container>
  );
}