import echoPng from '/Echo.png';
import icbcJpeg from '/icbc_london_logo.jpeg';
import mandonJpeg from '/mandon_software_limited_logo.jpeg';
import wolfensteinPng from '/wolfenstein.png';
import ytdPng from '/YouTubeCommentDeleter.png';
import blogPng from '/blog.png';
import webCrawlerPng from '/webcrawler.png';
import cmsPng from '/cms.png'

import {
  Container,
  SimpleGrid,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { Certifications } from '@/components/Certifications/Certifications';
import { HeroHeader } from '@/components/HeroHeader/HeroHeader';
import { ContactMeSection } from '@/components/Intro/Contact/ContactSection';
import { Project } from '@/components/Project/Project';
import { DownloadResumeLink } from '@/components/ResumeLink/ResumeLink';
import { SkillsSection } from '@/components/SkillSection/SkillSection';
import { WorkHistoryCard } from '@/components/WorkHIstoryCard/WorkHistoryCard';

export function HomePage() {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  const _bg =
    colorScheme === 'dark'
      ? theme.colors.blue[9] // Dark theme background
      : theme.colors.blue[2]; // Light theme background

  return (
    <>
      <HeroHeader />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={_bg}
          fillOpacity="1"
          d="M0,128L60,133.3C120,139,240,149,360,144C480,139,600,117,720,133.3C840,149,960,203,1080,229.3C1200,256,1320,256,1380,256L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg>
      <Container size="sm" p="md">
        <section id="WorkExperience">
          <SimpleGrid verticalSpacing="xl">
            <Title id="WorkExperience"> Work Experience</Title>
            <WorkHistoryCard
              title="Software Engineer | Consultant"
              imageUrl={icbcJpeg} // Replace with your image path
              description="Contributed to enhancing financial applications using C#, ASP.NET, and SQL. Worked in an Agile environment, managed application releases, resolved technical issues, and optimized database queries. Integrated RabbitMQ for seamless communication between applications."
              company="Wiley Edge (Placement at ICBC London Limited)"
              startDate={new Date(2022, 4, 1)} // May 1, 2022
              endDate={new Date(2023, 7, 31)} // August 31, 2023
              skills={['C#', 'ASP.NET', 'SQL', 'Agile', 'RabbitMQ', 'MS SQL', 'JQuery']}
            />
            <WorkHistoryCard
              title="Software Developer"
              imageUrl={mandonJpeg} // Replace with your image path
              description="Developed web-based insurance solutions using React, JavaScript, ASP.NET, and Azure. Progressed from an apprenticeship to leading projects, implementing features like quote calculations, new policies, claim management, and payments. Proficient in Azure cloud infrastructure."
              company="Mandon Software Limited"
              startDate={new Date(2021, 7, 1)} // August 1, 2020
              endDate={new Date(2022, 4, 31)} // May 31, 2022
              skills={[
                'React',
                'JavaScript',
                'ASP.NET',
                'Azure',
                'JQuery',
                'CSS',
                'MVC',
                'Progress Open Edge',
              ]}
            />
            <WorkHistoryCard
              title="Apprentice Software Developer"
              imageUrl={mandonJpeg} // Replace with your image path
              description="Developed web-based insurance solutions using React, JavaScript, ASP.NET, and Azure."
              company="Mandon Software Limited"
              startDate={new Date(2020, 7, 1)} // August 1, 2020
              endDate={new Date(2021, 7, 31)} // May 31, 2022
              skills={[
                'React',
                'JavaScript',
                'ASP.NET',
                'Azure',
                'CSS',
                'MVC',
                'Progress Open Edge',
                'JQuery'
              ]}
            />
          </SimpleGrid>
          <DownloadResumeLink />
        </section>
        <section id="Projects">
          <SimpleGrid verticalSpacing="xl" pt="xl">
            <Title> Projects</Title>
            <Project
              title="Customer Relationship Manager"
              description="Customer Relationship Manager API, an example of dependency injection, repository and unit of work patterns"
              imageUrl={cmsPng}
              githubUrl="https://github.com/AJHassall/CustomerRelationshipManager"
              technologies={['C#', '.Net', 'nunit', 'swagger', 'crud', 'rest']}
            />
            <Project
              title="Webcrawler"
              description="Webcrawler written in python"
              imageUrl={webCrawlerPng}
              githubUrl="https://github.com/AJHassall/webcrawler"
              technologies={['Python', 'Flask', 'SqlAlchemy']}
            />
            <Project
              title="Blog"
              description="Blog website written in C#"
              imageUrl={blogPng}
              githubUrl="https://github.com/AJHassall/blog"
              technologies={['C#', 'Postgres', 'Blazor', 'Docker']}
            />
            <Project
              title="Echo"
              description="Real time desktop audio transposition using rust."
              imageUrl={echoPng}
              githubUrl="https://github.com/AJHassall/echo"
              technologies={[
                'Rust',
                'Neon-Rs',
                'Tokio',
                'Whisper-AI',
                'React',
                'Electron',
                'Webpack',
                'TypeScript',
                'JavaScript',
              ]}
            />
            <Project
              title="SFML wolfenstein"
              description="wolfenstein style game engine built with C++ and SFML"
              imageUrl={wolfensteinPng}
              githubUrl="https://github.com/AJHassall/sfml-wolfenstein"
              technologies={['C++', 'SFML', 'PREMAKE']}
            />
            <Project
              title="Youtube comment blocker"
              description="Hides all comments from selected users."
              imageUrl={ytdPng}
              githubUrl="git@github.com:AJHassall/youtube-comment-blocker.git"
              technologies={['Extension', 'Javascript', 'Docker', 'Postgres']}
            />
          </SimpleGrid>
        </section>
        <section id="Skills">
          <SkillsSection />
        </section>
        <section id="Contact">
          <ContactMeSection />
        </section>
        <section id="Certifications">
          <Certifications />
        </section>
      </Container>
    </>
  );
}
